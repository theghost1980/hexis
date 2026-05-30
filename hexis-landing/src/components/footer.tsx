import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Globe, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <Link href="/">
              <Image
                src="/logos/hexis-logo-black-font-ES.png"
                alt="Hexis"
                width={110}
                height={73}
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Construye ventaja a través de la práctica.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Globe className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:hola@hexis.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Hexis. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
