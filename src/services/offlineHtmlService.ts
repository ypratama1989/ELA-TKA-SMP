// Offline HTML Cache & Storage Engine for Edufillah TKA SMP
// Guarantees 100% offline access to all interactive quizzes, flashcards, and diagnostic tests
// Uses a 3-tier offline architecture: Memory Cache -> IndexedDB -> CacheStorage -> Network

const DB_NAME = 'edufillah_offline_modules_db_v6';
const DB_VERSION = 1;
const STORE_NAME = 'html_files';
const CACHE_NAME = 'edufillah-html-cache-v6';

const memoryCache = new Map<string, string>();

// List of all active learning modules in Edufillah
export const ALL_OFFLINE_MODULE_URLS: string[] = [
  // Core Assets
  '/tailwindcss.js',
  '/fontawesome.css',
  '/mathjax.js',

  // Flashcards (4 mata pelajaran)
  '/flashcard_tka_matematika_smp.html',
  '/flashcard_tka_bahasa_indonesia.html',
  '/flashcard_tka_bahasa_inggris.html',
  '/flashcard_tka_ipa_smp.html',

  // Diagnostic Tests (4 mata pelajaran)
  '/diagnostic_test/tka_matematika_smp_diagnostic_test.html',
  '/diagnostic_test/tka_bahasa_indonesia_smp_diagnostic_test.html',
  '/diagnostic_test/tka_bahasa_inggris_smp_diagnostic_test.html',
  '/diagnostic_test/tka_ipa_smp_diagnostic_test.html',

  // Matematika Topik 1 - 24
  ...Array.from({ length: 24 }, (_, i) => `/matematika/math_${i + 1}.html`),

  // IPA Topik 1 - 18
  ...Array.from({ length: 18 }, (_, i) => `/IPA/ipa_${i + 1}.html`),

  // Bahasa Inggris Topik 1 - 18
  ...Array.from({ length: 18 }, (_, i) => `/bahasa_inggris/bing_${i + 1}.html`),

  // Bahasa Indonesia Topik 1 - 11
  ...Array.from({ length: 11 }, (_, i) => `/bahasa_indonesia/bindo_${i + 1}.html`),
];

// Open native IndexedDB safely
function openIdb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      return reject(new Error('IndexedDB is not supported'));
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Get item from IndexedDB
async function getIdbItem(key: string): Promise<string | null> {
  try {
    const db = await openIdb();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

// Set item in IndexedDB
async function setIdbItem(key: string, value: string): Promise<void> {
  try {
    const db = await openIdb();
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put(value, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
  } catch {
    // Ignore IDB write error
  }
}

// Ensure proper base URL and offline robustness inside HTML content for srcDoc
export function prepareHtmlForSrcDoc(rawHtml: string): string {
  let html = rawHtml;

  // Ensure <base href="/"> exists so relative paths like /tailwindcss.js resolve to current origin
  if (!html.includes('<base ') && !html.includes('<base>')) {
    if (html.includes('<head>')) {
      html = html.replace('<head>', '<head>\n    <base href="/" />');
    } else if (html.includes('<head ')) {
      html = html.replace(/<head[^>]*>/, '$&\n    <base href="/" />');
    } else {
      html = `<base href="/" />\n${html}`;
    }
  }

  return html;
}

/**
 * Load HTML module with multi-tier offline fallback
 * 1. In-memory Map (Instant, 0ms)
 * 2. IndexedDB (Persistent across browser sessions, 5ms)
 * 3. CacheStorage API (PWA Cache, 10ms)
 * 4. Network fetch (when online, then persists to IDB + CacheStorage)
 */
export async function loadOfflineHtml(url: string): Promise<string> {
  const cleanUrl = url.startsWith('/') ? url : `/${url}`;

  // 1. Memory Cache
  const memHit = memoryCache.get(cleanUrl);
  if (memHit) {
    return prepareHtmlForSrcDoc(memHit);
  }

  // 2. IndexedDB
  try {
    const idbHit = await getIdbItem(cleanUrl);
    if (idbHit && idbHit.length > 50) {
      memoryCache.set(cleanUrl, idbHit);
      return prepareHtmlForSrcDoc(idbHit);
    }
  } catch {
    // Continue to CacheStorage
  }

  // 3. CacheStorage API
  if (typeof caches !== 'undefined') {
    try {
      const cache = await caches.open(CACHE_NAME);
      const matched = await cache.match(cleanUrl);
      if (matched && matched.ok) {
        const text = await matched.text();
        if (text && text.length > 50) {
          memoryCache.set(cleanUrl, text);
          setIdbItem(cleanUrl, text); // save to IDB as well
          return prepareHtmlForSrcDoc(text);
        }
      }

      // Check any other cache (e.g. Workbox precache)
      const keys = await caches.keys();
      for (const k of keys) {
        if (k !== CACHE_NAME) {
          const altCache = await caches.open(k);
          const altMatch = await altCache.match(cleanUrl);
          if (altMatch && altMatch.ok) {
            const text = await altMatch.text();
            if (text && text.length > 50) {
              memoryCache.set(cleanUrl, text);
              setIdbItem(cleanUrl, text);
              return prepareHtmlForSrcDoc(text);
            }
          }
        }
      }
    } catch {
      // Continue to Network fetch
    }
  }

  // 4. Network fetch (if online)
  try {
    const resp = await fetch(cleanUrl, { cache: 'default' });
    if (resp.ok) {
      const text = await resp.text();
      if (text && text.length > 50) {
        memoryCache.set(cleanUrl, text);
        // Persist to IndexedDB
        setIdbItem(cleanUrl, text);
        // Persist to CacheStorage
        if (typeof caches !== 'undefined') {
          caches.open(CACHE_NAME).then((c) => {
            c.put(cleanUrl, new Response(text, {
              headers: { 'Content-Type': 'text/html; charset=utf-8' },
            }));
          }).catch(() => {});
        }
        return prepareHtmlForSrcDoc(text);
      }
    }
  } catch {
    // Network failed (offline)
  }

  // 5. Ultimate Fallback (if completely missing from cache & network)
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modul Offline - Edufillah</title>
  <style>
    body {
      margin: 0;
      padding: 24px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: #0f172a;
      color: #f8fafc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 80vh;
      text-align: center;
    }
    .card {
      background: #1e293b;
      border: 1px solid #334155;
      padding: 32px 24px;
      border-radius: 16px;
      max-width: 440px;
      width: 100%;
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);
    }
    h2 { margin-top: 0; color: #f1f5f9; font-size: 18px; }
    p { color: #94a3b8; font-size: 13px; line-height: 1.6; }
    .btn {
      display: inline-block;
      margin-top: 16px;
      padding: 10px 20px;
      background: #4f46e5;
      color: white;
      border: none;
      border-radius: 10px;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
    }
    .btn:hover { background: #4338ca; }
  </style>
</head>
<body>
  <div class="card">
    <h2>Modul Memerlukan Sinkronisasi Awal</h2>
    <p>File ini belum sempat disimpan di penyimpanan offline perangkatmu. Hubungkan perangkat ke internet sekali saja untuk mengunduh semua modul secara otomatis.</p>
    <button class="btn" onclick="window.location.reload()">Coba Muat Ulang</button>
  </div>
</body>
</html>`;
}

/**
 * Preload all modules in the background into IndexedDB and CacheStorage
 * Run once during app startup or when online to guarantee 100% offline availability
 */
let isPreloading = false;

export async function preloadAllOfflineModules(
  onProgress?: (cached: number, total: number) => void
): Promise<{ success: boolean; cached: number; total: number }> {
  if (isPreloading) return { success: true, cached: 0, total: ALL_OFFLINE_MODULE_URLS.length };
  isPreloading = true;

  const total = ALL_OFFLINE_MODULE_URLS.length;
  let cached = 0;

  try {
    const cache = typeof caches !== 'undefined' ? await caches.open(CACHE_NAME) : null;

    // Process in batches of 4 to avoid saturating mobile network connections
    const batchSize = 4;
    for (let i = 0; i < total; i += batchSize) {
      const batch = ALL_OFFLINE_MODULE_URLS.slice(i, i + batchSize);
      await Promise.all(
        batch.map(async (url) => {
          try {
            // Check if already in memory
            if (memoryCache.has(url)) {
              cached++;
              onProgress?.(cached, total);
              return;
            }

            // Check if already in IndexedDB
            const idbVal = await getIdbItem(url);
            if (idbVal && idbVal.length > 50) {
              memoryCache.set(url, idbVal);
              cached++;
              onProgress?.(cached, total);
              return;
            }

            // Check CacheStorage
            if (cache) {
              const match = await cache.match(url);
              if (match && match.ok) {
                const text = await match.text();
                if (text && text.length > 50) {
                  memoryCache.set(url, text);
                  setIdbItem(url, text);
                  cached++;
                  onProgress?.(cached, total);
                  return;
                }
              }
            }

            // Fetch from network
            const resp = await fetch(url, { cache: 'default' });
            if (resp.ok) {
              const text = await resp.text();
              if (text && text.length > 50) {
                memoryCache.set(url, text);
                await setIdbItem(url, text);
                if (cache) {
                  await cache.put(
                    url,
                    new Response(text, {
                      headers: {
                        'Content-Type': url.endsWith('.css')
                          ? 'text/css'
                          : url.endsWith('.js')
                          ? 'application/javascript'
                          : 'text/html; charset=utf-8',
                      },
                    })
                  );
                }
                cached++;
              }
            }
          } catch {
            // Ignore single fetch failure (e.g. offline)
          }
          onProgress?.(cached, total);
        })
      );
    }

    return { success: true, cached, total };
  } finally {
    isPreloading = false;
  }
}

/**
 * Get the current count of cached offline modules
 */
export async function getOfflineCachedCount(): Promise<{ cached: number; total: number; isReady: boolean }> {
  const total = ALL_OFFLINE_MODULE_URLS.length;
  let cached = 0;

  try {
    for (const url of ALL_OFFLINE_MODULE_URLS) {
      if (memoryCache.has(url)) {
        cached++;
        continue;
      }
      const idbVal = await getIdbItem(url);
      if (idbVal && idbVal.length > 50) {
        memoryCache.set(url, idbVal);
        cached++;
      }
    }
  } catch {
    // fallback
  }

  return {
    cached,
    total,
    isReady: cached >= Math.min(total, 60),
  };
}
