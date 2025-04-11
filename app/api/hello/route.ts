export async function GET() {
    return new Response(JSON.stringify({ message: "Hello from Route Handler" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  