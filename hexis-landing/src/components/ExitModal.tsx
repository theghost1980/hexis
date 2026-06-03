"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { X, ShoppingBag, ClipboardCopy, Check } from "lucide-react"

const DISCOUNT_CODE = "HEXIS2026"
const SHOP_URL = "https://shop.hexis.fyi"
const COUNTDOWN_SECONDS = 8

interface ExitModalProps {
  onClose: () => void
}

export function ExitModal({ onClose }: ExitModalProps) {
  const [status, setStatus] = useState<"initial" | "copied" | "manual">("initial")
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS)
  const redirectRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [onClose])

  useEffect(() => {
    return () => {
      if (redirectRef.current) clearTimeout(redirectRef.current)
    }
  }, [])

  useEffect(() => {
    if (status !== "copied") return
    if (countdown <= 0) {
      window.location.href = SHOP_URL
      return
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [status, countdown, onClose])

  const handleGetDiscount = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(DISCOUNT_CODE)
      setStatus("copied")
    } catch {
      setStatus("manual")
    }
  }, [])

  const handleRedirect = useCallback(() => {
    window.open(SHOP_URL, "_blank", "noopener")
    onClose()
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl sm:p-10">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#94A3B8] transition-colors hover:text-[#0B1E33]"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "initial" && (
          <>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#93C5FD] text-white shadow-lg">
              <ShoppingBag className="h-7 w-7" />
            </div>

            <h2 className="text-xl font-bold text-[#0B1E33] sm:text-2xl">
              ¡Espera! No te vayas sin tu oportunidad
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#4A5568] sm:text-base">
              Sabemos lo frustrante que es recibir rechazo tras rechazo. Por eso te ofrecemos un{" "}
              <strong className="text-[#0B1E33]">10% de descuento</strong> con el código{" "}
              <span className="rounded-md bg-[#FEF7E6] px-2 py-0.5 font-mono font-bold text-[#F59E0B]">
                {DISCOUNT_CODE}
              </span>{" "}
              si compras ahora.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={handleGetDiscount}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#93C5FD] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                Obtener descuento
                <ShoppingBag className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-4 text-center text-xs text-[#CBD5E1]">
              Código válido por tiempo limitado. Copia{" "}
              <strong className="text-[#F59E0B]">{DISCOUNT_CODE}</strong> al pagar.
            </p>
          </>
        )}

        {status === "copied" && (
          <>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#059669] to-[#34D399] text-white shadow-lg">
              <Check className="h-7 w-7" />
            </div>

            <h2 className="text-xl font-bold text-[#0B1E33] sm:text-2xl">
              Copiado tu cupón en el portapapeles
            </h2>

            <p className="mt-4 text-center text-sm text-[#4A5568]">
              Redireccionando en <span className="font-mono text-lg font-bold text-[#0B1E33]">{countdown}</span> segundos
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={handleRedirect}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#93C5FD] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                Ir a la tienda ahora
                <ShoppingBag className="h-4 w-4" />
              </button>
            </div>
          </>
        )}

        {status === "manual" && (
          <>
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FEF7E6] text-[#F59E0B] shadow-lg">
              <ClipboardCopy className="h-7 w-7" />
            </div>

            <h2 className="text-xl font-bold text-[#0B1E33] sm:text-2xl">
              Copia el código manualmente
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#4A5568]">
              Tu navegador no permite copiado automático. Selecciona y copia este código:
            </p>

            <div className="mt-4 rounded-lg border border-[#E2E8F0] bg-[#F8F9FA] px-4 py-3 text-center font-mono text-lg font-bold tracking-widest text-[#F59E0B]">
              {DISCOUNT_CODE}
            </div>

            <p className="mt-2 text-xs text-[#94A3B8]">
              Pégalo en el checkout de Gumroad para obtener tu 10% de descuento.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={handleRedirect}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#93C5FD] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                Continuar a la tienda
                <ShoppingBag className="h-4 w-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
