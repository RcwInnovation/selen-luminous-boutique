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
    <footer className="bg-cream text-foreground border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl font-light tracking-[0.2em] mb-3 text-gold-dark">SELEN</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Joyería femenina premium hecha en Colombia. Piezas únicas artesanales en oro 18K con esmeraldas colombianas y diamantes. Diseños personalizados sobre pedido.
            </p>
            <p className="text-sm opacity-75 mt-4 leading-relaxed">
              📍 Hecho en Colombia 🇨🇴<br />
              ✉ contacto@selenjewelry.com<br />
              📱 +57 321 8891493
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://instagram.com/selenjewelry" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-gold-dark transition-all" aria-label="Instagram @selenjewelry"><Instagram className="w-4 h-4" /></a>
              <a href="https://facebook.com/selenjewelry" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-gold-dark transition-all" aria-label="Facebook @selenjewelry"><Facebook className="w-4 h-4" /></a>
              <a href="https://tiktok.com/@selenjewelry" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-gold-dark transition-all" aria-label="TikTok @selenjewelry"><TikTokIcon className="w-4 h-4" /></a>
              <a href="mailto:contacto@selenjewelry.com" className="opacity-70 hover:opacity-100 hover:text-gold-dark transition-all" aria-label="Email"><Mail className="w-4 h-4" /></a>
            </div>
            <p className="text-sm opacity-70 mt-3">@selenjewelry</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.22em] uppercase mb-4 font-medium text-gold-dark">Tienda</h4>
            <div className="space-y-2">
              <Link to="/coleccion" className="block text-sm opacity-75 hover:opacity-100 hover:text-gold-dark transition-all">Colección</Link>
              <Link to="/disenos-personalizados" className="block text-sm opacity-75 hover:opacity-100 hover:text-gold-dark transition-all">Diseños Personalizados</Link>
              <Link to="/nuestra-historia" className="block text-sm opacity-75 hover:opacity-100 hover:text-gold-dark transition-all">Nuestra Historia</Link>
              <Link to="/certificados" className="block text-sm opacity-75 hover:opacity-100 hover:text-gold-dark transition-all">Certificados</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs tracking-[0.22em] uppercase mb-4 font-medium text-gold-dark">Ayuda</h4>
            <div className="space-y-2">
              <Link to="/faq" className="block text-sm opacity-75 hover:opacity-100 hover:text-gold-dark transition-all">Preguntas Frecuentes</Link>
              <Link to="/contacto" className="block text-sm opacity-75 hover:opacity-100 hover:text-gold-dark transition-all">Contacto</Link>
              <Link to="/politica-envios" className="block text-sm opacity-75 hover:opacity-100 hover:text-gold-dark transition-all">Política de Envíos</Link>
              <a href="#" className="block text-sm opacity-75 hover:opacity-100 hover:text-gold-dark transition-all">Política de Devoluciones</a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-[0.22em] uppercase mb-4 font-medium text-gold-dark">Newsletter</h4>
            <p className="text-sm opacity-75 mb-3">Recibe novedades exclusivas de joyería de lujo y ofertas especiales.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 bg-background/60 border border-gold/30 rounded px-3 py-2 text-sm placeholder:opacity-50 focus:outline-none focus:border-gold"
              />
              <button type="submit" className="bg-gold-gradient text-primary-foreground px-4 py-2 rounded text-sm font-medium hover:opacity-90 transition-opacity">
                Enviar
              </button>
            </form>
            <p className="text-sm opacity-70 mt-3">Entrega inmediata en referencias seleccionadas · Envíos nacionales e internacionales 🌍</p>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-6 text-center space-y-1">
          <p className="text-sm opacity-65">© {new Date().getFullYear()} SELEN Jewelry. Todos los derechos reservados. Hecho en Colombia 🇨🇴</p>
          <p className="text-sm opacity-55">Desarrollado por <a href="https://rcwinnovation.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold-dark transition-colors">Rcw Innovation Inc</a></p>
        </div>
      </div>
    </footer>
  );
}
