export const config = {
  runtime: 'edge',
};

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

export default async function handler(req: Request) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Range',
      },
    });
  }

  try {
    const url = new URL(req.url);
    const pathSegments = url.pathname.split('/').filter(Boolean);
    const subjectId = pathSegments[pathSegments.length - 1] || url.searchParams.get('subjectId') || '';

    const material = MATERIAL_DRIVE_LINKS[subjectId];
    if (!material) {
      return new Response(JSON.stringify({ error: "Mata pelajaran tidak ditemukan." }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    const driveRes = await fetch(material.driveUrl, { redirect: "follow" });
    if (!driveRes.ok || !driveRes.body) {
      // Fallback redirect to direct download URL
      return Response.redirect(material.driveUrl, 302);
    }

    const responseHeaders = new Headers();
    responseHeaders.set("Content-Type", "application/pdf");
    responseHeaders.set("Content-Disposition", `inline; filename="${material.fileName}"`);
    responseHeaders.set("Access-Control-Allow-Origin", "*");
    responseHeaders.set("Access-Control-Expose-Headers", "Content-Length, Content-Disposition");
    responseHeaders.set("Cache-Control", "public, max-age=86400, s-maxage=86400");

    const contentLength = driveRes.headers.get("content-length");
    if (contentLength) {
      responseHeaders.set("Content-Length", contentLength);
    }

    return new Response(driveRes.body, {
      status: 200,
      headers: responseHeaders,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error?.message || "Gagal mengunduh berkas" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
