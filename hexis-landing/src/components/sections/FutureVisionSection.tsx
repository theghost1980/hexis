"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FloatingHeading } from "@/components/ui/floating-heading"
import { Users, GraduationCap, MessageCircle } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Cohortes guiadas",
    description:
      "Programas intensivos de 4 semanas donde construyes proyectos reales con el acompañamiento de mentores y un grupo reducido de profesionales como tú.",
  },
  {
    icon: GraduationCap,
    title: "Mentorías 1:1",
    description:
      "Sesiones personalizadas para resolver tus bloqueos específicos, afinar tu estrategia y acelerar tu posicionamiento en el mercado.",
  },
  {
    icon: MessageCircle,
    title: "Comunidad privada",
    description:
      "Un espacio exclusivo de profesionales ambiciosos que comparten retos, avances y oportunidades. Construir solo es más lento; construir en red es imparable.",
  },
]

export function FutureVisionSection() {
  return (
    <section className="bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-container px-5">
        <div className="mx-auto max-w-2xl text-center">
          <FloatingHeading>
            <h2>Hexis es solo el comienzo.</h2>
          </FloatingHeading>
          <p className="mt-4 text-base text-[#4A5568] sm:text-lg">
            El verdadero crecimiento viene de la práctica constante.
            Próximamente lanzaremos programas más profundos para quienes
            quieren llevar su carrera al siguiente nivel.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-10 lg:grid-cols-[2fr_1fr] lg:gap-16">
          <div className="relative w-full overflow-hidden rounded-xl lg:-ml-[calc((100vw-1200px)/2+20px)] lg:w-[calc(100%+(100vw-1200px)/2+20px)] lg:rounded-l-none">
            <Image
              src="/images/about-system.png"
              alt="Hexis – sistema de crecimiento"
              width={900}
              height={1080}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-r from-transparent to-white lg:block" />
          </div>

          <div className="flex flex-col gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className={`group rounded-xl border border-[#E2E8F0] p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)] ${
                    i === 1
                      ? "bg-gradient-to-b from-[#FEF7E6] to-white"
                      : "bg-white"
                  }`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1A2B3C]/10 text-[#1A2B3C]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p className="mt-2 text-sm text-[#4A5568]">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="mb-5 text-sm text-[#4A5568]">
            Al unirte hoy, aseguras tu lugar con acceso anticipado y precio
            fundador.
          </p>
          <Button
            variant="cta"
            size="lg"
            className="mx-auto gap-2"
            onClick={() =>
              document
                .getElementById("cta-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Reserva tu lugar en la lista de espera
          </Button>
        </div>
      </div>
    </section>
  )
}
