import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, Globe, Clock, Shield, MapPin, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/politica-envios")({
  head: () => ({
    meta: [
      { title: "Envíos Nacionales e Internacionales — SELEN Jewelry Colombia" },
      { name: "description", content: "Envíos de joyería a toda Colombia y envíos internacionales a cualquier parte del mundo. Empaque premium, seguimiento y seguro incluido. SELEN Jewelry — joyería de lujo desde Bogotá, Colombia." },
      { property: "og:title", content: "Política de Envíos — SELEN Jewelry Colombia" },
      { property: "og:description", content: "Envíos nacionales a toda Colombia e internacionales a todo el mundo. Empaque de lujo y seguro incluido." },
      { name: "keywords", content: "envíos joyería Colombia, envío internacional joyas, shipping jewelry Colombia, empaque premium joyería" },
    ],
    links: [{ rel: "canonical", href: "https://selenjewelry.com/politica-envios" }],
  }),
  component: PoliticaEnviosPage,
});

function PoliticaEnviosPage() {
  return (
    <div>
      <section className="bg-cream-gradient py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-3">SELEN Jewelry</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-light leading-tight">Política de Envíos</h1>
          <div className="gold-divider mx-auto mt-6" />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        {/* Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: MapPin, label: "Desde Colombia", desc: "Bogotá, CO" },
            { icon: Globe, label: "Envío Mundial", desc: "A cualquier país" },
            { icon: Clock, label: "Rápido", desc: "3-14 días hábiles" },
            { icon: Shield, label: "Seguro", desc: "100% asegurado" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="text-center p-4 bg-cream rounded-lg">
              <Icon className="w-6 h-6 text-gold mx-auto mb-2" />
              <p className="text-sm font-medium">{label}</p>
              <p className="text-xs text-muted-foreground mt-1">{desc}</p>
            </div>
          ))}
        </div>

        {/* Nacional */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Package className="w-6 h-6 text-gold" />
            <h2 className="font-heading text-2xl font-light">Envíos Nacionales (Colombia)</h2>
          </div>
          <div className="bg-cream p-6 rounded-lg space-y-3 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Tiempo de entrega:</strong> 3 a 5 días hábiles después de confirmada la compra.</p>
            <p><strong className="text-foreground">Costo:</strong> Envío gratuito en pedidos superiores a $200.000 COP. Para pedidos menores, el costo de envío es de $15.000 COP.</p>
            <p><strong className="text-foreground">Transportadora:</strong> Trabajamos con transportadoras certificadas como Servientrega e Interrapidísimo.</p>
            <p><strong className="text-foreground">Seguimiento:</strong> Recibirás un número de guía por correo electrónico una vez tu pedido sea despachado.</p>
          </div>
        </div>

        {/* Internacional */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-gold" />
            <h2 className="font-heading text-2xl font-light">Envíos Internacionales</h2>
          </div>
          <div className="bg-cream p-6 rounded-lg space-y-3 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Cobertura:</strong> Realizamos envíos a cualquier país del mundo.</p>
            <p><strong className="text-foreground">Tiempo de entrega:</strong> 7 a 14 días hábiles, dependiendo del país de destino.</p>
            <p><strong className="text-foreground">Costo:</strong> El costo de envío internacional se calcula al momento del checkout según el peso y destino. Envío gratuito en pedidos superiores a $150 USD.</p>
            <p><strong className="text-foreground">Transportadora:</strong> DHL Express o FedEx International, con número de seguimiento incluido.</p>
            <p><strong className="text-foreground">Aduanas e impuestos:</strong> Los impuestos de importación, aranceles y tasas aduaneras son responsabilidad del comprador y varían según el país de destino.</p>
          </div>
        </div>

        {/* Empaque */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-gold" />
            <h2 className="font-heading text-2xl font-light">Empaque Premium</h2>
          </div>
          <div className="bg-cream p-6 rounded-lg space-y-3 text-sm text-muted-foreground">
            <p>Cada pieza de SELEN se entrega en un estuche de lujo con el sello de la marca, acompañado de su certificado de autenticidad y guía de cuidado.</p>
            <p>Todos los envíos están asegurados contra pérdida o daño durante el transporte. En caso de cualquier inconveniente, contáctanos y lo resolveremos de inmediato.</p>
          </div>
        </div>

        {/* Contacto */}
        <div className="text-center bg-sand p-8 rounded-lg">
          <p className="text-sm text-muted-foreground mb-4">¿Tienes preguntas sobre tu envío?</p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-6 py-2.5 rounded text-sm tracking-wider uppercase font-medium"
          >
            Contáctanos <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
