import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="eyebrow text-ink-foreground/50">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm font-medium text-ink-foreground/85">{children}</ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="display-lg leading-[0.9]">
              THE
              <br />
              <span className="text-primary">PINK</span>
              <br />
              DIGITAL
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block text-base font-bold underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary"
            >
              {site.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
            <Column title="Explore">
              {[...site.nav, { label: "Contact", to: "/contact" }].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </Column>
            <Column title="Social">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-primary"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </Column>
            <Column title="Markets">
              {site.markets.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </Column>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ink-foreground/15 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="eyebrow text-primary">{site.tagline}</p>
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-ink-foreground/55">
            <Link to="/privacy" className="hover:text-ink-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-ink-foreground">
              Terms
            </Link>
            <span>© 2026 The Pink Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
