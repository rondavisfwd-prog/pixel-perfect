import {
  J as e,
  K as t,
  r as n,
  t as r,
  u as i,
} from "./ActionLink-DLXSrhX5.js";
import { i as a, t as o } from "./SectionHeading-Dsjw7xGt.js";
var s = e(t()),
  c = i(),
  l = [
    `Brand`,
    `Website`,
    `Social Media`,
    `Paid Advertising`,
    `SEO`,
    `Creative`,
    `AI + Automation`,
    `Full Digital Partnership`,
  ],
  u = [
    `Under $2,500`,
    `$2,500–$5,000`,
    `$5,000–$10,000`,
    `$10,000–$25,000`,
    `$25,000+`,
    `Not sure yet`,
  ],
  d = [`ASAP`, `1–2 months`, `3–6 months`, `Just exploring`],
  f = [`United States`, `Canada`, `United Kingdom`, `Other`],
  p = {
    name: ``,
    email: ``,
    company: ``,
    website: ``,
    country: ``,
    industry: ``,
    help: [],
    brief: ``,
    budget: ``,
    timeline: ``,
  },
  m = `w-full border-0 border-b border-input bg-transparent pb-3 pt-2 text-lg font-semibold outline-none transition-colors placeholder:font-medium placeholder:text-muted-foreground/70 focus:border-primary`,
  h = `eyebrow text-muted-foreground`;
function g({ label: e, children: t, error: n, className: r }) {
  return (0, c.jsxs)(`div`, {
    className: r,
    children: [
      (0, c.jsxs)(`label`, {
        className: h,
        children: [
          e,
          (0, c.jsx)(`div`, {
            className: `mt-3 font-normal normal-case tracking-normal`,
            children: t,
          }),
        ],
      }),
      n
        ? (0, c.jsx)(`p`, {
            className: `mt-2 text-xs font-bold text-destructive`,
            children: n,
          })
        : null,
    ],
  });
}
function _() {
  let [e, t] = (0, s.useState)(p),
    [i, _] = (0, s.useState)({}),
    [v, y] = (0, s.useState)(!1),
    b = (e, n) => t((t) => ({ ...t, [e]: n })),
    x = (e) =>
      t((t) => ({
        ...t,
        help: t.help.includes(e)
          ? t.help.filter((t) => t !== e)
          : [...t.help, e],
      })),
    S = () => {
      let t = {};
      return (
        e.name.trim().length < 2 && (t.name = `Please add your name.`),
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.email) ||
          (t.email = `Add a valid work email.`),
        e.company.trim() || (t.company = `Which company are you with?`),
        e.country || (t.country = `Pick a country.`),
        e.help.length === 0 && (t.help = `Choose at least one.`),
        e.brief.trim().length < 20 &&
          (t.brief = `A sentence or two is plenty.`),
        e.budget || (t.budget = `Pick a range.`),
        e.timeline || (t.timeline = `Pick a timeline.`),
        _(t),
        Object.keys(t).length === 0
      );
    };
  return v
    ? (0, c.jsx)(`section`, {
        className: `flex min-h-screen items-center bg-primary text-primary-foreground`,
        children: (0, c.jsxs)(`div`, {
          className: `shell py-32`,
          children: [
            (0, c.jsx)(`h1`, {
              className: `display-xl max-w-3xl`,
              children: `You're officially on our radar. 💗`,
            }),
            (0, c.jsx)(`p`, {
              className: `mt-8 text-xl font-semibold`,
              children: `We'll be in touch soon.`,
            }),
            (0, c.jsxs)(`div`, {
              className: `mt-12 flex flex-wrap gap-4`,
              children: [
                (0, c.jsx)(r, {
                  to: `/work`,
                  variant: `dark`,
                  children: `Browse our work`,
                }),
                (0, c.jsx)(r, {
                  variant: `dark`,
                  arrow: `none`,
                  onClick: () => {
                    (t(p), y(!1));
                  },
                  children: `Send another`,
                }),
              ],
            }),
          ],
        }),
      })
    : (0, c.jsxs)(c.Fragment, {
        children: [
          (0, c.jsx)(`header`, {
            className: `border-b border-border pb-16 pt-36 md:pb-20 md:pt-48`,
            children: (0, c.jsxs)(`div`, {
              className: `shell`,
              children: [
                (0, c.jsx)(a, {
                  children: (0, c.jsx)(o, { children: `Start a project` }),
                }),
                (0, c.jsx)(a, {
                  delay: 80,
                  children: (0, c.jsxs)(`h1`, {
                    className: `display-hero mt-8`,
                    children: [
                      `Let's make`,
                      (0, c.jsx)(`br`, {}),
                      `something `,
                      (0, c.jsx)(`span`, {
                        className: `text-primary`,
                        children: `good.`,
                      }),
                    ],
                  }),
                }),
                (0, c.jsx)(a, {
                  delay: 140,
                  children: (0, c.jsx)(`p`, {
                    className: `lead mt-10 max-w-xl`,
                    children: `A few questions so the first conversation is a useful one. Takes about two minutes.`,
                  }),
                }),
              ],
            }),
          }),
          (0, c.jsx)(`div`, {
            className: `shell py-16 md:py-24`,
            children: (0, c.jsxs)(`form`, {
              onSubmit: (t) => {
                (t.preventDefault(),
                  S() &&
                    (console.info(`project_enquiry`, {
                      ...e,
                      submittedAt: new Date().toISOString(),
                    }),
                    y(!0),
                    window.scrollTo({ top: 0, behavior: `smooth` })));
              },
              noValidate: !0,
              className: `max-w-4xl`,
              children: [
                (0, c.jsxs)(`div`, {
                  className: `grid gap-10 md:grid-cols-2`,
                  children: [
                    (0, c.jsx)(g, {
                      label: `Name`,
                      error: i.name,
                      children: (0, c.jsx)(`input`, {
                        className: m,
                        value: e.name,
                        onChange: (e) => b(`name`, e.target.value),
                        placeholder: `Alex Rivera`,
                        autoComplete: `name`,
                        "aria-invalid": !!i.name,
                      }),
                    }),
                    (0, c.jsx)(g, {
                      label: `Work email`,
                      error: i.email,
                      children: (0, c.jsx)(`input`, {
                        type: `email`,
                        className: m,
                        value: e.email,
                        onChange: (e) => b(`email`, e.target.value),
                        placeholder: `alex@company.com`,
                        autoComplete: `email`,
                        "aria-invalid": !!i.email,
                      }),
                    }),
                    (0, c.jsx)(g, {
                      label: `Company`,
                      error: i.company,
                      children: (0, c.jsx)(`input`, {
                        className: m,
                        value: e.company,
                        onChange: (e) => b(`company`, e.target.value),
                        placeholder: `Company name`,
                        autoComplete: `organization`,
                        "aria-invalid": !!i.company,
                      }),
                    }),
                    (0, c.jsx)(g, {
                      label: `Website`,
                      children: (0, c.jsx)(`input`, {
                        className: m,
                        value: e.website,
                        onChange: (e) => b(`website`, e.target.value),
                        placeholder: `company.com`,
                        autoComplete: `url`,
                      }),
                    }),
                    (0, c.jsx)(g, {
                      label: `Country`,
                      error: i.country,
                      children: (0, c.jsxs)(`select`, {
                        className: n(m, `appearance-none`),
                        value: e.country,
                        onChange: (e) => b(`country`, e.target.value),
                        "aria-invalid": !!i.country,
                        children: [
                          (0, c.jsx)(`option`, {
                            value: ``,
                            children: `Select…`,
                          }),
                          f.map((e) =>
                            (0, c.jsx)(`option`, { value: e, children: e }, e),
                          ),
                        ],
                      }),
                    }),
                    (0, c.jsx)(g, {
                      label: `Industry`,
                      children: (0, c.jsx)(`input`, {
                        className: m,
                        value: e.industry,
                        onChange: (e) => b(`industry`, e.target.value),
                        placeholder: `e.g. Beauty, SaaS, Property`,
                      }),
                    }),
                  ],
                }),
                (0, c.jsxs)(`fieldset`, {
                  className: `mt-16`,
                  children: [
                    (0, c.jsx)(`legend`, {
                      className: h,
                      children: `What can we help with?`,
                    }),
                    (0, c.jsx)(`div`, {
                      className: `mt-6 flex flex-wrap gap-3`,
                      children: l.map((t) => {
                        let r = e.help.includes(t);
                        return (0, c.jsx)(
                          `button`,
                          {
                            type: `button`,
                            "aria-pressed": r,
                            onClick: () => x(t),
                            className: n(
                              `rounded-md border px-4 py-2.5 text-sm font-bold transition-all duration-300`,
                              r
                                ? `border-primary bg-primary text-primary-foreground`
                                : `border-border hover:border-primary hover:text-primary`,
                            ),
                            children: t,
                          },
                          t,
                        );
                      }),
                    }),
                    i.help
                      ? (0, c.jsx)(`p`, {
                          className: `mt-3 text-xs font-bold text-destructive`,
                          children: i.help,
                        })
                      : null,
                  ],
                }),
                (0, c.jsx)(`div`, {
                  className: `mt-16`,
                  children: (0, c.jsx)(g, {
                    label: `Tell us a little about what you're trying to accomplish.`,
                    error: i.brief,
                    children: (0, c.jsx)(`textarea`, {
                      rows: 4,
                      className: n(m, `resize-none`),
                      value: e.brief,
                      onChange: (e) => b(`brief`, e.target.value),
                      placeholder: `Where you are now, where you'd like to be…`,
                      "aria-invalid": !!i.brief,
                    }),
                  }),
                }),
                (0, c.jsxs)(`div`, {
                  className: `mt-16 grid gap-10 md:grid-cols-2`,
                  children: [
                    (0, c.jsx)(g, {
                      label: `Budget`,
                      error: i.budget,
                      children: (0, c.jsxs)(`select`, {
                        className: n(m, `appearance-none`),
                        value: e.budget,
                        onChange: (e) => b(`budget`, e.target.value),
                        "aria-invalid": !!i.budget,
                        children: [
                          (0, c.jsx)(`option`, {
                            value: ``,
                            children: `Select…`,
                          }),
                          u.map((e) =>
                            (0, c.jsx)(`option`, { value: e, children: e }, e),
                          ),
                        ],
                      }),
                    }),
                    (0, c.jsx)(g, {
                      label: `Timeline`,
                      error: i.timeline,
                      children: (0, c.jsxs)(`select`, {
                        className: n(m, `appearance-none`),
                        value: e.timeline,
                        onChange: (e) => b(`timeline`, e.target.value),
                        "aria-invalid": !!i.timeline,
                        children: [
                          (0, c.jsx)(`option`, {
                            value: ``,
                            children: `Select…`,
                          }),
                          d.map((e) =>
                            (0, c.jsx)(`option`, { value: e, children: e }, e),
                          ),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, c.jsxs)(`div`, {
                  className: `mt-16 flex flex-wrap items-center gap-8`,
                  children: [
                    (0, c.jsx)(r, {
                      type: `submit`,
                      size: `lg`,
                      arrow: `right`,
                      children: `Send It`,
                    }),
                    (0, c.jsxs)(`p`, {
                      className: `text-sm font-medium text-muted-foreground`,
                      children: [
                        `Or email`,
                        ` `,
                        (0, c.jsx)(`a`, {
                          href: `mailto:hello@thepinkdigital.com`,
                          className: `font-bold underline decoration-primary decoration-2 underline-offset-4`,
                          children: `hello@thepinkdigital.com`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
}
export { _ as component };
