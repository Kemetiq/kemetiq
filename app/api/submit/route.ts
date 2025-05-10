export async function POST(req: Request) {
  console.log("✅ /api/submit triggered");

  const data = await req.json();
  console.log("Form data received:", data);

  // optional webhook
  await fetch("https://webhook.site/YOUR_UNIQUE_URL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return new Response(JSON.stringify({ status: "ok" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
