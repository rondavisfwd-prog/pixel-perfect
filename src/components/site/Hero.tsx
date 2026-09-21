import { useEffect, useRef, useState } from "react";
import sphere from "@/assets/abstract-sphere.jpg";
import { ActionLink } from "./ActionLink";

export function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: PointerEvent) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setOffset({ x, y });
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[4vw] top-32 hidden w-[26vw] max-w-[380px] md:block"
        style={{
          transform: `translate3d(${offset.x * 26}px, ${offset.y * 26}px, 0)`,
          transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          className="float-slow aspect-square w-full rounded-full blur-[2px]"
          style={{
            background:
              "radial-gradient(circle at 34% 28%, oklch(0.86 0.09 349) 0%, oklch(0.72 0.20 349) 42%, oklch(0.62 0.25 349.5) 78%, oklch(0.55 0.23 349.5) 100%)",
          }}
        />
      </div>

      <div className="shell relative">
        <p className="eyebrow text-muted-foreground">
          <span aria-hidden className="mr-3 inline-block h-2 w-2 bg-primary" />
          Strategy · Creative · Growth
        </p>

        <h1 className="display-hero mt-8 max-w-[16ch]">
          DIGITAL
          <br />
          LOOKS BETTER
          <br />
          IN <span className="text-primary">PINK.</span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
          <p className="lead max-w-xl md:col-span-6">
            Strategy, creative and growth for ambitious brands ready to be noticed.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:col-span-6 md:justify-end">
            <ActionLink to="/contact" size="lg">
              Start a Project
            </ActionLink>
            <ActionLink href="#work" variant="secondary" size="lg" arrow="down">
              See Our Work
            </ActionLink>
          </div>
        </div>

        <p className="eyebrow mt-16 text-muted-foreground">US · Canada · UK</p>
      </div>
    </section>
  );
}
