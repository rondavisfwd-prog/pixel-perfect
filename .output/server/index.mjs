globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/.htaccess": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"25f-KX3YLQ9qjkrXyeb8nzHIe5z8xPk\"",
		"mtime": "2026-10-07T18:19:03.354Z",
		"size": 607,
		"path": "../public/.htaccess"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"ecf-mcPkUMWCvCBEc6mytKIwy+SUpv0\"",
		"mtime": "2026-10-07T18:19:03.354Z",
		"size": 3791,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"e3-YGj4mMtS/renXXun3M6HnbmffP0\"",
		"mtime": "2026-10-07T18:19:03.354Z",
		"size": 227,
		"path": "../public/robots.txt"
	},
	"/assets/ActionLink-Cja8z7LD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"185a6-nAFpC1uB+bdh9zUMXu+yzX0WxJE\"",
		"mtime": "2026-10-07T18:19:02.226Z",
		"size": 99750,
		"path": "../public/assets/ActionLink-Cja8z7LD.js"
	},
	"/assets/SectionHeading-DVi6wDyo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c3-74kii1cOegH2yMe6abRXa62Qhas\"",
		"mtime": "2026-10-07T18:19:02.226Z",
		"size": 2499,
		"path": "../public/assets/SectionHeading-DVi6wDyo.js"
	},
	"/assets/about-BKyjM7kW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"176d-w+HnfGrfLOXYnn+JxmHQEbzV388\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 5997,
		"path": "../public/assets/about-BKyjM7kW.js"
	},
	"/assets/abstract-sphere-DfQ0c6qY.jpg": {
		"type": "image/jpeg",
		"etag": "\"1268d-OjeaGrfQBk7UMnAmKDC26UU8OOg\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 75405,
		"path": "../public/assets/abstract-sphere-DfQ0c6qY.jpg"
	},
	"/assets/contact-Yn0DatDu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2947-U3i/c8ymrH0rhV2RjDQW2Ma3fUE\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 10567,
		"path": "../public/assets/contact-Yn0DatDu.js"
	},
	"/assets/insights._slug-d2Ljf1DY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bdd-UjyMsEjA5VGRQb8963GdAFydPHA\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 3037,
		"path": "../public/assets/insights._slug-d2Ljf1DY.js"
	},
	"/assets/insights.index-CQFG9_Rk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47a-IUjPJ0Y4fJEvUUsUokXt9Tuj0d8\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 1146,
		"path": "../public/assets/insights.index-CQFG9_Rk.js"
	},
	"/assets/privacy-RrNNN4bF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b5-SmPFX+uPZjdJa6uUQPp6BW1sDBg\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 1973,
		"path": "../public/assets/privacy-RrNNN4bF.js"
	},
	"/assets/routes-wbPg-FE9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"121c-sWQrLe3mClZX0hWBrJol3T09KRA\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 4636,
		"path": "../public/assets/routes-wbPg-FE9.js"
	},
	"/assets/studio-CaupW57n.jpg": {
		"type": "image/jpeg",
		"etag": "\"211f8-QsthFC5zaoWOEBOrb71JZf4dDjg\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 135672,
		"path": "../public/assets/studio-CaupW57n.jpg"
	},
	"/assets/styles-DA5lRP_a.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15174-uki+ABvMa/xvmR4p/irJisYKT90\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 86388,
		"path": "../public/assets/styles-DA5lRP_a.css"
	},
	"/assets/terms-CSJy3fEJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"718-GcElRtBWMaEb97bK930UCrUIntA\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 1816,
		"path": "../public/assets/terms-CSJy3fEJ.js"
	},
	"/assets/services.index-halqX1JT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e59-AZfXvA4wW1yZWIfannPgABvS/Os\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 3673,
		"path": "../public/assets/services.index-halqX1JT.js"
	},
	"/assets/work-atelier-DHE0-nb5.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a997-Sqr27H67zzi9tZISAXzTt6h1M8I\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 108951,
		"path": "../public/assets/work-atelier-DHE0-nb5.jpg"
	},
	"/assets/work-kinetic-C6GAZiOl.jpg": {
		"type": "image/jpeg",
		"etag": "\"12ee4-psCVLYueyAwxDDr4S93JBccv5ho\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 77540,
		"path": "../public/assets/work-kinetic-C6GAZiOl.jpg"
	},
	"/assets/work-lume-DPHARGsE.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a05b-4fPkYf6E747lhwyCF+giMuMD/mw\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 106587,
		"path": "../public/assets/work-lume-DPHARGsE.jpg"
	},
	"/assets/work._slug-BEk8PRt1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d9a-ypQVLFlR3xELJWwFHh6Wa9Pt/4A\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 7578,
		"path": "../public/assets/work._slug-BEk8PRt1.js"
	},
	"/assets/work.index-D5v8FDAI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"55c-RkBKL4bQBdeBO0ZGc3NQbSJAYvw\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 1372,
		"path": "../public/assets/work.index-D5v8FDAI.js"
	},
	"/assets/index-D-MSjaCG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8bb5e-xTlciOSTGI1lvlhwtmdscN7hXVc\"",
		"mtime": "2026-10-07T18:19:02.226Z",
		"size": 572254,
		"path": "../public/assets/index-D-MSjaCG.js"
	},
	"/assets/work-northbank-hcUqJefi.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e23d-wZOEz1NYWDqtf570Dj/CAB0KBtw\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 123453,
		"path": "../public/assets/work-northbank-hcUqJefi.jpg"
	},
	"/assets/sections-DjHVqI9F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"61b5-ldFGFncZ1eY1/eWXbGG2VDiTU9s\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 25013,
		"path": "../public/assets/sections-DjHVqI9F.js"
	},
	"/assets/services._slug-BGLT9bux.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14e2-YP6vMtBvf5MR8FH8BNSbyIFeS+M\"",
		"mtime": "2026-10-07T18:19:02.227Z",
		"size": 5346,
		"path": "../public/assets/services._slug-BGLT9bux.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_0jRgqU = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_0jRgqU
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
