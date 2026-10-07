import { i as e, u as t } from "./ActionLink-DLXSrhX5.js";
import { o as n, s as r } from "./index-CfZM4pn7.js";
import { i, t as a } from "./SectionHeading-Dsjw7xGt.js";
import { t as o } from "./sections-CPZt92U8.js";
var s = t();
function c() {
  let t = n.useLoaderData(),
    c = r.filter((e) => e.slug !== t.slug);
  return (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsxs)(`article`, {
        children: [
          (0, s.jsx)(`header`, {
            className: `border-b border-border pb-14 pt-36 md:pt-48`,
            children: (0, s.jsxs)(`div`, {
              className: `shell`,
              children: [
                (0, s.jsx)(i, {
                  children: (0, s.jsx)(a, { children: t.category }),
                }),
                (0, s.jsx)(i, {
                  delay: 80,
                  children: (0, s.jsx)(`h1`, {
                    className: `display-xl mt-8 max-w-4xl`,
                    children: t.title,
                  }),
                }),
                (0, s.jsx)(i, {
                  delay: 140,
                  children: (0, s.jsxs)(`p`, {
                    className: `eyebrow mt-10 text-muted-foreground`,
                    children: [t.date, ` · `, t.read],
                  }),
                }),
              ],
            }),
          }),
          (0, s.jsx)(`div`, {
            className: `shell py-16 md:py-24`,
            children: (0, s.jsx)(`div`, {
              className: `max-w-3xl space-y-7 text-lg font-medium leading-relaxed md:text-xl`,
              children: t.body.map((e) =>
                (0, s.jsx)(`p`, { children: e }, e.slice(0, 24)),
              ),
            }),
          }),
        ],
      }),
      (0, s.jsx)(`section`, {
        className: `border-t border-border py-16`,
        children: (0, s.jsxs)(`div`, {
          className: `shell`,
          children: [
            (0, s.jsx)(a, { children: `Keep reading` }),
            (0, s.jsx)(`div`, {
              className: `mt-8 border-t border-border`,
              children: c.map((t) =>
                (0, s.jsxs)(
                  e,
                  {
                    to: `/insights/$slug`,
                    params: { slug: t.slug },
                    className: `group flex flex-col gap-2 border-b border-border py-7 md:flex-row md:items-baseline md:justify-between`,
                    children: [
                      (0, s.jsx)(`h3`, {
                        className: `display-md transition-colors group-hover:text-primary`,
                        children: t.title,
                      }),
                      (0, s.jsxs)(`span`, {
                        className: `text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground`,
                        children: [t.category, ` · `, t.read],
                      }),
                    ],
                  },
                  t.slug,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, s.jsx)(o, {}),
    ],
  });
}
export { c as component };
