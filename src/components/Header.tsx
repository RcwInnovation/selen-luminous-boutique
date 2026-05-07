import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Menu, X, Instagram, Facebook } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import logoSelen from "@/assets/logo-selen.png";

const navLinks = [
  { to: "/" as const, label: "Inicio" },
  { to: "/coleccion" as const, label: "Colección" },
  { to: "/nuestra-historia" as const, label: "Nuestra Historia" },
  { to: "/blog" as const, label: "Blog" },
  { to: "/faq" as const, label: "FAQ" },
  { to: "/contacto" as const, label: "Contacto" },
];

export function Header({ onCartOpen }: { onCartOpen: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = useCartStore((s) => s.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile menu */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Social icons - desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="text-muted-foreground hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logoSelen} alt="SELEN Jewelry" className="h-12 sm:h-14 w-auto" />
          </Link>

          {/* Cart */}
          <button onClick={onCartOpen} className="relative text-foreground hover:text-gold transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex justify-center gap-8 pb-3 -mt-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-xs tracking-[0.2em] uppercase transition-colors hover:text-gold ${location.pathname === to ? "text-gold font-semibold" : "text-muted-foreground"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-background border-t border-border/50 px-4 py-4 space-y-3">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm tracking-[0.15em] uppercase py-1 ${location.pathname === to ? "text-gold font-semibold" : "text-muted-foreground"}`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-4 pt-2 border-t border-border/30">
            <a href="#" className="text-muted-foreground"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="text-muted-foreground"><Facebook className="w-4 h-4" /></a>
          </div>
        </nav>
      )}
    </header>
  );
}
