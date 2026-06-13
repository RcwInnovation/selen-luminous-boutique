import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X, Instagram, Facebook } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import logoSelen from "@/assets/logo-selen-clean.png";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.71a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.14z" />
    </svg>
  );
}

const leftLinks = [
  { to: "/coleccion" as const, label: "Colección" },
  { to: "/disenos-personalizados" as const, label: "Personalizados" },
];
const rightLinks = [
  { to: "/nuestra-historia" as const, label: "Nuestra Historia" },
  { to: "/contacto" as const, label: "Contacto" },
];
const mobileLinks = [
  { to: "/" as const, label: "Inicio" },
  ...leftLinks,
  ...rightLinks,
  { to: "/blog" as const, label: "Blog" },
];

export function Header({ onCartOpen }: { onCartOpen: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = useCartStore((s) => s.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overlay = isHome && !mobileOpen;
  const headerClass = overlay
    ? `fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-background border-b border-border/40"
          : "bg-transparent"
      }`
    : "sticky top-0 z-50 bg-background border-b border-border/40";

  const onDark = overlay && !scrolled;
  const linkColor = onDark ? "text-primary-foreground/85 hover:text-gold-light" : "text-muted-foreground hover:text-gold";
  const activeColor = onDark ? "text-gold-light font-semibold" : "text-gold font-semibold";
  const iconColor = onDark ? "text-primary-foreground hover:text-gold-light" : "text-foreground hover:text-gold";

  const renderNavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      key={to}
      to={to as never}
      className={`text-[11px] xl:text-xs tracking-[0.22em] uppercase transition-colors ${
        location.pathname === to ? activeColor : linkColor
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Desktop: left links | logo | right links | utilities */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-6 h-24">
          {/* Left: nav commercial */}
          <nav className="flex justify-end gap-8 xl:gap-10 pr-4">
            {leftLinks.map(renderNavLink)}
          </nav>

          {/* Center: logo */}
          <Link to="/" className="flex-shrink-0 block justify-self-center" aria-label="SELEN Jewelry — Inicio">
            <img
              src={logoSelen}
              alt="SELEN Jewelry"
              className={`h-24 xl:h-28 w-auto transition-all duration-500 ${
                onDark ? "drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]" : ""
              }`}
            />
          </Link>

          {/* Right: nav institutional + utilities */}
          <div className="flex items-center justify-start gap-8 xl:gap-10 pl-4">
            <nav className="flex gap-8 xl:gap-10">
              {rightLinks.map(renderNavLink)}
            </nav>
            <div className="flex items-center gap-3 ml-auto">
              <a href="#" className={linkColor} aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="#" className={linkColor} aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="#" className={linkColor} aria-label="TikTok"><TikTokIcon className="w-4 h-4" /></a>
              <button onClick={onCartOpen} className={`relative ml-2 ${iconColor}`} aria-label="Carrito">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet header */}
        <div className="lg:hidden grid grid-cols-[auto_1fr_auto] items-center gap-3 h-16 sm:h-20">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={iconColor}
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <Link to="/" className="flex justify-center" aria-label="SELEN Jewelry — Inicio">
            <img
              src={logoSelen}
              alt="SELEN Jewelry"
              className={`h-14 sm:h-16 w-auto ${onDark ? "drop-shadow-[0_4px_20px_rgba(0,0,0,0.45)]" : ""}`}
            />
          </Link>
          <button onClick={onCartOpen} className={`relative ${iconColor}`} aria-label="Carrito">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-background border-t border-border/50 px-4 py-4 space-y-3">
          {mobileLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm tracking-[0.15em] uppercase py-1 ${
                location.pathname === to ? "text-gold font-semibold" : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-4 pt-2 border-t border-border/30">
            <a href="#" className="text-muted-foreground"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="text-muted-foreground"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="text-muted-foreground"><TikTokIcon className="w-4 h-4" /></a>
          </div>
        </nav>
      )}
    </header>
  );
}
