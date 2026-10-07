import { i as e, u as t } from "./ActionLink-DLXSrhX5.js";
import { a as n, i as r, n as i } from "./index-CfZM4pn7.js";
import { i as a, t as o } from "./SectionHeading-Dsjw7xGt.js";
import { s, t as c } from "./sections-CPZt92U8.js";
var l = t();
function u() {
  let t = r.useLoaderData(),
    u = i.filter((e) =>
      e.services.some((e) =>
        e.toLowerCase().startsWith(t.title.toLowerCase().slice(0, 4)),
      ),
    );
  return (0, l.jsxs)(l.Fragment, {
    children: [
      (0, l.jsx)(s, {
        eyebrow: `Service ${t.n}`,
        title: (0, l.jsxs)(l.Fragment, {
          children: [
            t.title,
            (0, l.jsx)(`span`, { className: `text-primary`, children: `.` }),
          ],
        }),
        intro: t.summary,
      }),
      (0, l.jsxs)(`section`, {
        className: `shell section-y grid gap-12 md:grid-cols-12`,
        children: [
          (0, l.jsxs)(`div`, {
            className: `md:col-span-7`,
            children: [
              (0, l.jsxs)(a, {
                children: [
                  (0, l.jsx)(`h2`, {
                    className: `eyebrow text-primary`,
                    children: `What it is`,
                  }),
                  (0, l.jsx)(`p`, {
                    className: `mt-5 text-xl font-medium leading-relaxed`,
                    children: t.what,
                  }),
                ],
              }),
              (0, l.jsxs)(a, {
                delay: 80,
                className: `mt-14`,
                children: [
                  (0, l.jsx)(`h2`, {
                    className: `eyebrow text-primary`,
                    children: `Who it's for`,
                  }),
                  (0, l.jsx)(`p`, {
                    className: `mt-5 text-xl font-medium leading-relaxed`,
                    children: t.who,
                  }),
                ],
              }),
            ],
          }),
          (0, l.jsxs)(`div`, {
            className: `md:col-span-4 md:col-start-9`,
            children: [
              (0, l.jsxs)(a, {
                delay: 120,
                children: [
                  (0, l.jsx)(`h2`, {
                    className: `eyebrow text-muted-foreground`,
                    children: `What we do`,
                  }),
                  (0, l.jsx)(`ul`, {
                    className: `mt-5 space-y-3 text-base font-bold`,
                    children: t.items.map((e) =>
                      (0, l.jsx)(
                        `li`,
                        {
                          className: `border-b border-border pb-3`,
                          children: e,
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              (0, l.jsxs)(a, {
                delay: 180,
                className: `mt-12`,
                children: [
                  (0, l.jsx)(`h2`, {
                    className: `eyebrow text-muted-foreground`,
                    children: `Typical deliverables`,
                  }),
                  (0, l.jsx)(`ul`, {
                    className: `mt-5 space-y-2 text-sm font-medium text-muted-foreground`,
                    children: t.deliverables.map((e) =>
                      (0, l.jsx)(`li`, { children: e }, e),
                    ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      u.length > 0
        ? (0, l.jsx)(`section`, {
            className: `section-y border-t border-border`,
            children: (0, l.jsxs)(`div`, {
              className: `shell`,
              children: [
                (0, l.jsx)(o, { children: `Relevant case studies` }),
                (0, l.jsx)(`div`, {
                  className: `mt-10 grid gap-8 md:grid-cols-2`,
                  children: u
                    .slice(0, 2)
                    .map((t) =>
                      (0, l.jsx)(
                        a,
                        {
                          children: (0, l.jsxs)(e, {
                            to: `/work/$slug`,
                            params: { slug: t.slug },
                            className: `group block overflow-hidden rounded-lg`,
                            children: [
                              (0, l.jsx)(`img`, {
                                src: t.heroImage,
                                alt: t.heroAlt,
                                loading: `lazy`,
                                width: 1440,
                                height: 1088,
                                className: `w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]`,
                              }),
                              (0, l.jsx)(`h3`, {
                                className: `display-md mt-6 transition-colors group-hover:text-primary`,
                                children: t.title,
                              }),
                              (0, l.jsxs)(`p`, {
                                className: `mt-2 text-sm font-medium text-muted-foreground`,
                                children: [t.industry, ` — `, t.result],
                              }),
                            ],
                          }),
                        },
                        t.slug,
                      ),
                    ),
                }),
              ],
            }),
          })
        : null,
      (0, l.jsx)(`section`, {
        className: `section-y border-t border-border`,
        children: (0, l.jsxs)(`div`, {
          className: `shell`,
          children: [
            (0, l.jsx)(o, { children: `All services` }),
            (0, l.jsx)(`div`, {
              className: `mt-8 flex flex-wrap gap-3`,
              children: n
                .filter((e) => e.slug !== t.slug)
                .map((t) =>
                  (0, l.jsx)(
                    e,
                    {
                      to: `/services/$slug`,
                      params: { slug: t.slug },
                      className: `rounded-md border border-border px-4 py-2 text-sm font-bold uppercase tracking-[0.1em] transition-colors hover:border-primary hover:text-primary`,
                      children: t.title,
                    },
                    t.slug,
                  ),
                ),
            }),
          ],
        }),
      }),
      (0, l.jsx)(c, {}),
    ],
  });
}
export { u as component };
