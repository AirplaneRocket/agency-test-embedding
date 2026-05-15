import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Free GMB Audit Tool — NORTHWIRE",
  description:
    "Run a free Google Business Profile audit in 60 seconds. See exactly where your local listing is losing rankings, reviews, and clicks — and how to fix it.",
};

const FLY_EMBED_SCRIPT = `(function() {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.fly-social.com/embed/acme-agency/gmb-audit';
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
  "Listing completeness",
  "Category accuracy",
  "Review velocity & sentiment",
  "Photo freshness",
  "Q&A coverage",
  "Post cadence",
  "NAP consistency",
  "Map-pack ranking signals",
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
    <section className="relative border-b-2 border-line">
      <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-12 md:pt-20 md:pb-16">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground"
        >
          ← Back to NORTHWIRE
        </Link>

        <div className="mt-8 flex items-center gap-3">
          <span className="h-2 w-2 bg-accent" />
          <span className="eyebrow">Tool · Free · No login</span>
        </div>

        <h1 className="mt-6 font-serif text-[clamp(2.75rem,8vw,7rem)] leading-[0.95] tracking-tight">
          The 60-second
          <br />
          <span className="bg-accent px-2 italic">GMB</span> audit.
        </h1>

        <div className="mt-10 grid gap-12 md:grid-cols-[1.6fr_1fr] md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-foreground/80">
            Drop in your business name. We&apos;ll surface exactly where your Google
            Business Profile is leaking rankings, reviews, and clicks — and hand you a
            prioritized fix list.
          </p>
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center border-2 border-line bg-background font-mono text-sm font-semibold">
                01
              </span>
              <span className="grid h-10 w-10 place-items-center border-2 border-line bg-background font-mono text-sm font-semibold">
                02
              </span>
              <span className="grid h-10 w-10 place-items-center border-2 border-line bg-accent font-mono text-sm font-semibold">
                03
              </span>
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/60">
              Type → Scan → Fix list. That&apos;s it.
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
        TOOL · GMB-AUDIT
      </span>
      <span className="pointer-events-none absolute right-4 top-4 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
        v1.4
      </span>
    </>
  );
}

function EmbedSection() {
  return (
    <section className="border-b-2 border-line bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
          <p className="eyebrow text-foreground/60">§ Live tool</p>
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
            Powered by Fly Social
          </p>
        </div>

        <div className="border-2 border-line bg-background p-2 md:p-4">
          <div id="fly-embed-gmb-audit" />
        </div>

        <p className="mt-4 text-center font-mono text-xs uppercase tracking-widest text-foreground/50">
          Tool not loading? Disable ad-blockers or{" "}
          <Link href="#contact" className="underline underline-offset-2">
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
    <section className="border-b-2 border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-foreground/60">§ What we check</p>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl leading-[0.95] tracking-tight">
              Eight signals.
              <br />
              <span className="italic">One score.</span>
            </h2>
          </div>
          <p className="hidden max-w-sm text-foreground/70 md:block">
            Each signal is scored 0–10 against benchmarks from 12k+ audits we&apos;ve run.
            The lowest scores become your priority fix list.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 border-2 border-line md:grid-cols-2 lg:grid-cols-4">
          {checks.map((c, i) => (
            <li
              key={c}
              className={`flex items-start gap-4 p-6 ${
                i % 4 !== 3 ? "lg:border-r-2 lg:border-line" : ""
              } ${i % 2 !== 1 ? "md:border-r-2 md:border-line" : ""} ${
                i < checks.length - 1 ? "border-b-2 border-line" : ""
              } ${
                i >= checks.length - 4 ? "lg:border-b-0" : ""
              } ${
                i >= checks.length - 2 ? "md:border-b-0" : ""
              }`}
            >
              <span className="font-mono text-xs text-foreground/50 mt-1">
                /{String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-2xl tracking-tight">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="border-b-2 border-line">
      <div className="mx-auto max-w-[1400px] px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow text-foreground/60">§ FAQ</p>
            <h2 className="mt-3 font-serif text-4xl md:text-6xl leading-[0.95] tracking-tight">
              The fine
              <br />
              <span className="italic">print.</span>
            </h2>
          </div>

          <dl className="border-t-2 border-line">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="grid grid-cols-[40px_1fr] gap-6 border-b-2 border-line py-6"
              >
                <dt className="font-mono text-xs text-foreground/50">
                  /{String(i + 1).padStart(2, "0")}
                </dt>
                <div>
                  <p className="font-serif text-2xl tracking-tight">{f.q}</p>
                  <p className="mt-3 text-foreground/80">{f.a}</p>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
