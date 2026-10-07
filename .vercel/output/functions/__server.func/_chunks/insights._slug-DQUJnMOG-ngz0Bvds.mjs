import { a as insights } from "./insights-DLbSV-QZ-Cq1DXJpc.mjs";
import { g as Link } from "./_libs/@tanstack/react-router-D-bzuk39.mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react-BXVD0bQ8.mjs";
import { r as Reveal, t as Eyebrow } from "./SectionHeading-5giglFrX-gbgQQQEX.mjs";
import { t as CTASection } from "./sections-z75G3BMc-DI9_CVL9.mjs";
import { t as Route } from "./insights._slug-DE-4hzb7-DogdFz1F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights._slug-DQUJnMOG.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/insights.$slug.tsx?tsr-split=component";
function Article() {
	const post = Route.useLoaderData();
	const more = insights.filter((i) => i.slug !== post.slug);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
			className: "border-b border-border pb-14 pt-36 md:pt-48",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: post.category }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 15,
						columnNumber: 15
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 14,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "display-xl mt-8 max-w-4xl",
							children: post.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 18,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 17,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
						delay: 140,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "eyebrow mt-10 text-muted-foreground",
							children: [
								post.date,
								" · ",
								post.read
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 21,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell py-16 md:py-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "max-w-3xl space-y-7 text-lg font-medium leading-relaxed md:text-xl",
				children: post.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: paragraph }, paragraph.slice(0, 24), false, {
					fileName: _jsxFileName,
					lineNumber: 30,
					columnNumber: 41
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 28,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 11,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "border-t border-border py-16",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Keep reading" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 border-t border-border",
					children: more.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/insights/$slug",
						params: { slug: item.slug },
						className: "group flex flex-col gap-2 border-b border-border py-7 md:flex-row md:items-baseline md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "display-md transition-colors group-hover:text-primary",
							children: item.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground",
							children: [
								item.category,
								" · ",
								item.read
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 17
						}, this)]
					}, item.slug, true, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 31
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 35,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTASection, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 53,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 10
	}, this);
}
//#endregion
export { Article as component };
