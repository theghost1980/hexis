import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Construye ventaja a través de la práctica
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Sistemas modernos para profesionales ambiciosos. Descarga gratis el Método Hexis
            y conviértete en el candidato que las empresas quieren ver.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
