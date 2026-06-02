"use client"

export function CtaSection() {
  return (
    <section id="cta-form" className="bg-[#0A192F] py-16 sm:py-16">
      <div className="mx-auto max-w-xl px-5 text-center">
        <h2 className="text-white">Consigue el Método Hexis ahora</h2>
        <p className="mt-4 text-base text-[#94A3B8] sm:text-lg">
          Déjame tu correo y recibe el PDF al instante. Además, estarás dentro
          de la lista de espera para las futuras cohortes y mentorías de Hexis,
          con beneficios exclusivos por llegar temprano.
        </p>

        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="tu@correo.com"
            required
            className="flex-1 rounded-lg border border-[#1E3A5F] bg-white/10 px-4 py-3 text-sm text-white placeholder-[#CBD5E1] outline-none ring-[#F5A623] transition-all focus:ring-2"
          />
          <button
            type="submit"
            className="rounded-lg bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-[#0B1E33] shadow-sm transition-all hover:bg-[#D97706]"
          >
            Enviar
          </button>
        </form>

        <p className="mt-4 text-xs text-[#64748B]">
          Respetamos tu privacidad. Cancelas cuando quieras.
        </p>
      </div>
    </section>
  )
}
