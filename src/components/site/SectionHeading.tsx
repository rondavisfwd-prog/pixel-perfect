import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("eyebrow flex items-center gap-3 text-muted-foreground", className)}>
      <span aria-hidden className="inline-block h-2 w-2 bg-primary" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  aside,
  className,
  invert,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid gap-8 md:grid-cols-12 md:items-end",
        invert && "[&_.eyebrow]:text-ink-foreground/60",
        className,
      )}
    >
      <div className="md:col-span-8">
        {eyebrow ? (
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        ) : null}
        <Reveal delay={80}>
          <h2 className={cn("display-xl mt-6", invert && "text-ink-foreground")}>{title}</h2>
        </Reveal>
      </div>
      {intro || aside ? (
        <Reveal delay={160} className="md:col-span-4">
          {intro ? (
            <p className={cn("lead", invert && "text-ink-foreground/70")}>{intro}</p>
          ) : null}
          {aside ? <div className="mt-6">{aside}</div> : null}
        </Reveal>
      ) : null}
    </div>
  );
}

export function Pink({ children }: { children: ReactNode }) {
  return <span className="text-primary">{children}</span>;
}
