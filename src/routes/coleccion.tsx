import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "@/components/ProductCard";
import { Gem } from "lucide-react";

export const Route = createFileRoute("/coleccion")({
  head: () => ({
    meta: [
      { title: "Colección de Joyería de Lujo — SELEN Jewelry Colombia" },
      { name: "description", content: "Descubre la colección SELEN: joyería premium femenina en oro 18K con esmeraldas colombianas y diamantes. Anillos, collares, aretes y pulseras artesanales. Luxury jewelry, fine jewelry, emerald jewelry." },
      { property: "og:title", content: "Colección de Alta Joyería — SELEN Jewelry" },
      { property: "og:description", content: "Piezas únicas en oro con esmeraldas colombianas y diamantes. Joyería artesanal premium hecha en Colombia." },
      { name: "keywords", content: "colección joyería lujo, luxury jewelry collection, joyas esmeraldas colombianas, gold jewelry, anillos oro, collares premium, fine jewelry Colombia" },
    ],
    links: [{ rel: "canonical", href: "https://selenjewelry.com/coleccion" }],
  }),
  component: ColeccionPage,
});

function ColeccionPage() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["shopify-products"],
    queryFn: async () => {
      const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 24 });
      return (data?.data?.products?.edges || []) as ShopifyProduct[];
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">SELEN Jewelry</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-light">Nuestra Colección</h1>
        <div className="gold-divider mx-auto mt-4" />
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
          Piezas únicas diseñadas para resaltar la luz interior de cada mujer.
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-square bg-sand rounded-lg animate-pulse" />
              <div className="h-4 bg-sand rounded w-3/4 animate-pulse" />
            </div>
          ))}
        </div>
      ) : products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <Gem className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
          <p className="text-muted-foreground">Aún no hay productos disponibles.</p>
          <p className="text-sm text-muted-foreground/60 mt-1">Próximamente nuevas piezas exclusivas.</p>
        </div>
      )}
    </div>
  );
}
