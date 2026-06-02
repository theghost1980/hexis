"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(1, window.scrollY / 800)
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div
        className="flex w-full items-center justify-between py-1.5 transition-all duration-300 ease-out"
        style={{
          paddingLeft: `${Math.max(0, 20 - scrollProgress * 20)}px`,
          paddingRight: `${Math.max(0, 20 - scrollProgress * 20)}px`,
        }}
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
