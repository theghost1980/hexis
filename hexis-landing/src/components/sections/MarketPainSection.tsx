import { FileSearch, MessageCircle, Cpu } from "lucide-react"

const pains = [
  {
    icon: FileSearch,
    title: "ATS que descartan tu perfil sin leerlo.",
    description:
      "Los sistemas automáticos filtran CVs por palabras clave antes de que un humano los vea. Tu experiencia real nunca llega a quien decide.",
  },
  {
    icon: MessageCircle,
    title: "Entrevistas que nunca llegan, aunque tienes la experiencia.",
    description:
      "Tienes los años, los proyectos y las ganas, pero el proceso de selección tradicional no está diseñado para encontrarte.",
  },
  {
    icon: Cpu,
    title:
      "La IA generativa hace que cualquier CV luzca 'perfecto'.",
    description:
      "Cuando todos usan las mismas herramientas, el CV deja de ser un diferenciador. La única prueba real es lo que construyes y cómo lo presentas.",
  },
]

export function MarketPainSection() {
  return (
    <section className="bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-container px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2>El mercado tech no perdona. La práctica sí.</h2>
          <p className="mt-4 text-base text-[#4A5568] sm:text-lg">
            Cada oferta recibe 500 aplicaciones en horas. La mayoría son CVs
            genéricos. Tú puedes ser la excepción.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain) => {
            const Icon = pain.icon
            return (
              <div
                key={pain.title}
                className="rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3>{pain.title}</h3>
                <p className="mt-2 text-sm text-[#4A5568]">
                  {pain.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-[#E2E8F0] bg-[#F0F4FF] p-6 text-center">
          <p className="text-lg font-semibold text-[#0B1E33]">
            El 87 % de los reclutadores afirma que un portafolio con proyectos
            reales pesa más que el CV.
          </p>
        </div>
      </div>
    </section>
  )
}
