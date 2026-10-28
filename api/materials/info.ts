export const config = {
  runtime: 'edge',
};

export default function handler(req: Request) {
  const MATERIAL_DRIVE_LINKS = {
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

  return new Response(JSON.stringify(MATERIAL_DRIVE_LINKS), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
