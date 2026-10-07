import { l as services } from "./insights-DLbSV-QZ.mjs";
import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-DJmJFvpB.js
var $$splitComponentImporter = () => import("./services._slug-DrWJyt0v.mjs");
var Route = createFileRoute("/services/$slug")({
	staticData: { sitemap: true },
	loader: ({ params }) => {
		const service = services.find((s) => s.slug === params.slug);
		if (!service) throw notFound();
		return service;
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.title} — The Pink Digital` },
		{
			name: "description",
			content: loaderData.summary
		},
		{
			property: "og:title",
			content: `${loaderData.title} — The Pink Digital`
		},
		{
			property: "og:description",
			content: loaderData.summary
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] : [] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
