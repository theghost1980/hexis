"use client"

import Image from "next/image"
import { ShoppingBag } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[500px] items-center overflow-hidden bg-white sm:min-h-[600px]">
      <div className="absolute inset-y-0 right-0 w-3/4">
        <Image
          src="/images/hero-image.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-container px-5 py-16">
            <div className="max-w-lg rounded-2xl bg-white/80 p-5 backdrop-blur-sm sm:p-10">
          <span className="mb-4 inline-block rounded-full border border-[#E2E8F0] bg-white px-4 py-1 text-xs font-semibold tracking-wide text-[#F5A623]">
            HEXIS · MAYO 2026
          </span>

          <h1 className="text-[1.75rem] text-[#1A2B3C] sm:text-[2.5rem]">
            El sistema que convierte práctica en oportunidades reales.
          </h1>

          <p className="mt-4 text-base text-[#4A5568] sm:text-lg">
            De 200 rechazos a tener al CTO revisando tu demo en 24 horas.
            Descarga el Método Hexis y aprende a destacar usando la IA como
            ventaja competitiva.
          </p>

          <div className="group relative mt-8 inline-block">
            <div className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#0B1E33] px-4 py-2 text-sm font-semibold text-[#F5A623] shadow-lg opacity-0 transition-all duration-200 group-hover:opacity-100">
              <span className="text-white">🔥 Aprovecha el descuento de hoy </span>$27
              <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#0B1E33]" />
            </div>
            <a
              href="https://shop.hexis.fyi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F5A623] px-8 py-3 text-sm font-semibold text-[#1A2B3C] shadow-sm transition-all hover:bg-[#D97706]"
            >
              <ShoppingBag className="h-5 w-5" />
              Comprar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
