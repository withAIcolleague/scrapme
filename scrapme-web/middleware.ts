import { NextRequest, NextResponse } from "next/server";

const ACCESS_COOKIE_NAME = "scrapme_access";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hasAccess = request.cookies.get(ACCESS_COOKIE_NAME)?.value === "granted";

  if (pathname.startsWith("/editor") && !hasAccess) {
    const enterUrl = new URL("/enter", request.url);
    enterUrl.searchParams.set("next", `${pathname}${search}`);
    return NextResponse.redirect(enterUrl);
  }

  if (pathname === "/enter" && hasAccess) {
    const nextPath = request.nextUrl.searchParams.get("next");
    const redirectTo = nextPath?.startsWith("/") ? nextPath : "/editor";
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/editor/:path*", "/enter"],
};
