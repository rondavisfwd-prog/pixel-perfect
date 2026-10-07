import { J as e, K as t, t as n, u as r } from "./ActionLink-DLXSrhX5.js";
import {
  c as i,
  d as a,
  f as o,
  i as s,
  l as c,
  m as l,
  n as u,
  o as d,
  p as f,
  r as p,
  t as m,
} from "./sections-CPZt92U8.js";
var h = e(t(), 1),
  g = r();
function _() {
  let [e, t] = (0, h.useState)({ x: 0, y: 0 }),
    r = (0, h.useRef)(null);
  return (
    (0, h.useEffect)(() => {
      if (
        window.matchMedia(`(prefers-reduced-motion: reduce)`).matches ||
        window.matchMedia(`(hover: none)`).matches
      )
        return;
      let e = (e) => {
        (r.current && cancelAnimationFrame(r.current),
          (r.current = requestAnimationFrame(() => {
            let n = (e.clientX / window.innerWidth - 0.5) * 2,
              r = (e.clientY / window.innerHeight - 0.5) * 2;
            t({ x: n, y: r });
          })));
      };
      return (
        window.addEventListener(`pointermove`, e),
        () => {
          (window.removeEventListener(`pointermove`, e),
            r.current && cancelAnimationFrame(r.current));
        }
      );
    }, []),
    (0, g.jsxs)(`section`, {
      className: `relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48`,
      children: [
        (0, g.jsx)(`div`, {
          "aria-hidden": !0,
          className: `pointer-events-none absolute right-[4vw] top-32 hidden w-[26vw] max-w-[380px] md:block`,
          style: {
            transform: `translate3d(${e.x * 26}px, ${e.y * 26}px, 0)`,
            transition: `transform 700ms cubic-bezier(0.16,1,0.3,1)`,
          },
          children: (0, g.jsx)(`div`, {
            className: `float-slow aspect-square w-full rounded-full blur-[2px]`,
            style: {
              background: `radial-gradient(circle at 34% 28%, oklch(0.86 0.09 349) 0%, oklch(0.72 0.20 349) 42%, oklch(0.62 0.25 349.5) 78%, oklch(0.55 0.23 349.5) 100%)`,
            },
          }),
        }),
        (0, g.jsxs)(`div`, {
          className: `shell relative`,
          children: [
            (0, g.jsxs)(`p`, {
              className: `eyebrow text-muted-foreground`,
              children: [
                (0, g.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `mr-3 inline-block h-2 w-2 bg-primary`,
                }),
                `Strategy · Creative · Growth`,
              ],
            }),
            (0, g.jsxs)(`h1`, {
              className: `display-hero mt-8 max-w-[16ch]`,
              children: [
                `DIGITAL`,
                (0, g.jsx)(`br`, {}),
                `LOOKS BETTER`,
                (0, g.jsx)(`br`, {}),
                `IN `,
                (0, g.jsx)(`span`, {
                  className: `text-primary`,
                  children: `PINK.`,
                }),
              ],
            }),
            (0, g.jsxs)(`div`, {
              className: `mt-12 grid gap-10 md:grid-cols-12 md:items-end`,
              children: [
                (0, g.jsx)(`p`, {
                  className: `lead max-w-xl md:col-span-6`,
                  children: `Strategy, creative and growth for ambitious brands ready to be noticed.`,
                }),
                (0, g.jsxs)(`div`, {
                  className: `flex flex-wrap items-center gap-4 md:col-span-6 md:justify-end`,
                  children: [
                    (0, g.jsx)(n, {
                      to: `/contact`,
                      size: `lg`,
                      children: `Start a Project`,
                    }),
                    (0, g.jsx)(n, {
                      href: `#work`,
                      variant: `secondary`,
                      size: `lg`,
                      arrow: `down`,
                      children: `See Our Work`,
                    }),
                  ],
                }),
              ],
            }),
            (0, g.jsx)(`p`, {
              className: `eyebrow mt-16 text-muted-foreground`,
              children: `US · Canada · UK`,
            }),
          ],
        }),
      ],
    })
  );
}
function v() {
  return (0, g.jsxs)(g.Fragment, {
    children: [
      (0, g.jsx)(_, {}),
      (0, g.jsx)(s, {}),
      (0, g.jsx)(i, {}),
      (0, g.jsx)(o, {}),
      (0, g.jsx)(`div`, {
        id: `work`,
        className: `scroll-mt-24`,
        children: (0, g.jsx)(a, {}),
      }),
      (0, g.jsx)(l, {}),
      (0, g.jsx)(c, {}),
      (0, g.jsx)(d, {}),
      (0, g.jsx)(f, {}),
      (0, g.jsx)(u, {}),
      (0, g.jsx)(p, {}),
      (0, g.jsx)(m, {}),
    ],
  });
}
export { v as component };
