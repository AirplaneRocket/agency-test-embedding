import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Free GMB Audit Tool — Acme Agency",
  description:
    "Run a free Google Business Profile audit in 60 seconds. See exactly where your local listing is losing rankings, reviews, and clicks — and how to fix it.",
};

const FLY_EMBED_SCRIPT = `(function() {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://staging.fly-social.com/embed/just4-manu1-leads/gmb-audit';
  iframe.style.cssText = 'width:100%;height:800px;border:none;border-radius:8px;';
  iframe.allow = 'clipboard-write';
  document.getElementById('fly-embed-gmb-audit').appendChild(iframe);
  window.addEventListener('message', function(e) {
    if (!e.data) return;
    if (e.data.type === 'fly-embed-resize') {
      iframe.style.height = e.data.height + 'px';
    } else if (e.data.type === 'fly-embed-scroll-to-modal') {
      var ifr = iframe.getBoundingClientRect();
      var modalTopAbs = window.pageYOffset + ifr.top + (e.data.top || 0);
      var vh = window.innerHeight;
      var safeTop = 100;
      var modalHeight = e.data.height || 0;
      var targetY;
      if (modalHeight > 0 && modalHeight + safeTop + 20 < vh) {
        var ideal = modalTopAbs - (vh - modalHeight) / 2;
        targetY = Math.max(modalTopAbs - safeTop, ideal);
      } else {
        targetY = modalTopAbs - safeTop;
      }
      window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
    } else if (e.data.type === 'fly-embed-scroll-to-offset') {
      var rect = iframe.getBoundingClientRect();
      var fallbackY = window.pageYOffset + rect.top + (e.data.offset || 0) - 100;
      window.scrollTo({ top: Math.max(0, fallbackY), behavior: 'smooth' });
    }
  });
})();`;

const checks = [
  { t: "Listing completeness", icon: "📝", grad: "from-indigo-500 to-purple-500" },
  { t: "Category accuracy", icon: "🏷️", grad: "from-purple-500 to-pink-500" },
  { t: "Review velocity", icon: "⭐", grad: "from-amber-500 to-orange-500" },
  { t: "Photo freshness", icon: "📸", grad: "from-pink-500 to-rose-500" },
  { t: "Q&A coverage", icon: "💬", grad: "from-blue-500 to-cyan-500" },
  { t: "Post cadence", icon: "📣", grad: "from-emerald-500 to-teal-500" },
  { t: "NAP consistency", icon: "📍", grad: "from-cyan-500 to-blue-500" },
  { t: "Map-pack signals", icon: "🗺️", grad: "from-rose-500 to-orange-500" },
];

const faqs = [
  {
    q: "Is the audit really free?",
    a: "Yes. No card, no signup. The audit is our way of saying hello — most of our retainer clients started here.",
  },
  {
    q: "How long does it take?",
    a: "Under a minute. We pull live data from your Google Business Profile and run it through our scoring model.",
  },
  {
    q: "What do I do with the report?",
    a: "Fix the issues yourself, or hand it to us and we'll fix them for you. Either way, the report is yours to keep.",
  },
  {
    q: "Is my data stored?",
    a: "We only store what's necessary to generate the report. Nothing is sold, shared, or used for marketing without consent.",
  },
];

export default function GmbAuditPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <EmbedSection />
        <Checks />
        <FAQ />
        <BottomCTA />
      </main>
      <SiteFooter />
      <Script id="fly-embed-gmb-audit-script" strategy="afterInteractive">
        {FLY_EMBED_SCRIPT}
      </Script>
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-bg" aria-hidden />
      <div className="absolute inset-0 dot-grid opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 pt-12 pb-12 md:pt-16 md:pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-foreground"
        >
          <span aria-hidden>←</span> Back to Acme Agency
        </Link>

        <div className="mx-auto mt-8 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-1.5 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur-sm">
            <span aria-hidden>✦</span> AI-powered audit · 100% free
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            The 60-second{" "}
            <span className="gradient-text shimmer-text">GMB audit.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Drop in your business name. We&apos;ll surface exactly where your Google
            Business Profile is leaking rankings, reviews, and clicks — and hand you a
            prioritized fix list.
          </p>

          <div className="mt-7 flex items-center justify-center gap-6 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> No login
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> No card
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500">✓</span> Results in 60s
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmbedSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 pb-16">
        <div className="card relative overflow-hidden p-3 md:p-4">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
          <div className="flex items-center justify-between border-b border-border-soft px-3 pb-3 md:px-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>
            <span className="text-xs font-medium text-muted">
              acmeagency.com / tools / gmb-audit
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-ring" />
              Live
            </span>
          </div>
          <div id="fly-embed-gmb-audit" className="rounded-xl" />
        </div>

        <p className="mt-4 text-center text-xs text-muted">
          Tool not loading? Disable ad-blockers or{" "}
          <Link href="/#contact" className="text-indigo-700 underline-offset-4 hover:underline">
            email us directly
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function Checks() {
  return (
    <section className="relative bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            What we check
          </span>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            Eight signals. <span className="gradient-text">One score.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Each signal is scored 0–10 against benchmarks from 12k+ audits we&apos;ve
            run. The lowest scores become your priority fix list.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {checks.map((c) => (
            <div
              key={c.t}
              className="card group p-5 transition-transform hover:-translate-y-1"
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${c.grad} text-lg text-white shadow-md`}
              >
                {c.icon}
              </div>
              <p className="mt-4 text-base font-semibold tracking-tight">{c.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            FAQ
          </span>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
            The <span className="gradient-text">fine print.</span>
          </h2>
        </div>

        <dl className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="card p-6 md:p-7">
              <dt className="flex items-start gap-3 text-lg font-semibold tracking-tight">
                <span className="gradient-text text-sm font-bold tracking-wider">
                  Q.0{i + 1}
                </span>
                {f.q}
              </dt>
              <dd className="mt-3 pl-12 text-sm leading-relaxed text-muted md:text-base">
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 pb-12">
        <div
          className="relative overflow-hidden rounded-[2rem] p-10 md:p-14"
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
          <div className="relative text-center">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">
              Don&apos;t want to fix it yourself?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80 md:text-lg">
              Hand us the report. We&apos;ll fix every issue and turn your listing into a
              compounding lead engine.
            </p>
            <Link
              href="/#contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
            >
              Talk to Acme Agency <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
