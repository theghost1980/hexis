"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Navbar() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const fade = Math.max(0.3, 1 - scrollY / 800)
      setOpacity(fade)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-opacity duration-300"
      style={{ opacity }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => {
        const fade = Math.max(0.3, 1 - window.scrollY / 800)
        setOpacity(fade)
      }}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/hexis-logo-black-font-ES-vertical.png"
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
