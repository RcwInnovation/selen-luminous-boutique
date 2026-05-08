import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { storefrontApiRequest, PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { useState, useRef } from "react";
import { ShoppingBag, Loader2, Shield, Gem, Heart } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/producto/$handle")({
  head: () => ({
    meta: [
      { title: "Joya Premium — SELEN Jewelry | Oro y Esmeraldas Colombia" },
      { name: "description", content: "Pieza exclusiva de joyería premium SELEN: oro de alta calidad con esmeraldas colombianas certificadas. Diseño artesanal, certificado de autenticidad incluido. Envíos a toda Colombia e internacionales." },
      { property: "og:type", content: "product" },
      { name: "keywords", content: "joya premium, gold jewelry, emerald jewelry, joyería artesanal Colombia, luxury jewelry piece" },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { handle } = Route.useParams();
  const addItem = useCartStore((s) => s.addItem);
  const isCartLoading = useCartStore((s) => s.isLoading);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
  const imgRef = useRef<HTMLDivElement>(null);

  const { data: product, isLoading } = useQuery({
    queryKey: ["shopify-product", handle],
    queryFn: async () => {
      const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
      if (!data?.data?.productByHandle) return null;
      return { node: data.data.productByHandle } as ShopifyProduct;
    },
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomStyle({ transformOrigin: `${x}% ${y}%`, transform: "scale(2)" });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transform: "scale(1)" });
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square bg-sand rounded-lg animate-pulse" />
          <div className="space-y-4">
            <div className="h-8 bg-sand rounded w-3/4 animate-pulse" />
            <div className="h-6 bg-sand rounded w-1/4 animate-pulse" />
            <div className="h-20 bg-sand rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-muted-foreground">Producto no encontrado.</p>
      </div>
    );
  }

  const variants = product.node.variants.edges.filter(v => v.node.title !== "Default Title");
  const selectedVariant = variants.length > 0 ? variants[selectedVariantIdx]?.node : product.node.variants.edges[0]?.node;
  const images = product.node.images.edges;
  const options = product.node.options?.filter(o => o.name !== "Title") || [];

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    await addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    toast.success("Añadido al carrito", { description: product.node.title });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Images with zoom */}
        <div className="space-y-4">
          <div
            ref={imgRef}
            className="aspect-square bg-sand rounded-lg overflow-hidden cursor-zoom-in"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {images[selectedImage] && (
              <img
                src={images[selectedImage].node.url}
                alt={images[selectedImage].node.altText || product.node.title}
                className="w-full h-full object-cover transition-transform duration-300"
                style={zoomStyle}
              />
            )}
          </div>
          {images.length > 1 && (
            <div className="flex gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${i === selectedImage ? "border-gold" : "border-transparent"}`}
                >
                  <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">SELEN Jewelry</p>
          <h1 className="font-heading text-3xl sm:text-4xl font-light">{product.node.title}</h1>
          <p className="text-2xl text-gold-dark font-heading mt-3">
            ${parseFloat(selectedVariant?.price?.amount || product.node.priceRange.minVariantPrice.amount).toFixed(2)}{" "}
            {selectedVariant?.price?.currencyCode || product.node.priceRange.minVariantPrice.currencyCode}
          </p>

          <div className="gold-divider mt-6 mb-6" />

          <p className="text-muted-foreground leading-relaxed text-sm">{product.node.description}</p>

          {/* Variant selector */}
          {options.length > 0 && variants.length > 0 && (
            <div className="mt-6 space-y-3">
              {options.map((option) => (
                <div key={option.name}>
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium mb-2 block">
                    {option.name}: <span className="text-foreground">{selectedVariant?.selectedOptions?.find(o => o.name === option.name)?.value}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {variants.map((v, idx) => {
                      const optValue = v.node.selectedOptions?.find(o => o.name === option.name)?.value;
                      if (!optValue) return null;
                      return (
                        <button
                          key={v.node.id}
                          onClick={() => setSelectedVariantIdx(idx)}
                          disabled={!v.node.availableForSale}
                          className={`px-4 py-2 rounded border text-sm transition-all ${
                            idx === selectedVariantIdx
                              ? "border-gold bg-gold/10 text-gold-dark font-medium"
                              : "border-border text-muted-foreground hover:border-gold/50"
                          } ${!v.node.availableForSale ? "opacity-40 line-through cursor-not-allowed" : ""}`}
                        >
                          {optValue}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={handleAddToCart}
            disabled={isCartLoading || !selectedVariant?.availableForSale}
            className="mt-8 w-full bg-gold-gradient text-primary-foreground py-3.5 rounded font-medium text-sm tracking-[0.15em] uppercase flex items-center justify-center gap-2 shimmer hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isCartLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ShoppingBag className="w-4 h-4" /> Añadir al Carrito</>}
          </button>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: Gem, label: "Esmeralda Natural" },
              { icon: Shield, label: "Certificado" },
              { icon: Heart, label: "Hecho con Amor" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="text-center p-3 bg-cream rounded">
                <Icon className="w-4 h-4 text-gold mx-auto mb-1" />
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
