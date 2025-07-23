export async function GET() {
  const apiBaseUrl = process.env.API_URL;
  return new Response(JSON.stringify({ apiBaseUrl }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
