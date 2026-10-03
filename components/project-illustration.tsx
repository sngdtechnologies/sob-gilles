import { useId, type ReactNode } from "react"
import type { ProjectKind } from "@/lib/data/projects"

type Props = {
  kind: ProjectKind
  variant?: number
  fit?: "slice" | "meet"
  label: string
  className?: string
}

/* ---------- Small building blocks (all colors come from theme tokens) ---------- */

function Backdrop({ id }: { id: string }) {
  return (
    <>
      <defs>
        <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" className="fill-foreground/10" />
        </pattern>
      </defs>
      <rect width="400" height="240" className="fill-muted" />
      <rect width="400" height="240" fill={`url(#${id})`} />
      <circle cx="350" cy="20" r="110" className="fill-primary/10" />
      <circle cx="30" cy="230" r="90" className="fill-chart-3/10" />
    </>
  )
}

function Win({ x, y, w, h, children }: { x: number; y: number; w: number; h: number; children?: ReactNode }) {
  return (
    <g>
      <rect x={x + 3} y={y + 5} width={w} height={h} rx="10" className="fill-foreground/10" />
      <rect x={x} y={y} width={w} height={h} rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
      <path d={`M${x} ${y + 10}a10 10 0 0 1 10-10h${w - 20}a10 10 0 0 1 10 10v8h-${w}z`} className="fill-muted" />
      <circle cx={x + 12} cy={y + 9} r="2.5" className="fill-chart-5" />
      <circle cx={x + 21} cy={y + 9} r="2.5" className="fill-chart-2" />
      <circle cx={x + 30} cy={y + 9} r="2.5" className="fill-primary" />
      {children}
    </g>
  )
}

function Lines({ x, y, widths, gap = 9 }: { x: number; y: number; widths: number[]; gap?: number }) {
  return (
    <>
      {widths.map((w, i) => (
        <rect key={i} x={x} y={y + i * gap} width={w} height="4" rx="2" className="fill-muted-foreground/30" />
      ))}
    </>
  )
}

function Pill({ x, y, w, h = 16, tone = "primary", text }: { x: number; y: number; w: number; h?: number; tone?: string; text?: string }) {
  const fill: Record<string, string> = {
    primary: "fill-primary",
    orange: "fill-chart-2",
    blue: "fill-chart-3",
    purple: "fill-chart-4",
    red: "fill-chart-5",
  }
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} className={fill[tone]} />
      {text && (
        <text x={x + w / 2} y={y + h / 2 + 3.5} textAnchor="middle" className="fill-white text-[9px] font-semibold">
          {text}
        </text>
      )}
    </g>
  )
}

function Tag({ x, y, w, text }: { x: number; y: number; w: number; text: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="18" rx="5" className="fill-card stroke-border" strokeWidth="1.2" />
      <text x={x + w / 2} y={y + 12.5} textAnchor="middle" className="fill-foreground text-[10px] font-medium">
        {text}
      </text>
    </g>
  )
}

function Pin({ x, y, tone = "fill-chart-5" }: { x: number; y: number; tone?: string }) {
  return (
    <g>
      <path d={`M${x} ${y + 22}c-9-10-12-15-12-21a12 12 0 0 1 24 0c0 6-3 11-12 21z`} className={tone} />
      <circle cx={x} cy={y + 2} r="4.5" className="fill-white" />
    </g>
  )
}

function Cap({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <path d={`M${x} ${y}l26 11-26 11-26-11z`} className="fill-primary" />
      <path d={`M${x - 14} ${y + 19}v9c0 5 8 8 14 8s14-3 14-8v-9l-14 6z`} className="fill-primary/70" />
      <path d={`M${x + 24} ${y + 13}v16`} className="stroke-primary" strokeWidth="2" strokeLinecap="round" />
    </g>
  )
}

function Lock({ x, y, tone = "fill-chart-2" }: { x: number; y: number; tone?: string }) {
  return (
    <g>
      <path d={`M${x + 5} ${y + 10}v-4a7 7 0 0 1 14 0v4`} className="fill-none stroke-foreground/60" strokeWidth="2.5" />
      <rect x={x} y={y + 10} width="24" height="18" rx="4" className={tone} />
      <circle cx={x + 12} cy={y + 19} r="2.5" className="fill-white" />
    </g>
  )
}

function Cylinder({ x, y, tone = "primary" }: { x: number; y: number; tone?: "primary" | "blue" }) {
  const stroke = tone === "primary" ? "stroke-primary" : "stroke-chart-3"
  const fill = tone === "primary" ? "fill-primary/20" : "fill-chart-3/20"
  return (
    <g className={`${fill} ${stroke}`} strokeWidth="1.8">
      <path d={`M${x} ${y + 8}v26c0 5 11 8 24 8s24-3 24-8V${y + 8}`} />
      <ellipse cx={x + 24} cy={y + 8} rx="24" ry="8" />
      <path d={`M${x} ${y + 21}c0 5 11 8 24 8s24-3 24-8`} className="fill-none" />
    </g>
  )
}

function Phone({ x, y, w = 74, h = 150, children }: { x: number; y: number; w?: number; h?: number; children?: ReactNode }) {
  return (
    <g>
      <rect x={x + 3} y={y + 5} width={w} height={h} rx="14" className="fill-foreground/10" />
      <rect x={x} y={y} width={w} height={h} rx="14" className="fill-card stroke-foreground/40" strokeWidth="2.5" />
      <rect x={x + w / 2 - 12} y={y + 5} width="24" height="4" rx="2" className="fill-foreground/30" />
      {children}
    </g>
  )
}

function Cursor({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M${x} ${y}l0 18 5-5 4 9 4-2-4-9 7 0z`}
      className="fill-foreground stroke-card"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  )
}

/* ---------- Compositions ---------- */

function Lms() {
  return (
    <>
      <Win x={24} y={34} w={226} h={170}>
        <rect x="36" y="58" width="202" height="46" rx="6" className="fill-primary/20" />
        <rect x="46" y="68" width="80" height="7" rx="3" className="fill-primary" />
        <Lines x={46} y={82} widths={[120, 90]} />
        <circle cx="212" cy="81" r="14" className="fill-primary" />
        <path d="M208 74l12 7-12 7z" className="fill-white" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={36 + i * 69} y="116" width="62" height="76" rx="6" className="fill-muted stroke-border" strokeWidth="1" />
            <rect x={36 + i * 69} y="116" width="62" height="28" rx="6" className={["fill-chart-3/60", "fill-chart-2/60", "fill-chart-4/60"][i]} />
            <Lines x={42 + i * 69} y={152} widths={[48, 34]} />
            <rect x={42 + i * 69} y="178" width="50" height="5" rx="2.5" className="fill-border" />
            <rect x={42 + i * 69} y="178" width={[38, 24, 44][i]} height="5" rx="2.5" className="fill-primary" />
          </g>
        ))}
      </Win>
      <path d="M250 119h28" className="stroke-primary" strokeWidth="2.5" strokeDasharray="5 4" />
      <path d="M274 113l8 6-8 6" className="fill-none stroke-primary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <Tag x={238} y={96} w={42} text="REST" />
      <g>
        <rect x="286" y="54" width="92" height="52" rx="10" className="fill-card stroke-primary" strokeWidth="2" />
        <text x="332" y="76" textAnchor="middle" className="fill-foreground text-[12px] font-bold">API PHP</text>
        <text x="332" y="92" textAnchor="middle" className="fill-muted-foreground text-[9px]">HMAC · CORS</text>
        <rect x="286" y="134" width="92" height="52" rx="10" className="fill-primary/15 stroke-chart-2" strokeWidth="2" />
        <text x="332" y="156" textAnchor="middle" className="fill-foreground text-[12px] font-bold">Moodle</text>
        <text x="332" y="172" textAnchor="middle" className="fill-muted-foreground text-[9px]">headless LMS</text>
        <path d="M332 106v28" className="stroke-foreground/50" strokeWidth="2" />
      </g>
      <Lock x={354} y={30} />
    </>
  )
}

function Multitenant() {
  const tenants = [
    { x: 24, y: 40, tone: "fill-chart-3" },
    { x: 24, y: 100, tone: "fill-chart-2" },
    { x: 24, y: 160, tone: "fill-chart-4" },
  ]
  return (
    <>
      {tenants.map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={t.y} width="112" height="46" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
          <rect x={t.x} y={t.y} width="112" height="14" rx="8" className={t.tone} />
          <Lines x={t.x + 10} y={t.y + 24} widths={[70, 46]} />
          <path d={`M${t.x + 112} ${t.y + 23}H190`} className="stroke-foreground/40" strokeWidth="2" strokeDasharray="4 4" />
        </g>
      ))}
      <path d="M190 63v120" className="stroke-foreground/40" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M190 123h22" className="stroke-primary" strokeWidth="2.5" />
      <rect x="212" y="78" width="100" height="90" rx="14" className="fill-primary/15 stroke-primary" strokeWidth="2.5" />
      <text x="262" y="116" textAnchor="middle" className="fill-foreground text-[15px] font-bold">Moodle</text>
      <text x="262" y="134" textAnchor="middle" className="fill-muted-foreground text-[10px]">Workplace</text>
      <Pill x={232} y={146} w={60} tone="primary" text="multi-tenant" />
      <g className="fill-chart-2" transform="translate(326 52)">
        <path d="M0 14h12a6 6 0 1 1 12 0h12v14a6 6 0 1 0 0 12v14H0z" />
        <path d="M6 20h24v38H6z" className="fill-white/30" />
      </g>
      <text x="344" y="130" textAnchor="middle" className="fill-muted-foreground text-[10px]">plugins</text>
    </>
  )
}

function Banking() {
  const top = [30, 150, 270]
  return (
    <>
      <g transform="translate(18 14)">
        <path d="M0 20l22-14 22 14z" className="fill-primary" />
        <rect x="4" y="24" width="36" height="3" className="fill-primary/70" />
        {[7, 17, 27].map((x) => (
          <rect key={x} x={x} y="28" width="5" height="16" className="fill-primary/60" />
        ))}
        <rect x="2" y="46" width="40" height="4" rx="1" className="fill-primary" />
      </g>
      {top.map((x, i) => (
        <g key={x}>
          <rect x={x + 22} y="26" width="86" height="40" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
          <rect x={x + 22} y="26" width="6" height="40" className={["fill-chart-3", "fill-chart-2", "fill-chart-4"][i]} />
          <text x={x + 68} y="43" textAnchor="middle" className="fill-foreground text-[10px] font-bold">
            {["accounts", "contracts", "payments"][i]}
          </text>
          <text x={x + 68} y="57" textAnchor="middle" className="fill-muted-foreground text-[8px]">Spring Boot</text>
          <path d={`M${x + 65} 66v36`} className="stroke-foreground/40" strokeWidth="2" />
        </g>
      ))}
      <rect x="60" y="102" width="290" height="34" rx="17" className="fill-primary/20 stroke-primary" strokeWidth="2.2" />
      <text x="205" y="124" textAnchor="middle" className="fill-foreground text-[13px] font-bold">Kafka · event bus</text>
      {[90, 320].map((x) => (
        <circle key={x} cx={x} cy="119" r="4" className="fill-primary" />
      ))}
      <path d="M100 136v32M205 136v32M310 136v32" className="stroke-foreground/40" strokeWidth="2" />
      <g>
        <rect x="52" y="168" width="96" height="40" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
        <text x="100" y="185" textAnchor="middle" className="fill-foreground text-[10px] font-bold">validation</text>
        <text x="100" y="198" textAnchor="middle" className="fill-muted-foreground text-[8px]">PF4J plugins</text>
      </g>
      <Cylinder x={181} y={164} />
      <g>
        <rect x="262" y="168" width="96" height="40" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
        <text x="310" y="185" textAnchor="middle" className="fill-foreground text-[10px] font-bold">Kubernetes</text>
        <text x="310" y="198" textAnchor="middle" className="fill-muted-foreground text-[8px]">Vault · Keycloak</text>
      </g>
      <Tag x={330} y={22} w={56} text="ISO 20022" />
    </>
  )
}

function School({ variant = 0 }: { variant?: number }) {
  const bars = [
    ["fill-primary", "fill-chart-3"],
    ["fill-chart-3", "fill-chart-2"],
    ["fill-chart-2", "fill-primary"],
  ][variant]
  const tiles = [
    ["fill-primary", "fill-chart-2", "fill-chart-3"],
    ["fill-chart-4", "fill-primary", "fill-chart-3"],
    ["fill-chart-2", "fill-chart-3", "fill-primary"],
  ][variant]
  return (
    <>
      <Win x={24} y={30} w={290} h={176}>
        <rect x="24" y="48" width="56" height="158" className="fill-muted" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="34" y={62 + i * 20} width="36" height="6" rx="3" className={i === variant ? "fill-primary" : "fill-muted-foreground/30"} />
        ))}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={92 + i * 74} y="58" width="66" height="36" rx="6" className="fill-card stroke-border" strokeWidth="1.2" />
            <rect x={100 + i * 74} y="66" width="30" height="5" rx="2.5" className="fill-muted-foreground/30" />
            <rect x={100 + i * 74} y="78" width={[44, 34, 50][i]} height="8" rx="3" className={tiles[i]} />
          </g>
        ))}
        {variant === 1 ? (
          <g>
            {[0, 1, 2, 3].map((i) => (
              <g key={i}>
                <circle cx="104" cy={122 + i * 20} r="7" className={["fill-chart-3", "fill-chart-2", "fill-primary", "fill-chart-4"][i]} />
                <rect x="118" y={118 + i * 20} width={[84, 66, 92, 58][i]} height="6" rx="3" className="fill-muted-foreground/30" />
                <rect x="212" y={116 + i * 20} width="22" height="12" rx="4" className={i === 2 ? "fill-chart-5" : "fill-primary"} />
              </g>
            ))}
          </g>
        ) : (
          <g>
            {[34, 52, 40, 64, 58, 76].map((h, i) => (
              <rect key={i} x={98 + i * 20} y={186 - h} width="12" height={h} rx="3" className={i % 2 ? bars[1] : bars[0]} />
            ))}
          </g>
        )}
        <rect x="244" y="108" width="60" height="86" rx="6" className="fill-muted stroke-border" strokeWidth="1.2" />
        <Lines x={252} y={118} widths={[40, 44, 34, 42]} gap={12} />
        <circle cx="274" cy="178" r="7" className="fill-primary" />
        <path d="M270.5 178l2.5 2.5 4.5-5" className="fill-none stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </Win>
      {variant === 1 ? (
        <g>
          <circle cx="340" cy="92" r="13" className="fill-chart-3" />
          <path d="M318 132c0-14 10-22 22-22s22 8 22 22z" className="fill-chart-3" />
          <circle cx="366" cy="106" r="8" className="fill-chart-2" />
          <path d="M353 132c0-9 6-14 13-14s13 5 13 14z" className="fill-chart-2" />
          <circle cx="350" cy="170" r="22" className="fill-card stroke-chart-2" strokeWidth="3" />
          <path d="M342 172l6 6 11-12" className="fill-none stroke-chart-2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ) : variant === 2 ? (
        <g>
          <circle cx="350" cy="92" r="26" className="fill-chart-2" />
          <text x="350" y="101" textAnchor="middle" className="fill-white text-[26px] font-bold">€</text>
          <circle cx="350" cy="170" r="22" className="fill-card stroke-primary" strokeWidth="3" />
          <text x="350" y="176" textAnchor="middle" className="fill-foreground text-[15px] font-bold">1/3</text>
        </g>
      ) : (
        <g>
          <Cap x={352} y={86} />
          <circle cx="352" cy="170" r="22" className="fill-card stroke-chart-2" strokeWidth="3" />
          <text x="352" y="176" textAnchor="middle" className="fill-foreground text-[16px] font-bold">A+</text>
        </g>
      )}
    </>
  )
}

function University() {
  return (
    <>
      <g transform="translate(40 40)">
        <path d="M0 56L100 4l100 52z" className="fill-primary" />
        <rect x="14" y="60" width="172" height="8" rx="2" className="fill-primary/70" />
        {[24, 54, 84, 114, 144].map((x) => (
          <rect key={x} x={x} y="72" width="16" height="72" rx="3" className="fill-card stroke-border" strokeWidth="1.5" />
        ))}
        <rect x="6" y="146" width="188" height="10" rx="2" className="fill-primary/70" />
        <rect x="0" y="158" width="200" height="10" rx="2" className="fill-primary" />
        <circle cx="100" cy="36" r="9" className="fill-card" />
      </g>
      <g>
        <rect x="270" y="44" width="106" height="132" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
        <rect x="270" y="44" width="106" height="22" rx="8" className="fill-chart-3" />
        <text x="323" y="59" textAnchor="middle" className="fill-white text-[10px] font-bold">TRANSCRIPT</text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="282" y={78 + i * 20} width="50" height="5" rx="2.5" className="fill-muted-foreground/30" />
            <rect x="344" y={74 + i * 20} width="22" height="12" rx="4" className={["fill-primary", "fill-chart-2", "fill-primary", "fill-chart-3"][i]} />
          </g>
        ))}
        <path d="M282 160h84" className="stroke-border" strokeWidth="1.5" />
      </g>
      <path d="M244 110h22" className="stroke-foreground/40" strokeWidth="2" strokeDasharray="4 4" />
    </>
  )
}

function Ecommerce({ variant = 0 }: { variant?: number }) {
  const tones = ["fill-primary/40", "fill-chart-2/50", "fill-chart-3/50", "fill-chart-4/40", "fill-chart-5/40", "fill-primary/30"]
  return (
    <>
      <Win x={24} y={30} w={270} h={176}>
        <rect x="36" y="52" width="140" height="10" rx="5" className="fill-muted" />
        <circle cx="262" cy="57" r="9" className="fill-primary/20" />
        {tones.map((tone, i) => {
          const col = i % 3
          const row = Math.floor(i / 3)
          return (
            <g key={i}>
              <rect x={36 + col * 82} y={74 + row * 64} width="74" height="56" rx="6" className="fill-muted stroke-border" strokeWidth="1" />
              <rect x={42 + col * 82} y={79 + row * 64} width="62" height="28" rx="4" className={tone} />
              <rect x={42 + col * 82} y={113 + row * 64} width="28" height="5" rx="2.5" className="fill-muted-foreground/40" />
              <rect x={74 + col * 82} y={112 + row * 64} width="26" height="8" rx="4" className="fill-primary" />
            </g>
          )
        })}
      </Win>
      <g transform="translate(318 52)">
        <path d="M0 8h8l8 40h44l8-30H14" className="fill-none stroke-foreground/70" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="62" r="6" className="fill-foreground/70" />
        <circle cx="54" cy="62" r="6" className="fill-foreground/70" />
        <circle cx="62" cy="6" r="12" className="fill-primary" />
        <text x="62" y="10.5" textAnchor="middle" className="fill-white text-[12px] font-bold">3</text>
      </g>
      {variant === 1 ? (
        <g>
          <rect x="306" y="132" width="78" height="52" rx="8" className="fill-card stroke-chart-2" strokeWidth="2" />
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={i} d={`M${318 + i * 13} 146l2.6 6 6.4.7-4.8 4.3 1.4 6.3-5.6-3.4-5.6 3.4 1.4-6.3-4.8-4.3 6.4-.7z`} className="fill-chart-2" />
          ))}
          <rect x="316" y="170" width="58" height="5" rx="2.5" className="fill-muted-foreground/30" />
        </g>
      ) : (
        <g>
          <rect x="312" y="136" width="70" height="44" rx="8" className="fill-chart-2" />
          <rect x="312" y="146" width="70" height="8" className="fill-foreground/30" />
          <rect x="320" y="162" width="26" height="5" rx="2.5" className="fill-white/80" />
          <circle cx="366" cy="168" r="6" className="fill-white/70" />
        </g>
      )}
    </>
  )
}

function Website() {
  return (
    <>
      <Win x={36} y={26} w={328} h={184}>
        <rect x="48" y="48" width="304" height="14" rx="4" className="fill-muted" />
        <Pill x={52} y={51} w={34} h={8} />
        <rect x="262" y="52" width="24" height="5" rx="2.5" className="fill-muted-foreground/40" />
        <rect x="294" y="52" width="24" height="5" rx="2.5" className="fill-muted-foreground/40" />
        <rect x="326" y="52" width="20" height="5" rx="2.5" className="fill-muted-foreground/40" />
        <rect x="48" y="70" width="304" height="58" rx="8" className="fill-primary/20" />
        <g>
          <circle cx="82" cy="102" r="14" className="fill-primary" />
          <circle cx="104" cy="102" r="14" className="fill-chart-2" />
          <circle cx="93" cy="90" r="14" className="fill-chart-3" />
        </g>
        <rect x="136" y="82" width="110" height="9" rx="4" className="fill-foreground/70" />
        <Lines x={136} y={98} widths={[150, 118]} />
        <Pill x={136} y={114} w={54} h={10} tone="primary" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={48 + i * 104} y="138" width="96" height="62" rx="6" className="fill-card stroke-border" strokeWidth="1.2" />
            <rect x={48 + i * 104} y="138" width="96" height="26" rx="6" className={["fill-chart-3/50", "fill-chart-2/50", "fill-chart-4/40"][i]} />
            <Lines x={56 + i * 104} y={172} widths={[70, 52, 60]} gap={8} />
          </g>
        ))}
      </Win>
    </>
  )
}

function Exam() {
  return (
    <>
      <rect x="40" y="30" width="236" height="176" rx="12" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="56" y="46" width="120" height="8" rx="4" className="fill-foreground/70" />
      <Lines x={56} y={62} widths={[190, 150]} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="56" y={92 + i * 28} width="204" height="22" rx="6" className={i === 1 ? "fill-primary/20 stroke-primary" : "fill-muted stroke-border"} strokeWidth="1.5" />
          <circle cx="70" cy={103 + i * 28} r="6" className={i === 1 ? "fill-primary" : "fill-card stroke-muted-foreground/50"} strokeWidth="1.5" />
          <rect x="84" y={101 + i * 28} width={[96, 120, 80, 104][i]} height="4" rx="2" className="fill-muted-foreground/40" />
        </g>
      ))}
      <circle cx="334" cy="82" r="38" className="fill-none stroke-border" strokeWidth="9" />
      <circle cx="334" cy="82" r="38" className="fill-none stroke-primary" strokeWidth="9" strokeLinecap="round" strokeDasharray="168 240" transform="rotate(-90 334 82)" />
      <text x="334" y="88" textAnchor="middle" className="fill-foreground text-[18px] font-bold">84%</text>
      <g>
        <rect x="296" y="140" width="76" height="52" rx="10" className="fill-chart-2/20 stroke-chart-2" strokeWidth="2" />
        <circle cx="318" cy="166" r="10" className="fill-none stroke-chart-2" strokeWidth="3" />
        <path d="M318 159v7l5 3" className="fill-none stroke-chart-2" strokeWidth="2.5" strokeLinecap="round" />
        <text x="352" y="170" textAnchor="middle" className="fill-foreground text-[10px] font-bold">45:00</text>
      </g>
    </>
  )
}

function Health() {
  return (
    <>
      <rect x="30" y="30" width="250" height="176" rx="14" className="fill-card stroke-border" strokeWidth="1.5" />
      <rect x="30" y="30" width="250" height="176" rx="14" className="fill-chart-3/10" />
      <circle cx="155" cy="96" r="26" className="fill-chart-3/70" />
      <path d="M95 192c0-34 26-52 60-52s60 18 60 52z" className="fill-chart-3/70" />
      <path d="M140 146l15 22 15-22" className="fill-none stroke-white" strokeWidth="3" strokeLinejoin="round" />
      <rect x="198" y="46" width="68" height="46" rx="8" className="fill-muted stroke-border" strokeWidth="1.5" />
      <circle cx="232" cy="64" r="8" className="fill-chart-2/70" />
      <path d="M216 90c0-9 7-14 16-14s16 5 16 14z" className="fill-chart-2/70" />
      <rect x="44" y="176" width="130" height="20" rx="10" className="fill-card/90" />
      <circle cx="62" cy="186" r="5" className="fill-primary" />
      <rect x="74" y="184" width="86" height="4" rx="2" className="fill-muted-foreground/40" />
      <g>
        <circle cx="340" cy="62" r="30" className="fill-primary" />
        <path d="M340 46v32M324 62h32" className="stroke-white" strokeWidth="9" strokeLinecap="round" />
      </g>
      <path d="M298 118h20l8-18 12 38 10-26 8 6h28" className="fill-none stroke-chart-5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <rect x="302" y="150" width="82" height="52" rx="8" className="fill-card stroke-border" strokeWidth="1.5" />
        <text x="343" y="167" textAnchor="middle" className="fill-foreground text-[9px] font-bold">Rx</text>
        <Lines x={312} y={174} widths={[56, 40, 48]} gap={8} />
      </g>
    </>
  )
}

function Ai() {
  return (
    <>
      <Win x={22} y={74} w={104} h={92}>
        <Lines x={34} y={100} widths={[66, 50, 58, 40]} gap={12} />
      </Win>
      <text x="74" y="186" textAnchor="middle" className="fill-muted-foreground text-[11px] font-semibold">Moodle</text>
      <path d="M126 120h36" className="stroke-primary" strokeWidth="2.5" strokeDasharray="5 4" />
      <path d="M156 113l8 7-8 7" className="fill-none stroke-primary" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="164" y="40" width="214" height="162" rx="16" className="fill-chart-3/10 stroke-chart-3" strokeWidth="2.5" strokeDasharray="8 6" />
      <Tag x={176} y={30} w={64} text="Docker" />
      <g transform="translate(206 76)">
        <rect x="8" y="8" width="64" height="64" rx="10" className="fill-card stroke-primary" strokeWidth="2.5" />
        <rect x="22" y="22" width="36" height="36" rx="6" className="fill-primary/25" />
        <text x="40" y="45" textAnchor="middle" className="fill-foreground text-[11px] font-bold">LLM</text>
        {[18, 32, 46, 60].map((p) => (
          <g key={p} className="stroke-primary" strokeWidth="2.5" strokeLinecap="round">
            <path d={`M${p} 8V0M${p} 72v8M8 ${p}H0M72 ${p}h8`} />
          </g>
        ))}
      </g>
      <text x="246" y="186" textAnchor="middle" className="fill-muted-foreground text-[11px] font-semibold">Ollama</text>
      <g transform="translate(312 66)">
        <path d="M30 0l30 10v26c0 20-14 34-30 40C14 70 0 56 0 36V10z" className="fill-chart-2" />
        <path d="M18 38l9 9 17-19" className="fill-none stroke-white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="342" y="166" textAnchor="middle" className="fill-muted-foreground text-[10px] font-semibold">anti-injection</text>
    </>
  )
}

function DesignExam() {
  return (
    <>
      <rect x="90" y="24" width="220" height="192" rx="6" className="fill-card stroke-chart-4" strokeWidth="2" />
      {[
        [90, 24],
        [310, 24],
        [90, 216],
        [310, 216],
      ].map(([x, y]) => (
        <rect key={`${x}${y}`} x={x - 4} y={y - 4} width="8" height="8" className="fill-card stroke-chart-4" strokeWidth="2" />
      ))}
      <rect x="104" y="38" width="192" height="22" rx="6" className="fill-muted" />
      <circle cx="116" cy="49" r="5" className="fill-chart-4" />
      <rect x="104" y="70" width="192" height="8" rx="4" className="fill-border" />
      <rect x="104" y="70" width="110" height="8" rx="4" className="fill-primary" />
      <rect x="104" y="88" width="192" height="50" rx="8" className="fill-chart-4/15 stroke-chart-4/50" strokeWidth="1.5" />
      <Lines x={116} y={100} widths={[150, 110, 130]} gap={11} />
      {[0, 1].map((i) => (
        <rect key={i} x={104 + i * 98} y="150" width="94" height="26" rx="8" className={i ? "fill-primary" : "fill-muted stroke-border"} strokeWidth="1.5" />
      ))}
      <rect x="104" y="186" width="192" height="20" rx="6" className="fill-muted" />
      {["fill-primary", "fill-chart-2", "fill-chart-3", "fill-chart-4", "fill-chart-5"].map((c, i) => (
        <circle key={c} cx="34" cy={60 + i * 26} r="10" className={c} />
      ))}
      <Cursor x={268} y={146} />
      <Tag x={318} y={86} w={60} text="Figma" />
    </>
  )
}

function DesignHousing() {
  return (
    <>
      <rect x="28" y="28" width="344" height="30" rx="15" className="fill-card stroke-border" strokeWidth="1.5" />
      <circle cx="52" cy="43" r="7" className="fill-none stroke-muted-foreground" strokeWidth="2.5" />
      <path d="M57 48l6 6" className="stroke-muted-foreground" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="78" y="40" width="110" height="6" rx="3" className="fill-muted-foreground/40" />
      <Pill x={300} y={34} w={64} h={18} tone="primary" text="Search" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={28 + i * 116} y="72" width="108" height="136" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
          <rect x={28 + i * 116} y="72" width="108" height="64" rx="10" className={["fill-primary/30", "fill-chart-2/35", "fill-chart-3/35"][i]} />
          <g transform={`translate(${60 + i * 116} 80)`}>
            <path d="M22 4L0 24h8v22h28V24h8z" className={["fill-primary", "fill-chart-2", "fill-chart-3"][i]} />
            <rect x="17" y="30" width="10" height="16" className="fill-white/80" />
          </g>
          <rect x={38 + i * 116} y="146" width="56" height="7" rx="3" className="fill-foreground/70" />
          <Lines x={38 + i * 116} y={160} widths={[78, 54]} />
          <rect x={38 + i * 116} y="184" width="40" height="12" rx="6" className="fill-primary/20" />
        </g>
      ))}
      <Pin x={376} y={96} />
    </>
  )
}

function DesignBooking() {
  return (
    <>
      <rect x="24" y="28" width="236" height="180" rx="12" className="fill-chart-3/15 stroke-border" strokeWidth="1.5" />
      <path d="M24 150C80 120 120 170 170 130S240 110 260 100M60 28c20 40 10 80 40 110s40 50 30 70M190 28c-10 30 20 50 10 90" className="fill-none stroke-card" strokeWidth="8" strokeLinecap="round" />
      <path d="M24 150C80 120 120 170 170 130S240 110 260 100" className="fill-none stroke-chart-2" strokeWidth="2.5" strokeDasharray="6 5" strokeLinecap="round" />
      <Pin x={92} y={70} />
      <Pin x={176} y={104} tone="fill-primary" />
      <Pin x={226} y={60} tone="fill-chart-4" />
      <g>
        <rect x="278" y="28" width="98" height="86" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
        <rect x="278" y="28" width="98" height="20" rx="10" className="fill-primary" />
        <text x="327" y="42" textAnchor="middle" className="fill-white text-[10px] font-bold">OCT</text>
        {Array.from({ length: 14 }).map((_, i) => (
          <circle key={i} cx={290 + (i % 7) * 13} cy={62 + Math.floor(i / 7) * 18} r="4" className={i === 9 ? "fill-primary" : "fill-muted-foreground/30"} />
        ))}
      </g>
      <g>
        <rect x="278" y="126" width="98" height="82" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
        <path d="M296 176l32-18 4 6-28 22zM327 158l20-12 3 5-16 12z" className="fill-chart-3" />
        <Lines x={292} y={186} widths={[64, 44]} />
        <Pill x={292} y={142} w={40} h={12} tone="primary" text="Book" />
      </g>
    </>
  )
}

function DesignMarketplace() {
  const tones = ["fill-primary/40", "fill-chart-2/50", "fill-chart-3/50", "fill-chart-4/40"]
  return (
    <>
      <Phone x={163} y={32} w={78} h={180}>
        <rect x="171" y="48" width="62" height="12" rx="6" className="fill-muted" />
        {tones.map((tone, i) => (
          <g key={i}>
            <rect x={171 + (i % 2) * 33} y={68 + Math.floor(i / 2) * 58} width="29" height="52" rx="5" className="fill-muted" />
            <rect x={174 + (i % 2) * 33} y={71 + Math.floor(i / 2) * 58} width="23" height="26" rx="4" className={tone} />
            <rect x={174 + (i % 2) * 33} y={102 + Math.floor(i / 2) * 58} width="16" height="4" rx="2" className="fill-muted-foreground/40" />
            <rect x={174 + (i % 2) * 33} y={110 + Math.floor(i / 2) * 58} width="12" height="4" rx="2" className="fill-primary" />
          </g>
        ))}
        <rect x="171" y="184" width="62" height="18" rx="9" className="fill-primary" />
      </Phone>
      <g>
        <rect x="42" y="64" width="96" height="50" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
        <path d="M62 82h28l-3 20H66z" className="fill-primary" />
        <path d="M70 82a6 6 0 0 1 12 0" className="fill-none stroke-primary" strokeWidth="2.5" />
        <Lines x={100} y={84} widths={[28, 20]} />
      </g>
      <g>
        <rect x="270" y="52" width="92" height="50" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M${284 + i * 15} 66l3 7 7 .8-5.3 4.8 1.6 7-6.3-3.8-6.3 3.8 1.6-7-5.3-4.8 7-.8z`} className={i < 4 ? "fill-chart-2" : "fill-border"} />
        ))}
      </g>
      <g>
        <rect x="262" y="130" width="100" height="52" rx="10" className="fill-primary/15 stroke-primary" strokeWidth="1.5" />
        <circle cx="288" cy="156" r="11" className="fill-primary" />
        <path d="M283 156l4 4 7-8" className="fill-none stroke-white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <Lines x={308} y={148} widths={[44, 32]} />
      </g>
      <g>
        <rect x="46" y="140" width="92" height="40" rx="10" className="fill-card stroke-border" strokeWidth="1.5" />
        <circle cx="68" cy="160" r="10" className="fill-chart-4/60" />
        <Lines x={86} y={154} widths={[40, 28]} />
      </g>
    </>
  )
}

const scenes: Record<ProjectKind, (props: { variant?: number }) => ReactNode> = {
  lms: Lms,
  multitenant: Multitenant,
  banking: Banking,
  school: School,
  university: University,
  ecommerce: Ecommerce,
  website: Website,
  exam: Exam,
  health: Health,
  ai: Ai,
  "design-exam": DesignExam,
  "design-housing": DesignHousing,
  "design-booking": DesignBooking,
  "design-marketplace": DesignMarketplace,
}

export function ProjectIllustration({ kind, variant, fit = "slice", label, className }: Props) {
  const patternId = `dots-${useId().replace(/:/g, "")}`
  const Scene = scenes[kind]

  return (
    <svg
      viewBox="0 0 400 240"
      role="img"
      aria-label={label}
      className={className}
      preserveAspectRatio={`xMidYMid ${fit}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Backdrop id={patternId} />
      <Scene variant={variant} />
    </svg>
  )
}
