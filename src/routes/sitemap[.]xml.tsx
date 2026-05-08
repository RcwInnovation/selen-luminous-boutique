import { createFileRoute } from "@tanstack/react-router";

const SITE_URL = "https://selenjewelry.com";

const staticRoutes = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/coleccion", changefreq: "daily", priority: "0.9" },
  { path: "/disenos-personalizados", changefreq: "weekly", priority: "0.9" },
  { path: "/nuestra-historia", changefreq: "monthly", priority: "0.8" },
  { path: "/certificados", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/contacto", changefreq: "monthly", priority: "0.6" },
  { path: "/politica-envios", changefreq: "monthly", priority: "0.5" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const now = new Date().toISOString().split("T")[0];
        const urls = staticRoutes
          .map(
            (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
          )
          .join("\n");

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(sitemap, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
          },
        });
      },
    },
  },
});
