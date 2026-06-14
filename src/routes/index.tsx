import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { HeroSlider } from "@/components/HeroSlider";
import { Star, Shield, Gem, Heart, ChevronRight, Globe } from "lucide-react";
import model1 from "@/assets/model-1.jpg";
import model2 from "@/assets/model-2.jpg";
import model3 from "@/assets/model-3.jpg";
import model4 from "@/assets/model-4.jpg";
import emeraldCertAsset from "@/assets/emerald-certificate.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SELEN Jewelry | Alta Joyería y Esmeraldas Colombianas de Lujo" },
      { name: "description", content: "Alta joyería en oro de 18k y esmeraldas colombianas auténticas con certificación. Diseños exclusivos con envío nacional e internacional. Entre aquí." },
      { property: "og:title", content: "SELEN Jewelry | Alta Joyería y Esmeraldas Colombianas de Lujo" },
      { property: "og:description", content: "Joyería femenina premium con esmeraldas colombianas y oro. Diseños personalizados y piezas sobre pedido. Hecho en Colombia." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://selenjewelry.com" },
      { name: "keywords", content: "joyería de lujo, luxury jewelry, joyería premium femenina, joyas con esmeraldas, emerald jewelry, gold jewelry, joyería personalizada, custom jewelry, fine jewelry, handcrafted jewelry, diamond jewelry, joyería exclusiva, alta joyería femenina, joyería Colombia, SELEN Jewelry" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    ],
    links: [
      { rel: "canonical", href: "https://selenjewelry.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JewelryStore",
          name: "SELEN Jewelry",
          url: "https://selenjewelry.com",
          logo: "https://selenjewelry.com/icon-512.png",
          description: "SELEN Jewelry es una marca colombiana de joyería femenina premium. Creamos piezas únicas artesanales en oro 18K con esmeraldas colombianas certificadas y diamantes. Ofrecemos joyería personalizada y diseños sobre pedido.",
          address: { "@type": "PostalAddress", addressLocality: "Bogotá", addressRegion: "Cundinamarca", addressCountry: "CO" },
          telephone: "+573001234567",
          email: "contacto@selenjewelry.com",
          priceRange: "$$$",
          openingHours: "Mo-Fr 09:00-18:00, Sa 10:00-14:00",
          sameAs: [],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Colección SELEN Jewelry",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Anillos de oro con esmeraldas", category: "Jewelry" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Collares artesanales en oro", category: "Jewelry" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Aretes con diamantes y esmeraldas", category: "Jewelry" } },
              { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pulseras de lujo en oro 18K", category: "Jewelry" } },
            ],
          },
          makesOffer: {
            "@type": "Offer",
            name: "Joyería Personalizada",
            description: "Diseño y creación de piezas únicas sobre pedido en oro, diamantes y esmeraldas colombianas.",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "SELEN Jewelry",
          url: "https://selenjewelry.com",
          description: "Joyería femenina de lujo hecha en Colombia. Oro, esmeraldas y diamantes. Diseños personalizados.",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://selenjewelry.com/coleccion?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
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

      {/* Shipping Banner */}
      <section className="bg-foreground text-primary-foreground py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 text-center">
          <Globe className="w-4 h-4 text-gold-light flex-shrink-0" />
          <p className="text-[11px] sm:text-xs tracking-[0.12em]">
            <strong className="text-gold-light font-medium">Entrega inmediata</strong> en referencias seleccionadas
            <span className="opacity-60 mx-2">·</span>
            <span className="text-primary-foreground/90">Envíos nacionales e internacionales</span>
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Colección Exclusiva</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-light">Piezas Destacadas de Alta Joyería</h2>
          <div className="gold-divider mx-auto mt-4" />
          <p className="text-muted-foreground mt-4 text-sm max-w-lg mx-auto">Joyería premium artesanal en oro con esmeraldas colombianas y diamantes certificados.</p>
        </div>

        {/* Editorial model gallery — desktop only, borderless */}
        <div className="hidden lg:grid grid-cols-4 gap-0 mb-16 -mx-4 sm:-mx-6 lg:-mx-8">
          {[
            { src: model1, alt: "Dije de esmeralda colombiana con halo de diamantes en oro 18K — SELEN" },
            { src: model2, alt: "Anillo de cóctel con esmeralda colombiana corte cojín y diamantes en oro 18K — SELEN" },
            { src: model3, alt: "Arete topo de esmeralda colombiana verde vibrante en oro — SELEN" },
            { src: model4, alt: "Pulsera de eslabones en oro 18K con esmeraldas y diamantes — SELEN" },
          ].map((img) => (
            <div key={img.alt} className="relative aspect-[4/5] overflow-hidden group">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
          ))}
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

      {/* Custom Jewelry CTA */}
      <section className="bg-cream-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Exclusivo</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-light mb-6">Joyería Personalizada Sobre Pedido</h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            ¿Sueñas con una pieza única? En SELEN creamos joyería personalizada: anillos de compromiso, collares, aretes y pulseras en oro 18K con esmeraldas colombianas y diamantes. Cada diseño es una obra de arte artesanal creada exclusivamente para ti.
          </p>
          <Link
            to="/disenos-personalizados"
            className="inline-flex items-center gap-2 mt-8 bg-gold-gradient text-primary-foreground px-8 py-3 rounded text-sm tracking-[0.15em] uppercase shimmer hover:opacity-90 transition-opacity"
          >
            Crear mi pieza personalizada <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Nuestra Esencia</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-light mb-6">Nace de la Luz Más Pura</h2>
          <div className="gold-divider mx-auto mb-8" />
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Inspirada en Selene, símbolo de belleza, misterio y luz en la oscuridad, SELEN Jewelry nace del amor de una madre por su hija.
            La marca representa esa energía femenina que guía, protege y brilla incluso en silencio. Somos una casa de joyería colombiana que trabaja con oro, diamantes y esmeraldas de la más alta calidad.
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
      <section className="py-20 bg-foreground text-primary-foreground overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[42%_58%] lg:gap-14 lg:items-center">
            {/* Title */}
            <div className="order-1 lg:col-start-1 lg:row-start-1 text-center lg:text-left">
              <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-2">Colección Especial</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-light mb-4">El Brillo de la Esmeralda Colombiana</h2>
              <div className="gold-divider mx-auto lg:mx-0" />
            </div>

            {/* Description */}
            <div className="order-3 lg:order-none lg:col-start-1 lg:row-start-2 text-center lg:text-left">
              <p className="text-primary-foreground/70 max-w-2xl mx-auto lg:mx-0">
                La esmeralda colombiana, piedra de la sabiduría y el renacimiento, se encuentra con el oro en una colección que celebra la fuerza y la delicadeza femenina. Piezas únicas de alta joyería artesanal.
              </p>
            </div>

            {/* Premium Photograph */}
            <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:self-stretch relative min-h-[280px] sm:min-h-[360px] lg:min-h-[520px] -mx-4 sm:-mx-6 lg:mx-0 lg:-mr-8 xl:-mr-12">
              <img
                src={emeraldCertAsset.url}
                alt="Anillo de esmeralda colombiana con certificado gemológico — alta joyería SELEN"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Fade overlay: vertical (top/bottom) on all sizes */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--foreground) 0%, transparent 22%, transparent 78%, var(--foreground) 100%)",
                }}
              />
              {/* Horizontal fade on desktop: deep left → image right */}
              <div
                className="absolute inset-0 pointer-events-none hidden lg:block"
                style={{
                  background:
                    "linear-gradient(to right, var(--foreground) 0%, var(--foreground) 18%, color-mix(in oklab, var(--foreground), transparent 40%) 38%, transparent 62%)",
                }}
              />
              {/* Subtle right-edge fade on desktop to blend the photo edge */}
              <div
                className="absolute inset-0 pointer-events-none hidden lg:block"
                style={{
                  background:
                    "linear-gradient(to left, var(--foreground) 0%, transparent 12%)",
                }}
              />

            </div>

            {/* Benefits */}
            <div className="order-4 lg:order-none lg:col-start-1 lg:row-start-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-6 max-w-3xl mx-auto lg:mx-0">
                {[
                  { icon: Gem, label: "Esmeraldas Colombianas Naturales" },
                  { icon: Shield, label: "Certificado de Autenticidad" },
                  { icon: Star, label: "Acabado Artesanal Premium" },
                  { icon: Heart, label: "Diseño con Alma y Significado" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="text-center lg:text-left lg:flex lg:items-center lg:gap-3">
                    <div className="w-12 h-12 shrink-0 rounded-full border border-gold-light/30 flex items-center justify-center mx-auto lg:mx-0 mb-3 lg:mb-0">
                      <Icon className="w-5 h-5 text-gold-light" />
                    </div>
                    <p className="text-xs tracking-wide text-primary-foreground/70">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Testimonios</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-light">Lo Que Dicen Nuestras Clientas</h2>
          <div className="gold-divider mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { text: "La pieza más hermosa que he recibido. La calidad y el diseño superaron mis expectativas. SELEN es sinónimo de elegancia y lujo.", name: "María C.", loc: "Bogotá" },
            { text: "Pedí un anillo personalizado con esmeralda y el resultado fue espectacular. El proceso fue fácil y el resultado superó todo lo que imaginé.", name: "Valentina R.", loc: "Medellín" },
            { text: "La joyería de SELEN tiene algo especial: te hace sentir única. El empaque, la pieza, la atención... todo es una experiencia premium.", name: "Isabella M.", loc: "Cali" },
          ].map(({ text, name, loc }) => (
            <div key={name} className="bg-cream p-8 rounded-lg border border-border/30">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">"{text}"</p>
              <p className="mt-4 text-xs tracking-wider uppercase text-gold-dark font-medium">— {name}, {loc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-sand py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Exclusivo para Ti</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-light mb-3">Únete a Nuestra Comunidad</h2>
          <p className="text-sm text-muted-foreground mb-6">Recibe las últimas novedades en joyería de lujo, acceso anticipado a nuevas colecciones y ofertas exclusivas.</p>
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
          { q: "¿Realizan envíos a todo Colombia e internacionales?", a: "Sí, enviamos a cualquier ciudad de Colombia y realizamos envíos internacionales a todo el mundo con seguimiento y seguro incluido." },
          { q: "¿Puedo solicitar una pieza personalizada?", a: "Absolutamente. Creamos joyería personalizada sobre pedido: anillos, collares, aretes y pulseras en oro con esmeraldas y diamantes. Contáctanos para iniciar tu diseño." },
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
