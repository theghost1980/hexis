"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TheMachineSection } from "@/components/sections/TheMachineSection";
import { MarketPainSection } from "@/components/sections/MarketPainSection";
import { RejectionProofSection } from "@/components/sections/RejectionProofSection";
import { HexisSystemSection } from "@/components/sections/HexisSystemSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FlyerSection } from "@/components/sections/FlyerSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ExitModal } from "@/components/ExitModal";
import { useExitIntent } from "@/hooks/useExitIntent";
import FrustratingRunner from "@/components/sections/FrustratingRunner";

export default function Home() {
  const { showModal, closeModal } = useExitIntent();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />

        <TheMachineSection />

        <MarketPainSection />

        <RejectionProofSection />

        <TestimonialSection />

        <HexisSystemSection />

        <FlyerSection />

        <section id="jugar-empleo" className="py-12 sm:py-16">
          <FrustratingRunner />
        </section>

        <CtaSection />
      </main>
      <Footer />
      {showModal && <ExitModal onClose={closeModal} />}
    </div>
  );
}
