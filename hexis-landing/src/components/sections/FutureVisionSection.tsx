"use client"

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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
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

        <div className="mt-8 text-center">
          <p className="mb-6 text-sm text-[#4A5568]">
            Al unirte hoy, aseguras tu lugar con acceso anticipado y precio
            fundador.
          </p>
          <Button
            variant="cta"
            size="lg"
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
