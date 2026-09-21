import { createFileRoute, type AnyRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import {
  isSitemapRouteIncluded,
  sitemapPathForLocation,
  sitemapStaticPaths,
  sitemapXML,
  type SitemapEntry,
} from "@/lib/sitemap";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { insights } from "@/data/insights";

const BASE_URL = "https://pixel-perfect-studio-201.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));

        const routesById = router.routesById as unknown as Record<string, AnyRoute>;
        const dynamic: { routeId: string; to: string; slugs: string[] }[] = [
          { routeId: "/work/$slug", to: "/work/$slug", slugs: projects.map((p) => p.slug) },
          { routeId: "/services/$slug", to: "/services/$slug", slugs: services.map((s) => s.slug) },
          { routeId: "/insights/$slug", to: "/insights/$slug", slugs: insights.map((i) => i.slug) },
        ];

        for (const group of dynamic) {
          if (!isSitemapRouteIncluded(routesById[group.routeId])) continue;
          for (const slug of group.slugs) {
            const location = router.buildLocation({
              to: group.to,
              params: { slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, group.routeId);
            if (path) entries.push({ path });
          }
        }

        if (entries.length === 0) {
          return new Response(
            'No pages are included in this sitemap. Check route decisions and ancestor exclusions. Setting "exclude-subtree" on the root excludes the entire site.',
            { status: 404, headers: { "Cache-Control": "no-store" } },
          );
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
