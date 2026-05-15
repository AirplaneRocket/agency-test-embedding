import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const services = [
  {
    title: "SEO",
    desc: "Technical, content, and local SEO that compounds month over month.",
    grad: "from-indigo-500 to-purple-500",
    icon: "🎯",
    bullets: ["Technical audits", "Topic clusters", "Local & GMB"],
  },
  {
    title: "Paid Media",
    desc: "Google, Meta, TikTok, LinkedIn — full-funnel paid built around LTV.",
    grad: "from-purple-500 to-pink-500",
    icon: "📈",
    bullets: ["Performance creative", "LTV-driven bidding", "Attribution"],
  },
  {
    title: "Content & Brand",
    desc: "Editorial that ranks, converts, and gets shared. AI-assisted, human-finished.",
    grad: "from-pink-500 to-rose-500",
    icon: "✍️",
    bullets: ["Long-form SEO", "Brand systems", "Video & social"],
  },
  {
    title: "CRO & Analytics",
    desc: "Page-level testing and clean data so every dollar spent stretches further.",
    grad: "from-blue-500 to-cyan-500",
    icon: "🧪",
    bullets: ["A/B testing", "Funnel analytics", "Heatmaps & UX"],
  },
  {
    title: "Lifecycle",
    desc: "Email, SMS, and retention flows that turn one-time buyers into repeat fans.",
    grad: "from-emerald-500 to-teal-500",
    icon: "💌",
    bullets: ["Klaviyo · Customer.io", "Win-backs", "VIP segments"],
  },
  {
    title: "AI Strategy",
    desc: "Fractional CMO + AI playbooks for founders who need a senior partner.",
    grad: "from-amber-500 to-orange-500",
    icon: "✨",
    bullets: ["GTM workshops", "AI playbooks", "Quarterly OKRs"],
  },
];

const work = [
  {
    client: "Meridian Coffee",
    sector: "DTC · Beverage",
    result: "+312%",
    label: "revenue in 18 mo",
    grad: "from-indigo-50 via-white to-purple-50",
    pill: "bg-indigo-100 text-indigo-700",
  },
  {
    client: "Halcyon Dental",
    sector: "Healthcare · Multi-location",
    result: "4,200",
    label: "booked appts / yr",
    grad: "from-pink-50 via-white to-rose-50",
    pill: "bg-pink-100 text-pink-700",
  },
  {
    client: "Rivet & Row",
    sector: "B2C · Furniture",
    result: "$2.1M",
    label: "paid revenue · Q3",
    grad: "from-emerald-50 via-white to-teal-50",
    pill: "bg-emerald-100 text-emerald-700",
  },
  {
    client: "Oakmont Financial",
    sector: "B2B · FinTech",
    result: "8×",
    label: "organic traffic growth",
    grad: "from-blue-50 via-white to-cyan-50",
    pill: "bg-blue-100 text-blue-700",
  },
];

const press = [
  "Fast Company",
  "Ad Age",
  "The Drum",
  "Digiday",
  "TechCrunch",
  "Adweek",
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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-bg" aria-hidden />
      <div className="absolute inset-0 dot-grid opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-24 md:pb-36">
        <div className="mx-auto max-w-4xl text-center">
          <PillBadge>
            <span aria-hidden>✦</span> AI-powered agency · trusted by 200+ teams
          </PillBadge>

          <h1 className="mt-7 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Marketing that{" "}
            <span className="gradient-text shimmer-text">compounds.</span>
            <br />
            Not campaigns that expire.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Acme Agency is a full-service growth studio. We engineer SEO, paid, content,
            and lifecycle systems — instrumented with AI — for ambitious B2C and B2B
            brands.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/tools/gmb-audit"
              className="group inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-semibold text-foreground shadow-cta transition-transform hover:-translate-y-0.5"
            >
              Run a free GMB audit
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-indigo/40 hover:shadow-sm"
            >
              Book a discovery call
            </Link>
          </div>

          <p className="mt-5 text-xs text-muted">
            <span className="text-emerald-600">●</span> 24 audits run today · avg. score
            72/100
          </p>
        </div>

        <HeroPreviewCard />
      </div>
    </section>
  );
}

function HeroPreviewCard() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div className="absolute -inset-x-12 -top-8 bottom-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-200/50 via-purple-200/30 to-pink-200/40 blur-3xl" />

      <div className="card relative overflow-hidden p-2 md:p-3">
        <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-pink-50 px-6 py-7 md:px-10 md:py-9">
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-muted">
                <span className="grid h-5 w-5 place-items-center rounded-md bg-indigo-100 text-indigo-700">
                  ✦
                </span>
                AI-powered audit · 60 seconds
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Find out where your{" "}
                <span className="gradient-text">growth is leaking</span>
              </h3>
              <p className="mt-3 text-sm text-muted md:text-base">
                Drop in your business. We scan your Google Business Profile against 8 key
                signals and hand you a prioritized fix list.
              </p>
              <Link
                href="/tools/gmb-audit"
                className="mt-5 inline-flex items-center gap-2 rounded-full gradient-cta px-5 py-2.5 text-sm font-semibold text-foreground shadow-cta transition-transform hover:-translate-y-0.5"
              >
                Try it free →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MiniStat label="Listing score" value="78" tone="indigo" />
              <MiniStat label="Reviews" value="4.6★" tone="pink" />
              <MiniStat label="Map pack rank" value="#3" tone="emerald" />
              <MiniStat label="NAP fixes" value="2" tone="amber" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "indigo" | "pink" | "emerald" | "amber";
}) {
  const toneMap = {
    indigo: "from-indigo-500 to-purple-500",
    pink: "from-pink-500 to-rose-500",
    emerald: "from-emerald-500 to-teal-500",
    amber: "from-amber-500 to-orange-500",
  };
  return (
    <div className="rounded-2xl border border-border-soft bg-white p-4 shadow-sm">
      <p className="text-xs font-medium text-muted">{label}</p>
      <p
        className={`mt-1 bg-gradient-to-r ${toneMap[tone]} bg-clip-text text-2xl font-bold text-transparent`}
      >
        {value}
      </p>
    </div>
  );
}

function PillBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-1.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur-sm">
      {children}
    </div>
  );
}

function PressStrip() {
  return (
    <section className="border-y border-border-soft bg-surface/60">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted">
          Featured in
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {press.map((p) => (
            <span
              key={p}
              className="text-xl font-semibold tracking-tight text-foreground/40 hover:text-foreground/70 transition-colors"
              style={{ fontFamily: "serif" }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          kicker="What we do"
          title={
            <>
              One <span className="gradient-text">engine.</span>
              <br /> Six disciplines.
            </>
          }
          sub="Most agencies are good at one thing. We're great at how they fit together — which is where the compounding happens."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group card relative overflow-hidden p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${s.grad} opacity-10 transition-opacity group-hover:opacity-20`}
              />
              <div className="relative">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${s.grad} text-lg text-white shadow-md`}
                >
                  {s.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                <ul className="mt-5 space-y-1.5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <span className="text-emerald-500">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
        {kicker}
      </span>
      <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
        {title}
      </h2>
      {sub && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {sub}
        </p>
      )}
    </div>
  );
}

function Stats() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="card relative overflow-hidden p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-pink-50" />
          <div className="relative grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <p className="gradient-text text-4xl font-bold tracking-tight md:text-5xl">
                  {s.v}
                </p>
                <p className="mt-2 text-sm text-muted">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          kicker="Selected work"
          title={
            <>
              Engines, <span className="gradient-text">running.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {work.map((w) => (
            <article
              key={w.client}
              className={`group card relative overflow-hidden p-8 transition-all hover:-translate-y-1 hover:shadow-lg`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${w.grad}`}
              />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${w.pill}`}
                  >
                    {w.sector}
                  </span>
                  <span
                    aria-hidden
                    className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </div>

                <div className="mt-10 mb-12">
                  <p className="gradient-text text-6xl font-bold tracking-tight md:text-7xl">
                    {w.result}
                  </p>
                  <p className="mt-1 text-sm text-muted">{w.label}</p>
                </div>

                <p className="text-lg font-semibold tracking-tight">{w.client}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-900"
          >
            See all case studies <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      t: "Diagnose",
      d: "We audit your funnel, channels, and analytics to find the leaks before we spend a dollar.",
      grad: "from-indigo-500 to-purple-500",
    },
    {
      n: "02",
      t: "Design",
      d: "We sketch the system — channels, content, lifecycle — and the metric tree that proves it's working.",
      grad: "from-purple-500 to-pink-500",
    },
    {
      n: "03",
      t: "Deploy",
      d: "We run the work — paid, owned, technical — with weekly cadence and quarterly compounding reviews.",
      grad: "from-pink-500 to-rose-500",
    },
    {
      n: "04",
      t: "Defend",
      d: "Once the engine compounds, we automate, document, and protect it from the next platform shift.",
      grad: "from-emerald-500 to-teal-500",
    },
  ];
  return (
    <section id="process" className="relative bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          kicker="How we work"
          title={
            <>
              A four-step <span className="gradient-text">build.</span>
            </>
          }
        />

        <ol className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="card relative overflow-hidden p-6 transition-transform hover:-translate-y-1"
            >
              <p
                className={`bg-gradient-to-br ${s.grad} bg-clip-text text-5xl font-bold text-transparent`}
              >
                {s.n}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <figure className="card relative overflow-hidden p-10 md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
          <div className="relative">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="text-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <blockquote className="mt-7 text-center text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
              &ldquo;Acme rebuilt our acquisition stack from the ground up. Twelve
              months in, we&apos;re{" "}
              <span className="gradient-text">spending less and growing faster</span>{" "}
              than at any point in our company&apos;s history.&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-3">
              <div
                className="grid h-11 w-11 place-items-center rounded-full text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 55%, #ec4899 100%)",
                }}
              >
                DK
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold">Dana Kowalski</p>
                <p className="text-xs text-muted">VP Growth · Meridian Coffee</p>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div
          className="relative overflow-hidden rounded-[2rem] p-10 md:p-16"
          style={{
            background:
              "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 55%, #ec4899 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.25) 0%, transparent 50%)",
            }}
          />
          <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                Ready in 48 hours
              </span>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl">
                Let&apos;s build the engine.
              </h2>
              <p className="mt-4 max-w-md text-base text-white/80 md:text-lg">
                Tell us where you want to be in 18 months. We&apos;ll send back a
                1-page plan — no obligation, no sales fluff.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
              >
                Book a 20-min call <span aria-hidden>→</span>
              </Link>
              <Link
                href="/tools/gmb-audit"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-transform hover:-translate-y-0.5"
              >
                Try the GMB audit first
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
