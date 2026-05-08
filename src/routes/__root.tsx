import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "sonner";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { LogoIntro } from "@/components/LogoIntro";
import { useCartSync } from "@/hooks/useCartSync";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-7xl font-light text-gold">404</h1>
        <p className="mt-4 text-muted-foreground">La página que buscas no existe.</p>
        <a href="/" className="inline-block mt-6 bg-gold-gradient text-primary-foreground px-6 py-2.5 rounded text-sm tracking-wider uppercase">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-heading text-xl">Algo salió mal</h1>
        <p className="mt-2 text-sm text-muted-foreground">Inténtalo de nuevo o vuelve al inicio.</p>
        <div className="mt-6 flex gap-2 justify-center">
          <button onClick={() => { router.invalidate(); reset(); }} className="bg-gold-gradient text-primary-foreground px-4 py-2 rounded text-sm">Reintentar</button>
          <a href="/" className="border border-border px-4 py-2 rounded text-sm">Inicio</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "SELEN Jewelry — Joyería de Lujo con Esmeraldas y Oro | Colombia" },
      { name: "description", content: "SELEN Jewelry: joyería femenina premium hecha en Colombia. Piezas únicas en oro 18K con esmeraldas colombianas y diamantes. Diseños personalizados y joyería sobre pedido. Envíos nacionales e internacionales." },
      { property: "og:title", content: "SELEN Jewelry — Joyería de Lujo con Esmeraldas y Oro" },
      { property: "og:description", content: "Joyería femenina premium con esmeraldas colombianas y oro. Diseños personalizados. Hecho en Colombia." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SELEN Jewelry" },
      { property: "og:locale", content: "es_CO" },
      { name: "theme-color", content: "#1a1408" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "SELEN Jewelry" },
      { name: "geo.region", content: "CO" },
      { name: "geo.placename", content: "Bogotá" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function AppLayout() {
  const [cartOpen, setCartOpen] = useState(false);
  useCartSync();

  return (
    <div className="min-h-screen flex flex-col">
      <LogoIntro />
      <Header onCartOpen={() => setCartOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <Toaster position="top-center" richColors />
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout />
    </QueryClientProvider>
  );
}
