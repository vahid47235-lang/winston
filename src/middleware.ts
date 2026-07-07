import createIntlMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import {
  AGE_GATE_COOKIE,
  AGE_GATE_PATH,
  isAgeGatePath,
  isSafeRedirectTarget,
} from "./lib/ageGate";

const intlMiddleware = createIntlMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const verified = request.cookies.get(AGE_GATE_COOKIE)?.value === "1";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  if (isAgeGatePath(pathname)) {
    if (verified) {
      const redirectParam = request.nextUrl.searchParams.get("redirect");
      const safeRedirect =
        redirectParam && isSafeRedirectTarget(redirectParam)
          ? redirectParam
          : isEnglish
            ? "/en"
            : "/";
      return NextResponse.redirect(new URL(safeRedirect, request.url));
    }
    return intlMiddleware(request);
  }

  if (!verified) {
    const gateUrl = new URL(isEnglish ? `/en${AGE_GATE_PATH}` : AGE_GATE_PATH, request.url);
    gateUrl.searchParams.set("redirect", pathname + search);
    return NextResponse.redirect(gateUrl);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
