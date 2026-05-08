import { createFileRoute } from "@tanstack/react-router";
import { Calendar } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog de Joyería — SELEN Jewelry | Tendencias, Cuidado y Estilo" },
      { name: "description", content: "Blog de joyería de lujo: artículos sobre tendencias en alta joyería, cuidado de piezas en oro y esmeraldas, estilo elegante femenino, significado de las gemas y guías de regalos premium." },
      { property: "og:title", content: "Blog de Joyería — SELEN Jewelry" },
      { property: "og:description", content: "Tendencias, cuidado de joyas, estilo elegante y guías de regalos en joyería de lujo." },
      { name: "keywords", content: "blog joyería lujo, tendencias joyería, cuidado joyas oro, estilo joyería femenina, jewelry blog, luxury jewelry trends" },
    ],
    links: [{ rel: "canonical", href: "https://selenjewelry.com/blog" }],
  }),
  component: BlogPage,
});

const articles = [
  {
    title: "5 formas de combinar joyería con tu outfit diario",
    excerpt: "Descubre cómo las piezas de SELEN pueden transformar un look simple en un statement de elegancia.",
    date: "2025-05-01",
    category: "Estilo",
  },
  {
    title: "El significado emocional de regalar una joya",
    excerpt: "Una joya es más que un accesorio: es un símbolo de amor, conexión y recuerdos que perduran.",
    date: "2025-04-20",
    category: "Inspiración",
  },
  {
    title: "Cómo cuidar tus piezas bañadas en oro",
    excerpt: "Guía completa para mantener el brillo y la elegancia de tus joyas SELEN por mucho más tiempo.",
    date: "2025-04-10",
    category: "Cuidado",
  },
  {
    title: "Esmeraldas: la piedra de la sabiduría y el renacimiento",
    excerpt: "Conoce la historia y el significado detrás de la esmeralda, piedra protagonista de nuestra colección.",
    date: "2025-03-28",
    category: "Joyería",
  },
];

function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">SELEN Journal</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-light">Blog</h1>
        <div className="gold-divider mx-auto mt-4" />
      </div>

      <div className="space-y-8">
        {articles.map((article) => (
          <article key={article.title} className="group border-b border-border/30 pb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs tracking-wider uppercase text-gold-dark bg-cream px-2 py-1 rounded">{article.category}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {new Date(article.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
              </span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-light group-hover:text-gold-dark transition-colors cursor-pointer">
              {article.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{article.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
