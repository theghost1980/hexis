"use client";

import { cn } from "@/lib/utils";

export function TheMachineText({
  className,
  children,
}: {
  className?: string;
  children?: string;
}) {
  return (
    <span className={cn("group/tm relative inline-flex cursor-help", className)}>
      <span className="inline-flex items-center gap-1 rounded-md border border-red-500/40 bg-red-500/5 px-2 py-0.5 font-mono text-sm font-bold tracking-wider text-red-600">
        <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
        {children ?? "THEMACHINE"}
      </span>
      <span className="pointer-events-none absolute -top-1 left-1/2 z-50 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg bg-[#0B1E33] px-3 py-2 text-xs font-normal leading-relaxed text-white opacity-0 shadow-xl transition-all duration-200 group-hover/tm:opacity-100">
        así le llamo yo a la IA conocida como ATS que nos bloquea
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-[6px] border-transparent border-t-[#0B1E33]" />
      </span>
    </span>
  );
}
