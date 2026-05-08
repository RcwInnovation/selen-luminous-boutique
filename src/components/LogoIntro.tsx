import { useState, useEffect } from "react";
import logoSelen from "@/assets/logo-selen.png";

export function LogoIntro() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("selen-intro-shown");
    if (shown) return;

    setVisible(true);
    sessionStorage.setItem("selen-intro-shown", "1");

    const fadeTimer = setTimeout(() => setFading(true), 2200);
    const hideTimer = setTimeout(() => setVisible(false), 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-700 ${fading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center gap-4 animate-[logoReveal_1.5s_ease-out_forwards]">
        <img src={logoSelen} alt="SELEN" className="h-20 sm:h-28 w-auto" />
        <div className="gold-divider animate-[expandWidth_1s_ease-out_0.8s_forwards] w-0" />
        <p className="text-xs tracking-[0.3em] uppercase text-gold-dark opacity-0 animate-[fadeIn_0.8s_ease-out_1.2s_forwards]">
          Fragmentos de luz, convertidos en oro
        </p>
      </div>
    </div>
  );
}
