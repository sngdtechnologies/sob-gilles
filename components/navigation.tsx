"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Menu, X } from "lucide-react"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"

type Props = { lang: Locale; dict: Dictionary }

export function Navigation({ lang, dict }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { path: "", label: dict.nav.home },
    { path: "/about", label: dict.nav.about },
    { path: "/skills", label: dict.nav.skills },
    { path: "/projects", label: dict.nav.projects },
    { path: "/blog", label: dict.nav.blog },
    { path: "/contact", label: dict.nav.contact },
  ].map((item) => ({ ...item, href: localePath(lang, item.path) }))

  const isActive = (href: string) => (href === localePath(lang) ? pathname === href : pathname.startsWith(href))
  const linkClass = (href: string) =>
    `transition-colors duration-200 hover:text-primary ${isActive(href) ? "text-primary font-medium" : "text-foreground"}`

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md" aria-label="Main">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={localePath(lang)} className="text-xl font-bold text-primary">
            Gilles SOB
          </Link>

          <div className="hidden items-center space-x-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)} aria-current={isActive(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher lang={lang} label={dict.nav.switchLanguage} shortLabel={dict.nav.switchLanguageShort} />
            <ThemeToggle label={dict.nav.toggleTheme} />
            <Button asChild>
              <Link href={localePath(lang, "/contact")}>{dict.nav.getInTouch}</Link>
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <LanguageSwitcher lang={lang} label={dict.nav.switchLanguage} shortLabel={dict.nav.switchLanguageShort} />
            <ThemeToggle label={dict.nav.toggleTheme} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? dict.nav.closeMenu : dict.nav.openMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 rounded-lg bg-card px-2 pb-3 pt-2 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 ${linkClass(item.href)}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href={localePath(lang, "/contact")} onClick={() => setIsOpen(false)}>
                    {dict.nav.getInTouch}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
