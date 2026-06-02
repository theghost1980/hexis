import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-container px-5 py-16 sm:py-16 text-center">
          <h1>
            Construye ventaja a través de la práctica
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Sistemas modernos para profesionales ambiciosos. Descarga gratis el Método Hexis
            y conviértete en el candidato que las empresas quieren ver.
          </p>
        </section>

        <section id="cta-form" className="mx-auto max-w-xl px-5 py-16 sm:py-16">
          <p className="text-center text-sm text-muted-foreground">
            [Aquí irá el formulario de descarga]
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
