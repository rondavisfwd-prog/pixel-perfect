import {
  J as e,
  K as t,
  i as n,
  n as r,
  r as i,
  t as a,
  u as o,
} from "./ActionLink-DLXSrhX5.js";
import {
  a as s,
  c,
  d as l,
  f as u,
  l as d,
  n as f,
  s as p,
  u as m,
} from "./index-CfZM4pn7.js";
import { i as h, n as g, r as _, t as v } from "./SectionHeading-Dsjw7xGt.js";
var y = e(t(), 1),
  b = o();
function x() {
  let e = [...c, ...c];
  return (0, b.jsxs)(`section`, {
    "aria-labelledby": `clients-heading`,
    className: `border-y border-border bg-card py-12 md:py-16`,
    children: [
      (0, b.jsx)(`div`, {
        className: `shell`,
        children: (0, b.jsx)(`h2`, {
          id: `clients-heading`,
          className: `eyebrow text-muted-foreground`,
          children: `Built for ambitious brands.`,
        }),
      }),
      (0, b.jsx)(`div`, {
        className: `mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]`,
        children: (0, b.jsx)(`div`, {
          className: `marquee-track items-center gap-14 md:gap-24`,
          children: e.map((e, t) =>
            (0, b.jsx)(
              `span`,
              {
                className: `shrink-0 text-lg font-extrabold tracking-[-0.02em] text-foreground/35 transition-colors hover:text-primary md:text-2xl`,
                children: e,
              },
              `${e}-${t}`,
            ),
          ),
        }),
      }),
    ],
  });
}
function S() {
  return (0, b.jsx)(`section`, {
    className: `section-y`,
    children: (0, b.jsxs)(`div`, {
      className: `shell grid gap-12 md:grid-cols-12`,
      children: [
        (0, b.jsxs)(`div`, {
          className: `md:col-span-7`,
          children: [
            (0, b.jsx)(h, {
              children: (0, b.jsx)(v, { children: `What we do` }),
            }),
            (0, b.jsx)(h, {
              delay: 80,
              children: (0, b.jsxs)(`h2`, {
                className: `display-xl mt-8`,
                children: [
                  `We build brands people `,
                  (0, b.jsx)(g, { children: `notice` }),
                  ` and digital experiences that turn attention into `,
                  (0, b.jsx)(g, { children: `growth` }),
                  `.`,
                ],
              }),
            }),
          ],
        }),
        (0, b.jsxs)(`div`, {
          className: `flex flex-col justify-end gap-8 md:col-span-4 md:col-start-9`,
          children: [
            (0, b.jsx)(h, {
              delay: 140,
              children: (0, b.jsx)(`p`, {
                className: `lead`,
                children: `The Pink Digital brings strategy, design, technology and growth marketing together under one roof.`,
              }),
            }),
            (0, b.jsx)(h, {
              delay: 200,
              children: (0, b.jsx)(r, {
                to: `/about`,
                children: `Meet The Pink Digital`,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function C() {
  let [e, t] = (0, y.useState)(s[0]?.slug ?? null);
  return (0, b.jsx)(`section`, {
    className: `section-y border-t border-border`,
    children: (0, b.jsxs)(`div`, {
      className: `shell`,
      children: [
        (0, b.jsx)(_, {
          eyebrow: `Services`,
          title: (0, b.jsxs)(b.Fragment, {
            children: [
              `Everything your brand needs to `,
              (0, b.jsx)(g, { children: `move forward.` }),
            ],
          }),
          intro: `Six disciplines, one team. Engage a single service or the whole picture.`,
        }),
        (0, b.jsx)(`div`, {
          className: `mt-14 border-t border-border`,
          children: s.map((n, a) => {
            let o = e === n.slug;
            return (0, b.jsx)(
              h,
              {
                delay: a * 50,
                children: (0, b.jsxs)(`div`, {
                  className: `border-b border-border`,
                  children: [
                    (0, b.jsx)(`h3`, {
                      children: (0, b.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => t(o ? null : n.slug),
                        "aria-expanded": o,
                        className: `group flex w-full items-center gap-5 py-7 text-left transition-colors hover:text-primary md:gap-10 md:py-9`,
                        children: [
                          (0, b.jsx)(`span`, {
                            className: i(
                              `eyebrow shrink-0 transition-colors`,
                              o ? `text-primary` : `text-muted-foreground`,
                            ),
                            children: n.n,
                          }),
                          (0, b.jsx)(`span`, {
                            className: i(
                              `display-lg flex-1 uppercase transition-colors`,
                              o && `text-primary`,
                            ),
                            children: n.title,
                          }),
                          (0, b.jsx)(`span`, {
                            "aria-hidden": !0,
                            className: i(
                              `shrink-0 text-2xl transition-transform duration-500 md:text-3xl`,
                              o
                                ? `rotate-45 text-primary`
                                : `group-hover:rotate-90`,
                            ),
                            children: `+`,
                          }),
                        ],
                      }),
                    }),
                    (0, b.jsx)(`div`, {
                      className: i(
                        `grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`,
                        o
                          ? `grid-rows-[1fr] opacity-100`
                          : `grid-rows-[0fr] opacity-0`,
                      ),
                      children: (0, b.jsx)(`div`, {
                        className: `min-h-0`,
                        children: (0, b.jsxs)(`div`, {
                          className: `grid gap-8 pb-10 md:grid-cols-12 md:pl-[calc(2.5rem+2ch)]`,
                          children: [
                            (0, b.jsx)(`p`, {
                              className: `lead md:col-span-6`,
                              children: n.summary,
                            }),
                            (0, b.jsx)(`ul`, {
                              className: `grid gap-2 text-sm font-semibold md:col-span-4`,
                              children: n.items.map((e) =>
                                (0, b.jsxs)(
                                  `li`,
                                  {
                                    className: `flex items-center gap-3`,
                                    children: [
                                      (0, b.jsx)(`span`, {
                                        "aria-hidden": !0,
                                        className: `h-1 w-1 shrink-0 bg-primary`,
                                      }),
                                      e,
                                    ],
                                  },
                                  e,
                                ),
                              ),
                            }),
                            (0, b.jsx)(`div`, {
                              className: `md:col-span-2`,
                              children: (0, b.jsx)(r, {
                                to: `/services/${n.slug}`,
                                children: `Detail`,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              },
              n.slug,
            );
          }),
        }),
      ],
    }),
  });
}
function w({ limit: e }) {
  let t = e ? f.slice(0, e) : f;
  return (0, b.jsx)(`div`, {
    className: `mt-16 grid gap-16 md:gap-24`,
    children: t.map((e, t) =>
      (0, b.jsx)(
        h,
        {
          children: (0, b.jsxs)(n, {
            to: `/work/$slug`,
            params: { slug: e.slug },
            className: i(
              `group grid items-center gap-8 md:grid-cols-12`,
              t % 2 == 1 && `md:[&>figure]:order-2`,
            ),
            children: [
              (0, b.jsx)(`figure`, {
                className: `overflow-hidden rounded-lg bg-card md:col-span-8`,
                children: (0, b.jsx)(`img`, {
                  src: e.heroImage,
                  alt: e.heroAlt,
                  loading: t === 0 ? `eager` : `lazy`,
                  width: 1440,
                  height: 1088,
                  className: `h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]`,
                }),
              }),
              (0, b.jsxs)(`div`, {
                className: `md:col-span-4`,
                children: [
                  (0, b.jsxs)(`p`, {
                    className: `eyebrow text-muted-foreground`,
                    children: [e.industry, ` · `, e.year],
                  }),
                  (0, b.jsx)(`h3`, {
                    className: `display-lg mt-4 transition-all duration-500 group-hover:translate-x-2 group-hover:text-primary`,
                    children: e.title,
                  }),
                  (0, b.jsx)(`p`, {
                    className: `mt-4 text-sm font-medium text-muted-foreground`,
                    children: e.services.join(` · `),
                  }),
                  (0, b.jsx)(`p`, {
                    className: `display-md mt-6 text-primary`,
                    children: e.result,
                  }),
                  (0, b.jsxs)(`span`, {
                    className: `eyebrow mt-8 inline-flex items-center gap-2 text-foreground`,
                    children: [
                      `View case study`,
                      (0, b.jsx)(`span`, {
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
        },
        e.slug,
      ),
    ),
  });
}
function T() {
  return (0, b.jsx)(`section`, {
    className: `section-y border-t border-border`,
    children: (0, b.jsxs)(`div`, {
      className: `shell`,
      children: [
        (0, b.jsx)(_, {
          eyebrow: `Selected work`,
          title: (0, b.jsxs)(b.Fragment, {
            children: [
              `Some things we've `,
              (0, b.jsx)(g, { children: `made happen.` }),
            ],
          }),
          aside: (0, b.jsx)(r, { to: `/work`, children: `View all work` }),
        }),
        (0, b.jsx)(w, { limit: 4 }),
      ],
    }),
  });
}
function E() {
  return (0, b.jsx)(`section`, {
    className: `bg-ink text-ink-foreground`,
    children: (0, b.jsxs)(`div`, {
      className: `shell section-y`,
      children: [
        (0, b.jsxs)(`div`, {
          className: `grid gap-12 md:grid-cols-12`,
          children: [
            (0, b.jsxs)(`div`, {
              className: `md:col-span-7`,
              children: [
                (0, b.jsx)(h, {
                  children: (0, b.jsx)(v, {
                    className: `text-ink-foreground/60`,
                    children: `Why the pink digital`,
                  }),
                }),
                (0, b.jsx)(h, {
                  delay: 80,
                  children: (0, b.jsxs)(`h2`, {
                    className: `display-xl mt-8`,
                    children: [
                      `Pretty isn't the strategy.`,
                      (0, b.jsx)(`br`, {}),
                      (0, b.jsx)(g, { children: `Growth is.` }),
                    ],
                  }),
                }),
              ],
            }),
            (0, b.jsx)(h, {
              delay: 140,
              className: `flex items-end md:col-span-4 md:col-start-9`,
              children: (0, b.jsx)(`p`, {
                className: `lead text-ink-foreground/70`,
                children: `Great creative gets attention. Great strategy turns that attention into something valuable. We bring both together.`,
              }),
            }),
          ],
        }),
        (0, b.jsx)(`div`, {
          className: `mt-20 grid border-t border-ink-foreground/15 md:grid-cols-2`,
          children: d.map((e, t) =>
            (0, b.jsxs)(
              h,
              {
                delay: t * 70,
                className: i(
                  `border-b border-ink-foreground/15 py-10 md:py-14`,
                  t % 2 == 0 ? `md:pr-14` : `md:border-l md:pl-14`,
                ),
                children: [
                  (0, b.jsxs)(`p`, {
                    className: `eyebrow text-primary`,
                    children: [`0`, t + 1],
                  }),
                  (0, b.jsx)(`h3`, {
                    className: `display-md mt-5`,
                    children: e.title,
                  }),
                  (0, b.jsx)(`p`, {
                    className: `mt-4 max-w-md text-base font-medium text-ink-foreground/65`,
                    children: e.body,
                  }),
                ],
              },
              e.title,
            ),
          ),
        }),
      ],
    }),
  });
}
function D() {
  return (0, b.jsx)(`section`, {
    className: `section-y`,
    children: (0, b.jsxs)(`div`, {
      className: `shell`,
      children: [
        (0, b.jsx)(_, {
          eyebrow: `How we work`,
          title: (0, b.jsxs)(b.Fragment, {
            children: [
              `Less chaos.`,
              (0, b.jsx)(`br`, {}),
              (0, b.jsx)(g, { children: `More clarity.` }),
            ],
          }),
          intro: `A process built to keep momentum without endless meetings.`,
        }),
        (0, b.jsx)(`ol`, {
          className: `mt-16 grid gap-px border-t border-border md:grid-cols-5 md:border-t-0`,
          children: l.map((e, t) =>
            (0, b.jsx)(
              h,
              {
                as: `li`,
                delay: t * 80,
                className: `group border-b border-border py-8 md:border-b-0 md:border-t md:py-0 md:pt-8`,
                children: (0, b.jsxs)(`div`, {
                  className: `md:pr-6`,
                  children: [
                    (0, b.jsxs)(`div`, {
                      className: `flex items-center gap-4 md:block`,
                      children: [
                        (0, b.jsx)(`span`, {
                          className: `display-md text-primary`,
                          children: e.n,
                        }),
                        (0, b.jsx)(`h3`, {
                          className: `eyebrow md:mt-6`,
                          children: e.title,
                        }),
                      ],
                    }),
                    (0, b.jsx)(`p`, {
                      className: `mt-4 max-w-xs text-sm font-medium leading-relaxed text-muted-foreground`,
                      children: e.body,
                    }),
                    (0, b.jsx)(`span`, {
                      "aria-hidden": !0,
                      className: `mt-6 hidden h-[2px] w-0 bg-primary transition-all duration-700 group-hover:w-full md:block`,
                    }),
                  ],
                }),
              },
              e.n,
            ),
          ),
        }),
      ],
    }),
  });
}
function O() {
  return (0, b.jsx)(`section`, {
    className: `section-y border-t border-border bg-card`,
    children: (0, b.jsxs)(`div`, {
      className: `shell`,
      children: [
        (0, b.jsx)(_, {
          eyebrow: `Ways to work with us`,
          title: (0, b.jsxs)(b.Fragment, {
            children: [
              `Choose your `,
              (0, b.jsx)(g, { children: `starting point.` }),
            ],
          }),
          intro: `Fixed scopes or ongoing partnership. Pricing is shaped around the work, not a tier list.`,
        }),
        (0, b.jsx)(`div`, {
          className: `mt-14 border-t border-border`,
          children: m.map((e, t) =>
            (0, b.jsx)(
              h,
              {
                delay: t * 60,
                children: (0, b.jsxs)(`article`, {
                  className: `group grid gap-6 border-b border-border py-10 md:grid-cols-12 md:items-center md:gap-10 md:py-12`,
                  children: [
                    (0, b.jsxs)(`div`, {
                      className: `md:col-span-4`,
                      children: [
                        (0, b.jsx)(`h3`, {
                          className: `display-md uppercase transition-colors group-hover:text-primary`,
                          children: e.name,
                        }),
                        (0, b.jsx)(`p`, {
                          className: `mt-3 text-sm font-medium text-muted-foreground`,
                          children: e.blurb,
                        }),
                      ],
                    }),
                    (0, b.jsx)(`ul`, {
                      className: `flex flex-wrap gap-2 md:col-span-5`,
                      children: e.items.map((e) =>
                        (0, b.jsx)(
                          `li`,
                          {
                            className: `rounded-md border border-border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em]`,
                            children: e,
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, b.jsxs)(`div`, {
                      className: `flex items-center gap-6 md:col-span-3 md:justify-end`,
                      children: [
                        (0, b.jsx)(`span`, {
                          className: `eyebrow text-muted-foreground`,
                          children: `Let's talk.`,
                        }),
                        (0, b.jsx)(a, {
                          to: `/contact`,
                          variant: `secondary`,
                          children: `Explore`,
                        }),
                      ],
                    }),
                  ],
                }),
              },
              e.name,
            ),
          ),
        }),
      ],
    }),
  });
}
function k() {
  let [e, t] = (0, y.useState)(0),
    n = u[e] ?? u[0];
  return (
    (0, y.useEffect)(() => {
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
      let e = setInterval(() => t((e) => (e + 1) % u.length), 8e3);
      return () => clearInterval(e);
    }, []),
    (0, b.jsx)(`section`, {
      "aria-label": `Client testimonials`,
      className: `section-y`,
      children: (0, b.jsxs)(`div`, {
        className: `shell`,
        children: [
          (0, b.jsx)(h, { children: (0, b.jsx)(v, { children: `Clients` }) }),
          (0, b.jsx)(h, {
            delay: 80,
            children: (0, b.jsxs)(
              `blockquote`,
              {
                className: `mt-10 max-w-5xl animate-in fade-in duration-700`,
                children: [
                  (0, b.jsxs)(`p`, {
                    className: `display-lg`,
                    children: [
                      (0, b.jsx)(`span`, {
                        className: `text-primary`,
                        children: `"`,
                      }),
                      n.quote,
                      (0, b.jsx)(`span`, {
                        className: `text-primary`,
                        children: `"`,
                      }),
                    ],
                  }),
                  (0, b.jsxs)(`footer`, {
                    className: `mt-8 text-sm font-bold uppercase tracking-[0.14em]`,
                    children: [
                      n.name,
                      (0, b.jsx)(`span`, {
                        className: `ml-3 font-medium normal-case tracking-normal text-muted-foreground`,
                        children: n.role,
                      }),
                    ],
                  }),
                ],
              },
              e,
            ),
          }),
          (0, b.jsx)(`div`, {
            className: `mt-12 flex gap-3`,
            children: u.map((n, r) =>
              (0, b.jsx)(
                `button`,
                {
                  type: `button`,
                  onClick: () => t(r),
                  "aria-label": `Show testimonial from ${n.name}`,
                  "aria-current": r === e,
                  className: i(
                    `h-[3px] w-12 transition-colors`,
                    r === e
                      ? `bg-primary`
                      : `bg-foreground/15 hover:bg-foreground/40`,
                  ),
                },
                n.name,
              ),
            ),
          }),
        ],
      }),
    })
  );
}
var A = 240;
function j() {
  return (0, b.jsx)(`section`, {
    className: `section-y border-t border-border`,
    children: (0, b.jsxs)(`div`, {
      className: `shell grid gap-12 md:grid-cols-12 md:items-center`,
      children: [
        (0, b.jsxs)(`div`, {
          className: `md:col-span-5`,
          children: [
            (0, b.jsx)(h, {
              children: (0, b.jsx)(v, { children: `US · Canada · UK` }),
            }),
            (0, b.jsx)(h, {
              delay: 80,
              children: (0, b.jsxs)(`h2`, {
                className: `display-xl mt-8`,
                children: [
                  `Big ideas don't care about `,
                  (0, b.jsx)(g, { children: `borders.` }),
                ],
              }),
            }),
            (0, b.jsx)(h, {
              delay: 140,
              children: (0, b.jsx)(`p`, {
                className: `lead mt-8 max-w-md`,
                children: `We work remotely with ambitious businesses across the United States, Canada and United Kingdom.`,
              }),
            }),
          ],
        }),
        (0, b.jsx)(h, {
          delay: 200,
          className: `md:col-span-6 md:col-start-7`,
          children: (0, b.jsx)(`div`, {
            "aria-hidden": !0,
            className: `grid grid-cols-[repeat(20,1fr)] gap-2 rounded-lg border border-border bg-card p-6`,
            children: Array.from({ length: A }).map((e, t) => {
              let n = [
                24, 25, 26, 44, 45, 46, 64, 85, 86, 106, 107, 127,
              ].includes(t);
              return (0, b.jsx)(
                `span`,
                {
                  className: i(
                    `aspect-square rounded-full`,
                    n ? `bg-primary` : `bg-foreground/12`,
                  ),
                },
                t,
              );
            }),
          }),
        }),
      ],
    }),
  });
}
function M({ heading: e = !0 }) {
  return (0, b.jsx)(`section`, {
    className: i(e && `section-y border-t border-border`),
    children: (0, b.jsxs)(`div`, {
      className: i(e && `shell`),
      children: [
        e
          ? (0, b.jsx)(_, {
              eyebrow: `Insights`,
              title: (0, b.jsxs)(b.Fragment, {
                children: [
                  `Thinking, occasionally `,
                  (0, b.jsx)(g, { children: `out loud.` }),
                ],
              }),
              aside: (0, b.jsx)(r, {
                to: `/insights`,
                children: `All insights`,
              }),
            })
          : null,
        (0, b.jsx)(`div`, {
          className: i(`border-t border-border`, e ? `mt-14` : `mt-0`),
          children: p.map((e, t) =>
            (0, b.jsx)(
              h,
              {
                delay: t * 60,
                children: (0, b.jsxs)(n, {
                  to: `/insights/$slug`,
                  params: { slug: e.slug },
                  className: `group grid gap-4 border-b border-border py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10`,
                  children: [
                    (0, b.jsx)(`span`, {
                      className: `eyebrow text-primary md:col-span-2`,
                      children: e.category,
                    }),
                    (0, b.jsxs)(`div`, {
                      className: `md:col-span-7`,
                      children: [
                        (0, b.jsx)(`h3`, {
                          className: `display-md transition-colors group-hover:text-primary`,
                          children: e.title,
                        }),
                        (0, b.jsx)(`p`, {
                          className: `mt-3 max-w-xl text-sm font-medium text-muted-foreground`,
                          children: e.excerpt,
                        }),
                      ],
                    }),
                    (0, b.jsxs)(`span`, {
                      className: `text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground md:col-span-3 md:text-right`,
                      children: [e.date, ` · `, e.read],
                    }),
                  ],
                }),
              },
              e.slug,
            ),
          ),
        }),
      ],
    }),
  });
}
function N() {
  return (0, b.jsx)(`section`, {
    className: `bg-primary text-primary-foreground`,
    children: (0, b.jsxs)(`div`, {
      className: `shell section-y`,
      children: [
        (0, b.jsx)(h, {
          children: (0, b.jsxs)(`h2`, {
            className: `display-hero`,
            children: [`GOT SOMETHING`, (0, b.jsx)(`br`, {}), `GOOD IN MIND?`],
          }),
        }),
        (0, b.jsxs)(`div`, {
          className: `mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between`,
          children: [
            (0, b.jsx)(h, {
              delay: 80,
              children: (0, b.jsx)(`p`, {
                className: `display-md max-w-md`,
                children: `Let's make it impossible to ignore.`,
              }),
            }),
            (0, b.jsx)(h, {
              delay: 140,
              children: (0, b.jsx)(a, {
                to: `/contact`,
                variant: `dark`,
                size: `lg`,
                children: `Start a Project`,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function P({ eyebrow: e, title: t, intro: n }) {
  return (0, b.jsx)(`header`, {
    className: `border-b border-border pb-16 pt-36 md:pb-24 md:pt-48`,
    children: (0, b.jsxs)(`div`, {
      className: `shell`,
      children: [
        (0, b.jsx)(h, { children: (0, b.jsx)(v, { children: e }) }),
        (0, b.jsx)(h, {
          delay: 80,
          children: (0, b.jsx)(`h1`, {
            className: `display-xl mt-8 max-w-4xl`,
            children: t,
          }),
        }),
        n
          ? (0, b.jsx)(h, {
              delay: 140,
              children: (0, b.jsx)(`p`, {
                className: `lead mt-8 max-w-2xl`,
                children: n,
              }),
            })
          : null,
      ],
    }),
  });
}
function F({ items: e }) {
  return (0, b.jsx)(`div`, {
    className: `grid gap-10 border-y border-border py-12 md:grid-cols-3`,
    children: e.map((e, t) =>
      (0, b.jsxs)(
        h,
        {
          delay: t * 80,
          children: [
            (0, b.jsx)(`p`, {
              className: `display-xl text-primary`,
              children: e.value,
            }),
            (0, b.jsx)(`p`, {
              className: `eyebrow mt-4 text-muted-foreground`,
              children: e.label,
            }),
          ],
        },
        e.label,
      ),
    ),
  });
}
export {
  F as a,
  S as c,
  T as d,
  C as f,
  x as i,
  D as l,
  E as m,
  j as n,
  O as o,
  k as p,
  M as r,
  P as s,
  N as t,
  w as u,
};
