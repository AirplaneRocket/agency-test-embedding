import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-line bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center bg-foreground text-background font-mono text-xs font-bold">
            N
          </span>
          <span className="font-mono text-sm font-semibold tracking-tight">
            NORTHWIRE<span className="text-accent">/</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#services"
            className="text-sm hover:underline underline-offset-4"
          >
            Services
          </Link>
          <Link
            href="/#work"
            className="text-sm hover:underline underline-offset-4"
          >
            Work
          </Link>
          <Link
            href="/#process"
            className="text-sm hover:underline underline-offset-4"
          >
            Process
          </Link>
          <Link
            href="/tools/gmb-audit"
            className="border-2 border-line bg-accent px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider hover:-translate-y-0.5 transition-transform"
          >
            Free GMB Audit →
          </Link>
        </nav>

        <Link
          href="#contact"
          className="hidden md:inline-flex border-2 border-line bg-foreground px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-background hover:-translate-y-0.5 transition-transform"
        >
          Book a call
        </Link>
      </div>
    </header>
  );
}
