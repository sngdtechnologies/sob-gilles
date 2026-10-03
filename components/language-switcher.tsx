"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { locales, localeCookie, type Locale } from "@/lib/i18n/config"

type Props = {
  lang: Locale
  label: string
  shortLabel: string
}

export function LanguageSwitcher({ lang, label, shortLabel }: Props) {
  const pathname = usePathname() || `/${lang}`
  const target = locales.find((l) => l !== lang) ?? lang
  const segments = pathname.split("/")
  segments[1] = target
  const href = segments.join("/") || `/${target}`

  const remember = () => {
    try {
      document.cookie = `${localeCookie}=${target}; path=/; max-age=31536000; samesite=lax`
    } catch {
      // cookies can be blocked, the URL still carries the language
    }
  }

  return (
    <Button variant="ghost" size="sm" asChild>
      <Link href={href} hrefLang={target} lang={target} onClick={remember} aria-label={label} title={label} scroll={false}>
        <Languages className="mr-1 h-4 w-4" />
        {shortLabel}
      </Link>
    </Button>
  )
}
