# Análisis Landing Hexis — Checklist de Mejoras

> **Fecha:** Junio 2026
> **Objetivo:** Que cualquier visitante entienda en 2 segundos que esto es un método para que desarrolladores tech encuentren empleo en 2026.

---

## 1. PROPUESTA DE VALOR — CLARIDAD INMEDIATA (CRÍTICO)

El visitante tiene 2-3 segundos para entender qué haces. El Hero actual falla.

- [x] **1.1 — Reescribir el headline del Hero**
  - Actual: _"El sistema que convierte práctica en oportunidades reales."_
  - No dice para quién es, qué problema resuelve ni qué año.
  - Propuesta: _"Consigue empleo como developer tech en 2026 — sin enviar 200 CVs."_
  - Alternativa: _"El método que te abre la puerta directa con CTOs en 2026."_

- [x] **1.2 — Reescribir el subtítulo del Hero con la propuesta real**
  - El subtítulo actual tiene la info correcta pero está escondido en texto pequeño (`text-base`).
  - Debe complementar el headline y reforzar el "qué" y "para quién".

- [x] **1.3 — Cambiar el badge del Hero**
  - Actual: `HEXIS · MAYO 2026` (la marca, que nadie conoce).
  - Propuesta: `PARA DESARROLLADORES TECH · 2026` (la audiencia y el contexto).
  - El ojo ve el badge primero; debe comunicar segmento, no marca.

- [x] **1.4 — Test de los 2 segundos**
  - Mostrar la página a alguien que no la conozca durante 2-3 segundos y preguntar "¿qué hace este servicio?".
  - Si no responde "ayuda a developers a encontrar empleo tech en 2026", hay que iterar.

---

## 2. TESTIMONIO — CREDIBILIDAD (CRÍTICO)

El único testimonio ("Andrés Silva") tiene múltiples red flags que destruyen confianza.

- [x] **2.1 — Reemplazar avatar generado por IA**
  - Cambiado por foto real de Saturno Mangieri: `saturno-mangieri-metodo-hexis.jpg`

- [x] **2.2 — Agregar enlace verificable al testimonio**
  - GitHub: `github.com/theghost1980` visible debajo del nombre.

- [x] **2.3 — Eliminar los "tech badges" genéricos**
  - Eliminados. Reemplazados por "Software Engineer · Creador del Método Hexis".

- [x] **2.4 — Reescribir el texto del testimonio en lenguaje humano**
  - Texto real de Saturno, editado para claridad pero manteniendo voz auténtica.

- [x] **2.5 — No usar la misma narrativa del Hero en el testimonio**
  - Ahora habla de 300 rechazos, 5 años de experiencia, 3 entrevistas con CTOs. Narrativa propia.

- [ ] **2.6 — Agregar 3-5 testimonios reales**
  - Un solo testimonio es débil. Tres diversos generan patrón de verdad.
  - Si no hay usuarios aún: dar acceso gratis a 5 devs a cambio de testimonio verificable.

- [ ] **2.7 — Opcional: agregar foto de resultados reales**
  - Screenshots de entrevistas conseguidas, ofertas recibidas, mensajes de CTOs.
  - Los resultados tangibles valen más que cualquier quote.

---

## 3. ARQUITECTURA DE PÁGINA — ORDEN DE SECCIONES (ALTO)

El orden actual entierra la oferta. El visitante no sabe qué es el producto hasta la sección 6.

- [x] **3.1 — Reordenar secciones**
  - Arquitectura final: Hero → TheMachine → MarketPain → RejectionProof → Testimonial → HexisSystem → PdfPreview → FrustratingRunner → FutureVision → CTA
  - Todos los CTAs apuntan hacia abajo. Flujo narrativo: dolor → realidad → testimonio → solución → preview → juego → upsell → conversión.
  - Orden actual: Hero → MarketPain → RejectionCarousel → HexisSystem → Testimonial → PdfPreview → FutureVision → CTA
  - Orden propuesto: Hero (claro) → Qué es (PDF 28 págs, 8 pasos) → Para quién → Contenido (PdfPreview) → Prueba social → Precio/CTA → Garantía/FAQ

- [x] **3.2 — Eliminar o reducir drásticamente el RejectionCarousel**
  - Eliminado. Reemplazado por `RejectionProofSection`: una frase + imagen estática.
  - 348 líneas de código, 10 tarjetas animadas de rechazos falsos.
  - No vende. Distrae. Ralentiza la página.
  - Reducir a 1-2 tarjetas estáticas o eliminar por completo.

- [ ] **3.3 — Mover PdfPreview más arriba (posición 2 o 3)**
  - Es la primera sección donde el visitante entiende QUÉ está comprando/descargando.
  - Debe aparecer apenas se establece el problema.

- [x] **3.4 — La sección FutureVision vende productos que no existen aún**
  - Eliminada. Distraía del producto real.
  - "Cohortes guiadas", "Mentorías 1:1", "Comunidad privada" son promesas vacías hoy.
  - Distrae del producto real (el PDF). Evaluar mover al footer o posponer.

---

## 4. FUNNEL — UNIFICAR CAMINO DE CONVERSIÓN (ALTO)

La página tiene múltiples CTAs contradictorios. El visitante no sabe si es gratis o pago.

- [ ] **4.1 — Definir UN solo modelo de conversión**
  - Opción A: Lead magnet gratuito → secuencia de emails → upsell al PDF de pago ($27).
  - Opción B: Venta directa del PDF a $27 sin lead magnet.
  - No mezclar ambas. Hoy conviven "Descarga gratis" y "$27" en la misma página.

- [ ] **4.2 — Unificar CTAs**
  - Actualmente hay 5 CTA buttons distintos: "Comprar ahora", "Descubrir el método completo", "Te lo compro", "Descargar el PDF", "Reserva tu lugar en la lista de espera".
  - Debe haber 1 CTA primario claro repetido consistentemente.

- [ ] **4.3 — Eliminar la fricción del tooltip de precio en el Hero**
  - El precio ($27) solo aparece en un tooltip al hacer hover.
  - Si es de pago, mostrarlo claramente. Si es gratis, no mencionar precio.

- [ ] **4.4 — El botón "Comprar ahora" linkea a shop.hexis.fyi (externo)**
  - Rompe la experiencia. Si el pago es externo, advertirlo.
  - Ideal: checkout embebido o al menos consistencia visual con la landing.

---

## 5. SEO — METADATOS Y KEYWORDS (ALTO)

Los metadatos actuales no atacan ninguna keyword de intención real.

- [x] **5.1 — Reescribir `<title>`**
  - Actual: _"Hexis – Construye ventaja a través de la práctica"_
  - Propuesta: _"Método Hexis — Consigue Empleo como Developer Tech en 2026 | PDF"_
  - Debe incluir keywords: empleo, developer, tech, 2026, método, PDF.

- [ ] **5.2 — Reescribir `<meta description>`**
  - Actual: _"Sistemas modernos para profesionales ambiciosos. Descarga gratis el Método Hexis..."_
  - Propuesta: _"Sistema de 8 pasos para desarrolladores que buscan empleo tech en 2026. Aprende a llegar directo al CTO sin depender de tu CV. PDF descargable."_

- [ ] **5.3 — Agregar `<meta keywords>` (opcional, baja prioridad)**
  - "empleo tech 2026, developer, conseguir trabajo programador, método hexis, entrevista CTO, CV tech, IA empleo"

- [ ] **5.4 — Agregar Open Graph tags**
  - `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
  - Sin esto, al compartir en WhatsApp/LinkedIn/Twitter no se ve preview.

- [ ] **5.5 — Agregar Twitter Card tags**
  - `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

- [ ] **5.6 — Agregar datos estructurados (Schema.org)**
  - `Product` o `HowTo` schema según corresponda.
  - Ayuda a rich snippets en Google.

- [ ] **5.7 — Revisar jerarquía de headings (h1, h2, h3)**
  - Solo debe haber un `<h1>` (el headline del Hero).
  - Las secciones deben usar `<h2>`. Verificar que no haya saltos (h2 → h4).

- [ ] **5.8 — Agregar alt text descriptivo a todas las imágenes**
  - Imágenes con `alt=""` vacío (hero-image.png) pierden SEO.
  - Cada imagen debe tener alt text descriptivo con keywords relevantes.

---

## 6. SOCIAL PROOF — CONFIANZA (MEDIO)

Más allá del testimonio, falta prueba social en general.

- [ ] **6.1 — Agregar números reales**
  - "X desarrolladores ya usaron el método", "Y entrevistas conseguidas", "Z ofertas recibidas".
  - Los números específicos generan más confianza que los redondos (ej: "247 devs" > "más de 200").

- [ ] **6.2 — Agregar logos de empresas donde se consiguieron entrevistas**
  - Si algún usuario llegó a entrevista en Empresa X, mostrar el logo (con permiso).
  - Los logos de empresas conocidas son la forma más rápida de transferir confianza.

- [ ] **6.3 — Agregar garantía clara**
  - "7 días de garantía de devolución" ya se menciona en `/soporte` pero no en la landing.
  - Debe estar visible antes del CTA de compra.

---

## 7. UX / COPY — MICRO-DETALLES (MEDIO)

- [x] **7.1 — Eliminar el doble punto en el subtítulo del Hero**
  - _"...en menos de 24 horas.. Descarga el Método Hexis..."_ → corregir a un solo punto.

- [ ] **7.2 — Revisar consistencia del tono de voz**
  - Algunas secciones usan tú, otras usan usted. Unificar a "tú" (más cercano para devs).

- [ ] **7.3 — El formulario de Kit dice "Descarga gratis el PDF" pero la página sugiere precio $27**
  - Definir si es gratis o no (ver sección 4) y alinear todo el copy.

- [ ] **7.4 — El botón del Hero usa ícono ShoppingBag**
  - Sugiere compra inmediata sin haber establecido valor. Si es lead magnet, usar Download o BookOpen.

- [ ] **7.5 — La sección HexisSystem oculta intencionalmente los 8 pasos**
  - Texto: _"No verás un mapa público de las fases aquí abajo. ¿Por qué? Porque el mercado ya está lleno de fórmulas genéricas..."_
  - Esto genera sospecha, no exclusividad. Es mejor mostrar los nombres de los 8 pasos (sin detalles) para demostrar que el framework existe.

---

## 8. RENDIMIENTO / TÉCNICO (BAJO)

- [ ] **8.1 — Auditar peso de imágenes**
  - `hero-image.png`, `about-system.png`, `pdf-mockup.png` — revisar que estén en formato WebP y dimensiones correctas.
  - Las imágenes son el mayor factor de carga en landing pages.

- [ ] **8.2 — Evaluar eliminar dependencia de framer-motion si no es crítica**
  - El RejectionCarousel usa framer-motion para animaciones. Si se elimina el carrusel, revisar si framer-motion sigue siendo necesario.

- [ ] **8.3 — Agregar lazy loading a imágenes below the fold**
  - Las imágenes del Hero usan `priority`. Asegurar que el resto usen `loading="lazy"`.

- [ ] **8.4 — Verificar Core Web Vitals en PageSpeed Insights**
  - LCP, FID, CLS. Apuntar a verde en los 3.

---

## 9. ANALYTICS / MEDICIÓN (BAJO)

- [ ] **9.1 — Configurar eventos de conversión en Umami**
  - Track clicks en CTA buttons, envíos del formulario Kit, scroll depth.
  - Sin eventos no se puede medir qué funciona.

- [ ] **9.2 — Agregar UTM parameters a links externos**
  - `shop.hexis.fyi` debería recibir `?utm_source=landing&utm_medium=hero_button` etc.
  - Para trackear qué botón convierte más.

- [ ] **9.3 — Configurar Facebook Pixel o Google Ads tag si se va a pautar**
  - Necesario para retargeting y audiencias.

---

## Resumen de Prioridades

| Prioridad   | Sección               | Items              |
| ----------- | --------------------- | ------------------ |
| **CRÍTICA** | 1. Propuesta de Valor | 1.1, 1.2, 1.3, 1.4 |
| **CRÍTICA** | 2. Testimonio         | 2.1 – 2.7          |
| **ALTA**    | 3. Arquitectura       | 3.1 – 3.4          |
| **ALTA**    | 4. Funnel             | 4.1 – 4.4          |
| **ALTA**    | 5. SEO                | 5.1 – 5.8          |
| **MEDIA**   | 6. Social Proof       | 6.1 – 6.3          |
| **MEDIA**   | 7. UX / Copy          | 7.1 – 7.5          |
| **BAJA**    | 8. Rendimiento        | 8.1 – 8.4          |
| **BAJA**    | 9. Analytics          | 9.1 – 9.3          |
