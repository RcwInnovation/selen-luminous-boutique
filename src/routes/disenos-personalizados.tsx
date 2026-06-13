import { createFileRoute, Link } from "@tanstack/react-router";
import { Gem, Sparkles, Crown, Heart, Send, Phone, Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import atelierImg from "@/assets/custom-jewelry-atelier.jpg";
import ringImg from "@/assets/custom-ring.jpg";
import necklaceImg from "@/assets/custom-necklace.jpg";
import earringsImg from "@/assets/custom-earrings.jpg";

export const Route = createFileRoute("/disenos-personalizados")({
  head: () => ({
    meta: [
      { title: "Diseños Personalizados — Joyería a Medida | SELEN Jewelry Colombia" },
      { name: "description", content: "Crea tu joya soñada con SELEN Jewelry. Diseños personalizados en oro, diamantes y esmeraldas colombianas. Anillos, collares, aretes y pulseras sobre pedido. Alta joyería artesanal hecha en Colombia." },
      { property: "og:title", content: "Diseños Personalizados — Joyería a Medida | SELEN Jewelry" },
      { property: "og:description", content: "Crea piezas únicas sobre pedido: anillos, collares, aretes y pulseras en oro con diamantes y esmeraldas colombianas. Experiencia atelier de lujo." },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "joyería personalizada, custom jewelry, joyería sobre pedido, anillos personalizados, joyería a medida Colombia, diseño de joyas, emerald jewelry custom, gold jewelry custom design" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Diseños Personalizados — SELEN Jewelry",
          description: "Servicio de diseño y creación de joyería personalizada en oro, diamantes y esmeraldas colombianas. Piezas únicas sobre pedido.",
          provider: {
            "@type": "Organization",
            name: "SELEN Jewelry",
            url: "https://selenjewelry.com",
            address: { "@type": "PostalAddress", addressLocality: "Bogotá", addressCountry: "CO" },
          },
          areaServed: { "@type": "Country", name: "Colombia" },
          serviceType: "Custom Jewelry Design",
        }),
      },
    ],
  }),
  component: DisenosPersonalizadosPage,
});

const categories = [
  { img: ringImg, title: "Anillos", desc: "Anillos de compromiso, anillos de oro con esmeraldas y diamantes, diseños exclusivos sobre pedido." },
  { img: necklaceImg, title: "Collares", desc: "Collares artesanales en oro con piedras preciosas. Piezas únicas que cuentan tu historia." },
  { img: earringsImg, title: "Aretes & Pulseras", desc: "Aretes y pulseras personalizados en oro con esmeraldas colombianas y diamantes certificados." },
];

function DisenosPersonalizadosPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", pieceType: "", materials: "", description: "", budget: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.pieceType || !form.description) {
      toast.error("Por favor completa los campos requeridos.");
      return;
    }
    toast.success("Solicitud enviada", { description: "Nuestro equipo de diseño se pondrá en contacto contigo en menos de 24 horas." });
    setForm({ name: "", email: "", phone: "", pieceType: "", materials: "", description: "", budget: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={atelierImg} alt="Atelier de joyería artesanal SELEN — creación de piezas personalizadas en oro y esmeraldas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 py-24 sm:py-32 text-center text-primary-foreground">
          <Crown className="w-10 h-10 text-gold-light mx-auto mb-4" />
          <p className="text-xs tracking-[0.4em] uppercase text-gold-light mb-3">Experiencia Atelier</p>
          <h1 className="font-heading text-4xl sm:text-6xl font-light leading-tight">Diseños Personalizados</h1>
          <div className="gold-divider mx-auto mt-6 mb-6" />
          <p className="text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            En SELEN creamos piezas únicas sobre pedido. Cada joya personalizada es una obra de arte artesanal en oro, diamantes y esmeraldas colombianas, diseñada exclusivamente para ti.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        <Sparkles className="w-8 h-8 text-gold mx-auto mb-4" />
        <h2 className="font-heading text-3xl sm:text-4xl font-light mb-6">Tu Visión, Nuestra Artesanía</h2>
        <div className="gold-divider mx-auto mb-8" />
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Desde anillos de compromiso con esmeraldas colombianas hasta collares de oro con diamantes, nuestro equipo de joyeros artesanales transforma tu idea en una pieza de alta joyería. Trabajamos con oro de 18K, esmeraldas naturales certificadas y diamantes seleccionados para crear joyas que trascienden generaciones.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          {[
            { icon: Gem, label: "Esmeraldas Colombianas" },
            { icon: Crown, label: "Oro 18K Premium" },
            { icon: Star, label: "Diamantes Certificados" },
            { icon: Heart, label: "Diseño con Alma" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="text-center">
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-3 bg-cream">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <p className="text-xs tracking-wider text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories gallery */}
      <section className="bg-cream-gradient py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Categorías</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light">Piezas que Podemos Crear para Ti</h2>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map(({ img, title, desc }) => (
              <article key={title} className="group relative rounded-xl overflow-hidden shadow-lg">
                <img src={img} alt={`Joyería personalizada SELEN — ${title} en oro con esmeraldas y diamantes`} className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={640} height={800} />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="font-heading text-2xl font-light mb-2">{title}</h3>
                  <p className="text-xs text-primary-foreground/70 leading-relaxed">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-foreground text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-2">Proceso</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-light mb-12">Cómo Funciona</h2>
          <div className="grid sm:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consulta", desc: "Cuéntanos tu visión. Escuchamos cada detalle de la pieza que deseas." },
              { step: "02", title: "Diseño", desc: "Nuestros joyeros crean bocetos y propuestas exclusivas para ti." },
              { step: "03", title: "Creación", desc: "Artesanos expertos dan vida a tu joya con materiales premium." },
              { step: "04", title: "Entrega", desc: "Tu pieza única llega con certificado de autenticidad y empaque de lujo." },
            ].map(({ step, title, desc }) => (
              <div key={step}>
                <span className="text-3xl font-heading text-gold-light">{step}</span>
                <h3 className="font-heading text-lg mt-2 mb-2">{title}</h3>
                <p className="text-xs text-primary-foreground/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom request form */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6" id="solicitar">
        <div className="text-center mb-14">
          <Send className="w-8 h-8 text-gold mx-auto mb-4" />
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Solicitud</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-light">Solicita Tu Pieza Personalizada</h2>
          <div className="gold-divider mx-auto mt-4" />
          <p className="text-muted-foreground mt-4 text-sm max-w-lg mx-auto">
            Completa el formulario y nuestro equipo de diseño se pondrá en contacto contigo en menos de 24 horas para iniciar la creación de tu joya soñada.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div>
            <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Nombre completo *</label>
            <input type="text" value={form.name} onChange={update("name")} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Tu nombre" required />
          </div>
          <div>
            <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Correo electrónico *</label>
            <input type="email" value={form.email} onChange={update("email")} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors" placeholder="tu@email.com" required />
          </div>
          <div>
            <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Teléfono / WhatsApp</label>
            <input type="tel" value={form.phone} onChange={update("phone")} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors" placeholder="+57 321 8891493" />
          </div>
          <div>
            <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Tipo de pieza *</label>
            <select value={form.pieceType} onChange={update("pieceType")} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors" required>
              <option value="">Seleccionar...</option>
              <option value="anillo">Anillo</option>
              <option value="collar">Collar</option>
              <option value="aretes">Aretes</option>
              <option value="pulsera">Pulsera</option>
              <option value="set-completo">Set completo</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div>
            <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Materiales preferidos</label>
            <select value={form.materials} onChange={update("materials")} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors">
              <option value="">Seleccionar...</option>
              <option value="oro-esmeraldas">Oro + Esmeraldas</option>
              <option value="oro-diamantes">Oro + Diamantes</option>
              <option value="oro-mixto">Oro + Esmeraldas y Diamantes</option>
              <option value="oro-solo">Solo Oro</option>
              <option value="no-seguro">No estoy seguro(a)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Presupuesto estimado</label>
            <select value={form.budget} onChange={update("budget")} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors">
              <option value="">Seleccionar...</option>
              <option value="500k-1m">$500.000 – $1.000.000 COP</option>
              <option value="1m-3m">$1.000.000 – $3.000.000 COP</option>
              <option value="3m-5m">$3.000.000 – $5.000.000 COP</option>
              <option value="5m+">Más de $5.000.000 COP</option>
              <option value="flexible">Flexible / Consultar</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Describe tu pieza soñada *</label>
            <textarea value={form.description} onChange={update("description")} rows={5} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Cuéntanos los detalles: estilo, ocasión, piedras, grabados especiales, referencia de diseño..." required />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="w-full bg-gold-gradient text-primary-foreground py-3.5 rounded font-medium text-sm tracking-[0.15em] uppercase shimmer hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Enviar Solicitud de Diseño Personalizado
            </button>
          </div>
        </form>

        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">¿Prefieres hablar directamente? Contáctanos por WhatsApp:</p>
          <a href="https://wa.me/573218891493" className="inline-flex items-center gap-2 mt-2 text-gold-dark text-sm font-medium hover:text-gold transition-colors">
            <Phone className="w-4 h-4" /> +57 321 8891493
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-light mb-4">Envíos a Todo Colombia e Internacionales</h2>
          <p className="text-sm text-muted-foreground mb-6">Tu pieza personalizada llega a cualquier parte de Colombia con envío asegurado. También realizamos envíos internacionales a todo el mundo.</p>
          <Link to="/politica-envios" className="inline-flex items-center gap-2 border border-gold text-gold-dark px-6 py-2.5 rounded text-sm tracking-wider uppercase hover:bg-gold hover:text-primary-foreground transition-all">
            Ver política de envíos
          </Link>
        </div>
      </section>
    </div>
  );
}
