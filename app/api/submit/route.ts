export async function POST(req: Request) {
  const data = await req.json();

  console.log("Form data received:", data);

  // OPTIONAL: Forward to Zapier or n8n webhook
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
