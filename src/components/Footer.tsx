import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl font-light tracking-wider mb-3">SELEN</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Fragmentos de luz convertidos en oro. Joyería femenina, elegante y premium.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
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
              <a href="#" className="block text-sm opacity-60 hover:opacity-100 transition-opacity">Política de Envíos</a>
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
          <p className="text-xs opacity-40">© {new Date().getFullYear()} SELEN Jewelry. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
