"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { isLocale } from "@/lib/i18n/config"

const text = {
  en: { title: "Page not found", body: "The page you are looking for does not exist or has moved.", home: "Back to home" },
  fr: { title: "Page introuvable", body: "La page que vous cherchez n'existe pas ou a été déplacée.", home: "Retour à l'accueil" },
}

export default function NotFound() {
  const segment = usePathname()?.split("/")[1]
  const lang = isLocale(segment) ? segment : "en"

  return (
    <main id="main" className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="text-2xl font-semibold">{text[lang].title}</h1>
      <p className="max-w-md text-muted-foreground">{text[lang].body}</p>
      <Button asChild>
        <Link href={`/${lang}`}>{text[lang].home}</Link>
      </Button>
    </main>
  )
}
