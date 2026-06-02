import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { MarketPainSection } from "@/components/sections/MarketPainSection"
import { HexisSystemSection } from "@/components/sections/HexisSystemSection"
import { TestimonialSection } from "@/components/sections/TestimonialSection"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />

        <MarketPainSection />

        <HexisSystemSection />

        <TestimonialSection />

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
