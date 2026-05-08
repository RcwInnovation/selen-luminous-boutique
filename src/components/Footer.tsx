import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.71a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.14z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl font-light tracking-wider mb-3">SELEN</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Joyería femenina premium hecha en Colombia. Piezas únicas artesanales en oro con esmeraldas colombianas y diamantes. Diseños personalizados sobre pedido.
            </p>
            <p className="text-xs opacity-50 mt-3">
              📍 Bogotá, Colombia 🇨🇴<br />
              ✉ contacto@selenjewelry.com<br />
              📱 +57 300 123 4567
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="TikTok"><TikTokIcon className="w-4 h-4" /></a>
              <a href="mailto:contacto@selenjewelry.com" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Email"><Mail className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 font-medium">Tienda</h4>
            <div className="space-y-2">
              <Link to="/coleccion" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Colección</Link>
              <Link to="/disenos-personalizados" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Diseños Personalizados</Link>
              <Link to="/nuestra-historia" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Nuestra Historia</Link>
              <Link to="/certificados" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Certificados</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 font-medium">Ayuda</h4>
            <div className="space-y-2">
              <Link to="/faq" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Preguntas Frecuentes</Link>
              <Link to="/contacto" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Contacto</Link>
              <Link to="/politica-envios" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Política de Envíos</Link>
              <a href="#" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Política de Devoluciones</a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 font-medium">Newsletter</h4>
            <p className="text-sm opacity-60 mb-3">Recibe novedades exclusivas de joyería de lujo y ofertas especiales.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 rounded px-3 py-2 text-sm placeholder:opacity-40 focus:outline-none focus:border-gold-light"
              />
              <button type="submit" className="bg-gold-gradient text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity">
                Enviar
              </button>
            </form>
            <p className="text-xs opacity-40 mt-3">Envíos a toda Colombia y envíos internacionales 🌍</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center space-y-1">
          <p className="text-xs opacity-40">© {new Date().getFullYear()} SELEN Jewelry. Todos los derechos reservados. Bogotá, Colombia.</p>
          <p className="text-xs opacity-30">Desarrollado por <a href="https://rcwinnovation.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Rcw Innovation Inc</a></p>
        </div>
      </div>
    </footer>
  );
}
