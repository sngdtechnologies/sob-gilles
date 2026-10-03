export const locales = ["en", "fr"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"
export const localeCookie = "NEXT_LOCALE"

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value)
}

export function localePath(lang: Locale, path = "") {
  return `/${lang}${path === "/" ? "" : path}`
}

export const ogLocales: Record<Locale, string> = { en: "en_US", fr: "fr_FR" }
