import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { r as cn } from "./ActionLink-CXE4usJA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-DjWuyN6J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/site/Reveal.tsx";
function Reveal({ children, as: Tag = "div", delay = 0, className }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setShown(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setShown(true);
					observer.disconnect();
				}
			});
		}, {
			threshold: .15,
			rootMargin: "0px 0px -8% 0px"
		});
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, {
		ref,
		style: { "--reveal-delay": `${delay}ms` },
		className: cn("reveal", shown && "reveal-in", className),
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 49,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/components/site/SectionHeading.tsx";
function Eyebrow({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("eyebrow flex items-center gap-3 text-muted-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			"aria-hidden": true,
			className: "inline-block h-2 w-2 bg-primary"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
function SectionHeading({ eyebrow, title, intro, aside, className, invert }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("grid gap-8 md:grid-cols-12 md:items-end", invert && "[&_.eyebrow]:text-ink-foreground/60", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "md:col-span-8",
			children: [eyebrow ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: eyebrow }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 13
			}, this) }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 11
			}, this) : null, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: cn("display-xl mt-6", invert && "text-ink-foreground"),
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 7
		}, this), intro || aside ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
			delay: 160,
			className: "md:col-span-4",
			children: [intro ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: cn("lead", invert && "text-ink-foreground/70"),
				children: intro
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 65,
				columnNumber: 13
			}, this) : null, aside ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6",
				children: aside
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 20
			}, this) : null]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 63,
			columnNumber: 9
		}, this) : null]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 41,
		columnNumber: 5
	}, this);
}
function Pink({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: "text-primary",
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 77,
		columnNumber: 10
	}, this);
}
//#endregion
export { SectionHeading as i, Pink as n, Reveal as r, Eyebrow as t };
