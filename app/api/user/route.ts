import { NextRequest } from "next/server";

export async function GET() {
  // DB Logic
  return Response.json({
    email: "shrimpson@xyz.com",
    name: "Spike",
  });
}

export async function POST(req: NextRequest) {
  // Extract the body
  const body = await req.json();

  // Store the body in the database
  console.log(body);

  return Response.json({
    message: "You are logged in!",
  });
}
