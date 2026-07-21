import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(request: NextRequest) {
      console.log("Middleware:", request.nextUrl.pathname);
  const token = request.cookies.get("token")?.value;
  const pathname = request.nextUrl.pathname;


  // Public Page Routes

  const publicPages = [
    "/JWT/login",
    "/JWT/register",
     "/JWT/forget-password",
     "/JWT/reset-password"
  ];


  // Public API Routes
  
  const publicApis = [
    "/api/auth/login",
    "/api/auth/register",
  ];

  // Allow public pages
  if (publicPages.includes(pathname)) {
    if (token) {
      // Already logged in
      return NextResponse.redirect(
        new URL("/JWT/dashboard", request.url)
      );
    }

    return NextResponse.next();
  }

  // Allow public APIs
  if (publicApis.includes(pathname)) {
    return NextResponse.next();
  }

 
  // Protected Routes

  if (!token) {
    // API request
    if (pathname.startsWith("/api")) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Page request
    return NextResponse.redirect(
      new URL("/JWT/login", request.url)
    );
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY!);

    return NextResponse.next();
  } catch {
    const response = pathname.startsWith("/api")
      ? NextResponse.json(
          { message: "Invalid Token" },
          { status: 401 }
        )
      : NextResponse.redirect(
          new URL("/JWT/login", request.url)
        );

    response.cookies.delete("token");

    return response;
  }
}

export const config = {
  matcher: [
    "/JWT/:path*",
    "/api/:path*",
  ],
};