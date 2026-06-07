"use client";

import { useState, Fragment } from "react";
import { cn } from "@/lib/utils";
import { AlertTriangle, Check } from "lucide-react";
import { TheMachineText } from "@/components/ui/the-machine-text";

const renderDesc = (text: string) =>
  text.split("THEMACHINE").map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <TheMachineText />}
      {part}
    </Fragment>
  ));

const signals = [
  {
    title: "Tu CV es una obra de arte... para el ojo humano",
    severity: "Crítico",
    description:
      "Diseñaste tu currículum en Canva con dos columnas, barras de porcentaje, iconitos y una paleta de colores impecable. Se ve brutal. Pero THEMACHINE lo parsea como ruido ilegible y descarta tu perfil en 1.2 segundos sin que nadie lo haya visto.",
  },
  {
    title: '"Soy experto en React, Node.js y bases de datos"',
    severity: "Grave",
    description:
      "Eso es lo que pusiste. Y suena bien. Pero el algoritmo busca palabras que validen ese expertise: state management, hooks, middleware, ORM, serverless. Si no aparecen, el bot asume que copiaste los nombres de moda y te manda al fondo.",
  },
  {
    title: "Le diste Easy Apply a 50 ofertas esta semana",
    severity: "Grave",
    description:
      "Aplicaste a todo lo que se movía con un solo clic. Pero le diste a la misma base de datos que otros 800 devs. THEMACHINE agrupa por timestamp y saturación: tu perfil queda enterrado bajo una pila que nadie revisa.",
  },
  {
    title: "Tu GitHub es un cementerio de repos sin contexto",
    severity: "Moderado",
    description:
      "Tus proyectos existen, funcionan y hasta tienen tests. Pero THEMACHINE no navega repos. Sin un portafolio que articule problema → solución → stack → resultado, tu código real es invisible para el filtro automático.",
  },
  {
    title: "Tu huella digital es un CV y un LinkedIn genérico",
    severity: "Moderado",
    description:
      "El algoritmo de reclutamiento moderno escanea la web en busca de señales de autoridad: artículos, charlas, contribuciones open source, presencia en comunidades. Si lo único que existes es un PDF y un perfil de LinkedIn con 200 contactos, tu score de credibilidad técnica es cero.",
  },
];

export function TheMachineSection() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const count = checked.size;
  const rejected = count >= 2;

  return (
    <section id="the-machine" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-container px-5">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="lg:sticky lg:top-0 z-[60] mb-4 inline-block rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold tracking-wide text-red-600 shadow-[0_1px_3px_rgba(0,0,0,0.04)] animate-float">
            AUTODIAGNÓSTICO · 30 SEGUNDOS
          </span>
          <h2 className="mb-2.5 text-[1.5rem] font-bold text-[#0B1E33] sm:text-[1.8rem]">
            5 señales de que el algoritmo ya te descartó
          </h2>
        </div>

        {/* Live counter — sticky */}
        <div className="sticky top-[72px] z-30 mx-auto -mt-4 pb-4 pt-4 lg:max-w-4xl">
          <div className="absolute inset-0 bg-white" />
          <div className="relative space-y-4">
            <div className="flex items-stretch gap-3">
              {/* Thermometer */}
              <div className="flex w-8 shrink-0 flex-col justify-end overflow-hidden rounded-full border-2 border-[#E2E8F0] bg-[#F8F9FA] p-[3px]">
                <div
                  className="w-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    height: `${(count / 5) * 100}%`,
                    backgroundColor:
                      count <= 1
                        ? "#22c55e"
                        : count === 2
                          ? "#eab308"
                          : count === 3
                            ? "#f97316"
                            : "#ef4444",
                  }}
                />
              </div>

              {/* Counter */}
              <div
                className={cn(
                  "flex flex-1 flex-col items-center justify-center gap-1 rounded-xl border p-5 transition-all duration-300",
                  rejected
                    ? "border-red-300 bg-red-50"
                    : "border-[#E2E8F0] bg-[#F8F9FA]"
                )}
              >
                <div className="flex items-center justify-center gap-4">
                  <span
                    className={cn(
                      "text-5xl font-bold tabular-nums transition-colors duration-300",
                      rejected ? "text-red-600" : "text-[#0B1E33]"
                    )}
                  >
                    {count}
                  </span>
                  <span className="text-lg text-[#4A5568]">de 5 señales</span>
                </div>
                <p className="text-xs text-[#4A5568] sm:text-sm">
                  Si cumples más de dos, estás siendo descartado por una IA en
                  menos de 3 segundos, sin importar lo buen developer que seas.
                </p>
              </div>

              {/* CTA button at 2+ */}
              <div
                className={cn(
                  "flex shrink-0 items-center transition-all duration-500",
                  count >= 2
                    ? "w-auto max-w-xs opacity-100"
                    : "w-0 max-w-0 opacity-0"
                )}
              >
                <button
                  onClick={() =>
                    document
                      .getElementById("hexis-system")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="animate-pulse-glow self-center whitespace-nowrap rounded-xl bg-[#ef4444] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#dc2626]"
                  style={{
                    animationDuration: `${2.2 - count * 0.4}s`,
                  }}
                >
                  Arreglar esto →
                </button>
              </div>
            </div>

            {/* Alert banner */}
            <div
              className={cn(
                "overflow-hidden rounded-lg transition-all duration-500",
                rejected
                  ? "max-h-40 border border-red-300 bg-red-100/70 opacity-100"
                  : "max-h-0 border-transparent opacity-0"
              )}
            >
              <div className="flex items-center gap-3 px-5 py-4">
                <AlertTriangle className="h-5 w-5 shrink-0 text-red-600" />
                <p className="text-sm font-semibold text-red-800">
                  THEMACHINE te descartó hace rato. Pero tiene solución: abajo te
                  mostramos cómo revertirlo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Checklist cards */}
        <div className="mx-auto mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-4xl">
          {signals.map((signal, i) => {
            const isChecked = checked.has(i);
            const isLastOdd = i === signals.length - 1 && signals.length % 2 !== 0;
            return (
              <button
                key={signal.title}
                onClick={() => toggle(i)}
                className={cn(
                  "group flex w-full items-start gap-4 rounded-xl border p-5 text-left transition-all duration-200",
                  isChecked
                    ? "border-red-300 bg-red-50/70 shadow-sm"
                    : "border-[#E2E8F0] bg-white hover:border-red-200 hover:shadow-md",
                  isLastOdd && "sm:col-span-2 sm:justify-self-center sm:w-1/2"
                )}
              >
                {/* Custom checkbox */}
                <div
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all duration-200 mt-0.5",
                    isChecked
                      ? "border-red-500 bg-red-500"
                      : "border-[#CBD5E1] group-hover:border-red-300"
                  )}
                >
                  {isChecked && (
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={4} />
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#0B1E33] font-semibold leading-snug">
                      {signal.title}
                    </h3>
                    <span
                      className={cn(
                        "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold",
                        signal.severity === "Crítico"
                          ? "bg-red-100 text-red-700"
                          : signal.severity === "Grave"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-amber-100 text-amber-700"
                      )}
                    >
                      {signal.severity}
                    </span>
                  </div>
                  <p className="mt-1.5 text-base leading-relaxed text-[#4A5568]">
                    {renderDesc(signal.description)}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Solution hook */}
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm text-[#4A5568] sm:text-base">
            El Método Hexis te da el framework completo para que tu perfil
            burle estos filtros y llegue directo a quien decide.
          </p>
        </div>
      </div>
    </section>
  );
}
