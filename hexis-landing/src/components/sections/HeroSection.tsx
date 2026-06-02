"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-white">
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
            <div className="max-w-lg rounded-2xl bg-white/80 p-8 backdrop-blur-sm sm:p-10">
          <span className="mb-4 inline-block rounded-full border border-[#E2E8F0] bg-white px-4 py-1 text-xs font-semibold tracking-wide text-[#F5A623]">
            HEXIS · MAYO 2026
          </span>

          <h1 className="text-[#1A2B3C]">
            El sistema que convierte práctica en oportunidades reales.
          </h1>

          <p className="mt-4 text-base text-[#4A5568] sm:text-lg">
            De 200 rechazos a tener al CTO revisando tu demo en 24 horas.
            Descarga el Método Hexis y aprende a destacar usando la IA como
            ventaja competitiva.
          </p>

          <form
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="tu@correo.com"
              required
              className="flex-1 rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1A2B3C] placeholder-[#94A3B8] outline-none ring-[#F5A623] transition-all focus:ring-2"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F5A623] px-6 py-3 text-sm font-semibold text-[#1A2B3C] shadow-sm transition-all hover:bg-[#D97706]"
            >
              Descargar el Método
              <ArrowDown className="h-4 w-4" />
            </button>
          </form>

          <p className="mt-3 text-xs text-[#94A3B8]">
            Sin spam. Acceso inmediato al método + lista de espera del
            programa avanzado.
          </p>
        </div>
      </div>
    </section>
  )
}
