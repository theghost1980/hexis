"use client";

import { Button } from "@/components/ui/button";
import { FloatingHeading } from "@/components/ui/floating-heading";
import { ArrowDown } from "lucide-react";

const items = [
  {
    title: "El script de 4 prompts de IA",
    description:
      "Analiza cualquier oferta de empleo en 5 minutos. Extrae lo que el recruiter realmente busca, las keywords que THEMACHINE espera y los puntos débiles del equipo técnico.",
  },
  {
    title: "La Documentación Magnética",
    description:
      "La plantilla exacta para presentar tu arsenal técnico. Un CTO la consume en 30 segundos y pide entrevista. Sin PDFs de 10 páginas que nadie lee.",
  },
  {
    title: "El mensaje de cold-email que abre puertas",
    description:
      "El template probado para contactar CTOs y directores técnicos directamente. Sin lambonería, sin desesperación. Profesional, directo, efectivo.",
  },
  {
    title: 'El "Contraataque de 6 Horas"',
    description:
      "El sistema de ejecución rápida para pasar de ver una oferta a tener una propuesta personalizada enviada en menos de una tarde. Paso a paso, sin perderse.",
  },
  {
    title: "Simulador de entrevistas con IA",
    description:
      "Practica con un bot que se hace pasar por CTO. Te hace las preguntas difíciles, te da feedback y te prepara para la conversación real. Llegas con ventaja.",
  },
  {
    title: "Checklist de despliegue gratuito",
    description:
      "Vercel, Railway, Supabase, Cloudflare. La lista completa de plataformas donde desplegar tus proyectos sin pagar un centavo. Para que tu portafolio viva en producción.",
  },
  {
    title: "Estrategia de posicionamiento anti-filtros",
    description:
      "El método para que tu perfil burle a THEMACHINE y aparezca donde los reclutadores humanos miran. Sin depender de palabras clave ni rezar por el Easy Apply.",
  },
  {
    title: "El framework completo de 8 pasos",
    description:
      "Cada fase explicada con ejemplos reales. Desde la deconstrucción de la oferta hasta el mensaje de cierre con el decisor técnico. El mapa completo.",
  },
];

export function HexisSystemSection() {
  return (
    <section id="hexis-system" className="bg-[#F8F9FA] py-16 sm:py-20">
      <div className="mx-auto max-w-container px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#2563EB]/20 bg-[#F0F4FF] px-4 py-1 text-xs font-semibold tracking-wide text-[#2563EB]">
            EL MÉTODO
          </span>
          <FloatingHeading>
            <h2>Lo que hay dentro del Método Hexis</h2>
          </FloatingHeading>
          <p className="mt-4 text-base text-[#4A5568] sm:text-lg">
            28 páginas. Sin relleno. Cada sección es un paso accionable que te
            acerca a la entrevista con el CTO.
          </p>
        </div>

        <div className="mx-auto mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-4xl">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.08)]"
            >
              <h3 className="text-[15px] font-semibold text-[#0B1E33]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4A5568]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-xl border-2 border-[#25D366]/30 bg-[#F0FAF4] p-6 text-center">
          <p className="text-sm font-semibold text-[#0B1E33]">
            Al obtener el libro, tendrás acceso privado a mi grupo de WhatsApp
          </p>
          <p className="mt-1 text-sm text-[#4A5568]">
            Donde en 10 días romperás el código del empleo tech en 2026. No
            estarás solo: resuelvo dudas, comparto estrategias y ajustamos tu
            enfoque en tiempo real.
          </p>
        </div>

        <div className="mt-6 text-center">
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
            Quiero el PDF
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
