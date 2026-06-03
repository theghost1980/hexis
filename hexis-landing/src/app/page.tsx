"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { MarketPainSection } from "@/components/sections/MarketPainSection"
import { RejectionCarouselSection } from "@/components/sections/RejectionCarouselSection"
import { HexisSystemSection } from "@/components/sections/HexisSystemSection"
import { TestimonialSection } from "@/components/sections/TestimonialSection"
import { PdfPreviewSection } from "@/components/sections/PdfPreviewSection"
import { CtaSection } from "@/components/sections/CtaSection"
import { FutureVisionSection } from "@/components/sections/FutureVisionSection"
import { ExitModal } from "@/components/ExitModal"
import { useExitIntent } from "@/hooks/useExitIntent"

export default function Home() {
  const { showModal, closeModal } = useExitIntent()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />

        <MarketPainSection />

        <RejectionCarouselSection />

        <HexisSystemSection />

        <TestimonialSection />

        <PdfPreviewSection />

        <FutureVisionSection />

        <CtaSection />
      </main>
      <Footer />
      {showModal && <ExitModal onClose={closeModal} />}
    </div>
  )
}
