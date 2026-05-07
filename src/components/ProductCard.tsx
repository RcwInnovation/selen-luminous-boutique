import { Link } from "@tanstack/react-router";
import type { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingBag, Loader2 } from "lucide-react";
import { toast } from "sonner";

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const variant = product.node.variants.edges[0]?.node;
  const image = product.node.images.edges[0]?.node;
  const price = product.node.priceRange.minVariantPrice;

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
    <Link to="/producto/$handle" params={{ handle: product.node.handle }} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-sand mb-4">
        {image && (
          <img
            src={image.url}
            alt={image.altText || product.node.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        <button
          onClick={handleAddToCart}
          disabled={isLoading || !variant?.availableForSale}
          className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm text-foreground w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-primary-foreground luxury-shadow"
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShoppingBag className="w-4 h-4" />}
        </button>
      </div>
      <h3 className="font-heading text-lg font-semibold tracking-wide">{product.node.title}</h3>
      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.node.description}</p>
      <p className="text-gold-dark font-medium mt-2">${parseFloat(price.amount).toFixed(2)} {price.currencyCode}</p>
    </Link>
  );
}
