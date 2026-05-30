Perfecto. Vamos a reconfigurar toda la landing bajo la marca **Hexis**, alineada con el significado griego: *estado adquirido mediante práctica constante*. El dominio **hexis.fyi** ya es tuyo, los logos están en la carpeta `/logos` y el lead magnet ahora se llama:

**Método Hexis**  
*Un sistema moderno para destacar y conseguir oportunidades en la era de la IA.*

A partir de esto, la propuesta se vuelve mucho más sólida: no vendes solo una guía de empleo, vendes un **sistema de crecimiento profesional antifrágil** basado en práctica deliberada, apalancado por IA. Eso amplía el funnel y justifica la futura comunidad/cohorte.

Te entrego el plan de landing actualizado con prompts específicos para terminal, listos para que la IA te genere el código pieza por pieza.

---

## NUEVA ARQUITECTURA DE MARCA Y COPY

**Concepto central:**  
Hexis = hábito + maestría + ventaja competitiva construida con práctica.  
El Método Demo‑First es la primera manifestación concreta de ese sistema: usar la práctica real (construir demos) para destacar, en lugar de solo enviar CVs.

**Taglines en español (incorporadas en la landing):**

- “Construye ventaja a través de la práctica.”
- “Sistemas modernos para profesionales ambiciosos.”
- “Habilidad. Ejecución. Crecimiento.”
- “Vuélvete antifrágil en la era de la IA.”
- “Crecimiento práctico para profesionales modernos.”

**Promesa del lead magnet (PDF):**  
El Método Hexis te enseña a dejar de ser un CV anónimo y convertirte en un solucionador visible usando la práctica real (demos) y la IA como acelerador.

**Estructura de la landing (same sections, renamed):**

1. Hero – Hexis + tagline principal + CTA
2. El dolor del mercado actual (rechazos, saturación)
3. El sistema Hexis (los 8 pasos visuales)
4. Testimonio real (tu historia de 200 rechazos → demo → entrevista)
5. Contenido del PDF (Método Hexis)
6. CTA para descargar el PDF + lista de espera (Beehiiv)
7. Visión de futuro (cohortes, mentorías, comunidad Hexis)
8. Footer con logo Hexis y links

---

## CONFIGURACIÓN TÉCNICA BASE

- **Proyecto:** `hexis-landing` (Next.js 14 + TypeScript + Tailwind + shadcn/ui)
- **Repositorio:** GitHub → conectado a Vercel
- **Dominio personalizado:** `hexis.fyi` (configurar en Vercel tras el despliegue)
- **Logos:** en `/public/logos/` → `logo.svg`, `logo-white.svg`, `favicon.ico`
- **Beehiiv:** formulario incrustado y automatización con welcome email que entrega el PDF

---

## FASE 0: GENERACIÓN COMPLETA DE LA LANDING HEXIS (PROMPTS PARA TERMINAL)

Todos los prompts suponen que tienes un agente de IA (Codex CLI, Aider, Cursor o el chat de V0) y que ejecutas cada paso en orden.

### Prompt 0.1 – Inicializar proyecto con el branding Hexis

```text
Eres un desarrollador frontend senior. Crea un proyecto Next.js 14 con App Router, TypeScript y Tailwind CSS. Inicializa shadcn/ui con el tema "default" y configura los metadatos base:

- Nombre del proyecto: "hexis-landing"
- title: "Hexis – Construye ventaja a través de la práctica"
- description: "Sistemas modernos para profesionales ambiciosos. Descarga gratis el Método Hexis y conviértete en el candidato que las empresas quieren ver."

Copia la carpeta 'logos' que te proporcionaré más tarde en /public/logos/. Por ahora, deja un placeholder en el componente Navbar para el logo (usa un texto 'Hexis' estilizado). Configura también un favicon que apunte a /logos/favicon.ico.

Muestra la estructura del proyecto y los comandos para correr en local.
```

### Prompt 0.2 – Layout base y Navbar con logo real

```text
Modifica el layout principal (src/app/layout.tsx) para incluir una barra de navegación fija, transparente al inicio y con fondo sólido al hacer scroll. La barra debe tener:

- A la izquierda: logo de Hexis. Usa la imagen /logos/logo.svg (importa desde next/image). Alt: "Hexis". El logo debe enlazar a la raíz.
- A la derecha: un botón de shadcn/ui con texto "Descargar el Método" que haga scroll suave a la sección del formulario (id="cta-form").
- El fondo del navbar debe volverse blanco (o background del tema) con sombra suave al hacer scroll más de 50px (usa un state y el evento scroll).
- Asegura que sea responsive: en móvil, logo a la izquierda, botón a la derecha (oculta texto quizás, solo icono).

Además, crea un Footer con:
- Logo Hexis en pequeño.
- Tagline: "Construye ventaja a través de la práctica."
- Enlaces: LinkedIn, GitHub, email.
- Copyright: © 2026 Hexis. Todos los derechos reservados.

Todo debe verse premium y minimalista.
```

### Prompt 0.3 – Hero Section con nuevo mensaje de marca

```text
Crea el componente HeroSection.tsx en src/components/sections/. Estructura en dos columnas (mobile: apiladas). Columna izquierda:

- Un badge pequeño: "HEXIS · MAYO 2026".
- Título principal: "El sistema que convierte práctica en oportunidades reales."
- Subtítulo: "De 200 rechazos a tener al CTO revisando tu demo en 24 horas. Descarga el Método Hexis y aprende a destacar usando la IA como ventaja competitiva."
- Dos botones: uno primario "Descargar el PDF Gratis" (ancla a #cta-form) y uno secundario "Cómo funciona" (ancla a la sección de pasos).
- Pequeño texto: "Sin spam. Acceso inmediato al método + lista de espera del programa avanzado."

Columna derecha:
- Una imagen placeholder de alta calidad (la generaremos después) con un gradiente oscuro a azul eléctrico que evoque tecnología y crecimiento.

Fondo: gradiente de negro a azul oscuro (#0a0f1e a #1a2a4a). Usa tipografías grandes, espaciado generoso, animación fade-in.
```

### Prompt 0.4 – Sección “El mercado cambió” (problema + urgencia)

```text
Crea MarketPainSection.tsx. Título: "El mercado tech no perdona. La práctica sí." Subtítulo: "Cada oferta recibe 500 aplicaciones en horas. La mayoría son CVs genéricos. Tú puedes ser la excepción." Luego tres tarjetas con íconos (lucide-react) describiendo los dolores:

1. "ATS que descartan tu perfil sin leerlo."
2. "Entrevistas que nunca llegan, aunque tienes la experiencia."
3. "La IA generativa hace que cualquier CV luzca 'perfecto'. La única prueba real es lo que construyes."

Incluye una estadística: "El 87 % de los reclutadores afirma que un portafolio con proyectos reales pesa más que el CV."

Estilo visual: fondo oscuro (para contraste con el hero) o claro, tú decides. Tarjetas con borde sutil y sombra. Responsivo.
```

### Prompt 0.5 – Sección “El Sistema Hexis” (los 8 pasos)

```text
Crea HexisSystemSection.tsx. Título: "El Sistema Hexis: práctica deliberada + IA". Subtítulo: "8 pasos para construir una ventaja real y conseguir la oportunidad que mereces."

Muestra una línea de tiempo vertical (escritorio) o tarjetas numeradas (móvil). Cada paso con ícono, título y descripción breve:

1. Optimiza tu perfil con IA
2. Investigación profunda de ofertas
3. Extrae los pain points de la empresa
4. Diseña un demo que los resuelva
5. Construye y despliega tu proyecto
6. Documenta el código como propuesta de valor
7. Aplica con el demo como prueba irrefutable
8. Prepárate con simulaciones de IA

Debajo, un botón "Quiero aplicar el sistema" que lleve al formulario.

Usa la paleta de Hexis: azul eléctrico, grises oscuros, toques dorados o verdes para éxito. Animaciones suaves.
```

### Prompt 0.6 – Testimonio real (tu historia con el Método Hexis)

```text
Crea TestimonialSection.tsx. Fondo ligeramente diferente, con una tarjeta central que contenga:

- Avatar placeholder (luego pondremos tu foto real generada por IA).
- Nombre: Saturno Mangieri, Ing. de Software.
- Testimonio en primera persona: "Después de 200 rechazos aplastantes, descubrí que la práctica real es lo único que impresiona. Apliqué el Sistema Hexis, construí una demo en 3 días y en menos de 24 horas la consultora la envió al cliente final. El CTO dijo: 'Esto es exactamente lo que necesitábamos'. Ahora comparto este método para que tú también dejes de ser un CV más."
- Debajo, logos de tecnologías (Next.js, Node, IA, etc.) en pequeño.
- Un botón "Conoce el sistema" que lleve a los pasos.

Incluye un borde sutil o sombra para destacar la tarjeta. Texto centrado.
```

### Prompt 0.7 – Contenido del PDF (lead magnet “Método Hexis”)

```text
Crea PdfPreviewSection.tsx. Título: "Dentro del Método Hexis (30 páginas de acción)". Dos columnas (móvil: una columna). A la izquierda, un mockup del PDF (imagen placeholder que luego generaremos). A la derecha, un listado con íconos de check:

- El script exacto para renovar tu CV con IA.
- Deep research de ofertas en minutos.
- Prompts para extraer dolores de negocio de cualquier vacante.
- Cómo diseñar un demo imbatible en 6 horas.
- Plantilla de README que vende tu candidatura.
- El mensaje de correo que abre puertas con CTOs.
- Preparación de entrevistas con simulador de IA.
- Checklist de despliegue gratuito (Vercel, Railway, Supabase).

Debajo, un botón "Descargar el PDF Gratis" (ancla al formulario). Pequeño texto: "Al descargarlo entras a la comunidad Hexis y a la lista de espera del programa avanzado."
```

### Prompt 0.8 – CTA + formulario Beehiiv (captura real)

```text
Crea CtaSection.tsx con id="cta-form". Título: "Consigue el Método Hexis ahora". Párrafo: "Déjame tu correo y recibe el PDF al instante. Además, estarás dentro de la lista de espera para las futuras cohortes y mentorías de Hexis, con beneficios exclusivos por llegar temprano."

Inserta el formulario de Beehiiv:
- Crea un iframe con el código que te proporcionaré (Beehiiv form). Por ahora, coloca un formulario visual con input de email y botón "Enviar", que luego reemplazaremos con el iframe de Beehiiv.
- Añade un texto de privacidad: "Respetamos tu privacidad. Cancelas cuando quieras."
- El diseño debe ser limpio, centrado, fondo azul oscuro con degradado sutil.
- El botón debe ser grande y visible, color dorado o verde contraste.
```

### Prompt 0.9 – Visión de futuro (escalabilidad del ecosistema Hexis)

```text
Crea FutureVisionSection.tsx. Título: "Hexis es solo el comienzo." Texto: "El verdadero crecimiento viene de la práctica constante. Próximamente lanzaremos: Cohortes guiadas de 4 semanas, Mentorías 1:1, y una Comunidad privada de profesionales ambiciosos que construyen proyectos reales con IA. Al unirte hoy, aseguras tu lugar con acceso anticipado y precio fundador."

Tres tarjetas con íconos (comunidad, mentoría, cohorte) y una breve descripción cada una. Botón final: "Reserva tu lugar en la lista de espera" (ancla al formulario).
```

### Prompt 0.10 – Responsividad final, animaciones y detalles de marca

```text
Revisa todos los componentes y ajusta los estilos para mobile (<375px), tablet y desktop. Añade animaciones con framer-motion (fade-in, slide-up) a las secciones. Asegúrate de que el logo de Hexis se vea nítido, los colores respeten la paleta (azul eléctrico #2563EB, dorado #F59E0B para CTAs, fondo oscuro #0B1120, texto claro). Optimiza las imágenes placeholder. Muestra el resultado final.
```

---

## CONFIGURACIÓN DE BEEHIIV PARA HEXIS

1. Crea tu cuenta en beehiiv.com y configura una publicación llamada **“Hexis Insider”**.
2. Ve a **Grow → Forms**, crea un formulario con:
   - Título: “Descarga el Método Hexis + Lista de espera”.
   - Campos: email.
   - Mensaje de éxito: “Revisa tu bandeja de entrada para el PDF y tu acceso anticipado.”
3. Copia el código del iframe e insértalo en `CtaSection.tsx` en lugar del formulario visual.
4. Crea una **Automation** que se dispare al suscribirse a ese formulario.  
   - **Acción: Enviar email** con asunto: “Tu Método Hexis está listo”.  
   - Contenido: enlace de descarga directa al PDF (alojado en `/public/pdf/metodo-hexis.pdf` o en Drive).  
   - Incluye el mensaje: “Bienvenido a Hexis. Estás en la lista de espera para el programa avanzado. Te avisaré en cuanto abra plazas.”
5. Prueba la suscripción con un correo de test.

---

## IMÁGENES PARA LA LANDING HEXIS

Vamos a generar imágenes coherentes con la estética moderna, oscura y tecnológica, usando IA.

### Logo de Hexis (ya lo tienes)
Asegúrate de tener `logo.svg` y `logo-white.svg` en `/public/logos/`.

### Imagen 1 – Hero (derecha) [IMAGEN_HERO]
```text
A futuristic abstract 3D composition: a glowing hexagonal crystal (representing Hexis) hovering above a dark keyboard, with luminous blue lines and gears turning slowly around it, symbolizing practice and skill building. Dark background with subtle blue and gold light rays. 8k, vector shading, professional tech aesthetic.
```

### Imagen 2 – PDF Mockup [IMAGEN_PDF]
```text
A premium 3D mockup of a dark-covered digital report titled "Método Hexis" in gold and blue typography, floating on a clean background with soft shadows, pages slightly fanned out, revealing diagrams and bullet points inside. Clay render style, studio lighting, isolated.
```

### Imagen 3 – Testimonio (avatar) [IMAGEN_AVATAR]
```text
A professional circular avatar of a confident male Latino software engineer, smiling warmly, wearing a dark tech jacket, set against a blurred modern co-working background with blue neon lights. Realistic digital illustration, high detail.
```

Guarda estas imágenes en `/public/images/` y referencia en los componentes usando `next/image`.

---

## DESPLIEGUE EN VERCEL CON DOMINIO HEXIS.FYI

1. Sube el proyecto a GitHub en un repo llamado `hexis-landing`.
2. En Vercel, importa el repo y despliega.
3. Una vez desplegado, ve a **Settings → Domains** y agrega `hexis.fyi`.
4. Configura los registros DNS de tu dominio (en tu proveedor) apuntando a Vercel. Normalmente un registro A o CNAME. Vercel te dará las instrucciones exactas.
5. Con HTTPS automático, tu landing estará viva en minutos.

---

## PRÓXIMOS PASOS DE HEXIS (FASES FUTURAS)

La landing está preparada para escalar:

- **Fase 2:** Blog `/blog` con artículos sobre construcción de demos, IA para devs, práctica deliberada.
- **Fase 3:** Página de ventas `/cohorte` para el programa pago (Stripe + Beehiiv).
- **Fase 4:** Comunidad privada en Discord/Skool con retos semanales de construcción.

Todo crece orgánicamente desde la misma base técnica y desde la misma promesa de marca: **Hexis, ventaja construida con práctica.**

---

Tu primer movimiento: ejecuta el Prompt 0.1 en este mismo chat (o en tu terminal con un agente). Luego sigue el orden.  
Cuando tengas dudas con el logo o necesites ajustar el diseño, pídemelo.  
**Hexis ya no es solo una idea; es tu activo digital empezando hoy.**