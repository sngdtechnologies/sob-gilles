"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

type Props = { email: string; label: string; doneLabel: string }

export function CopyEmailButton({ email, label, doneLabel }: Props) {
  const [done, setDone] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setDone(true)
      setTimeout(() => setDone(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-foreground/[0.03] px-6 text-[0.95rem] font-medium backdrop-blur transition-all hover:border-primary/40 hover:bg-accent"
    >
      {done ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
      <span aria-live="polite">{done ? doneLabel : label}</span>
    </button>
  )
}
