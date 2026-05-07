import { createFileRoute } from "@tanstack/react-router";
import { Shield, Award, FileCheck } from "lucide-react";

export const Route = createFileRoute("/certificados")({
  head: () => ({
    meta: [
      { title: "Certificados de Autenticidad — SELEN Jewelry" },
      { name: "description", content: "Cada joya SELEN incluye certificado premium de autenticidad. Garantía de calidad y materiales." },
    ],
  }),
  component: CertificadosPage,
});

function CertificadosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-2">Confianza</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-light">Certificados de Autenticidad</h1>
        <div className="gold-divider mx-auto mt-4" />
      </div>

      <div className="space-y-12">
        <div className="text-center">
          <Shield className="w-12 h-12 text-gold mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            En SELEN, cada joya viene acompañada de un certificado premium de autenticidad que garantiza
            la calidad de los materiales, el proceso artesanal y la procedencia de las piedras naturales.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Award, title: "Materiales Certificados", desc: "Oro champagne de alta calidad y esmeraldas naturales verificadas." },
            { icon: FileCheck, title: "Guía de Cuidado", desc: "Instrucciones detalladas para preservar la belleza de tu pieza." },
            { icon: Shield, title: "Garantía de Calidad", desc: "6 meses de garantía contra defectos de fabricación." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-cream p-6 rounded-lg text-center border border-border/30">
              <Icon className="w-6 h-6 text-gold mx-auto mb-3" />
              <h3 className="font-heading text-lg mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="bg-foreground text-primary-foreground p-8 rounded-lg text-center">
          <p className="font-heading text-lg italic">
            "Tu joya SELEN no es solo un accesorio — es una inversión en belleza, significado y calidad certificada."
          </p>
        </blockquote>
      </div>
    </div>
  );
}
