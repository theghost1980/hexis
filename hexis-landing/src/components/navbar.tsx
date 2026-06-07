"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Activity, Gamepad2 } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-container items-center gap-1 px-1.5 py-1 sm:gap-2 sm:px-5 sm:py-1.5 sm:justify-between">
        {/* Logo: mobile usa versión horizontal compacta */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logos/hexis-logo-black-font-ES-vertical-mobile.png"
            alt="Hexis"
            width={90}
            height={36}
            className="h-auto max-h-[34px] w-auto sm:hidden"
            priority
          />
          <Image
            src="/logos/hexis-logo-black-font-ES-vertical.png"
            alt="Hexis"
            width={100}
            height={66}
            className="hidden h-auto max-h-[52px] w-auto sm:block"
            priority
          />
        </Link>

        {/* Nav buttons — responsive */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => scrollTo("the-machine")}
            className="inline-flex items-center gap-0.5 rounded-md border border-gray-200 px-1 py-1.5 text-[9px] font-medium text-gray-600 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:gap-1.5 sm:rounded-lg sm:px-3 sm:py-2 sm:text-xs"
          >
            <Activity className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span className="hidden sm:inline">Las 5 señales</span>
            <span className="sm:hidden">ATS</span>
          </button>

          <button
            onClick={() => scrollTo("jugar-empleo")}
            className="inline-flex items-center gap-0.5 rounded-md border border-purple-300 bg-purple-50 px-1 py-1.5 text-[9px] font-semibold text-purple-700 transition-all hover:bg-purple-100 hover:border-purple-400 sm:gap-1.5 sm:rounded-lg sm:px-3 sm:py-2 sm:text-xs"
          >
            <Gamepad2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span className="hidden sm:inline">Jugar al empleo</span>
            <span className="sm:hidden">Juego</span>
          </button>

          <a
            href="https://shop.hexis.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 rounded-md bg-[#F5A623] px-1.5 py-1.5 text-[9px] font-bold text-[#1A2B3C] transition-colors hover:bg-[#D97706] sm:gap-1.5 sm:rounded-lg sm:px-3 sm:py-2 sm:text-xs"
          >
            <ShoppingBag className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span className="hidden sm:inline">Comprar ahora</span>
            <span className="sm:hidden">$27</span>
          </a>
        </div>
      </div>
    </header>
  );
}
