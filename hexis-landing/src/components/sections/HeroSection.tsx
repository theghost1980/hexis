"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="mx-auto max-w-container px-5 py-16 sm:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="mb-4 inline-block rounded-full border border-[#E2E8F0] bg-white px-4 py-1 text-xs font-semibold tracking-wide text-[#2563EB]">
              HEXIS · MAYO 2026
            </span>

            <h1>
              El sistema que convierte práctica en oportunidades reales.
            </h1>

            <p className="mt-4 text-base text-[#4A5568] sm:text-lg">
              De 200 rechazos a tener al CTO revisando tu demo en 24 horas.
              Descarga el Método Hexis y aprende a destacar usando la IA como
              ventaja competitiva.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                variant="cta"
                size="lg"
                className="gap-2"
                onClick={() =>
                  document
                    .getElementById("cta-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Descargar el PDF
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                variant="outline-blue"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("hexis-system")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Cómo funciona
              </Button>
            </div>

            <p className="mt-4 text-xs text-[#4A5568]">
              Sin spam. Acceso inmediato al método + lista de espera del
              programa avanzado.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/images/hero-image.png"
              alt="Hexis – práctica convierte en oportunidades"
              width={600}
              height={450}
              className="w-full max-w-lg rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
