import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — SELEN Jewelry" },
      { name: "description", content: "Ponte en contacto con SELEN Jewelry. Estamos aquí para ayudarte con cualquier consulta." },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Hablemos</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-light">Contacto</h1>
        <div className="gold-divider mx-auto mt-4" />
        <p className="text-muted-foreground mt-4 text-sm">Estamos aquí para ti. Escríbenos y te responderemos con gusto.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div>
            <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Nombre</label>
            <input type="text" className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors" placeholder="tu@email.com" />
          </div>
          <div>
            <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Asunto</label>
            <input type="text" className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors" placeholder="¿En qué podemos ayudarte?" />
          </div>
          <div>
            <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-1.5">Mensaje</label>
            <textarea rows={5} className="w-full px-4 py-3 rounded bg-cream border border-border text-sm focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Escribe tu mensaje..." />
          </div>
          <button type="submit" className="w-full bg-gold-gradient text-primary-foreground py-3.5 rounded font-medium text-sm tracking-[0.15em] uppercase shimmer hover:opacity-90 transition-opacity">
            Enviar Mensaje
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8 md:pl-8">
          <div>
            <h3 className="font-heading text-xl mb-4">Información de Contacto</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "contacto@selenjewelry.com" },
                { icon: Phone, label: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Ciudad de México, México" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cream p-6 rounded-lg border border-border/30">
            <h4 className="font-heading text-lg mb-2">Horario de Atención</h4>
            <p className="text-sm text-muted-foreground">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p className="text-sm text-muted-foreground">Sábados: 10:00 AM - 2:00 PM</p>
            <p className="text-xs text-muted-foreground/60 mt-2">Respondemos en menos de 24 horas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
