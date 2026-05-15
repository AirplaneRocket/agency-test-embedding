import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const services = [
  {
    n: "01",
    title: "SEO",
    desc: "Technical, content, and local SEO that compounds month over month.",
    tags: ["Technical", "Content", "Local"],
  },
  {
    n: "02",
    title: "Paid Media",
    desc: "Google, Meta, TikTok, LinkedIn — full-funnel paid built around LTV.",
    tags: ["Google", "Meta", "TikTok"],
  },
  {
    n: "03",
    title: "Content",
    desc: "Editorial that ranks, converts, and gets shared. Not slop.",
    tags: ["Editorial", "Video", "Social"],
  },
  {
    n: "04",
    title: "CRO",
    desc: "Page-level testing and analytics so every dollar spent stretches further.",
    tags: ["Testing", "Analytics", "UX"],
  },
  {
    n: "05",
    title: "Lifecycle",
    desc: "Email, SMS, and retention flows that turn one-time buyers into fans.",
    tags: ["Email", "SMS", "CDP"],
  },
  {
    n: "06",
    title: "Strategy",
    desc: "Fractional CMO and growth strategy for founders who need a partner.",
    tags: ["GTM", "Brand", "Growth"],
  },
];

const work = [
  {
    client: "MERIDIAN COFFEE",
    sector: "DTC Beverage",
    result: "+312% revenue · 18 mo",
    bg: "bg-[#1a1a1a] text-background",
  },
  {
    client: "HALCYON DENTAL",
    sector: "Multi-location Healthcare",
    result: "4.2k booked appts · 12 mo",
    bg: "bg-accent text-foreground",
  },
  {
    client: "RIVET & ROW",
    sector: "Furniture / B2C",
    result: "$2.1M paid revenue · Q3",
    bg: "bg-foreground text-background",
  },
  {
    client: "OAKMONT FINANCIAL",
    sector: "B2B SaaS / FinTech",
    result: "+8x organic traffic",
    bg: "bg-background text-foreground border-2 border-line",
  },
];

const press = [
  "FAST COMPANY",
  "AD AGE",
  "THE DRUM",
  "DIGIDAY",
  "TECHCRUNCH",
  "WIRED",
  "ADWEEK",
  "MARKETING WEEK",
];

const stats = [
  { v: "$140M+", l: "Media managed" },
  { v: "97%", l: "Client retention" },
  { v: "11 yrs", l: "Avg. partnership" },
  { v: "42", l: "Engines built" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <PressStrip />
        <Services />
        <Stats />
        <Work />
        <Process />
        <Testimonial />
        <CTA />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative border-b-2 border-line">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 bg-accent" />
          <span className="eyebrow">Est. 2014 · Brooklyn, NY</span>
        </div>

        <h1 className="mt-8 font-serif text-[clamp(3rem,10vw,9rem)] leading-[0.92] tracking-tight">
          Marketing that <span className="italic">compounds.</span>
          <br />
          Not campaigns that{" "}
          <span className="bg-accent px-2 italic">expire</span>.
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.6fr_1fr] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-foreground/80">
            NORTHWIRE is a full-service digital marketing studio. We engineer growth
            systems for ambitious B2C and B2B brands — owned channels, paid acquisition,
            and the analytics that hold it all together.
          </p>
          <div className="flex flex-col items-start gap-3">
            <Link
              href="/tools/gmb-audit"
              className="group inline-flex items-center gap-3 border-2 border-line bg-foreground px-6 py-4 font-mono text-sm font-semibold uppercase tracking-wider text-background transition-transform hover:-translate-y-1"
            >
              Run a free GMB audit
              <span className="grid h-6 w-6 place-items-center bg-accent text-foreground transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/60">
              No login. Results in 60 seconds<span className="cursor-blink">_</span>
            </p>
          </div>
        </div>
      </div>

      <CornerTicks />
    </section>
  );
}

function CornerTicks() {
  return (
    <>
      <span className="pointer-events-none absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
        N · 40.6782
      </span>
      <span className="pointer-events-none absolute right-4 top-4 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
        W · 73.9442
      </span>
      <span className="pointer-events-none absolute left-4 bottom-4 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
        FILE · NW-001
      </span>
      <span className="pointer-events-none absolute right-4 bottom-4 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
        v2.6.1
      </span>
    </>
  );
}

function PressStrip() {
  return (
    <section className="overflow-hidden border-b-2 border-line bg-foreground text-background py-5">
      <div className="marquee-track flex whitespace-nowrap">
        {[...press, ...press].map((p, i) => (
          <span
            key={i}
            className="mx-10 inline-flex items-center gap-10 font-serif text-2xl tracking-tight"
          >
            {p}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-b-2 border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-foreground/60">§ 01 — Capabilities</p>
            <h2 className="mt-3 font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Six disciplines.
              <br />
              <span className="italic">One engine.</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-foreground/70 md:block">
            Most agencies are good at one thing. We're good at the way they fit together
            — which is where the compounding happens.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 border-2 border-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.n}
              className={`group relative flex flex-col gap-6 p-8 transition-colors hover:bg-accent ${
                i % 3 !== 2 ? "lg:border-r-2 lg:border-line" : ""
              } ${i % 2 !== 1 ? "md:border-r-2 md:border-line" : ""} ${
                i < services.length - 1 ? "border-b-2 border-line" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-foreground/50">/{s.n}</span>
                <span className="font-mono text-xs text-foreground/50 group-hover:text-foreground/80">
                  →
                </span>
              </div>
              <h3 className="font-serif text-4xl tracking-tight">{s.title}</h3>
              <p className="text-foreground/80">{s.desc}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-line/60 bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-wider"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b-2 border-line bg-foreground text-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.l}
            className={`px-6 py-10 md:px-10 md:py-16 ${
              i !== stats.length - 1 ? "md:border-r border-background/15" : ""
            } ${i < 2 ? "border-b md:border-b-0 border-background/15" : ""} ${
              i === 0 ? "border-r border-background/15" : ""
            } ${i === 2 ? "border-r border-background/15" : ""}`}
          >
            <p className="font-serif text-5xl md:text-7xl tracking-tight">{s.v}</p>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-background/60">
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="border-b-2 border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-foreground/60">§ 02 — Selected work</p>
            <h2 className="mt-3 font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Engines, <span className="italic">running.</span>
            </h2>
          </div>
          <Link
            href="#"
            className="font-mono text-xs uppercase tracking-widest underline underline-offset-4"
          >
            See full case studies →
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {work.map((w, i) => (
            <article
              key={w.client}
              className={`group relative flex aspect-[5/4] flex-col justify-between border-2 border-line p-8 transition-transform hover:-translate-y-1 ${w.bg}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-widest opacity-60">
                  Case · {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs opacity-60">↗</span>
              </div>

              <BigBrandMark name={w.client} />

              <div>
                <p className="font-mono text-xs uppercase tracking-widest opacity-60">
                  {w.sector}
                </p>
                <p className="mt-2 font-serif text-2xl md:text-3xl tracking-tight">
                  {w.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BigBrandMark({ name }: { name: string }) {
  return (
    <div className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.85] tracking-tight">
      {name.split(" ").map((word, i) => (
        <span key={i} className="block">
          {word}
        </span>
      ))}
    </div>
  );
}

function Process() {
  const steps = [
    {
      n: "Step 01",
      t: "Diagnose",
      d: "We audit your funnel, channels, and analytics to find the leaks before we spend a dollar.",
    },
    {
      n: "Step 02",
      t: "Design",
      d: "We sketch the system — channels, content, lifecycle — and the metric tree that tells us it's working.",
    },
    {
      n: "Step 03",
      t: "Deploy",
      d: "We run the work — paid, owned, technical — with weekly cadence and quarterly compounding reviews.",
    },
    {
      n: "Step 04",
      t: "Defend",
      d: "Once the engine compounds, we automate, document, and protect it from the next platform shift.",
    },
  ];
  return (
    <section id="process" className="border-b-2 border-line bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <p className="eyebrow text-foreground/60">§ 03 — Process</p>
        <h2 className="mt-3 font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
          A four-step <span className="italic">build.</span>
        </h2>

        <ol className="mt-14 grid grid-cols-1 border-2 border-line md:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`flex flex-col gap-6 p-8 md:p-10 ${
                i !== steps.length - 1
                  ? "border-b-2 border-line md:border-b-0 md:border-r-2"
                  : ""
              }`}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                {s.n}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl tracking-tight">
                {s.t}
                <span className="text-accent">.</span>
              </h3>
              <p className="text-foreground/80">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="border-b-2 border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:items-start">
          <div>
            <p className="eyebrow text-foreground/60">§ 04 — Testimony</p>
            <div className="mt-6 grid grid-cols-5 gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="aspect-square bg-accent" />
              ))}
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest">
              97% client retention since 2014
            </p>
          </div>

          <figure>
            <blockquote className="font-serif text-3xl md:text-5xl leading-[1.1] tracking-tight">
              <span className="text-accent">&ldquo;</span>
              NORTHWIRE rebuilt our acquisition stack from the ground up. Twelve months
              in, we&apos;re spending less and growing faster than at any point in the
              company&apos;s history.
              <span className="text-accent">&rdquo;</span>
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 border-2 border-line bg-foreground" />
              <div>
                <p className="font-mono text-sm font-semibold">Dana Kowalski</p>
                <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                  VP Growth · Meridian Coffee
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-accent">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-24 md:grid-cols-[1.4fr_1fr] md:items-end">
        <h2 className="font-serif text-5xl md:text-8xl leading-[0.92] tracking-tight">
          Let&apos;s build <span className="italic">the engine.</span>
        </h2>
        <div>
          <p className="text-foreground/80">
            Tell us where you want to be in 18 months. We&apos;ll send back a 1-page plan
            within 48 hours — no obligation, no sales fluff.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-flex items-center gap-3 border-2 border-line bg-foreground px-6 py-4 font-mono text-sm font-semibold uppercase tracking-wider text-background hover:-translate-y-1 transition-transform"
            >
              Book a 20-min call →
            </Link>
            <Link
              href="/tools/gmb-audit"
              className="inline-flex items-center gap-3 border-2 border-line bg-background px-6 py-4 font-mono text-sm font-semibold uppercase tracking-wider hover:-translate-y-1 transition-transform"
            >
              Try the GMB audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
