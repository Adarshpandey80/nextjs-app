import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({
    message: "Cookie Test",
  });

  response.cookies.set("test", "12345", {
    httpOnly: true,
    path: "/",
  });

  return response;
}