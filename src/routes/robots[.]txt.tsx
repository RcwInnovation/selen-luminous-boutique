import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/robots.txt")({
  server: {
    GET: async () => {
      const robots = `User-agent: *
Allow: /

Sitemap: https://selenjewelry.com/sitemap.xml

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Disallow:
`;
      return new Response(robots, {
        headers: { "Content-Type": "text/plain", "Cache-Control": "public, max-age=86400" },
      });
    },
  },
});
