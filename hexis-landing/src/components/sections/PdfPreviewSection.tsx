"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FloatingHeading } from "@/components/ui/floating-heading"
import { Check } from "lucide-react"

const items = [
  "El script exacto para renovar tu CV con IA.",
  "Deep research de ofertas en minutos.",
  "Prompts para extraer dolores de negocio de cualquier vacante.",
  "Cómo diseñar un demo imbatible en 6 horas.",
  "Plantilla de README que vende tu candidatura.",
  "El mensaje de correo que abre puertas con CTOs.",
  "Preparación de entrevistas con simulador de IA.",
  "Checklist de despliegue gratuito (Vercel, Railway, Supabase).",
]

export function PdfPreviewSection() {
  return (
    <section className="bg-[#F8F9FA] py-16 sm:py-16">
      <div className="mx-auto max-w-container px-5">
        <div className="mx-auto max-w-2xl text-center">
          <FloatingHeading>
            <h2>Dentro del Método Hexis (28 páginas de acción)</h2>
          </FloatingHeading>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <Image
              src="/images/pdf-mockup.png"
              alt="Método Hexis – vista previa del PDF"
              width={618}
              height={824}
              className="w-full max-w-lg rounded-xl object-cover shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]"
            />
          </div>

          <div>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#059669]/10 text-[#059669]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-[#1A1A1A] sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="cta"
            size="lg"
            onClick={() =>
              document
                .getElementById("cta-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Descargar el PDF
          </Button>
          <p className="mt-3 text-xs text-[#4A5568]">
            Al descargarlo entras a la comunidad Hexis y a la lista de espera
            del programa avanzado.
          </p>
        </div>
      </div>
    </section>
  )
}
