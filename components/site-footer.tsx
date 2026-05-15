import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border-soft bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-xl text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 55%, #ec4899 100%)",
                }}
              >
                <span className="text-sm font-bold">A</span>
              </span>
              <span className="text-base font-semibold tracking-tight">
                Acme Agency
              </span>
            </div>
            <p className="mt-6 max-w-sm text-xl leading-snug text-foreground">
              AI-powered growth engines for{" "}
              <span className="gradient-text font-semibold">ambitious brands</span>.
            </p>
            <p className="mt-4 text-sm text-muted">
              Brooklyn, NY · Working with teams worldwide.
            </p>
          </div>

          <FooterCol
            title="Services"
            links={[
              { href: "#", label: "SEO" },
              { href: "#", label: "Paid Media" },
              { href: "#", label: "Content" },
              { href: "#", label: "CRO" },
              { href: "#", label: "Lifecycle" },
            ]}
          />
          <FooterCol
            title="Tools"
            links={[
              { href: "/tools/gmb-audit", label: "GMB Audit" },
              { href: "#", label: "SEO Snapshot" },
              { href: "#", label: "Ad Spend Calc" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "#", label: "About" },
              { href: "#", label: "Careers" },
              { href: "#", label: "Journal" },
              { href: "#", label: "Contact" },
            ]}
          />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border-soft pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Acme Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-xs text-muted hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-muted hover:text-foreground">
              Terms
            </Link>
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-foreground/80 hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
