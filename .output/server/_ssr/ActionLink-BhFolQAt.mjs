import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ActionLink-BhFolQAt.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var base =
  "group inline-flex items-center justify-center gap-2 rounded-md font-bold tracking-tight transition-all duration-300 will-change-transform";
var variants = {
  primary:
    "bg-primary text-primary-foreground hover:brightness-105 hover:-translate-y-0.5",
  secondary:
    "border border-foreground/25 text-foreground hover:bg-foreground hover:text-background hover:-translate-y-0.5",
  dark: "bg-ink text-ink-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5",
  light:
    "border border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground hover:text-ink hover:-translate-y-0.5",
};
var sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base md:px-10 md:py-5 md:text-lg",
};
function Arrow({ arrow }) {
  if (arrow === "none") return null;
  const glyph = arrow === "down" ? "↓" : arrow === "right" ? "→" : "↗";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
    "aria-hidden": true,
    className: cn(
      "inline-block transition-transform duration-300",
      arrow === "down"
        ? "group-hover:translate-y-1"
        : arrow === "right"
          ? "group-hover:translate-x-1"
          : "group-hover:translate-x-1 group-hover:-translate-y-1",
    ),
    children: glyph,
  });
}
function ActionLink({
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
}) {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    disabled && "opacity-60",
    className,
  );
  const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { arrow }),
      ],
    },
  );
  if (to)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
      to,
      className: classes,
      onClick,
      children: content,
    });
  if (href)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
      href,
      className: classes,
      onClick,
      children: content,
    });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    type,
    className: classes,
    onClick,
    disabled,
    children: content,
  });
}
function TextLink({ to, children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
    to,
    className: cn(
      "group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] transition-colors hover:text-primary",
      className,
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
        className: "link-line",
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "link-line-inner group-hover:scale-x-100",
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        "aria-hidden": true,
        className:
          "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
        children: "↗",
      }),
    ],
  });
}
//#endregion
export { TextLink as n, cn as r, ActionLink as t };
