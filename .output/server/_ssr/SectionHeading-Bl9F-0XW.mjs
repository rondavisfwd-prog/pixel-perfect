import { n as __toESM } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { r as cn } from "./ActionLink-BhFolQAt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-Bl9F-0XW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, as: Tag = "div", delay = 0, className }) {
  const ref = (0, import_react.useRef)(null);
  const [shown, setShown] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
    ref,
    style: { "--reveal-delay": `${delay}ms` },
    className: cn("reveal", shown && "reveal-in", className),
    children,
  });
}
function Eyebrow({ children, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
    className: cn(
      "eyebrow flex items-center gap-3 text-muted-foreground",
      className,
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        "aria-hidden": true,
        className: "inline-block h-2 w-2 bg-primary",
      }),
      children,
    ],
  });
}
function SectionHeading({ eyebrow, title, intro, aside, className, invert }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: cn(
      "grid gap-8 md:grid-cols-12 md:items-end",
      invert && "[&_.eyebrow]:text-ink-foreground/60",
      className,
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "md:col-span-8",
        children: [
          eyebrow
            ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
                  children: eyebrow,
                }),
              })
            : null,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
            delay: 80,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
              className: cn("display-xl mt-6", invert && "text-ink-foreground"),
              children: title,
            }),
          }),
        ],
      }),
      intro || aside
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
            delay: 160,
            className: "md:col-span-4",
            children: [
              intro
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: cn("lead", invert && "text-ink-foreground/70"),
                    children: intro,
                  })
                : null,
              aside
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "mt-6",
                    children: aside,
                  })
                : null,
            ],
          })
        : null,
    ],
  });
}
function Pink({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
    className: "text-primary",
    children,
  });
}
//#endregion
export { SectionHeading as i, Pink as n, Reveal as r, Eyebrow as t };
