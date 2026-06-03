"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "exitIntentShown"

export function useExitIntent() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const alreadyShown = localStorage.getItem(STORAGE_KEY) === "true"
    if (alreadyShown) return

    const onMouseOut = (e: MouseEvent) => {
      const toEl = e.relatedTarget as Node | null
      if (!toEl && e.clientY <= 0) {
        setShowModal(true)
        localStorage.setItem(STORAGE_KEY, "true")
      }
    }

    document.addEventListener("mouseout", onMouseOut)
    return () => document.removeEventListener("mouseout", onMouseOut)
  }, [])

  const closeModal = () => setShowModal(false)

  return { showModal, closeModal }
}
