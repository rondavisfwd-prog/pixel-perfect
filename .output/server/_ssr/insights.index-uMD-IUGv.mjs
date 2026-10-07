import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import {
  r as InsightsGrid,
  s as PageHero,
  t as CTASection,
} from "./sections-BFFf0tRt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights.index-uMD-IUGv.js
var import_jsx_runtime = require_jsx_runtime();
function InsightsIndex() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
          eyebrow: "Insights",
          title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_jsx_runtime.Fragment,
            {
              children: [
                "Thinking, occasionally ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "text-primary",
                  children: "out loud.",
                }),
              ],
            },
          ),
          intro:
            "Short pieces on brand, digital and growth — written for people who have to make decisions.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "section-y",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "shell",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              InsightsGrid,
              { heading: false },
            ),
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {}),
      ],
    },
  );
}
//#endregion
export { InsightsIndex as component };
