"use client"

import { useEffect, useState } from "react"
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
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navItems = [
    { path: "/about", label: dict.nav.about },
    { path: "/skills", label: dict.nav.skills },
    { path: "/projects", label: dict.nav.projects },
    { path: "/blog", label: dict.nav.blog },
    { path: "/contact", label: dict.nav.contact },
  ].map((item) => ({ ...item, href: localePath(lang, item.path) }))

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  const linkClass = (href: string) =>
    `rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
      isActive(href) ? "bg-foreground/[0.08] text-foreground" : "text-muted-foreground hover:text-foreground"
    }`

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        aria-label="Main"
        className={`pointer-events-auto w-full max-w-5xl rounded-[1.75rem] border transition-all duration-500 ${
          scrolled
            ? "border-border bg-background/70 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
            : "border-transparent bg-background/30 backdrop-blur-md"
        }`}
      >
        <div className="flex h-14 items-center justify-between pl-4 pr-2 sm:pl-5">
          <Link href={localePath(lang)} className="group flex items-center gap-3" aria-label="Gilles SOB">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              GS
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">Gilles SOB</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)} aria-current={isActive(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <LanguageSwitcher lang={lang} label={dict.nav.switchLanguage} shortLabel={dict.nav.switchLanguageShort} />
            <ThemeToggle label={dict.nav.toggleTheme} />
            <Button asChild size="sm" className="ml-1 hidden h-9 px-4 md:inline-flex">
              <Link href={localePath(lang, "/contact")}>{dict.nav.getInTouch}</Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? dict.nav.closeMenu : dict.nav.openMenu}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-border p-3 md:hidden">
            <div className="grid gap-1">
              {[{ href: localePath(lang), label: dict.nav.home }, ...navItems].map((item) => (
                <Link key={item.href} href={item.href} className={`block ${linkClass(item.href)}`} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2 w-full">
                <Link href={localePath(lang, "/contact")} onClick={() => setIsOpen(false)}>
                  {dict.nav.getInTouch}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
