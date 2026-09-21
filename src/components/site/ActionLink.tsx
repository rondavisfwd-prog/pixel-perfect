import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "dark" | "light";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-md font-bold tracking-tight transition-all duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:brightness-105 hover:-translate-y-0.5",
  secondary:
    "border border-foreground/25 text-foreground hover:bg-foreground hover:text-background hover:-translate-y-0.5",
  dark: "bg-ink text-ink-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5",
  light:
    "border border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground hover:text-ink hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base md:px-10 md:py-5 md:text-lg",
};

type Props = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: "diagonal" | "down" | "right" | "none";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

function Arrow({ arrow }: { arrow: Props["arrow"] }) {
  if (arrow === "none") return null;
  const glyph = arrow === "down" ? "↓" : arrow === "right" ? "→" : "↗";
  const move =
    arrow === "down"
      ? "group-hover:translate-y-1"
      : arrow === "right"
        ? "group-hover:translate-x-1"
        : "group-hover:translate-x-1 group-hover:-translate-y-1";
  return (
    <span aria-hidden className={cn("inline-block transition-transform duration-300", move)}>
      {glyph}
    </span>
  );
}

export function ActionLink({
  to,
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = "diagonal",
  className,
  onClick,
  type = "button",
  disabled,
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], disabled && "opacity-60", className);
  const content = (
    <>
      <span>{children}</span>
      <Arrow arrow={arrow} />
    </>
  );

  if (to) {
    return (
      <Link to={to as never} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}

export function TextLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to as never}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] transition-colors hover:text-primary",
        className,
      )}
    >
      <span className="link-line">
        {children}
        <span className="link-line-inner group-hover:scale-x-100" />
      </span>
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </Link>
  );
}
