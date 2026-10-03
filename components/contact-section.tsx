"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { siteConfig } from "@/lib/site"

type Props = { lang: Locale; dict: Dictionary }

export function ContactSection({ dict }: Props) {
  const { contact } = dict
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `${formData.message}\n\n${formData.name} <${formData.email}>`
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const socials = [
    { href: siteConfig.github, label: "GitHub", Icon: Github },
    { href: siteConfig.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: siteConfig.facebook, label: "Facebook", Icon: Facebook },
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading as="h1" eyebrow={contact.eyebrow} title={contact.title} subtitle={contact.subtitle} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5" data-reveal>
            <div className="surface overflow-hidden p-8">
              <h2 className="text-2xl font-semibold tracking-tight">{contact.infoTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{contact.infoSubtitle}</p>
              <ul className="mt-8 space-y-6">
                {[
                  { Icon: Mail, label: contact.email, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { Icon: Phone, label: contact.phone, value: siteConfig.phone, href: undefined },
                  { Icon: MapPin, label: contact.location, value: contact.locationValue, href: undefined },
                ].map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <div className="min-w-0">
                      <p className="eyebrow !text-muted-foreground">{label}</p>
                      {href ? (
                        <a href={href} className="mt-1 block truncate font-medium transition-colors hover:text-primary">
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 font-medium">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface overflow-hidden p-8">
              <h2 className="text-xl font-semibold tracking-tight">{contact.followTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{contact.followSubtitle}</p>
              <div className="mt-6 flex gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="surface overflow-hidden p-8">
              <h2 className="text-xl font-semibold tracking-tight">{contact.availabilityTitle}</h2>
              <ul className="mt-5 space-y-3">
                {contact.availability.map((item) => (
                  <li key={item} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                    <span>{item}</span>
                    <span className="live-dot h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="surface overflow-hidden p-8 sm:p-10 lg:sticky lg:top-32 lg:col-span-7 lg:self-start" data-reveal style={{ ["--d" as string]: "100ms" }}>
            <h2 className="text-2xl font-semibold tracking-tight">{contact.formTitle}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{contact.formSubtitle}</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{contact.name}</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder={contact.namePlaceholder} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{contact.emailLabel}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={contact.emailPlaceholder}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">{contact.subject}</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder={contact.subjectPlaceholder} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{contact.message}</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={contact.messagePlaceholder} rows={7} required />
              </div>
              <Button type="submit" className="w-full" size="lg">
                <Send className="h-5 w-5" />
                {contact.send}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
