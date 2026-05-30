import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Construye ventaja a través de la práctica
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Sistemas modernos para profesionales ambiciosos. Descarga gratis el Método Hexis
            y conviértete en el candidato que las empresas quieren ver.
          </p>
        </section>

        <section id="cta-form" className="mx-auto max-w-xl px-4 py-24 sm:px-6">
          <p className="text-center text-sm text-muted-foreground">
            [Aquí irá el formulario de descarga]
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
