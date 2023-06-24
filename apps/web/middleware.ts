import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import publicFiles from "./i18n/public-files.gen.json";
import { unprotectedRoutes, authRedirectRoute, nextApiRoute } from "@app/web/router";
import { getLocale } from "./utils/get-locale";
import { checkAuth } from "./utils/jwt/check-auth";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (publicFiles.list.includes(pathname)) {
    return;
  }

  const isAuthenticated = await checkAuth(request);
  const { locale, isLocaleMissing } = getLocale(request);

  const isProtectedRoute = !unprotectedRoutes.includes(
    pathname.replace(new RegExp(`^(/${locale})`), ""),
  );

  if (pathname.startsWith(nextApiRoute)) {
    return isAuthenticated
      ? undefined
      : new NextResponse(
          JSON.stringify({ success: false, message: "Authentication failed" }),
          { status: 401, headers: { "content-type": "application/json" } },
        );
  }

  if (!isAuthenticated && isProtectedRoute) {
    return NextResponse.redirect(new URL(`/${locale}${authRedirectRoute}`, request.url));
  }

  if (isLocaleMissing) {
    const path = pathname.trim().startsWith("/") ? pathname : `/${pathname}`;
    return NextResponse.redirect(new URL(`/${locale}${path}`, request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
