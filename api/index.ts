export const config = {
  runtime: 'edge',
};

export default function handler(req: Request) {
  return new Response(
    JSON.stringify({ status: "ok", app: "Edufillah Learning App API", tutor: "Fillah" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
