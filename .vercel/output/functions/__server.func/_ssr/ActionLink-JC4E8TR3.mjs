import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ActionLink-JC4E8TR3.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var _jsxFileName = "/app/applet/src/components/site/ActionLink.tsx";
var base = "group inline-flex items-center justify-center gap-2 rounded-md font-bold tracking-tight transition-all duration-300 will-change-transform";
var variants = {
	primary: "bg-primary text-primary-foreground hover:brightness-105 hover:-translate-y-0.5",
	secondary: "border border-foreground/25 text-foreground hover:bg-foreground hover:text-background hover:-translate-y-0.5",
	dark: "bg-ink text-ink-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5",
	light: "border border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground hover:text-ink hover:-translate-y-0.5"
};
var sizes = {
	md: "px-6 py-3 text-sm",
	lg: "px-8 py-4 text-base md:px-10 md:py-5 md:text-lg"
};
function Arrow({ arrow }) {
	if (arrow === "none") return null;
	const glyph = arrow === "down" ? "↓" : arrow === "right" ? "→" : "↗";
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		"aria-hidden": true,
		className: cn("inline-block transition-transform duration-300", arrow === "down" ? "group-hover:translate-y-1" : arrow === "right" ? "group-hover:translate-x-1" : "group-hover:translate-x-1 group-hover:-translate-y-1"),
		children: glyph
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 5
	}, this);
}
function ActionLink({ to, href, children, variant = "primary", size = "md", arrow = "diagonal", className, onClick, type = "button", disabled }) {
	const classes = cn(base, variants[variant], sizes[size], disabled && "opacity-60", className);
	const content = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 69,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Arrow, { arrow }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 70,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 68,
		columnNumber: 5
	}, this);
	if (to) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to,
		className: classes,
		onClick,
		children: content
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 76,
		columnNumber: 7
	}, this);
	if (href) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
		href,
		className: classes,
		onClick,
		children: content
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 83,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		type,
		className: classes,
		onClick,
		disabled,
		children: content
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 89,
		columnNumber: 5
	}, this);
}
function TextLink({ to, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to,
		className: cn("group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] transition-colors hover:text-primary", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "link-line",
			children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "link-line-inner group-hover:scale-x-100" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 112,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			"aria-hidden": true,
			className: "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
			children: "↗"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 116,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 105,
		columnNumber: 5
	}, this);
}
//#endregion
export { TextLink as n, cn as r, ActionLink as t };
