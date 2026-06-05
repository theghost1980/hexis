"use client";

import { Button } from "@/components/ui/button";
import { FloatingHeading } from "@/components/ui/floating-heading";
import { Eye, Target, Wallet, Zap } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    title: "Visibilidad real en un mar de CVs",
    description:
      "Los métodos tradicionales te esconden. El sistema Hexis te posiciona donde los reclutadores miran primero, sin depender de palabras clave ni filtros automáticos.",
  },
  {
    icon: Target,
    title: "Ofertas que se convierten en oportunidades",
    description:
      "No se trata de aplicar más, sino de aplicar mejor. Aprende a interceptar cualquier vacante tradicional y transformarla en una propuesta de valor personalizada que obligue al equipo técnico a contactarte.",
  },
  {
    icon: Zap,
    title: "IA como ventaja, no como amenaza",
    description:
      "Mientras otros temen ser reemplazados, tú usarás la inteligencia artificial como el multiplicador de impacto que te separe del resto.",
  },
];

export function HexisSystemSection() {
  return (
    <section id="hexis-system" className="bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-container px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#E2E8F0] bg-white px-4 py-1 text-xs font-semibold tracking-wide text-[#2563EB]">
            EL MÉTODO
          </span>
          <FloatingHeading>
            <h2>
              Un sistema probado que integra IA, práctica deliberada y
              posicionamiento estratégico.
            </h2>
          </FloatingHeading>
          <p className="mt-4 text-base text-[#4A5568] sm:text-lg">
            No es un curso más de CV. Es un enfoque completo que cambia la forma
            en que los reclutadores te perciben.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`rounded-xl border border-[#E2E8F0] p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] ${
                  i === 1
                    ? "bg-gradient-to-b from-[#FEF7E6] to-white"
                    : "bg-white"
                }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1A2B3C]/10 text-[#1A2B3C]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3>{pillar.title}</h3>
                <p className="mt-2 text-sm text-[#4A5568]">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-xl border border-[#2563EB]/20 bg-[#F0F4FF] p-6 text-center">
          <p className="text-sm font-medium text-[#0B1E33]">
            El método completo —cada fase, cada prompt, cada estrategia— está
            detallado en el PDF del Método Hexis. El Método Hexis está
            estructurado en un framework de 8 pasos milimétricos. No verás un
            mapa público de las fases aquí abajo. ¿Por qué? Porque el mercado ya
            está lleno de fórmulas genéricas que todos copian por encima. Este
            es un sistema de ingeniería inversa para tu carrera: desde la
            deconstrucción de la oferta hasta el mensaje de cierre con el
            decisor técnico
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="cta"
            size="lg"
            onClick={() =>
              document
                .getElementById("cta-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Descubrir el método completo
          </Button>
          <a
            href="https://shop.hexis.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md bg-[#0B1E33] px-8 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#162D4A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1E33] focus-visible:ring-offset-2"
          >
            <Wallet className="mr-2 h-5 w-5" />
            Te lo compro
          </a>
        </div>
      </div>
    </section>
  );
}
