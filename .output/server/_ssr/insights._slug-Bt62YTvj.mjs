import { r as getInsight } from "./insights-DLbSV-QZ.mjs";
import {
  j as notFound,
  m as createFileRoute,
  p as lazyRouteComponent,
} from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights._slug-Bt62YTvj.js
var $$splitComponentImporter = () => import("./insights._slug-DDHww6bL.mjs");
var Route = createFileRoute("/insights/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const post = getInsight(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — The Pink Digital` },
          {
            name: "description",
            content: loaderData.excerpt,
          },
          {
            property: "og:title",
            content: loaderData.title,
          },
          {
            property: "og:description",
            content: loaderData.excerpt,
          },
          {
            property: "og:type",
            content: "article",
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
        ]
      : [],
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
});
//#endregion
export { Route as t };
