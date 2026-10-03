"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send } from "lucide-react"
import { localePath, type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/dictionaries/en"
import { siteConfig } from "@/lib/site"

type Props = { lang: Locale; dict: Dictionary }

export function ContactSection({ lang, dict }: Props) {
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
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">{contact.title}</h1>
          <p className="mx-auto max-w-3xl text-balance text-xl text-muted-foreground">{contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{contact.infoTitle}</CardTitle>
                <CardDescription>{contact.infoSubtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.email}</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground transition-colors hover:text-primary">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.phone}</p>
                    <p className="text-muted-foreground">{siteConfig.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{contact.location}</p>
                    <p className="text-muted-foreground">{contact.locationValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{contact.followTitle}</CardTitle>
                <CardDescription>{contact.followSubtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socials.map(({ href, label, Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors hover:bg-primary/20"
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{contact.availabilityTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {contact.availability.map((item) => (
                    <li key={item} className="flex items-center justify-between">
                      <span>{item}</span>
                      <div className="h-3 w-3 rounded-full bg-primary" aria-hidden />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{contact.formTitle}</CardTitle>
              <CardDescription>{contact.formSubtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={contact.messagePlaceholder} rows={6} required />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  {contact.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-8">
              <h2 className="mb-4 text-2xl font-bold">{contact.ctaTitle}</h2>
              <p className="mx-auto mb-6 max-w-2xl text-balance text-muted-foreground">{contact.ctaText}</p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <a href={`mailto:${siteConfig.email}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    {contact.ctaEmail}
                  </a>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href={localePath(lang, "/projects")}>{contact.ctaWork}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
