import { n as e, u as t } from "./ActionLink-DLXSrhX5.js";
import { a as n } from "./index-CfZM4pn7.js";
import { i as r } from "./SectionHeading-Dsjw7xGt.js";
import { l as i, s as a, t as o } from "./sections-CPZt92U8.js";
var s = t();
function c() {
  return (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(a, {
        eyebrow: `Services`,
        title: (0, s.jsxs)(s.Fragment, {
          children: [
            `One agency.`,
            (0, s.jsx)(`br`, {}),
            (0, s.jsx)(`span`, {
              className: `text-primary`,
              children: `The whole digital picture.`,
            }),
          ],
        }),
        intro: `Six disciplines that work better together than they ever do apart.`,
      }),
      (0, s.jsx)(`section`, {
        className: `section-y`,
        children: (0, s.jsx)(`div`, {
          className: `shell border-t border-border`,
          children: n.map((t, n) =>
            (0, s.jsx)(
              r,
              {
                delay: n * 50,
                children: (0, s.jsxs)(`article`, {
                  className: `grid gap-8 border-b border-border py-12 md:grid-cols-12 md:gap-10 md:py-16`,
                  children: [
                    (0, s.jsxs)(`div`, {
                      className: `md:col-span-4`,
                      children: [
                        (0, s.jsx)(`p`, {
                          className: `eyebrow text-primary`,
                          children: t.n,
                        }),
                        (0, s.jsx)(`h2`, {
                          className: `display-lg mt-5 uppercase`,
                          children: t.title,
                        }),
                        (0, s.jsx)(`p`, {
                          className: `mt-5 max-w-sm text-sm font-medium text-muted-foreground`,
                          children: t.summary,
                        }),
                        (0, s.jsx)(`div`, {
                          className: `mt-8`,
                          children: (0, s.jsxs)(e, {
                            to: `/services/${t.slug}`,
                            children: [`Explore `, t.title],
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsxs)(`div`, {
                      className: `grid gap-8 md:col-span-8 md:grid-cols-2`,
                      children: [
                        (0, s.jsxs)(`div`, {
                          children: [
                            (0, s.jsx)(`h3`, {
                              className: `eyebrow text-muted-foreground`,
                              children: `What we do`,
                            }),
                            (0, s.jsx)(`ul`, {
                              className: `mt-4 space-y-2 text-sm font-semibold`,
                              children: t.items.map((e) =>
                                (0, s.jsxs)(
                                  `li`,
                                  {
                                    className: `flex items-center gap-3`,
                                    children: [
                                      (0, s.jsx)(`span`, {
                                        "aria-hidden": !0,
                                        className: `h-1 w-1 bg-primary`,
                                      }),
                                      e,
                                    ],
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, s.jsxs)(`div`, {
                          children: [
                            (0, s.jsx)(`h3`, {
                              className: `eyebrow text-muted-foreground`,
                              children: `Typical deliverables`,
                            }),
                            (0, s.jsx)(`ul`, {
                              className: `mt-4 space-y-2 text-sm font-medium text-muted-foreground`,
                              children: t.deliverables.map((e) =>
                                (0, s.jsx)(`li`, { children: e }, e),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              },
              t.slug,
            ),
          ),
        }),
      }),
      (0, s.jsx)(i, {}),
      (0, s.jsx)(o, {}),
    ],
  });
}
export { c as component };
