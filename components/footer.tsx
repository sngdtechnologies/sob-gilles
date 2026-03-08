import Link from "next/link"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription>
                Subscribe to my newsletter for the latest insights on web development, tutorials, and project updates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Enter your email address" className="flex-1" required />
                <Button type="submit" className="sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-4">
                No spam, unsubscribe at any time. I respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Gilles SOB</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-stack developer passionate about creating innovative web solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                <a
                  href="mailto:sngdtechnologies@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  sngdtechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+237 690 35 66 55</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Follow Me</h4>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/sngdtechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/gilles-sob-64132a1b3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:sngdtechnologies@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Gilles SOB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
