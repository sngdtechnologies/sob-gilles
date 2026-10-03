import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { siteConfig } from "@/lib/site"

type Props = { lang: Locale; dict: Dictionary }

export function Footer({ lang, dict }: Props) {
  const links = [
    { path: "", label: dict.nav.home },
    { path: "/about", label: dict.nav.about },
    { path: "/skills", label: dict.nav.skills },
    { path: "/projects", label: dict.nav.projects },
    { path: "/blog", label: dict.nav.blog },
    { path: "/contact", label: dict.nav.contact },
  ]
  const iconLink = "flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-5">
            <p className="text-2xl font-semibold tracking-tight">Gilles SOB</p>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{dict.footer.tagline}</p>
            <div className="flex gap-2">
              <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="GitHub">
                <Github className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href={`mailto:${siteConfig.email}`} className={iconLink} aria-label="Email">
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <h4 className="eyebrow mb-5 !text-muted-foreground">{dict.footer.quickLinks}</h4>
            <ul className="space-y-3 text-sm">
              {links.map((link) => (
                <li key={link.path}>
                  <Link href={localePath(lang, link.path)} className="text-foreground/80 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h4 className="eyebrow mb-5 !text-muted-foreground">{dict.footer.contact}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-foreground/80 transition-colors hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-foreground/80">{siteConfig.phone}</li>
              <li className="text-muted-foreground">{dict.contact.locationValue}</li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-14" />
        <div className="flex flex-col items-center justify-between gap-2 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Gilles SOB. {dict.common.rights}
          </p>
          <p>{dict.footer.closing}</p>
        </div>
      </div>
      <p
        aria-hidden
        className="display pointer-events-none select-none whitespace-nowrap text-center text-[22vw] leading-[0.8] text-foreground/[0.035]"
      >
        Gilles SOB
      </p>
    </footer>
  )
}
