import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, ChevronLeft } from "lucide-react";
import heroSlide1Asset from "@/assets/hero-slide-1.jpg.asset.json";
import heroSlide2Asset from "@/assets/hero-slide-2-new.jpg.asset.json";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1Asset.url,
    subtitle: "SELEN Jewelry",
    title: "Fragmentos de luz",
    titleAccent: "convertidos en oro",
    description:
      "Joyas en oro de 18K con esmeraldas colombianas. Cada pieza lleva la calidez del abrazo materno.",
    objectPosition: "object-[55%_center] sm:object-[60%_center] lg:object-center",
  },
  {
    image: heroSlide2Asset.url,
    subtitle: "Elegancia Cotidiana",
    title: "Joyas que iluminan",
    titleAccent: "cada momento",
    description:
      "Piezas delicadas en oro y esmeralda para acompañarte con sofisticación natural.",
    objectPosition: "object-[35%_center] sm:object-center",
  },
  {
    image: heroSlide3,
    subtitle: "Hecho en Colombia",
    title: "Artesanía",
    titleAccent: "premium",
    description:
      "Cada joya es creada a mano con los más altos estándares de calidad.",
    objectPosition: "object-center",
  },
];


export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[88vh] min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-end lg:items-center overflow-hidden -mt-16 sm:-mt-20 lg:-mt-24">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover ${slide.objectPosition} transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Soft gradient — concentrated at bottom on mobile, balanced on desktop so center copy reads */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/5 lg:bg-gradient-to-b lg:from-foreground/20 lg:via-foreground/30 lg:to-foreground/50" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 pb-6 sm:pb-8 lg:pb-0 lg:pt-16">
        <div className="text-center mx-auto">
          <p
            key={`sub-${current}`}
            className="text-gold-light text-[10px] sm:text-xs tracking-[0.32em] uppercase mb-2 animate-[fadeSlideUp_0.6s_ease-out_forwards]"
          >
            {slides[current].subtitle}
          </p>
          <h1
            key={`title-${current}`}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground leading-[1.05] tracking-tight animate-[fadeSlideUp_0.6s_ease-out_0.15s_both]"
          >
            <span className="block">{slides[current].title}</span>
            <span className="block italic text-gold-light/95">{slides[current].titleAccent}</span>
          </h1>
          <p
            key={`desc-${current}`}
            className="text-primary-foreground/90 mt-2.5 text-xs sm:text-sm leading-snug max-w-md mx-auto animate-[fadeSlideUp_0.6s_ease-out_0.3s_both]"
          >
            {slides[current].description}
          </p>
          <div
            key={`cta-${current}`}
            className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2.5 animate-[fadeSlideUp_0.6s_ease-out_0.45s_both]"
          >
            <Link
              to="/coleccion"
              className="inline-flex items-center justify-center bg-gold-gradient text-primary-foreground px-6 py-2 rounded-sm text-[11px] sm:text-xs tracking-[0.22em] uppercase font-medium shimmer hover:opacity-90 transition-opacity min-w-[150px]"
            >
              Ver colección
            </Link>
            <Link
              to="/nuestra-historia"
              className="inline-flex items-center justify-center bg-foreground/85 hover:bg-foreground text-primary-foreground px-6 py-2 rounded-sm text-[11px] sm:text-xs tracking-[0.22em] uppercase font-medium border border-primary-foreground/15 transition-colors min-w-[150px]"
            >
              Nuestra historia
            </Link>
          </div>
        </div>
      </div>


      {/* Navigation arrows - hide on small mobile to keep image clean */}
      <button
        onClick={prev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/20 transition-all"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/20 transition-all"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-gold" : "w-1.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
