"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
export function TestimonialSection() {
  return (
    <section className="bg-[#F8F9FA] py-16 sm:py-16">
      <div className="mx-auto max-w-container px-5">
        <div className="mx-auto max-w-3xl rounded-xl border border-[#E2E8F0] bg-white p-8 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] sm:p-12">
          <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-[#2563EB]/20 sm:h-40 sm:w-40">
            <Image
              src="/images/avatar-testimonial.png"
              alt="Andrés Silva"
              width={160}
              height={160}
              className="h-full w-full object-cover"
            />
          </div>

          <p className="text-base leading-relaxed text-[#1A1A1A] sm:text-lg">
            &ldquo;Después de 200 rechazos aplastantes, sentía que mi
            carrera no avanzaba por más que lo intentara. Probé de todo, pero
            nada funcionaba. Hasta que apliqué un enfoque diferente. En menos
            de una semana, todo cambió: pasé de ser ignorado a tener a un CTO
            revisando mi trabajo en 24 horas. Ahora comparto lo que aprendí
            para que tú también puedas dejar de ser un CV más.&rdquo;
          </p>

          <p className="mt-6 font-semibold text-[#0B1E33]">
            Andrés Silva
          </p>
          <p className="text-sm text-[#4A5568]">Ing. de Software</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-[#1A2B3C] opacity-60">
            <span>Next.js</span>
            <span className="text-[#CBD5E1]">|</span>
            <span>Node</span>
            <span className="text-[#CBD5E1]">|</span>
            <span>TypeScript</span>
            <span className="text-[#CBD5E1]">|</span>
            <span>OpenAI</span>
            <span className="text-[#CBD5E1]">|</span>
            <span>Vercel</span>
          </div>

          <Button
            variant="outline-blue"
            size="lg"
            className="mt-8"
            onClick={() =>
              document
                .getElementById("hexis-system")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Conoce el sistema
          </Button>
        </div>
      </div>
    </section>
  )
}
