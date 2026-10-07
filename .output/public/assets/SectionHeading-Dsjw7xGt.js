import { J as e, K as t, r as n, u as r } from "./ActionLink-DLXSrhX5.js";
var i = e(t(), 1),
  a = r();
function o({ children: e, as: t = `div`, delay: r = 0, className: o }) {
  let s = (0, i.useRef)(null),
    [c, l] = (0, i.useState)(!1);
  return (
    (0, i.useEffect)(() => {
      let e = s.current;
      if (!e) return;
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
        l(!0);
        return;
      }
      let t = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            e.isIntersecting && (l(!0), t.disconnect());
          });
        },
        { threshold: 0.15, rootMargin: `0px 0px -8% 0px` },
      );
      return (t.observe(e), () => t.disconnect());
    }, []),
    (0, a.jsx)(t, {
      ref: s,
      style: { "--reveal-delay": `${r}ms` },
      className: n(`reveal`, c && `reveal-in`, o),
      children: e,
    })
  );
}
function s({ children: e, className: t }) {
  return (0, a.jsxs)(`span`, {
    className: n(`eyebrow flex items-center gap-3 text-muted-foreground`, t),
    children: [
      (0, a.jsx)(`span`, {
        "aria-hidden": !0,
        className: `inline-block h-2 w-2 bg-primary`,
      }),
      e,
    ],
  });
}
function c({
  eyebrow: e,
  title: t,
  intro: r,
  aside: i,
  className: c,
  invert: l,
}) {
  return (0, a.jsxs)(`div`, {
    className: n(
      `grid gap-8 md:grid-cols-12 md:items-end`,
      l && `[&_.eyebrow]:text-ink-foreground/60`,
      c,
    ),
    children: [
      (0, a.jsxs)(`div`, {
        className: `md:col-span-8`,
        children: [
          e
            ? (0, a.jsx)(o, { children: (0, a.jsx)(s, { children: e }) })
            : null,
          (0, a.jsx)(o, {
            delay: 80,
            children: (0, a.jsx)(`h2`, {
              className: n(`display-xl mt-6`, l && `text-ink-foreground`),
              children: t,
            }),
          }),
        ],
      }),
      r || i
        ? (0, a.jsxs)(o, {
            delay: 160,
            className: `md:col-span-4`,
            children: [
              r
                ? (0, a.jsx)(`p`, {
                    className: n(`lead`, l && `text-ink-foreground/70`),
                    children: r,
                  })
                : null,
              i ? (0, a.jsx)(`div`, { className: `mt-6`, children: i }) : null,
            ],
          })
        : null,
    ],
  });
}
function l({ children: e }) {
  return (0, a.jsx)(`span`, { className: `text-primary`, children: e });
}
export { o as i, l as n, c as r, s as t };
