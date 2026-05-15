import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="text-base font-semibold tracking-tight text-foreground">
            Acme Agency
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#services"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#work"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Work
          </Link>
          <Link
            href="/#process"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Process
          </Link>
          <Link
            href="/#pricing"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/tools/gmb-audit"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-indigo/40 hover:shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-ring" />
            Free GMB Audit
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Book a call
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <span
      aria-hidden
      className="relative grid h-8 w-8 place-items-center rounded-xl text-white"
      style={{
        background:
          "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 55%, #ec4899 100%)",
      }}
    >
      <span className="text-sm font-bold">A</span>
      <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-emerald-400" />
    </span>
  );
}
