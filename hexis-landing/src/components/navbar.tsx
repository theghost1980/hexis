"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div
        className={`flex items-center justify-between py-1.5 transition-all duration-500 ease-in-out ${scrolled ? "w-full px-0" : "mx-auto max-w-container px-5"}`}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/hexis-logo-black-font-ES-vertical.png"
            alt="Hexis"
            width={118}
            height={78}
            className="h-auto max-h-[78px] w-auto"
            priority
          />
        </Link>

        <Button
          variant="cta"
          size="sm"
          className="gap-2 rounded-lg"
          onClick={() =>
            document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="hidden sm:inline">Descargar el Método</span>
          <ArrowDown className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}
