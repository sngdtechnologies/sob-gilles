import { NextResponse, type NextRequest } from "next/server"
import { defaultLocale, isLocale, localeCookie, locales, type Locale } from "@/lib/i18n/config"

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookie)?.value
  if (isLocale(saved)) return saved

  const header = request.headers.get("accept-language") ?? ""
  for (const part of header.split(",")) {
    const code = part.split(";")[0].trim().slice(0, 2).toLowerCase()
    if (isLocale(code)) return code
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))
  if (hasLocale) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
