import { cn } from "@/lib/utils"

interface FloatingHeadingProps {
  children: React.ReactNode
  className?: string
}

export function FloatingHeading({ children, className }: FloatingHeadingProps) {
  return (
    <div
      className={cn(
        "sticky top-0 z-[60] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] animate-float",
        className
      )}
    >
      {children}
    </div>
  )
}
