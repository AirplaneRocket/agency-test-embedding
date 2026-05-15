import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t-2 border-line bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center bg-accent text-foreground font-mono text-sm font-bold">
                N
              </span>
              <span className="font-mono text-base font-semibold tracking-tight">
                NORTHWIRE
                <span className="text-accent">/</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm font-serif text-2xl leading-tight">
              We build marketing engines for ambitious brands.
            </p>
            <p className="mt-4 text-sm text-background/60">
              Headquartered in Brooklyn. Clients everywhere.
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

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-background/15 pt-6 md:flex-row md:items-center">
          <p className="font-mono text-xs uppercase tracking-wider text-background/50">
            © {new Date().getFullYear()} NORTHWIRE LLC — All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-background/50">
            Made in <span className="text-accent">/</span> NYC
          </p>
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
      <h4 className="eyebrow text-background/60">{title}</h4>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm hover:text-accent hover:underline underline-offset-4"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
