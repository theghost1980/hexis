import Image from "next/image";

export function RejectionProofSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-container px-5 text-center">
        <p className="mx-auto max-w-2xl text-xl font-semibold text-[#0B1E33] sm:text-2xl">
          WhatsApp, Email, LinkedIn, Telegram... da igual el canal. El resultado
          es el mismo si tu perfil no pasa el filtro.
        </p>

        <div className="mt-8 flex justify-center">
          <Image
            src="/images/metodo-hexis-rejections-2026-full-stack-job.png"
            alt="Múltiples rechazos de postulaciones en 2026 — WhatsApp, Email, LinkedIn, Telegram"
            width={800}
            height={450}
            className="w-full max-w-2xl rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]"
          />
        </div>
      </div>
    </section>
  );
}
