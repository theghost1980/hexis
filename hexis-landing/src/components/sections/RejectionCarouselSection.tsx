"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Bell,
  Mail,
  MessageCircle,
  MessageSquare,
  Briefcase,
  Hash,
  ShieldAlert,
  CalendarX,
  Smartphone,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface CardData {
  name: string
  type: string
  icon: React.ElementType
  headerLabel: string
  headerColor: string
  content: string
  coda: string
}

const cards: CardData[] = [
  {
    name: "Mark",
    type: "WhatsApp",
    icon: MessageCircle,
    headerLabel: "Chat con Reclutador",
    headerColor: "#25D366",
    content:
      "Hola Mark, gracias por postularte. Lamentamos informarte que hemos recibido m\u00E1s de 300 CVs para esta posici\u00F3n y la mayor\u00EDa tienen perfiles muy similares al tuyo. Hemos decidido seguir con otros candidatos.",
    coda: "No seas como Mark. Este m\u00E9todo te sacar\u00E1 del reba\u00F1o.",
  },
  {
    name: "Elena",
    type: "Email",
    icon: Mail,
    headerLabel: "Bandeja de entrada",
    headerColor: "#2563EB",
    content:
      "Hola Elena, agradecemos tu inter\u00E9s, pero hemos recibido decenas de CVs con tu mismo stack y experiencia. Necesitamos alguien que demuestre un diferenciador claro. Te deseamos \u00E9xito en tu b\u00FAsqueda.",
    coda: "No seas como Elena. Un CV gen\u00E9rico no destaca entre cientos de iguales.",
  },
  {
    name: "Carlos",
    type: "Telegram",
    icon: MessageSquare,
    headerLabel: "Mensaje directo",
    headerColor: "#0088CC",
    content:
      "Carlos, ya revisamos tu perfil. La verdad es que tenemos varios candidatos con exactamente las mismas herramientas y experiencia. Sin algo que realmente te diferencie, no podemos avanzar.",
    coda: "No seas como Carlos. Haz que tu trabajo sea imposible de ignorar.",
  },
  {
    name: "Lucas",
    type: "LinkedIn",
    icon: Briefcase,
    headerLabel: "Mensaje de reclutador",
    headerColor: "#0A66C2",
    content:
      "Gracias por postularte, Lucas. Hemos recibido m\u00E1s de 500 aplicaciones y la gran mayor\u00EDa tienen portfolios clonados de tutoriales. Necesitamos alguien que resuelva problemas reales, no que copie proyectos.",
    coda: "No seas como Lucas. Tu portafolio debe resolver dolores de negocio, no copiar tutoriales.",
  },
  {
    name: "Sof\u00EDa",
    type: "Sistema ATS",
    icon: ShieldAlert,
    headerLabel: "Alerta del sistema",
    headerColor: "#DC2626",
    content:
      "[Sistema ATS]: Postulaci\u00F3n rechazada autom\u00E1ticamente. Motivo: se recibieron m\u00E1s de 400 CVs con palabras clave id\u00E9nticas. Tu perfil no presenta diferenciaci\u00F3n significativa frente al resto.",
    coda: "No seas como Sof\u00EDa. No dejes tu carrera en manos de un algoritmo ciego.",
  },
  {
    name: "Mateo",
    type: "SMS",
    icon: Smartphone,
    headerLabel: "Mensaje de texto",
    headerColor: "#4A5568",
    content:
      "Hola Mateo, somos de RH. Revisamos tu CV pero tenemos 200 postulantes con perfiles muy parecidos al tuyo. Sin un portafolio que muestre impacto real, no podemos justificar una entrevista.",
    coda: "No seas como Mateo. Demuestra valor antes de que te lo pidan.",
  },
  {
    name: "Dani",
    type: "Slack",
    icon: Hash,
    headerLabel: "#reclutamiento",
    headerColor: "#4A154B",
    content:
      "Dani, honestamente tu CV es bueno, pero esta semana ya revisamos 50 CVs casi id\u00E9nticos generados con IA. Todos dicen lo mismo. Necesitamos alguien que demuestre con hechos, no con palabras bonitas.",
    coda: "No seas como Dani. La IA gen\u00E9rica te hace lucir perfecto, pero id\u00E9ntico al resto.",
  },
  {
    name: "Laura",
    type: "Correo autom\u00E1tico",
    icon: Globe,
    headerLabel: "Notificaci\u00F3n del sistema",
    headerColor: "#059669",
    content:
      "Hola Laura, gracias por aplicar. Lamentamos informarte que la posici\u00F3n ha recibido un volumen muy alto de postulaciones con perfiles similares al tuyo. Tu CV pasar\u00E1 a nuestra base de datos.",
    coda: "No seas como Laura. No te quedes esperando en una base de datos que nadie revisa.",
  },
  {
    name: "Tom",
    type: "Invitaci\u00F3n de calendario",
    icon: CalendarX,
    headerLabel: "Evento cancelado",
    headerColor: "#F59E0B",
    content:
      "Tom, cancelamos la siguiente ronda. El equipo recibi\u00F3 15 candidatos finales con perfiles muy similares al tuyo y no encontramos un diferenciador claro entre ustedes. Seguiremos con otros procesos.",
    coda: "No seas como Tom. Construye un diferenciador que te haga \u00FAnico antes de llegar a la ronda final.",
  },
  {
    name: "Ana",
    type: "Feedback formal",
    icon: Bell,
    headerLabel: "Evaluaci\u00F3n recibida",
    headerColor: "#8B5CF6",
    content:
      "Ana, tu experiencia es s\u00F3lida, pero compet\u00EDas contra 30 perfiles con a\u00F1os de trayectoria similar. Necesitamos alguien que no solo tenga experiencia, sino que sepa posicionarla como una ventaja \u00FAnica.",
    coda: "No seas como Ana. No basta con tener experiencia; hay que saber venderse como la opci\u00F3n \u00FAnica.",
  },
]

function RejectionCard({ card }: { card: CardData }) {
  const Icon = card.icon
  const isEmail = card.type === "Email"
  const isWhatsApp = card.type === "WhatsApp"
  const isATS = card.type === "Sistema ATS"
  const isSMS = card.type === "SMS"
  const isSlack = card.type === "Slack"

  return (
    <div className="flex min-w-[340px] max-w-[340px] shrink-0 flex-col overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
      {isWhatsApp ? (
        <div className="bg-[#25D366]/10 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-[#075E54]">
              {card.headerLabel}
            </p>
          </div>
          <div className="mt-3 rounded-xl rounded-bl-sm bg-white p-4 shadow-sm">
            <p className="text-sm leading-relaxed text-[#1A1A1A]">
              {card.content}
            </p>
          </div>
        </div>
      ) : isEmail ? (
        <div>
          <div className="flex items-center gap-3 border-b border-[#E2E8F0] bg-[#F8F9FA] px-5 py-3">
            <Mail className="h-5 w-5 text-[#2563EB]" />
            <p className="text-sm font-semibold text-[#0B1E33]">
              {card.headerLabel}
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="mb-1 text-xs text-[#94A3B8]">
              De: sistema@empresa.com
            </p>
            <p className="mb-3 text-xs text-[#94A3B8]">
              Para: elena@email.com
            </p>
            <p className="text-sm leading-relaxed text-[#4A5568]">
              {card.content}
            </p>
          </div>
        </div>
      ) : isATS ? (
        <div className="bg-[#FEF2F2] px-5 py-4 font-mono">
          <div className="mb-3 flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-[#DC2626]" />
            <p className="text-xs font-semibold uppercase tracking-wide text-[#DC2626]">
              {card.headerLabel}
            </p>
          </div>
          <p className="text-xs leading-relaxed text-[#4A5568]">
            {card.content}
          </p>
        </div>
      ) : isSMS ? (
        <div className="bg-[#F8F9FA] px-5 py-4">
          <div className="mx-auto mb-3 w-fit rounded-full bg-[#4A5568]/10 px-3 py-1">
            <p className="text-[10px] font-semibold text-[#4A5568]">
              {card.headerLabel}
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm leading-relaxed text-[#1A1A1A]">
              {card.content}
            </p>
          </div>
        </div>
      ) : isSlack ? (
        <div>
          <div className="flex items-center gap-2 border-b border-[#E2E8F0] bg-[#F8F9FA] px-5 py-2">
            <span className="rounded bg-[#4A154B]/10 px-2 py-0.5 text-[10px] font-semibold text-[#4A154B]">
              {card.headerLabel}
            </span>
            <span className="text-xs text-[#94A3B8]">@{card.name.toLowerCase()}</span>
          </div>
          <div className="px-5 py-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#4A154B]/20 text-[10px] font-bold text-[#4A154B]">
                {card.name[0]}
              </div>
              <p className="text-sm font-semibold text-[#0B1E33]">
                {card.name}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-[#4A5568]">
              {card.content}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="flex items-center gap-3 px-5 py-3"
            style={{ backgroundColor: `${card.headerColor}10` }}
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: card.headerColor }}
            >
              <Icon className="h-4 w-4" />
            </div>
            <p className="text-sm font-semibold" style={{ color: card.headerColor }}>
              {card.headerLabel}
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm leading-relaxed text-[#4A5568]">
              {card.content}
            </p>
          </div>
        </div>
      )}
      <div className="mt-auto border-t border-[#E2E8F0] px-5 py-3">
        <p className="text-xs font-semibold text-[#0B1E33]">{card.coda}</p>
      </div>
    </div>
  )
}

export function RejectionCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const step = 364
  const total = cards.length

  const goNext = () => setCurrentIndex((i) => (i + 1) % total)
  const goPrev = () => setCurrentIndex((i) => (i - 1 + total) % total)

  const goNextRef = useRef(goNext)
  goNextRef.current = goNext

  useEffect(() => {
    if (!isHovering) {
      intervalRef.current = setInterval(() => goNextRef.current(), 4000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovering])

  const extendedCards = [...cards, ...cards, ...cards]
  const offset = total * step + currentIndex * step

  return (
    <section className="bg-[#F8F9FA] py-16 sm:py-16">
      <div className="mx-auto max-w-container px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2>{'Esto es lo que enfrentas cada d\u00EDa'}</h2>
          <p className="mt-4 text-base text-[#4A5568] sm:text-lg">
            {'Detr\u00E1s de cada rechazo hay una oportunidad de cambiar el enfoque. El Sistema Hexis te ense\u00F1a a ser la excepci\u00F3n.'}
          </p>
        </div>
      </div>

      <div
        className="relative mt-12"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 px-5"
            animate={{ x: -offset }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {extendedCards.map((card, i) => (
              <RejectionCard key={`${card.name}-${i}`} card={card} />
            ))}
          </motion.div>
        </div>

        <button
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-[#E2E8F0] text-[#4A5568] hover:text-[#0B1E33] transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-[#E2E8F0] text-[#4A5568] hover:text-[#0B1E33] transition-colors"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="mt-6 flex items-center justify-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 bg-[#F5A623]"
                  : "w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
              }`}
              aria-label={`Ir al item ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-container px-5 text-center">
        <p className="text-base font-semibold text-[#0B1E33] sm:text-lg">
          {'No seas como ellos. Este m\u00E9todo te sacar\u00E1 del reba\u00F1o.'}
        </p>
      </div>
    </section>
  )
}
