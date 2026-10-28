import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, history, studentName, subject } = req.body || {};
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Pesan tidak boleh kosong." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        reply: `Halo ${studentName || 'Siswa'}! Saya Fillah, tutor AI belajarmu. API Key Gemini saat ini belum disematkan pada Environment Variables Vercel, namun modul kuis dan latihan TKA tetap berjalan normal!`
      });
    }

    const gemini = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

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
- Jika siswa memberi soal hitungan atau pilihan ganda, bantu jelaskan konsep dasar dan cara penyelesaiannya sampai tuntas.`;

    const contents: any[] = [];
    if (Array.isArray(history)) {
      for (const item of history.slice(-6)) {
        if (item && item.role && item.text) {
          contents.push({
            role: item.role === "assistant" ? "model" : "user",
            parts: [{ text: item.text }]
          });
        }
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const candidateModels = [
      "gemini-2.5-flash",
      "gemini-3.7-flash",
      "gemini-2.5-pro"
    ];

    let reply = "";
    let lastError: any = null;

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
        await new Promise((r) => setTimeout(r, 400));
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
      reply: "Maaf, sistem AI sedang mengalami kepadatan lalu lintas (high demand). Silakan coba beberapa saat lagi ya!"
    });
  }
}
