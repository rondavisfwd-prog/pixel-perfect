import { i as e, n as t, u as n } from "./ActionLink-DLXSrhX5.js";
import { n as r, t as i } from "./index-CfZM4pn7.js";
import { i as a, t as o } from "./SectionHeading-Dsjw7xGt.js";
import { a as s, t as c } from "./sections-CPZt92U8.js";
var l = n();
function u({ project: e }) {
  let t = [
    [`Client`, e.title],
    [`Industry`, e.industry],
    [`Services`, e.services.join(` · `)],
    [`Year`, e.year],
  ];
  return (0, l.jsx)(`dl`, {
    className: `grid gap-8 sm:grid-cols-4`,
    children: t.map(([e, t]) =>
      (0, l.jsxs)(
        `div`,
        {
          children: [
            (0, l.jsx)(`dt`, {
              className: `eyebrow text-muted-foreground`,
              children: e,
            }),
            (0, l.jsx)(`dd`, {
              className: `mt-3 text-base font-bold`,
              children: t,
            }),
          ],
        },
        e,
      ),
    ),
  });
}
function d({ title: e, body: t }) {
  return (0, l.jsxs)(a, {
    className: `grid gap-4 border-t border-border py-10 md:grid-cols-12 md:gap-10`,
    children: [
      (0, l.jsx)(`h2`, {
        className: `eyebrow text-primary md:col-span-3`,
        children: e,
      }),
      (0, l.jsx)(`p`, {
        className: `text-lg font-medium leading-relaxed md:col-span-8`,
        children: t,
      }),
    ],
  });
}
function f() {
  let n = i.useLoaderData(),
    f = r.findIndex((e) => e.slug === n.slug),
    p = r[(f + 1) % r.length];
  return (0, l.jsxs)(l.Fragment, {
    children: [
      (0, l.jsxs)(`header`, {
        className: `pt-36 md:pt-48`,
        children: [
          (0, l.jsxs)(`div`, {
            className: `shell`,
            children: [
              (0, l.jsx)(a, {
                children: (0, l.jsx)(o, { children: `Case study` }),
              }),
              (0, l.jsx)(a, {
                delay: 80,
                children: (0, l.jsx)(`h1`, {
                  className: `display-hero mt-8`,
                  children: n.title,
                }),
              }),
              (0, l.jsx)(a, {
                delay: 140,
                children: (0, l.jsx)(`p`, {
                  className: `lead mt-8 max-w-2xl`,
                  children: n.headline,
                }),
              }),
            ],
          }),
          (0, l.jsx)(a, {
            delay: 200,
            className: `mt-14`,
            children: (0, l.jsx)(`img`, {
              src: n.heroImage,
              alt: n.heroAlt,
              width: 1440,
              height: 1088,
              className: `h-[46vh] w-full object-cover md:h-[72vh]`,
            }),
          }),
        ],
      }),
      (0, l.jsx)(`section`, {
        className: `shell py-14 md:py-20`,
        children: (0, l.jsx)(u, { project: n }),
      }),
      (0, l.jsxs)(`section`, {
        className: `shell`,
        children: [
          (0, l.jsx)(d, { title: `Challenge`, body: n.challenge }),
          (0, l.jsx)(d, { title: `Strategy`, body: n.strategy }),
          (0, l.jsx)(d, { title: `Creative direction`, body: n.creative }),
          (0, l.jsx)(d, { title: `Execution`, body: n.execution }),
        ],
      }),
      (0, l.jsx)(`section`, {
        className: `shell mt-8 grid gap-6 md:grid-cols-2`,
        children: n.gallery.map((e) =>
          (0, l.jsx)(
            a,
            {
              children: (0, l.jsx)(`img`, {
                src: e.src,
                alt: e.alt,
                loading: `lazy`,
                width: 1440,
                height: 1088,
                className: `w-full rounded-lg object-cover`,
              }),
            },
            e.src,
          ),
        ),
      }),
      (0, l.jsxs)(`section`, {
        className: `shell mt-16 md:mt-24`,
        children: [
          (0, l.jsx)(o, { children: `Results` }),
          (0, l.jsx)(`div`, {
            className: `mt-8`,
            children: (0, l.jsx)(s, { items: n.results }),
          }),
        ],
      }),
      (0, l.jsx)(`section`, {
        className: `bg-ink text-ink-foreground`,
        children: (0, l.jsx)(`div`, {
          className: `shell section-y`,
          children: (0, l.jsx)(a, {
            children: (0, l.jsxs)(`blockquote`, {
              children: [
                (0, l.jsxs)(`p`, {
                  className: `display-lg max-w-4xl`,
                  children: [
                    (0, l.jsx)(`span`, {
                      className: `text-primary`,
                      children: `"`,
                    }),
                    n.testimonial.quote,
                    (0, l.jsx)(`span`, {
                      className: `text-primary`,
                      children: `"`,
                    }),
                  ],
                }),
                (0, l.jsxs)(`footer`, {
                  className: `mt-8 text-sm font-bold uppercase tracking-[0.14em]`,
                  children: [
                    n.testimonial.name,
                    (0, l.jsx)(`span`, {
                      className: `ml-3 font-medium normal-case tracking-normal text-ink-foreground/60`,
                      children: n.testimonial.role,
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
      (0, l.jsx)(`section`, {
        className: `section-y`,
        children: (0, l.jsxs)(`div`, {
          className: `shell`,
          children: [
            (0, l.jsx)(o, { children: `Next project` }),
            (0, l.jsxs)(e, {
              to: `/work/$slug`,
              params: { slug: p.slug },
              className: `group mt-8 grid items-center gap-8 md:grid-cols-12`,
              children: [
                (0, l.jsx)(`figure`, {
                  className: `overflow-hidden rounded-lg md:col-span-7`,
                  children: (0, l.jsx)(`img`, {
                    src: p.heroImage,
                    alt: p.heroAlt,
                    loading: `lazy`,
                    width: 1440,
                    height: 1088,
                    className: `w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]`,
                  }),
                }),
                (0, l.jsxs)(`div`, {
                  className: `md:col-span-5`,
                  children: [
                    (0, l.jsx)(`h2`, {
                      className: `display-lg transition-colors group-hover:text-primary`,
                      children: p.title,
                    }),
                    (0, l.jsxs)(`p`, {
                      className: `mt-4 text-sm font-medium text-muted-foreground`,
                      children: [p.industry, ` · `, p.year],
                    }),
                    (0, l.jsxs)(`span`, {
                      className: `eyebrow mt-8 inline-flex items-center gap-2`,
                      children: [
                        `View case study`,
                        (0, l.jsx)(`span`, {
                          "aria-hidden": !0,
                          className: `transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1`,
                          children: `↗`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)(`div`, {
              className: `mt-10`,
              children: (0, l.jsx)(t, { to: `/work`, children: `All work` }),
            }),
          ],
        }),
      }),
      (0, l.jsx)(c, {}),
    ],
  });
}
export { f as component };
