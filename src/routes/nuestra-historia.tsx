import { createFileRoute } from "@tanstack/react-router";
import { Heart, Moon, Sparkles } from "lucide-react";
import selenHistoria from "@/assets/selen-historia.png";

export const Route = createFileRoute("/nuestra-historia")({
  head: () => ({
    meta: [
      { title: "Nuestra Historia — SELEN Jewelry | Joyería Artesanal Colombia" },
      { name: "description", content: "Descubre el origen de SELEN Jewelry: el amor de una madre, la inspiración en Selene y la creación de joyería artesanal premium en oro con esmeraldas colombianas. Handcrafted luxury jewelry from Colombia." },
      { property: "og:title", content: "Nuestra Historia — SELEN Jewelry Colombia" },
      { property: "og:description", content: "SELEN nace del amor de una madre por su hija. Joyería artesanal premium inspirada en Selene, diosa de la luna." },
      { name: "keywords", content: "historia SELEN Jewelry, joyería artesanal Colombia, handcrafted jewelry, marca joyería colombiana, luxury brand story" },
    ],
    links: [{ rel: "canonical", href: "https://selenjewelry.com/nuestra-historia" }],
  }),
  component: NuestraHistoriaPage,
});

function NuestraHistoriaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-cream-gradient py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-3">Nuestra Esencia</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-light leading-tight">Nace de la luz más pura</h1>
          <div className="gold-divider mx-auto mt-6" />
        </div>
      </section>

      {/* Photo + intro */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src={selenHistoria}
              alt="SELEN Jewelry — Madre e hija con joyas de esmeralda"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>
          <div className="space-y-6">
            <Moon className="w-8 h-8 text-gold" />
            <h2 className="font-heading text-2xl sm:text-3xl font-light">El amor de una madre por su hija</h2>
            <p className="text-muted-foreground leading-relaxed">
              SELEN nace de la luz más pura: el amor incondicional de una madre por su hija. Esa conexión profunda,
              esa energía que protege y guía, se convirtió en la inspiración para crear algo que perdurara para siempre.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada pieza lleva consigo esa esencia: la calidez del abrazo materno convertida en oro y esmeraldas.
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-12">
        <div className="text-center">
          <Sparkles className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="font-heading text-2xl sm:text-3xl font-light mb-6">Inspirada en Selene</h2>
          <p className="text-muted-foreground leading-relaxed">
            Selene, la diosa griega de la luna, es símbolo de belleza, misterio y luz en la oscuridad.
            SELEN representa esa energía femenina que guía, protege y brilla incluso en silencio.
            Así como la luna ilumina la noche, SELEN busca resaltar la luz única de cada mujer: su esencia, su historia, su poder.
          </p>
        </div>

        <div className="text-center">
          <Heart className="w-8 h-8 text-gold mx-auto mb-6" />
          <h2 className="font-heading text-2xl sm:text-3xl font-light mb-6">Nuestra Misión</h2>
          <p className="text-muted-foreground leading-relaxed">
            Cada pieza de SELEN no es solo una joya... es un fragmento de luz convertido en oro.
            Creamos piezas que trascienden lo material: joyas con alma, con historia, con significado.
            Porque creemos que la verdadera belleza nace de lo auténtico, de lo emocional, de lo que se siente con el corazón.
          </p>
        </div>

        <blockquote className="bg-cream p-8 sm:p-12 rounded-lg text-center border border-border/30">
          <p className="font-heading text-xl sm:text-2xl font-light italic text-gold-dark leading-relaxed">
            "Así como la luna ilumina la noche, SELEN busca resaltar la luz única de cada mujer: su esencia, su historia, su poder."
          </p>
        </blockquote>
      </section>
    </div>
  );
}
