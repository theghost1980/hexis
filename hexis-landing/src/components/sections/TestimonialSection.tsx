"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function TestimonialSection() {
  return (
    <section className="bg-[#F8F9FA] py-16 sm:py-20">
      <div className="mx-auto max-w-container px-5">
        <div className="mx-auto max-w-3xl rounded-xl border border-[#E2E8F0] bg-white p-8 text-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] sm:p-12">
          <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border-2 border-[#2563EB]/20 sm:h-36 sm:w-36">
            <Image
              src="/images/saturno-mangieri-metodo-hexis.jpg"
              alt="Saturno Mangieri — creador del Método Hexis"
              width={144}
              height={144}
              className="h-full w-full object-cover"
            />
          </div>

          <p className="text-base leading-relaxed text-[#1A1A1A] sm:text-lg">
            &ldquo;Así como te sientes ahora me sentí yo hace unas semanas. Más
            de 300 rechazos, y eso que llevo 5 años escribiendo código real,
            puedes ver mi{" "}
            <a
              href="https://github.com/theghost1980"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#2563EB] underline hover:no-underline"
            >
              GitHub
            </a>
            . Un día me harté y decidí invertir el enfoque:
            en vez de pulir mi CV o aprender otro framework, usé la IA para
            analizar el mercado. Creé el Método Hexis. En menos de una semana,
            conseguí 3 entrevistas directas con CTOs y directores de
            empresas.&rdquo;
          </p>

          <p className="mt-6 font-semibold text-[#0B1E33]">
            Saturno Mangieri
          </p>
          <p className="text-sm text-[#4A5568]">
            Software Engineer, creador del Método Hexis
          </p>

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
  );
}
