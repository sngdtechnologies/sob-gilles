type Props = { items: readonly string[]; duration?: number; className?: string }

export function Marquee({ items, duration = 50, className = "" }: Props) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap px-6 text-2xl font-medium tracking-tight text-muted-foreground/80 sm:text-3xl">
          {item}
          <span className="ml-12 h-1.5 w-1.5 rounded-full bg-primary/60" aria-hidden />
        </li>
      ))}
    </ul>
  )

  return (
    <div
      className={`marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] ${className}`}
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
    >
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
