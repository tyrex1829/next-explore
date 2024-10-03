import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

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
  await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  // Store the body in the database
  console.log(body);

  return Response.json({
    message: "You are logged in!",
  });
}
