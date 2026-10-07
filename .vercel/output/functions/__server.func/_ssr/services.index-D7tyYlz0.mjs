import { l as services } from "./insights-DLbSV-QZ.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as TextLink } from "./ActionLink-CXE4usJA.mjs";
import { r as Reveal } from "./SectionHeading-DjWuyN6J.mjs";
import { l as ProcessTimeline, s as PageHero, t as CTASection } from "./sections-DyqE6za6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services.index-D7tyYlz0.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/services.index.tsx?tsr-split=component";
function ServicesIndex() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
			eyebrow: "Services",
			title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				"One agency.",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 10,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-primary",
					children: "The whole digital picture."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 11,
					columnNumber: 13
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 43
			}, this),
			intro: "Six disciplines that work better together than they ever do apart."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "shell border-t border-border",
				children: services.map((service, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: i * 50,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
						className: "grid gap-8 border-b border-border py-12 md:grid-cols-12 md:gap-10 md:py-16",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "md:col-span-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "eyebrow text-primary",
									children: service.n
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 19,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "display-lg mt-5 uppercase",
									children: service.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 20,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-5 max-w-sm text-sm font-medium text-muted-foreground",
									children: service.summary
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 21,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-8",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextLink, {
										to: `/services/${service.slug}`,
										children: ["Explore ", service.title]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 25,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 24,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 18,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-8 md:col-span-8 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "eyebrow text-muted-foreground",
								children: "What we do"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 32,
								columnNumber: 21
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
								className: "mt-4 space-y-2 text-sm font-semibold",
								children: service.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										"aria-hidden": true,
										className: "h-1 w-1 bg-primary"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 37,
										columnNumber: 27
									}, this), item]
								}, item, true, {
									fileName: _jsxFileName,
									lineNumber: 36,
									columnNumber: 50
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 21
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 31,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "eyebrow text-muted-foreground",
								children: "Typical deliverables"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 21
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
								className: "mt-4 space-y-2 text-sm font-medium text-muted-foreground",
								children: service.deliverables.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: item }, item, false, {
									fileName: _jsxFileName,
									lineNumber: 47,
									columnNumber: 57
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 21
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 17,
						columnNumber: 15
					}, this)
				}, service.slug, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 41
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProcessTimeline, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 56,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTASection, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 10
	}, this);
}
//#endregion
export { ServicesIndex as component };
