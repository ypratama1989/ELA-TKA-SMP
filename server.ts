import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Frame & CORS friendly headers
app.use((req, res, next) => {
  res.removeHeader("X-Frame-Options");
  next();
});

// Self-destructing Service Worker handler (cleans up any old PWA service worker registered on this origin)
app.get(["/sw.js", "/registerSW.js"], (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.send(`
    self.addEventListener('install', () => self.skipWaiting());
    self.addEventListener('activate', (event) => {
      event.waitUntil(
        self.registration.unregister().then(() => self.clients.matchAll()).then((clients) => {
          clients.forEach((client) => client.navigate(client.url));
        })
      );
    });
  `);
});

// One-click cache and session reset endpoint
app.get("/clean", (req, res) => {
  res.setHeader("Clear-Site-Data", '"cache", "cookies", "storage"');
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.send(`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <title>Reset Cache Selesai</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background: #0f172a; color: #f8fafc; }
    .card { background: #1e293b; padding: 2rem; border-radius: 1rem; max-width: 480px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
    .icon { font-size: 3rem; margin-bottom: 1rem; }
    h1 { font-size: 1.5rem; margin-bottom: 0.5rem; color: #38bdf8; }
    p { color: #94a3b8; line-height: 1.6; }
    .btn { display: inline-block; margin-top: 1.5rem; background: #6366f1; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">✨</div>
    <h1>Data & Service Worker Berhasil Direset!</h1>
    <p>Semua cache, worker, dan data sesi lama untuk domain development ini telah dibersihkan secara tuntas.</p>
    <p>Sekarang silakan <strong>tutup tab ini</strong> lalu muat ulang (refresh) tab AI Studio Anda.</p>
  </div>
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function(regs) {
        for (var i = 0; i < regs.length; i++) regs[i].unregister();
      });
    }
    if ('caches' in window) {
      caches.keys().then(function(names) {
        for (var i = 0; i < names.length; i++) caches.delete(names[i]);
      });
    }
  </script>
</body>
</html>`);
});

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// API routes FIRST
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", tutor: "Fillah" });
});

const MATERIAL_DRIVE_LINKS: Record<string, { fileName: string; driveUrl: string }> = {
  indo: {
    fileName: 'Materi_Bahasa_Indonesia_TKA_SMP.pdf',
    driveUrl: 'https://drive.google.com/uc?export=download&id=1MjdIFrwXseegRdX-UTc_Ds_LlYLJjfPC',
  },
  math: {
    fileName: 'Materi_Matematika_TKA_SMP.pdf',
    driveUrl: 'https://drive.google.com/uc?export=download&id=17UiylmoHIrbGTgGqThzWR0bsgl-rGgKa',
  },
  eng: {
    fileName: 'Materi_Bahasa_Inggris_TKA_SMP.pdf',
    driveUrl: 'https://drive.google.com/uc?export=download&id=1rrwQEA_Sncvxv6u2SKDdVLX3hNC1umCk',
  },
  ipa: {
    fileName: 'Materi_IPA_TKA_SMP.pdf',
    driveUrl: 'https://drive.google.com/uc?export=download&id=1pZlszRCyORwNKtt6G4wWUzVGXx1jVtkK',
  },
};

app.get("/api/materials/info", (req, res) => {
  res.json(MATERIAL_DRIVE_LINKS);
});

app.get("/api/materials/download/:subjectId", async (req, res) => {
  try {
    const { subjectId } = req.params;
    const material = MATERIAL_DRIVE_LINKS[subjectId];
    if (!material) {
      return res.status(404).json({ error: "Mata pelajaran tidak ditemukan." });
    }

    const driveRes = await fetch(material.driveUrl, { redirect: "follow" });
    if (!driveRes.ok || !driveRes.body) {
      return res.status(502).json({ error: "Gagal mengunduh berkas dari Google Drive." });
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `inline; filename="${material.fileName}"`);
    const contentLength = driveRes.headers.get("content-length");
    if (contentLength) {
      res.setHeader("Content-Length", contentLength);
    }

    const { Readable } = await import("stream");
    // @ts-ignore
    Readable.fromWeb(driveRes.body).pipe(res);
  } catch (error: any) {
    console.error("Download proxy error:", error);
    res.status(500).json({ error: error?.message || "Terjadi kesalahan saat mengunduh berkas materi." });
  }
});

app.post("/api/gemini/chat", async (req, res) => {
  try {
    const { message, history, studentName, subject } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Pesan tidak boleh kosong." });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.json({
        reply: `Halo ${studentName || 'Siswa'}! Saya Fillah, tutor AI belajarmu. API Key Gemini saat ini belum disematkan pada konfigurasi server, namun modul kuis dan latihan TKA tetap berjalan normal!`
      });
    }

    const systemInstruction = `Kamu adalah "Fillah", seorang tutor AI yang ramah, cerdas, bersahabat, dan sabar untuk platform "Edufillah Learning App".
Tugas utamamu adalah membimbing siswa SMP dalam persiapan Tes Kemampuan Akademik (TKA) SMP dan pelajaran:
1. Matematika (Bilangan, Aljabar, Geometri, Data & Peluang)
2. Bahasa Indonesia (Ide Pokok, EBI, Teks Narasi, Eksposisi, dll.)
3. Bahasa Inggris (Reading, Grammar, Tenses, Vocabulary, Dialog)
4. IPA Terpadu (Fisika, Biologi, Pengukuran, Ekosistem, Listrik, dll.)

Nama siswa: ${studentName || 'Siswa Edufillah'}
Mata pelajaran aktif/konteks: ${subject || 'TKA SMP Umum'}

Panduan menjawab:
- Sapa dengan hangat dan panggil nama siswa sesekali.
- Berikan penjelasan langkah demi langkah yang jelas, terstruktur, dan mudah dipahami siswa SMP.
- Gunakan markdown rapi dengan bullet points, bold untuk kata penting, dan pemisahan paragraf yang enak dibaca.
- Jika siswa memberi soal hitungan atau pilihan ganda, bantu jelaskan konsep dasar dan cara penyelesaiannya sampai tuntas.
- Beri motivasi dan semangat belajar di akhir jawaban.`;

    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      for (const item of history.slice(-8)) {
        if (item && item.text) {
          contents.push({
            role: item.role === 'model' || item.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: item.text }]
          });
        }
      }
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const candidateModels = [
      "gemini-2.5-flash",
      "gemini-3.7-flash",
      "gemini-2.5-pro"
    ];

    let reply = "";
    let lastError: any = null;

    const gemini = getAi();
    if (!gemini) {
      return res.json({
        reply: `Halo ${studentName || 'Siswa'}! Saya Fillah, tutor AI belajarmu. API Key Gemini saat ini belum disematkan pada konfigurasi server, namun modul kuis dan latihan TKA tetap berjalan normal!`
      });
    }

    for (const modelName of candidateModels) {
      try {
        const response = await gemini.models.generateContent({
          model: modelName,
          contents: contents,
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
          }
        });

        if (response.text) {
          reply = response.text;
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${modelName} encountered error, trying fallback model...`, err?.message || err);
        // Short pause before fallback attempt
        await new Promise(r => setTimeout(r, 400));
      }
    }

    if (!reply && lastError) {
      throw lastError;
    }

    reply = reply || "Halo! Ada yang bisa Fillah bantu untuk materi belajarmu hari ini?";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    res.status(200).json({
      error: error?.message || "Server error",
      reply: "Maaf, sistem AI sedang mengalami kepadatan lalu lintas (high demand). Silakan tunggu beberapa detik dan tanyakan kembali pertanyaanmu ke Tutor Fillah ya!"
    });
  }
});

// Explicit 404 for unhandled API endpoints
app.all("/api/*", (req, res) => {
  res.status(404).json({ error: "API endpoint tidak ditemukan." });
});

// Vite & Static file serving
async function startServer() {
  const isProduction =
    process.env.NODE_ENV === "production" ||
    (typeof __filename !== "undefined" && __filename.includes("dist")) ||
    !process.argv[1]?.endsWith("server.ts");

  if (!isProduction) {
    app.use(express.static(path.join(process.cwd(), 'public')));
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR === 'true' ? false : undefined,
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Export app for serverless platforms (e.g. Vercel)
export default app;

if (!process.env.VERCEL) {
  startServer();
}
