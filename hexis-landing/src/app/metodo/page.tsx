"use client";

import Image from "next/image";
import { ShoppingBag, ChevronRight, Check } from "lucide-react";
import { TheMachineText } from "@/components/ui/the-machine-text";

export default function MetodoPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1A1A1A] antialiased">
      {/* ─── HERO: Titular de curiosidad y amenaza ─── */}
      <header className="bg-[#080B12] px-5 py-16 text-center text-white sm:py-24">
        <div className="mx-auto max-w-2xl">
          {/* Nota editorial simulada */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
              ALERTA PARA DESARROLLADORES · 2026
            </span>
          </div>

          <h1 className="text-[1.75rem] leading-tight font-extrabold text-white sm:text-[2.5rem]">
            Las{" "}
            <span className="text-red-500">5 señales ocultas</span> de que
            tu perfil técnico está siendo destruido por el algoritmo sin que te
            des cuenta
          </h1>

          <p className="mt-5 text-base text-gray-200 sm:text-lg">
            Si cumples <strong className="text-white">más de 2</strong>, estás
            siendo descartado por una IA en menos de{" "}
            <strong className="text-white">3 segundos</strong>, sin importar lo
            buen developer que seas.
          </p>

          <a
            href="#cta-final"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-red-500"
          >
            Ver las 5 señales ahora
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </header>

      {/* ─── SECCIÓN 2: Desmitificar el problema ─── */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-lg leading-relaxed text-[#4A5568]">
            Si eres developer, llevas semanas —o meses— aplicando a ofertas y
            solo recibes silencio.{" "}
            <strong className="text-[#0B1E33]">
              No es tu culpa. No es que el mercado esté saturado. No es que no
              seas suficiente.
            </strong>
          </p>

          <p className="mt-5 text-lg leading-relaxed text-[#4A5568]">
            El problema real es un sistema automatizado que la mayoría de
            empresas instala y nadie calibra: los filtros{" "}
            <TheMachineText />. Un software que recibe tu CV, lo parsea, y si no
            entiende el formato o no encuentra ciertas palabras,{" "}
            <strong className="text-[#0B1E33]">
              te descarta antes de que un humano sepa que existes.
            </strong>
          </p>

          <p className="mt-5 text-lg leading-relaxed text-[#4A5568]">
            Funciona como un portero automático defectuoso: no mide tu talento,
            tu experiencia real ni lo que puedes construir. Solo mide si tu
            documento encaja en una plantilla que él entiende. Y la mayoría de
            developers no lo saben.
          </p>
        </div>
      </section>

      {/* ─── SECCIÓN 3: Las 5 señales ─── */}
      <section className="bg-[#F8F9FA] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-[1.5rem] font-bold text-[#0B1E33] sm:text-[1.8rem]">
            Las 5 señales técnicas que te descartan al instante
          </h2>

          <div className="mt-12 space-y-8">
            {/* Señal 1 */}
            <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#0B1E33]">
                    Tu CV está diseñado para humanos, no para máquinas
                  </h3>
                  <p className="mt-2 leading-relaxed text-[#4A5568]">
                    Usaste Canva, dos columnas, barras de porcentaje, iconos. Se
                    ve precioso.{" "}
                    <strong className="text-[#0B1E33]">
                      Pero THEMACHINE no entiende diseño visual.
                    </strong>{" "}
                    Parsea tu texto como ruido. Barajó las columnas, perdió
                    palabras, y el resultado fue basura ilegible. Tu CV ni
                    siquiera llegó a la carpeta de &ldquo;revisar&rdquo;.
                  </p>
                </div>
              </div>
            </div>

            {/* Señal 2 */}
            <div className="rounded-xl border border-orange-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#0B1E33]">
                    Los vacíos semánticos que el bot sí detecta
                  </h3>
                  <p className="mt-2 leading-relaxed text-[#4A5568]">
                    Pusiste &ldquo;Experiencia en React&rdquo;. Suena bien. Pero el software
                    busca palabras que{" "}
                    <strong className="text-[#0B1E33]">
                      contextualicen ese expertise
                    </strong>
                    : state management, hooks, middleware, renderizado del lado
                    del servidor, component lifecycle. Si no aparecen, para
                    THEMACHINE tú no sabes React.{" "}
                    <strong className="text-[#0B1E33]">
                      Te descartó por omitir vocabulario, no por falta de
                      talento.
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Señal 3 */}
            <div className="rounded-xl border border-red-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                  3
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#0B1E33]">
                    El vicio del &ldquo;Easy Apply&rdquo; que te entierra vivo
                  </h3>
                  <p className="mt-2 leading-relaxed text-[#4A5568]">
                    Aplicaste a 50 ofertas hoy con un solo clic. El problema:
                    otras{" "}
                    <strong className="text-[#0B1E33]">
                      800 personas hicieron lo mismo
                    </strong>{" "}
                    en la misma base de datos. THEMACHINE agrupa por timestamp y
                    saturación. Tu perfil no solo quedó al fondo: quedó en una
                    pila que ningún reclutador humano va a revisar.
                  </p>
                </div>
              </div>
            </div>

            {/* Señal 4 */}
            <div className="rounded-xl border border-amber-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-600">
                  4
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#0B1E33]">
                    Tu LinkedIn está oculto para los reclutadores
                  </h3>
                  <p className="mt-2 leading-relaxed text-[#4A5568]">
                    Tienes LinkedIn, sí. Pero los reclutadores usan filtros
                    internos que buscan keywords, skills y{" "}
                    <strong className="text-[#0B1E33]">
                      actividad reciente
                    </strong>
                    . Si tu perfil no está optimizado semánticamente con el
                    vocabulario correcto, no apareces en sus búsquedas. Existes,
                    pero eres invisible.
                  </p>
                </div>
              </div>
            </div>

            {/* Señal 5 */}
            <div className="rounded-xl border border-amber-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-600">
                  5
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#0B1E33]">
                    No hablas el idioma del software de reclutamiento moderno
                  </h3>
                  <p className="mt-2 leading-relaxed text-[#4A5568]">
                    Cada plataforma —LinkedIn, Indeed, Greenhouse, Lever— tiene
                    su propio algoritmo de ranking.{" "}
                    <strong className="text-[#0B1E33]">
                      Si no sabes cómo indexar tu perfil para cada una
                    </strong>
                    , simplemente no existes en sus resultados. No es que te
                    rechacen: es que ni siquiera te encuentran.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 4: Historia del creador ─── */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-10 h-28 w-28 overflow-hidden rounded-full border-2 border-[#2563EB]/20 sm:h-36 sm:w-36">
            <Image
              src="/images/saturno-mangieri-metodo-hexis.jpg"
              alt="Saturno Mangieri"
              width={144}
              height={144}
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="text-[1.5rem] font-bold text-[#0B1E33] sm:text-[1.8rem]">
            Yo estuve exactamente donde tú estás ahora
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-[#4A5568]">
            Me llamo Saturno Mangieri. Soy software engineer y pasé más de{" "}
            <strong className="text-[#0B1E33]">300 rechazos automáticos</strong>{" "}
            seguidos. Tengo más de 5 años de experiencia real escribiendo código
            — puedes ver mi{" "}
            <a
              href="https://github.com/theghost1980"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#2563EB] underline hover:no-underline"
            >
              GitHub
            </a>{" "}
            y comprobarlo.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-[#4A5568]">
            Un día me harté. En vez de seguir aplicando como un robot, decidí
            pensar como el robot que me estaba bloqueando.{" "}
            <strong className="text-[#0B1E33]">
              Apliqué ingeniería inversa a los sistemas de filtrado automático.
            </strong>{" "}
            Estudié cómo parsean los ATS, qué keywords buscan realmente, cómo
            indexan los perfiles en cada plataforma.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-[#4A5568]">
            El resultado: en menos de una semana de aplicar lo que descubrí,{" "}
            <strong className="text-[#0B1E33]">
              recibí 3 entrevistas directas con CTOs y directores de empresas.
            </strong>{" "}
            Sin palanca, sin mentir, sin enviar 50 CVs al día. Solo entendiendo
            el sistema y dándole lo que necesita para dejarme pasar.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-[#4A5568]">
            Organicé todo ese conocimiento en un solo documento. Lo llamé{" "}
            <strong className="text-[#0B1E33]">Método Hexis</strong>.
          </p>
        </div>
      </section>

      {/* ─── SECCIÓN 5: La oferta ─── */}
      <section className="bg-[#F8F9FA] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-[1.5rem] font-bold text-[#0B1E33] sm:text-[1.8rem]">
            Método Hexis: La guía de ingeniería inversa para hackear los filtros
            de contratación
          </h2>

          <p className="mt-4 text-center text-lg text-[#4A5568]">
            No es un libro genérico de &ldquo;cómo hacer un CV&rdquo;. Es un sistema paso a
            paso diseñado por un dev para devs.
          </p>

          <div className="mt-10 space-y-4">
            {[
              {
                title: "Auditoría completa de perfil ATS",
                desc: "El checklist exacto para diagnosticar qué está matando tu visibilidad en cada plataforma. Sabrás exactamente por qué te rechazan antes de volver a aplicar.",
              },
              {
                title: "Diccionario semántico de keywords",
                desc: "El mapa de palabras que cada ATS busca según tu stack. React no es solo React: es hooks, state, lifecycle, server components. Te damos el vocabulario completo.",
              },
              {
                title: "Estrategia de prospección directa",
                desc: "Cómo llegar al CTO sin pasar por el ATS. El template de mensaje que usé para conseguir 3 entrevistas en una semana. Probado, no teorizado.",
              },
              {
                title: "Acceso al grupo privado de WhatsApp",
                desc: "No estarás solo. Resuelvo dudas, comparto estrategias y ajustamos tu enfoque en tiempo real. En 10 días rompes el código del empleo tech.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-white p-5"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                <div>
                  <h3 className="font-bold text-[#0B1E33]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#4A5568]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 6: Pricing Card (NativePath Style) ─── */}
      <section id="cta-final" className="bg-[#F8F9FA] px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-md">
          {/* ── Badge flotante ── */}
          <div className="relative flex justify-center">
            <div className="absolute -top-9 rounded-full bg-[#0B1E33] px-6 py-2 text-sm font-bold tracking-wide text-amber-400 shadow-lg">
              EL MÁS BUSCADO POR DEVS
            </div>
          </div>

          {/* ── Tarjeta principal ── */}
          <div className="rounded-2xl border-2 border-amber-400/40 bg-white p-0 shadow-2xl">
            {/* Encabezado */}
            <div className="rounded-t-2xl bg-gradient-to-b from-[#FFF8E7] to-white px-8 pt-10 pb-6 text-center">
              <h2 className="text-xl font-extrabold text-[#0B1E33] sm:text-2xl">
                Acceso Completo al Método Hexis
              </h2>
              <p className="mt-1 text-sm font-medium text-[#4A5568]">
                Sistema Antifiltros + Manual + Grupo Privado
              </p>
            </div>

            {/* Cuerpo */}
            <div className="px-8 pb-8">
              {/* Ahorro instantáneo */}
              <div className="mt-2 text-center">
                <span className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-bold text-red-600">
                  AHORRO INSTANTÁNEO DE $70
                </span>
              </div>

              {/* Equivalencia de valor */}
              <p className="mt-4 text-center text-sm text-[#4A5568]">
                Menos de lo que cuesta un café al día para asegurar tu próximo
                sueldo tech.
              </p>

              {/* Precio grande */}
              <div className="mt-5 text-center">
                <span className="text-5xl font-extrabold text-[#0B1E33]">
                  $27
                </span>
                <span className="ml-1 text-lg font-medium text-[#4A5568]">
                  / pago único
                </span>
              </div>

              {/* Beneficio extra */}
              <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-green-50 py-2.5 text-sm font-bold text-green-700">
                <Check className="h-4 w-4" />+ ACCESO INMEDIATO AL PDF
              </div>

              {/* Precio comparativa */}
              <div className="mt-5 space-y-1 text-center text-sm">
                <div className="flex items-center justify-between text-[#4A5568]">
                  <span>Valor del sistema completo</span>
                  <span className="font-semibold line-through">$97</span>
                </div>
                <div className="flex items-center justify-between text-[#4A5568]">
                  <span>Descuento de lanzamiento</span>
                  <span className="font-semibold text-green-600">−$70</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#E2E8F0] pt-2 text-base font-bold text-[#0B1E33]">
                  <span>Total hoy</span>
                  <span>$27</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://shop.hexis.fyi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#F5A623] px-8 py-4 text-base font-extrabold text-[#0B1E33] shadow-lg transition-all hover:scale-105 hover:bg-[#E8960A]"
              >
                <ShoppingBag className="h-5 w-5" />
                COMPRAR AHORA — ACCESO INMEDIATO
              </a>

              {/* Garantía */}
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                <p className="text-xs leading-relaxed text-[#4A5568]">
                  <strong className="text-[#0B1E33]">
                    Garantía Hexis de 30 días:
                  </strong>{" "}
                  Pasa los filtros automáticos o te devolvemos tu dinero. Sin
                  preguntas, sin letra pequeña.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
