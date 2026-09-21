import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { ActionLink } from "./ActionLink";

function Wordmark({ onClick, large }: { onClick?: () => void; large?: boolean }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="The Pink Digital — home"
      className={cn(
        "font-extrabold leading-none tracking-[-0.04em]",
        large ? "text-3xl" : "text-base sm:text-lg",
      )}
    >
      THE<span className="text-primary">PINK</span>DIGITAL
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-4",
        )}
      >
        <div className="shell">
          <div
            className={cn(
              "flex items-center justify-between gap-6 transition-all duration-500",
              scrolled
                ? "rounded-full border border-border bg-background/80 px-5 py-3 backdrop-blur-xl"
                : "px-0 py-2",
            )}
          >
            <Wordmark />

            <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
              {site.nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "eyebrow group transition-colors hover:text-primary",
                    pathname.startsWith(item.to) ? "text-primary" : "text-foreground",
                  )}
                >
                  <span className="link-line">
                    {item.label}
                    <span className="link-line-inner group-hover:scale-x-100" />
                  </span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <ActionLink to="/contact" className="hidden md:inline-flex">
                Start a Project
              </ActionLink>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="eyebrow flex items-center gap-2 md:hidden"
              >
                Menu
                <span aria-hidden className="flex flex-col gap-[3px]">
                  <span className="block h-[2px] w-5 bg-primary" />
                  <span className="block h-[2px] w-5 bg-foreground" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-ink text-ink-foreground transition-[clip-path,opacity] duration-500 md:hidden",
          open
            ? "pointer-events-auto opacity-100 [clip-path:circle(150%_at_90%_5%)]"
            : "pointer-events-none opacity-0 [clip-path:circle(0%_at_90%_5%)]",
        )}
      >
        <div className="shell flex items-center justify-between py-6">
          <span className="text-base font-extrabold tracking-[-0.04em]">
            THE<span className="text-primary">PINK</span>DIGITAL
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="eyebrow text-ink-foreground/70 hover:text-primary"
          >
            Close ✕
          </button>
        </div>
        <nav aria-label="Mobile" className="shell flex flex-1 flex-col justify-center gap-2">
          {[...site.nav, { label: "Contact", to: "/contact" }].map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="display-lg border-b border-ink-foreground/15 py-4 transition-colors hover:text-primary"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="shell pb-10">
          <ActionLink to="/contact" size="lg" className="w-full" onClick={() => setOpen(false)}>
            Start a Project
          </ActionLink>
          <p className="eyebrow mt-6 text-ink-foreground/50">US · Canada · UK</p>
        </div>
      </div>
    </>
  );
}
