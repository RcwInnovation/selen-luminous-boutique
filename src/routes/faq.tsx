import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Preguntas Frecuentes — SELEN Jewelry | Joyería Premium Colombia" },
      { name: "description", content: "Respuestas sobre envíos nacionales e internacionales, materiales premium, joyería personalizada, cuidado de joyas en oro y esmeraldas, certificados y devoluciones. SELEN Jewelry Colombia." },
      { property: "og:title", content: "FAQ — SELEN Jewelry Colombia" },
      { property: "og:description", content: "Todo sobre envíos, materiales, joyería personalizada y certificados de autenticidad." },
      { name: "keywords", content: "preguntas joyería, FAQ joyería lujo, envíos joyería Colombia, cuidado joyas oro, certificado autenticidad joyas" },
    ],
    links: [{ rel: "canonical", href: "https://selenjewelry.com/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "¿Las joyas incluyen certificado de autenticidad?", acceptedAnswer: { "@type": "Answer", text: "Sí, cada pieza de SELEN incluye un certificado premium de autenticidad y una guía de cuidado personalizada." } },
            { "@type": "Question", name: "¿Realizan envíos internacionales?", acceptedAnswer: { "@type": "Answer", text: "Sí, enviamos a todo el mundo. Todos los envíos internacionales incluyen seguro y seguimiento completo." } },
            { "@type": "Question", name: "¿Puedo personalizar una pieza?", acceptedAnswer: { "@type": "Answer", text: "Sí, creamos joyería personalizada sobre pedido: anillos, collares, aretes y pulseras en oro con esmeraldas y diamantes." } },
            { "@type": "Question", name: "¿De qué materiales están hechas las joyas?", acceptedAnswer: { "@type": "Answer", text: "Nuestras piezas están elaboradas en oro de alta calidad con piedras naturales seleccionadas, incluyendo esmeraldas colombianas certificadas y diamantes." } },
          ],
        }),
      },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "¿Las joyas incluyen certificado de autenticidad?", a: "Sí, cada pieza de SELEN incluye un certificado premium de autenticidad y una guía de cuidado personalizada. El certificado detalla los materiales utilizados y garantiza la calidad de tu joya." },
  { q: "¿Cuánto tarda el envío?", a: "Envíos nacionales: 3 a 5 días hábiles. Envíos internacionales: 7 a 14 días hábiles. Todos los pedidos incluyen seguimiento y se envían en empaque premium de regalo." },
  { q: "¿Puedo hacer devoluciones?", a: "Aceptamos devoluciones dentro de los 15 días posteriores a la recepción, siempre que la pieza esté en su estado original con empaque y certificado. Los costos de envío de devolución corren por cuenta del cliente." },
  { q: "¿De qué materiales están hechas las joyas?", a: "Nuestras piezas están bañadas en oro champagne de alta calidad con piedras naturales seleccionadas, incluyendo esmeraldas certificadas. Utilizamos técnicas artesanales para garantizar durabilidad y belleza." },
  { q: "¿Cómo debo cuidar mis joyas SELEN?", a: "Evita el contacto con perfumes, cremas o agua. Guárdalas en su estuche original cuando no las uses. Límpialas suavemente con un paño de microfibra. Sigue la guía de cuidado incluida con tu pieza." },
  { q: "¿Realizan envíos internacionales?", a: "Sí, enviamos a todo el mundo. Los costos y tiempos de envío varían según el destino. Todos los envíos internacionales incluyen seguro y seguimiento completo." },
  { q: "¿Puedo personalizar una pieza?", a: "Actualmente estamos trabajando en opciones de personalización. Contáctanos para consultar sobre grabados especiales o pedidos personalizados." },
  { q: "¿Ofrecen garantía?", a: "Todas nuestras piezas cuentan con garantía de 6 meses contra defectos de fabricación. La garantía no cubre daños por uso indebido o desgaste natural." },
];

function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Ayuda</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-light">Preguntas Frecuentes</h1>
        <div className="gold-divider mx-auto mt-4" />
      </div>

      <div className="space-y-0">
        {faqs.map(({ q, a }) => (
          <details key={q} className="group border-b border-border/50 py-5">
            <summary className="flex justify-between items-center cursor-pointer text-sm font-medium pr-2">
              {q}
              <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90 flex-shrink-0 ml-4" />
            </summary>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
