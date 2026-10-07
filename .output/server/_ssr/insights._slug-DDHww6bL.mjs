import { a as insights } from "./insights-DLbSV-QZ.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Reveal, t as Eyebrow } from "./SectionHeading-Bl9F-0XW.mjs";
import { t as CTASection } from "./sections-BFFf0tRt.mjs";
import { t as Route } from "./insights._slug-Bt62YTvj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights._slug-DDHww6bL.js
var import_jsx_runtime = require_jsx_runtime();
function Article() {
  const post = Route.useLoaderData();
  const more = insights.filter((i) => i.slug !== post.slug);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
              className: "border-b border-border pb-14 pt-36 md:pt-48",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "shell",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      Eyebrow,
                      { children: post.category },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                    delay: 80,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "h1",
                      {
                        className: "display-xl mt-8 max-w-4xl",
                        children: post.title,
                      },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                    delay: 140,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "p",
                      {
                        className: "eyebrow mt-10 text-muted-foreground",
                        children: [post.date, " · ", post.read],
                      },
                    ),
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "shell py-16 md:py-24",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "max-w-3xl space-y-7 text-lg font-medium leading-relaxed md:text-xl",
                children: post.body.map((paragraph) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "p",
                    { children: paragraph },
                    paragraph.slice(0, 24),
                  ),
                ),
              }),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "border-t border-border py-16",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "shell",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
                children: "Keep reading",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mt-8 border-t border-border",
                children: more.map((item) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    Link,
                    {
                      to: "/insights/$slug",
                      params: { slug: item.slug },
                      className:
                        "group flex flex-col gap-2 border-b border-border py-7 md:flex-row md:items-baseline md:justify-between",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                          className:
                            "display-md transition-colors group-hover:text-primary",
                          children: item.title,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                          className:
                            "text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground",
                          children: [item.category, " · ", item.read],
                        }),
                      ],
                    },
                    item.slug,
                  ),
                ),
              }),
            ],
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {}),
      ],
    },
  );
}
//#endregion
export { Article as component };
