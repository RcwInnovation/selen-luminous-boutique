import { useState, useEffect } from "react";
import { ShoppingBag, Minus, Plus, Trash2, ExternalLink, Loader2, X } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (parseFloat(item.price.amount) * item.quantity), 0);

  useEffect(() => {
    if (isOpen) syncCart();
  }, [isOpen, syncCart]);

  const handleCheckout = () => {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-background z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-heading text-xl">Tu Carrito</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag className="w-12 h-12 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground text-sm">Tu carrito está vacío</p>
            <p className="text-muted-foreground/60 text-xs mt-1">Descubre piezas que iluminarán tu día</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div key={item.variantId} className="flex gap-4 py-3 border-b border-border/30 last:border-0">
                  <div className="w-20 h-20 bg-sand rounded overflow-hidden flex-shrink-0">
                    {item.product.node.images?.edges?.[0]?.node && (
                      <img src={item.product.node.images.edges[0].node.url} alt={item.product.node.title} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-sm font-semibold truncate">{item.product.node.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.selectedOptions.map(o => o.value).join(' · ')}</p>
                    <p className="text-sm font-medium text-gold-dark mt-1">${parseFloat(item.price.amount).toFixed(2)} {item.price.currencyCode}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.variantId, item.quantity - 1)} className="w-6 h-6 border border-border rounded flex items-center justify-center hover:bg-muted transition-colors">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} className="w-6 h-6 border border-border rounded flex items-center justify-center hover:bg-muted transition-colors">
                        <Plus className="w-3 h-3" />
                      </button>
                      <button onClick={() => removeItem(item.variantId)} className="ml-auto text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-5 border-t border-border bg-cream space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-heading text-lg">Total</span>
                <span className="text-lg font-semibold text-gold-dark">${totalPrice.toFixed(2)} {items[0]?.price.currencyCode}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={isLoading || isSyncing}
                className="w-full bg-gold-gradient text-primary-foreground py-3 rounded font-medium text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading || isSyncing ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ExternalLink className="w-4 h-4" /> Finalizar Compra</>}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
