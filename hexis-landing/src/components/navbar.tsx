"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/hexis-logo-black-font-ES.png"
            alt="Hexis"
            width={196}
            height={130}
            className="h-auto max-h-[130px] w-auto"
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
