import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { HeroSlider } from "@/components/HeroSlider";
import { Star, Shield, Gem, Heart, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["shopify-products"],
    queryFn: async () => {
      const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 12 });
      return (data?.data?.products?.edges || []) as ShopifyProduct[];
    },
  });

  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Exclusivo</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-light">Piezas Destacadas</h2>
          <div className="gold-divider mx-auto mt-4" />
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-square bg-sand rounded-lg animate-pulse" />
                <div className="h-4 bg-sand rounded w-3/4 animate-pulse" />
                <div className="h-3 bg-sand rounded w-1/2 animate-pulse" />
              </div>
            ))}
          </div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Gem className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">Próximamente nuevas piezas exclusivas.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            to="/coleccion"
            className="inline-flex items-center gap-2 border border-gold text-gold-dark px-8 py-3 rounded text-sm tracking-[0.15em] uppercase hover:bg-gold hover:text-primary-foreground transition-all duration-300"
          >
            Ver toda la colección
          </Link>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-cream-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Nuestra Esencia</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-light mb-6">Nace de la luz más pura</h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Inspirada en Selene, símbolo de belleza, misterio y luz en la oscuridad, SELEN Jewelry nace del amor de una madre por su hija.
            La marca representa esa energía femenina que guía, protege y brilla incluso en silencio.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl mx-auto italic font-heading text-lg">
            "Cada pieza de SELEN no es solo una joya... es un fragmento de luz convertido en oro."
          </p>
          <Link
            to="/nuestra-historia"
            className="inline-flex items-center gap-2 mt-8 text-gold-dark text-sm tracking-[0.15em] uppercase hover:text-gold transition-colors"
          >
            Conocer nuestra historia <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Emerald Collection Highlight */}
      <section className="py-20 bg-foreground text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-2">Colección Especial</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-light mb-4">El Brillo de la Esmeralda</h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            La esmeralda, piedra de la sabiduría y el renacimiento, se encuentra con el oro champagne en una colección que celebra la fuerza y la delicadeza femenina.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Gem, label: "Esmeraldas Naturales" },
              { icon: Shield, label: "Certificado Premium" },
              { icon: Star, label: "Acabado Artesanal" },
              { icon: Heart, label: "Diseño con Alma" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="text-center">
                <div className="w-12 h-12 rounded-full border border-gold-light/30 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-gold-light" />
                </div>
                <p className="text-xs tracking-wide text-primary-foreground/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Testimonios</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-light">Lo que dicen nuestras clientas</h2>
          <div className="gold-divider mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { text: "La pieza más hermosa que he recibido. La calidad y el diseño superaron mis expectativas. SELEN es sinónimo de elegancia.", name: "María C." },
            { text: "Regalé un collar Luna Esmeralda a mi madre y lloró de emoción. Cada detalle cuenta una historia. Simplemente perfecto.", name: "Valentina R." },
            { text: "La joyería de SELEN tiene algo especial: te hace sentir única. El empaque, la pieza, todo es una experiencia premium.", name: "Isabella M." },
          ].map(({ text, name }) => (
            <div key={name} className="bg-cream p-8 rounded-lg border border-border/30">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">"{text}"</p>
              <p className="mt-4 text-xs tracking-wider uppercase text-gold-dark font-medium">— {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-sand py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Exclusivo para ti</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-light mb-3">Únete a nuestra comunidad</h2>
          <p className="text-sm text-muted-foreground mb-6">Recibe las últimas novedades, acceso anticipado a nuevas colecciones y ofertas exclusivas.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded bg-background border border-border text-sm focus:outline-none focus:border-gold"
            />
            <button type="submit" className="bg-gold-gradient text-primary-foreground px-6 py-3 rounded text-sm tracking-wider uppercase font-medium shimmer">
              Suscribirse
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Ayuda</p>
          <h2 className="font-heading text-3xl font-light">Preguntas Frecuentes</h2>
          <div className="gold-divider mx-auto mt-4" />
        </div>
        {[
          { q: "¿Las joyas incluyen certificado de autenticidad?", a: "Sí, cada pieza de SELEN incluye un certificado premium de autenticidad y una guía de cuidado." },
          { q: "¿Cuánto tarda el envío?", a: "Los envíos nacionales tardan de 3 a 5 días hábiles. Envíos internacionales de 7 a 14 días hábiles." },
          { q: "¿Puedo hacer devoluciones?", a: "Aceptamos devoluciones dentro de los 15 días posteriores a la recepción, siempre que la pieza esté en su estado original." },
        ].map(({ q, a }) => (
          <details key={q} className="group border-b border-border/50 py-4">
            <summary className="flex justify-between items-center cursor-pointer text-sm font-medium">
              {q}
              <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed pl-0">{a}</p>
          </details>
        ))}
        <div className="text-center mt-8">
          <Link to="/faq" className="text-gold-dark text-sm tracking-wider uppercase hover:text-gold transition-colors">
            Ver todas las preguntas →
          </Link>
        </div>
      </section>
    </>
  );
}
