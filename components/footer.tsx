import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { siteConfig } from "@/lib/site"

type Props = { lang: Locale; dict: Dictionary }

export function Footer({ lang, dict }: Props) {
  const links = [
    { path: "/about", label: dict.nav.about },
    { path: "/skills", label: dict.nav.skills },
    { path: "/projects", label: dict.nav.projects },
    { path: "/blog", label: dict.nav.blog },
    { path: "/contact", label: dict.nav.contact },
  ]
  const iconLink = "text-muted-foreground transition-colors hover:text-primary"

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Gilles SOB</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{dict.footer.tagline}</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{dict.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.path}>
                  <Link href={localePath(lang, link.path)} className="text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{dict.footer.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground transition-colors hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">{siteConfig.phone}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{dict.footer.follow}</h4>
            <div className="flex space-x-4">
              <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
              <Link href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href={`mailto:${siteConfig.email}`} className={iconLink} aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gilles SOB. {dict.common.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
