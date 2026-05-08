import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.71a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.14z"/>
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
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
              Fragmentos de luz convertidos en oro. Joyería femenina, elegante y premium. Hecho en Colombia 🇨🇴
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="TikTok"><TikTokIcon className="w-4 h-4" /></a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Google"><GoogleIcon className="w-4 h-4" /></a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Email"><Mail className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 font-medium">Tienda</h4>
            <div className="space-y-2">
              <Link to="/coleccion" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Colección</Link>
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
            <p className="text-sm opacity-60 mb-3">Recibe novedades exclusivas y ofertas especiales.</p>
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
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center">
          <p className="text-xs opacity-40">© {new Date().getFullYear()} SELEN Jewelry. Todos los derechos reservados. Bogotá, Colombia.</p>
        </div>
      </div>
    </footer>
  );
}
