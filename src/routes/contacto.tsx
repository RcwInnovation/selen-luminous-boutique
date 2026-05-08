import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send, Globe, Gem } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — SELEN Jewelry | Joyería Premium Colombia" },
      { name: "description", content: "Contacta a SELEN Jewelry en Bogotá, Colombia. Consultas sobre joyería personalizada, pedidos sobre medida, envíos nacionales e internacionales. Joyería de lujo con esmeraldas y oro." },
      { property: "og:title", content: "Contacto — SELEN Jewelry Colombia" },
      { property: "og:description", content: "Escríbenos para consultas sobre joyería personalizada, piezas sobre pedido o envíos. Bogotá, Colombia." },
      { name: "keywords", content: "contacto joyería Colombia, SELEN Jewelry contacto, joyería personalizada Bogotá, custom jewelry Colombia" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JewelryStore",
          name: "SELEN Jewelry",
          url: "https://selenjewelry.com",
          email: "contacto@selenjewelry.com",
          telephone: "+573001234567",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bogotá",
            addressLocality: "Bogotá",
            addressRegion: "Cundinamarca",
            postalCode: "110111",
            addressCountry: "CO",
          },
          geo: { "@type": "GeoCoordinates", latitude: 4.711, longitude: -74.0721 },
          openingHours: "Mo-Fr 09:00-18:00, Sa 10:00-14:00",
          priceRange: "$$$",
          description: "Joyería femenina premium con esmeraldas colombianas y oro. Diseños personalizados y piezas sobre pedido.",
        }),
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", interest: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Por favor completa los campos requeridos.");
      return;
    }
    toast.success("Mensaje enviado", { description: "Te responderemos en menos de 24 horas." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "", interest: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Hablemos</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-light">Contacto</h1>
        <div className="gold-divider mx-auto mt-4" />
        <p className="text-muted-foreground mt-4 text-sm max-w-lg mx-auto">
          Estamos aquí para ayudarte con cualquier consulta sobre nuestras piezas, joyería personalizada o pedidos sobre medida.
        </p>
      </div>

      {/* Shipping Banner */}
      <div className="bg-foreground text-primary-foreground rounded-xl p-6 sm:p-8 mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Globe className="w-5 h-5 text-gold-light" />
          <h2 className="font-heading text-xl sm:text-2xl font-light">Envíos a Todo Colombia y al Mundo</h2>
        </div>
        <p className="text-primary-foreground/70 text-sm max-w-xl mx-auto">
          Realizamos envíos a cualquier ciudad de Colombia y envíos internacionales a todo el mundo. Tu joya llega asegurada, con seguimiento y en empaque premium de regalo.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Nombre *</label>
              <input type="text" value={form.name} onChange={update("name")} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Tu nombre" required />
            </div>
            <div>
              <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Email *</label>
              <input type="email" value={form.email} onChange={update("email")} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors" placeholder="tu@email.com" required />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Teléfono / WhatsApp</label>
              <input type="tel" value={form.phone} onChange={update("phone")} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors" placeholder="+57 300 123 4567" />
            </div>
            <div>
              <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Interés</label>
              <select value={form.interest} onChange={update("interest")} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors">
                <option value="">Seleccionar...</option>
                <option value="pieza-personalizada">Pieza personalizada</option>
                <option value="consulta-producto">Consulta sobre producto</option>
                <option value="envio">Información de envío</option>
                <option value="devolucion">Devolución o cambio</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Asunto</label>
            <input type="text" value={form.subject} onChange={update("subject")} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors" placeholder="¿En qué podemos ayudarte?" />
          </div>
          <div>
            <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Mensaje *</label>
            <textarea value={form.message} onChange={update("message")} rows={5} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Si deseas una pieza personalizada, cuéntanos: tipo de joya, materiales, piedras, ocasión, presupuesto estimado..." required />
          </div>
          <button type="submit" className="w-full bg-gold-gradient text-primary-foreground py-3.5 rounded font-medium text-sm tracking-[0.15em] uppercase shimmer hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            <Send className="w-4 h-4" /> Enviar Mensaje
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8 md:pl-8">
          <div>
            <h3 className="font-heading text-xl mb-4">Información de Contacto</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "contacto@selenjewelry.com", href: "mailto:contacto@selenjewelry.com" },
                { icon: Phone, label: "+57 300 123 4567 (WhatsApp)", href: "https://wa.me/573001234567" },
                { icon: MapPin, label: "Bogotá, Colombia 🇨🇴", href: undefined },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-gold transition-colors">{label}</a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cream p-6 rounded-lg border border-border/30">
            <h4 className="font-heading text-lg mb-2">Horario de Atención</h4>
            <p className="text-sm text-muted-foreground">Lunes a Viernes: 9:00 AM - 6:00 PM (COT)</p>
            <p className="text-sm text-muted-foreground">Sábados: 10:00 AM - 2:00 PM</p>
            <p className="text-xs text-muted-foreground/60 mt-2">Respondemos en menos de 24 horas.</p>
          </div>

          <div className="bg-cream p-6 rounded-lg border border-border/30">
            <div className="flex items-center gap-2 mb-2">
              <Gem className="w-4 h-4 text-gold" />
              <h4 className="font-heading text-lg">¿Quieres una pieza personalizada?</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Creamos joyas únicas sobre pedido en oro, diamantes y esmeraldas colombianas. Cuéntanos tu visión y la hacemos realidad.
            </p>
            <Link to="/disenos-personalizados" className="inline-flex items-center gap-2 text-gold-dark text-sm font-medium hover:text-gold transition-colors tracking-wider uppercase">
              Ver diseños personalizados →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
