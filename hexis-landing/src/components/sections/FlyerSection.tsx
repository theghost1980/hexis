import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export function FlyerSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-container px-5 text-center">
        <Image
          src="/images/flyer-hexis.png"
          alt="Flyer del Método Hexis — 28 páginas de acción"
          width={800}
          height={1131}
          className="mx-auto w-full max-w-lg rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        />

        <div className="mt-8">
          <a
            href="https://shop.hexis.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-10 py-4 text-base font-semibold text-[#1A2B3C] shadow-sm transition-all hover:bg-[#D97706]"
          >
            <ShoppingBag className="h-5 w-5" />
            Comprar ahora
          </a>
        </div>
      </div>
    </section>
  );
}
