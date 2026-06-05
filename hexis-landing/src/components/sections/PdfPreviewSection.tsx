"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const items = [
  "Desbloquea el script exacto para renovar tu CV con IA.",
  "Realiza un deep research de ofertas en minutos.",
  "Aprende a leer entre líneas: Descubre cómo desenterrar las verdaderas necesidades",
  "El Contraataque de 6 Horas: El sistema de ejecución rápida para materializar una solución letal e imposible de ignorar en menos de una tarde",
  "La Estructura de Documentación Magnética: La plantilla exacta para presentar tu arsenal técnico de forma que un perfil técnico senior la consuma en 30 segundos",
  "Domina el mensaje de correo que abre puertas con CTOs.",
  "Prepárate con el simulador de IA para entrevistas.",
  "Accede al checklist de despliegue gratuito (Vercel, Railway, Supabase).",
];

export function PdfPreviewSection() {
  return (
    <section className="bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-container px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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
            <h2>Dentro del Método Hexis (28 páginas de acción)</h2>

            <ul className="mt-8 space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-[#1A2B3C] font-mono text-sm font-bold">
                    &gt;
                  </span>
                  <span className="text-sm text-[#1A1A1A] sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
