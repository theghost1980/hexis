import Link from "next/link"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "404 – Página no encontrada | Hexis",
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#0A192F] pt-16">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex-grid" width="56" height="97" patternUnits="userSpaceOnUse">
                <path d="M28 0L56 16.5V49.5L28 66L0 49.5V16.5Z" fill="none" stroke="#fff" strokeWidth="0.8"/>
                <path d="M28 32.5L56 49V82L28 98.5L0 82V49Z" fill="none" stroke="#fff" strokeWidth="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-grid)" />
          </svg>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="select-none text-[180px] font-bold leading-none text-white/[0.03] sm:text-[300px]">
            404
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-5 py-20 text-center">
          <span className="inline-block rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1 text-xs font-semibold tracking-wide text-[#F59E0B]">
            ERROR 404
          </span>

          <h1 className="mt-6 text-[1.75rem] font-bold text-white sm:text-[2.5rem]">
            Has llegado a una página que no existe
          </h1>
          <p className="mt-3 text-base text-[#94A3B8]">
            No te preocupes, aquí tienes algunas opciones para seguir adelante:
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Link
              href="/"
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#F59E0B]/30 hover:bg-[#F59E0B]/5"
            >
              <ArrowLeft className="mx-auto h-8 w-8 text-[#F59E0B]" />
              <p className="mt-3 font-semibold text-white">Volver al inicio</p>
              <p className="mt-1 text-sm text-[#94A3B8]">Regresa a la página principal</p>
            </Link>

            <Link
              href="/"
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#2563EB]/30 hover:bg-[#2563EB]/5"
            >
              <FileText className="mx-auto h-8 w-8 text-[#2563EB]" />
              <p className="mt-3 font-semibold text-white">Método Hexis</p>
              <p className="mt-1 text-sm text-[#94A3B8]">Descarga el PDF gratuito</p>
            </Link>

            <Link
              href="/soporte"
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#2563EB]/30 hover:bg-[#2563EB]/5"
            >
              <HelpCircle className="mx-auto h-8 w-8 text-[#2563EB]" />
              <p className="mt-3 font-semibold text-white">Centro de Ayuda</p>
              <p className="mt-1 text-sm text-[#94A3B8]">Soporte y resolución de fallas</p>
            </Link>
          </div>

          <div className="mt-10">
            <Button variant="cta" size="lg" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ir al inicio
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
