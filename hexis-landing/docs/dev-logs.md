# Dev Logs

## 2026-05-30 – Inicio del proyecto

### Proyecto inicializado

- Next.js 14.2.35 con App Router, TypeScript, Tailwind CSS
- shadcn/ui inicializado con tema base-nova, baseColor neutral
- Metadatos: title "Hexis – Construye ventaja a través de la práctica", favicon apuntando a /logos/favicon.ico

### Componentes creados

- **Navbar**: fixed, transparente → fondo sólido al scroll. Logo + botón "Descargar el Método".
- **Footer**: logo, tagline, enlaces, copyright.
- **Button**: componente shadcn/ui.

### Assets

- Logos en `/public/logos/` (ESP y ENG). Redimensionados y optimizados.

---

## 2026-06-02 – Paso 1: Implementación Style Bible LIGHT

### Tipografía

- Reemplazo de Geist Sans/Mono por **Plus Jakarta Sans** (300–700) y **JetBrains Mono** (400, 500) via `next/font/google`.

### Paleta de colores

- Migración de CSS HSL variables genéricas a colores fijos LIGHT del Style Bible:
  - Fondo: `#FFFFFF`, Fondo secundario: `#F8F9FA`
  - Texto principal: `#1A1A1A`, Texto secundario: `#4A5568`
  - Títulos: `#0B1E33`, Acento primario: `#2563EB`, Acento secundario: `#F59E0B`
  - Bordes: `#E2E8F0`, Éxito: `#059669`
- Jerarquía tipográfica base en `globals.css` (h1–h4, a, code).

### Tailwind config

- Nuevos tokens: `fontFamily` (sans/mono), `success`, `maxWidth.container: 1200px`.

### Componentes

- **Button**: nuevas variants `cta` (dorado) y `outline-blue` (borde azul) según specs.
- **Card**: bg `#F8F9FA`, borde `#E2E8F0`, sombra `0 4px 6px -1px rgba(0,0,0,0.05)`, padding 24px, radius `0.75rem`.
- **Callout**: borde izquierdo `#2563EB`, bg `#F0F4FF`, padding 16px 20px.

### Layout

- Contenedor principal: `max-width: 1200px` centrado con padding `0 20px`.
- Secciones: padding vertical `4rem` desktop, `2rem` mobile.
- Navbar y Footer actualizados al nuevo container y botón CTA.

### Verificación

- `tsc --noEmit` y `next lint` pasan sin errores.

---

## 2026-06-02 – Paso 2: Hero Section

### Nuevo componente

- **HeroSection** (`src/components/sections/HeroSection.tsx`): sección de 2 columnas (stackeable en mobile).
  - Badge "HEXIS · MAYO 2026"
  - Título: "El sistema que convierte práctica en oportunidades reales."
  - Subtítulo con historia de 200 rechazos → demo → CTO
  - Botón CTA dorado "Descargar el PDF Gratis" (ancla a #cta-form)
  - Botón secundario azul "Cómo funciona" (ancla a #hexis-system)
  - Texto de confianza: "Sin spam. Acceso inmediato..."
- Imagen hero generada por IA guardada en `/public/images/hero-image.png`.

### Verificación

- `tsc --noEmit` y `next lint` pasan sin errores.

---

## 2026-06-02 – Nueva visión del landing

### Objetivo ampliado

El landing page de `hexis.fyi` ahora tendrá tres funciones principales:

1. **SEO + venta del libro** (Método Hexis).
2. **Captación de leads** para un futuro programa 1:1 de alto valor, midiendo interés real.
3. **Guía de resolución de fallas** en línea (no descargable, protegida contra copia), que servirá como fuente de tráfico orgánico y soporte post-venta.

### Estilo visual

Se utilizará el **mismo sistema de diseño del libro**, pero en su **versión light** (fondo claro, texto oscuro) para diferenciarlo del PDF. La paleta de colores y las tipografías (Plus Jakarta Sans, JetBrains Mono) se mantienen para coherencia de marca.

### Nuevas páginas necesarias

- `/faq` o `/soporte`: guía de solución de problemas (PDF no se ve en móvil, problemas de pago en Gumroad, etc.).
- Esta página debe ser parte del landing, no un PDF separado.

### Próximos pasos

- Actualizar el roadmap de prompts para incluir la construcción de la página de soporte.
- Implementar los componentes con el estilo visual del libro.
