export async function GET() {
  return Response.json({
    message: "Hello from your Next.js backend!",
    time: new Date().toISOString()
  });
} 