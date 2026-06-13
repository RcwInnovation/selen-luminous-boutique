import { Link } from "@tanstack/react-router";
import type { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Heart, Loader2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

function formatPrice(amount: string, currencyCode: string) {
  const n = parseFloat(amount);
  if (currencyCode === "COP") {
    return `$${Math.round(n).toLocaleString("es-CO")}`;
  }
  return `$${n.toFixed(2)}`;
}

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const variant = product.node.variants.edges[0]?.node;
  const image = product.node.images.edges[0]?.node;
  const price = product.node.priceRange.minVariantPrice;
  const compareAt =
    variant?.compareAtPrice ??
    product.node.compareAtPriceRange?.minVariantPrice ??
    null;
  const showCompare =
    compareAt &&
    parseFloat(compareAt.amount) > parseFloat(price.amount);

  const collection =
    product.node.productType?.trim() ||
    product.node.tags?.[0] ||
    "Colección SELEN";

  const inStock = variant?.availableForSale ?? false;
  const [liked, setLiked] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Añadido al carrito", { description: product.node.title });
  };

  return (
    <Link
      to="/producto/$handle"
      params={{ handle: product.node.handle }}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden rounded-md bg-cream border border-border/40 mb-4">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || product.node.title}
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-heading text-5xl text-gold/40 italic">S</span>
          </div>
        )}

        {/* Top-left badge */}
        {inStock && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-[oklch(0.94_0.04_165)] text-[oklch(0.38_0.09_165)] text-[10px] tracking-[0.18em] uppercase font-medium px-3 py-1.5 rounded-full border border-[oklch(0.55_0.12_165)]/25">
            Entrega Inmediata
          </span>
        )}

        {/* Top-right wishlist */}
        <button
          type="button"
          aria-label="Guardar en favoritos"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLiked((v) => !v);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/85 backdrop-blur-sm border border-border/40 flex items-center justify-center hover:bg-background transition-colors"
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors ${
              liked ? "fill-gold-dark text-gold-dark" : "text-foreground/70"
            }`}
          />
        </button>

        {/* Quick add - reveals on hover */}
        <button
          onClick={handleAddToCart}
          disabled={isLoading || !inStock}
          className="absolute bottom-3 right-3 bg-foreground/90 backdrop-blur-sm text-primary-foreground w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold-dark disabled:opacity-0"
          aria-label="Añadir al carrito"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <ShoppingBag className="w-4 h-4" />
          )}
        </button>
      </div>

      <p className="text-[10px] tracking-[0.22em] uppercase text-gold-dark/80 font-medium">
        {collection}
      </p>
      <h3 className="font-heading text-xl font-light tracking-wide mt-1 text-foreground group-hover:text-gold-dark transition-colors">
        {product.node.title}
      </h3>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="text-foreground font-medium">
          {formatPrice(price.amount, price.currencyCode)}
        </p>
        {showCompare && (
          <p className="text-muted-foreground/60 text-sm line-through">
            {formatPrice(compareAt!.amount, compareAt!.currencyCode)}
          </p>
        )}
      </div>
    </Link>
  );
}
