import * as React from "react"

import { cn } from "@/lib/utils"

interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, children, icon, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "border-l-4 border-[#2563EB] bg-[#F0F4FF] p-5 text-[#1A1A1A]",
        className
      )}
      {...props}
    >
      {icon && <div className="mb-2">{icon}</div>}
      {children}
    </div>
  )
)
Callout.displayName = "Callout"

export { Callout }
