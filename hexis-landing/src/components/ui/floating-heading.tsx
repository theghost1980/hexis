"use client"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface FloatingHeadingProps {
  children: React.ReactNode
  className?: string
}

export function FloatingHeading({ children, className }: FloatingHeadingProps) {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [isStuck, setIsStuck] = useState(false)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting)
      },
      {
        rootMargin: "-65px 0px 0px 0px",
        threshold: 0,
      }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinelRef} className="h-px" />
      <div
        className={cn(
          "sticky top-0 z-50",
          isStuck && "animate-float",
          className
        )}
      >
        {isStuck && (
          <div className="mx-auto mb-1 h-0.5 animate-bar-grow rounded-full bg-[#F5A623]" />
        )}
        {children}
      </div>
    </>
  )
}
