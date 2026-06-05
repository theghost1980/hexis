# Roadmap de Prompts – Landing Hexis

## CONFIGURACIÓN TÉCNICA BASE

- **Proyecto:** `hexis-landing` (Next.js 14 + TypeScript + Tailwind + shadcn/ui)
- **Repositorio:** GitHub → conectado a Vercel
- **Dominio personalizado:** `hexis.fyi` (configurar en Vercel tras el despliegue)
- **Logos:** en `/public/logos/` → `logo.svg`, `logo-white.svg`, `favicon.ico`
- **Beehiiv:** formulario incrustado y automatización con welcome email que entrega el PDF
- **Estilo visual:** Versión **light** del Style Bible del libro Método Hexis. Se usan las mismas tipografías (Plus Jakarta Sans, JetBrains Mono) pero con una paleta clara adaptada: fondo blanco o gris muy claro, texto oscuro, detalles en azul profundo y un acento dorado para CTAs.

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

**Estructura de la landing:**

1.  **Hero:** Hexis + tagline principal + CTA.
2.  **El dolor del mercado actual:** rechazos, saturación.
3.  **El sistema Hexis:** los 8 pasos visuales.
4.  **Testimonio real:** tu historia de 200 rechazos.
5.  **Contenido del PDF:** Método Hexis.
6.  **CTA para descargar el PDF:** + lista de espera (Beehiiv).
7.  **Visión de futuro:** cohortes, mentorías, comunidad Hexis.
8.  **Footer:** con logo Hexis, links y enlace a soporte.

**Página adicional:**

- `/soporte`: guía de resolución de fallas (no descargable, protegida contra copia).

---

## FASE 0: GENERACIÓN COMPLETA DE LA LANDING HEXIS (PROMPTS PARA TERMINAL)

Todos los prompts suponen que tienes un agente de IA (Codex CLI, Aider, Cursor o el chat de V0) y que ejecutas cada paso en orden.

### Prompt 0.1 – Inicializar proyecto con el branding Hexis

```text
Eres un desarrollador frontend senior. Crea un proyecto Next.js 14 con App Router, TypeScript y Tailwind CSS. Inicializa shadcn/ui con el tema "default" y configura los metadatos base:

- Nombre del proyecto: "hexis-landing"
- title: "Hexis – Construye ventaja a través de la práctica"
- description: "Sistemas modernos para profesionales ambiciosos. Descarga el Método Hexis y accede a soporte premium."

El diseño visual debe seguir el "Style Bible" del libro Método Hexis, pero en su versión light. Usa las mismas tipografías (Plus Jakarta Sans para texto, JetBrains Mono para detalles técnicos). La paleta de colores será:
- Fondo principal: blanco (#FFFFFF) o gris muy claro (#F8F9FA).
- Texto principal: gris oscuro (#333333).
- Títulos: azul profundo (#1A2A4A).
- Acento para CTAs y elementos destacados: dorado (#F59E0B).
- Bordes y separadores sutiles.

Copia la carpeta 'logos' que te proporcionaré más tarde en /public/logos/. Por ahora, deja un placeholder en el componente Navbar para el logo (usa un texto 'Hexis' estilizado). Configura también un favicon que apunte a /logos/favicon.ico.

Muestra la estructura del proyecto y los comandos para correr en local.
```

### Prompt 0.2 – Layout base y Navbar con logo real

```text
Modifica el layout principal (src/app/layout.tsx) para incluir una barra de navegación fija, transparente al inicio y con fondo sólido al hacer scroll. Usa el estilo visual light definido (fondo blanco, texto oscuro).

La barra debe tener:
- A la izquierda: logo de Hexis. Usa la imagen /logos/logo.svg (importa desde next/image). Alt: "Hexis". El logo debe enlazar a la raíz.
- A la derecha: un botón de shadcn/ui con texto "Descargar el Método" que haga scroll suave a la sección del formulario (id="cta-form").
- El fondo del navbar debe volverse blanco con sombra suave al hacer scroll más de 50px (usa un state y el evento scroll).
- Asegura que sea responsive: en móvil, logo a la izquierda, botón a la derecha (solo icono de descarga).

Además, crea un Footer con:
- Logo Hexis en pequeño.
- Tagline: "Construye ventaja a través de la práctica."
- Enlaces: LinkedIn, GitHub, email, y uno nuevo a "/soporte" con el texto "Centro de Ayuda".
- Copyright: © 2026 Hexis. Todos los derechos reservados.

Todo debe verse premium y minimalista, con las tipografías del Style Bible.
```

### Prompt 0.3 – Hero Section con nuevo mensaje de marca

```text
Crea el componente HeroSection.tsx en src/components/sections/. Usa el estilo visual light.

Estructura en dos columnas (mobile: apiladas). Columna izquierda:
- Un badge pequeño: "HEXIS · MAYO 2026".
- Título principal: "El sistema que convierte práctica en oportunidades reales."
- Subtítulo: "De 200 rechazos a tener al CTO revisando....."
- Dos botones: uno primario (dorado) "Descargar el PDF Gratis" (ancla a #cta-form) y uno secundario (borde azul) "Cómo funciona" (ancla a la sección de pasos).
- Pequeño texto: "Sin spam. Acceso inmediato al método + lista de espera del programa avanzado."

Columna derecha:
- Una imagen placeholder de alta calidad (la generaremos después). La imagen debe evocar tecnología, práctica y crecimiento (ej. un cristal hexagonal brillante).

Fondo: blanco o con un sutil gradiente a gris muy claro. Tipografías grandes, espaciado generoso, animación fade-in.
```

### Prompt 0.4 – Sección "El mercado cambió" (problema + urgencia)

```text
Crea MarketPainSection.tsx. Usa el estilo visual light.

Título: "El mercado tech no perdona. La práctica sí."
Subtítulo: "Cada oferta recibe 500 aplicaciones en horas. La mayoría son CVs genéricos. Tú puedes ser la excepción."

Luego tres tarjetas con íconos (lucide-react) describiendo los dolores:
1. "ATS que descartan tu perfil sin leerlo."
2. "Entrevistas que nunca llegan, aunque tienes la experiencia."
3. "La IA generativa hace que cualquier CV luzca 'perfecto'. La única prueba real es lo que construyes."

Incluye una estadística: "El 87 % de los reclutadores afirma que un portafolio con proyectos reales pesa más que el CV."

Las tarjetas deben tener un borde sutil y una ligera sombra para destacar sobre el fondo claro. Diseño responsive.
```

### Prompt 0.5 – Sección "El Sistema Hexis"

```text
Crea HexisSystemSection.tsx. Usa el estilo visual light.

Título: "El Sistema Hexis: práctica deliberada + IA".
Subtítulo: "Un sistema integral para construir una ventaja real y conseguir la oportunidad que mereces."

Muestra una línea de tiempo vertical (escritorio) o tarjetas numeradas (móvil). Cada paso con un ícono y título genérico (sin revelar detalles del método). Usa 3 pilares de alto nivel en lugar de pasos específicos: Visibilidad real, Ofertas como oportunidades, IA como ventaja.

Debajo, un botón "Descubrir el método completo" que lleve al formulario.
Incluye un callout: "No revelamos el sistema abiertamente porque quienes lo aplican en serio no necesitan atajos."
Usa la paleta de Hexis adaptada al modo claro. Animaciones suaves.
```

### Prompt 0.6 – Testimonio real (tu historia con el Método Hexis)

```text
Crea TestimonialSection.tsx. Usa el estilo visual light. Fondo ligeramente diferente (gris muy claro), con una tarjeta central que contenga:

- Avatar placeholder (luego pondremos tu foto real generada por IA).
- Nombre: Saturno Mangieri, Ing. de Software.
- Debajo, logos de tecnologías (Next.js, Node, IA, etc.) en pequeño y en escala de grises.
- Un botón "Conoce el sistema" que lleve a los pasos.

Incluye un borde sutil y una sombra suave en la tarjeta. Texto centrado.
```

### Prompt 0.7 – Contenido del PDF (lead magnet "Método Hexis")

```text
Crea PdfPreviewSection.tsx. Usa el estilo visual light.

Título: "Dentro del Método Hexis (30 páginas de acción)".
Dos columnas (móvil: una columna). A la izquierda, un mockup del PDF (imagen placeholder que luego generaremos). A la derecha, un listado con íconos de check (lucide-react):

- los pasos del metodos, explicados en el metodo

Debajo, un botón dorado "Descargar el PDF Gratis" (ancla al formulario). Pequeño texto: "Al descargarlo entras a la comunidad Hexis y a la lista de espera del programa avanzado."
```

### Prompt 0.8 – CTA + formulario Beehiiv (captura real)

```text
Crea CtaSection.tsx con id="cta-form". Usa el estilo visual light.

Título: "Consigue el Método Hexis ahora".
Párrafo: "Déjame tu correo y recibe el PDF al instante. Además, estarás dentro de la lista de espera para las futuras cohortes y mentorías de Hexis, con beneficios exclusivos por llegar temprano."

Inserta el formulario de Beehiiv:
- Crea un iframe con el código que te proporcionaré (Beehiiv form). Por ahora, coloca un formulario visual con input de email y botón "Enviar", que luego reemplazaremos con el iframe de Beehiiv.
- Añade un texto de privacidad: "Respetamos tu privacidad. Cancelas cuando quieras."
- El diseño debe ser limpio, centrado, con un fondo azul muy oscuro (#1A2A4A) en esta sección para contrastar, con texto claro. El botón debe ser grande, dorado (#F59E0B) y visible.
```

### Prompt 0.8.1 – Descuento solidario para países en crisis

```text
Dentro de la sección CTA (id="cta-form"), agrega un callout justo antes del formulario con el siguiente mensaje:

Título: "🌍 ¿Estás en Venezuela o Ucrania?"
Texto: "Sabemos que las condiciones económicas y sociales no son iguales para todos. Si resides en Venezuela o Ucrania y puedes comprobarlo, escríbenos a saturno@hexis.fyi con un comprobante de residencia (ID, factura de servicios, etc.) y te daremos un 40 % de descuento en el Método Hexis. Queremos que el conocimiento llegue a quienes más lo necesitan, sin importar las barreras."

Estilo: usar el componente Callout (src/components/ui/callout.tsx) con un tono empático pero profesional. Debe estar visible antes del formulario de pago.
```

---

### Prompt 0.9 – Visión de futuro (escalabilidad del ecosistema Hexis)

```text
Crea FutureVisionSection.tsx. Usa el estilo visual light.

Título: "Hexis es solo el comienzo."
Texto: "El verdadero crecimiento viene de la práctica constante. Próximamente lanzaremos: Cohortes guiadas de 4 semanas, Mentorías 1:1, y una Comunidad privada de profesionales ambiciosos que construyen proyectos reales con IA. Al unirte hoy, aseguras tu lugar con acceso anticipado y precio fundador."

Tres tarjetas con íconos (comunidad, mentoría, cohorte) y una breve descripción cada una. Botón final: "Reserva tu lugar en la lista de espera" (ancla al formulario).
```

### Prompt 0.10 – Responsividad final, animaciones y detalles de marca

```text
Revisa todos los componentes y ajusta los estilos para mobile (<375px), tablet y desktop. Añade animaciones con framer-motion (fade-in, slide-up) a las secciones. Asegúrate de que el logo de Hexis se vea nítido, los colores respeten la paleta del modo claro (fondo #FFFFFF, títulos #1A2A4A, CTAs dorados #F59E0B, texto #333333). Las tipografías deben ser Plus Jakarta Sans y JetBrains Mono. Optimiza las imágenes placeholder. Muestra el resultado final.
```

---

## FASE 0.11 – PRE-LANZAMIENTO: BLINDAR LANDING (TODOs URGENTES)

Estos pasos deben ejecutarse antes del deploy a producción. Son correcciones y mejoras que blindan la página contra errores y optimizan conversión.

### 🔴 Prioridad Alta (bloqueantes)

|  #  | Archivo                                          | Problema                                                                                            | Solución                                                            |
| :-: | ------------------------------------------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
|  1  | `src/components/sections/TestimonialSection.tsx` | Sin CTA después del testimonio (pico emocional perdido)                                             | Agregar botón "Conoce el sistema" que haga scroll a `#hexis-system` |
|  2  | `netlify.toml`                                   | `publish = "hexis-landing/out"` es incorrecto — es relativo a `base`, debería ser `publish = "out"` | Cambiar `publish = "hexis-landing/out"` → `publish = "out"`         |
|  3  | `src/components/sections/KitFormEmbed.tsx`       | Formulario Kit en inglés ("Subscribe to get our latest content by email")                           | Cambiar el `subheader` del form HTML a texto en español             |

### 🟡 Prioridad Media

|  #  | Archivo                     | Problema                                                   | Solución                                                    |
| :-: | --------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------- |
|  4  | `src/components/footer.tsx` | Email `hola@hexis.com` no coincide con el usado en soporte | Cambiar a `saturno@hexis.fyi`                               |
|  5  | `src/components/footer.tsx` | LinkedIn y GitHub apuntan a URLs genéricas                 | Reemplazar con URLs reales de Hexis o del autor             |
|  6  | `src/app/layout.tsx`        | Faltan Open Graph y Twitter Cards para redes sociales      | Agregar `metadata.openGraph` y `metadata.twitter` al layout |

### 🟢 Prioridad Baja (mejora)

|  #  | Archivo                     | Problema                                           | Solución                                                                     |
| :-: | --------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------- |
|  7  | `src/components/navbar.tsx` | No hay acceso directo a `/soporte` desde el navbar | Agregar link "Centro de Ayuda" o icono `HelpCircle` junto al botón de compra |

### Prompt para ejecutar (copiar y pegar en el agente):

```text
Ejecuta los TODOs urgentes de la Fase 0.11 del roadmap de Hexis en el siguiente orden:

1. En TestimonialSection.tsx: agrega un botón "Conoce el sistema" (variant="outline-blue") debajo de las etiquetas de tecnología, que haga scroll suave a la sección con id="hexis-system".

2. Corrige netlify.toml: cambia publish = "hexis-landing/out" por publish = "out" (es relativo a base).

3. En KitFormEmbed.tsx: cambia el subheader "Subscribe to get our latest content by email" por texto en español: "Déjame tu correo y recibe el PDF al instante."

4. En footer.tsx: cambia el email de "hola@hexis.com" a "saturno@hexis.fyi".

5. En footer.tsx: actualiza las URLs de LinkedIn y GitHub a las reales del proyecto (pregunta al usuario cuáles son si no las tienes).

6. En app/layout.tsx: agrega openGraph y twitter metadata con title, description, url = "https://hexis.fyi" y las imágenes del hero.

7. En navbar.tsx: agrega un link a "/soporte" con un icono HelpCircle de lucide-react.

Verifica todo con tsc --noEmit antes de finalizar.
```

---

### Prompt 1.5.1 – Página de soporte (/soporte)

```text
Crea una nueva página en `src/app/soporte/page.tsx` con el mismo layout del landing (Navbar y Footer).

Esta página será una guía de resolución de problemas para los compradores del libro Método Hexis. Debe verse profesional, premium y usar el mismo estilo visual que el landing (modo claro, tipografías Plus Jakarta Sans y JetBrains Mono, paleta adaptada).

Estructura de la página:
1. Título: "Centro de Ayuda Hexis"
2. Subtítulo: "Resuelve cualquier inconveniente con tu compra o lectura del Método Hexis."
3. Acordeón de preguntas frecuentes (usa shadcn/ui Accordion) con al menos estas categorías:

   a) **Problemas con la compra en Gumroad**
      - No recibí el enlace de descarga
      - El pago fue rechazado
      - Quiero un reembolso

   b) **Problemas al abrir el PDF**
      - El PDF se ve con fondo negro y logo, pero sin texto (visor de Android)
      - Solución: Instalar Adobe Acrobat Reader desde Play Store. Explicar que los visores integrados de algunos dispositivos no renderizan correctamente fuentes y fondos complejos. Recomendar abrir el PDF siempre con Acrobat Reader.
      - Error al descargar en iPhone/iPad
      - El archivo pesa mucho y no se descarga

   c) **Problemas con el contenido**
      - Los enlaces dentro del PDF no funcionan
      - No encuentro el grupo de WhatsApp de mentoría
      - Cómo acceder a los recursos adicionales

4. Cada respuesta debe ser clara, paso a paso y amigable.
5. Incluye una sección final: "¿No encuentras solución? Escríbeme a saturno@hexis.fyi y te responderé en menos de 24 horas."
6. Añade un aviso sutil: "Este contenido es solo para uso personal. No está permitida su redistribución."

Diseño:
- Fondo: #F8F9FA.
- Títulos: #1A2A4A.
- Texto: #333333.
- Acordeón con bordes sutiles y un ícono de ayuda (HelpCircle de lucide-react).
- Responsive, legible, sin animaciones excesivas.
```

### Prompt 1.5.2 – Proteger contra copia en la página de soporte

```text
Añade a la página de soporte (`src/app/soporte/page.tsx`) las siguientes protecciones ligeras contra copia no autorizada, manteniendo la usabilidad para lectura:

1. Agrega un componente cliente (si usas App Router) o un `useEffect` que:
   - Deshabilite el menú contextual (clic derecho) en el contenedor del artículo: `onContextMenu={(e) => e.preventDefault()}`.
   - Inserte un CSS que aplique `user-select: none` y `-webkit-user-select: none` al `div` principal del contenido.
2. Muestra un pequeño aviso (un `Alert` de shadcn/ui) en la parte superior del artículo: "ℹ️ Este contenido es para uso personal. Gracias por respetar el trabajo del autor."
3. La protección debe ser ligera (no bloquea la lectura ni la navegación por teclado) pero suficiente para disuadir la copia masiva.

Aplica esta protección solo a esta página.
```

---

## CONFIGURACIÓN DE BEEHIIV PARA HEXIS

1. Crea tu cuenta en beehiiv.com y configura una publicación llamada **"Hexis Insider"**.
2. Ve a **Grow → Forms**, crea un formulario con:
   - Título: "Descarga el Método Hexis + Lista de espera".
   - Campos: email.
   - Mensaje de éxito: "Revisa tu bandeja de entrada para el PDF y tu acceso anticipado."
3. Copia el código del iframe e insértalo en `CtaSection.tsx` en lugar del formulario visual.
4. Crea una **Automation** que se dispare al suscribirse a ese formulario.
   - **Acción: Enviar email** con asunto: "Tu Método Hexis está listo".
   - Contenido: enlace de descarga directa al PDF (alojado en `/public/pdf/metodo-hexis.pdf` o en Drive).
   - Incluye el mensaje: "Bienvenido a Hexis. Estás en la lista de espera para el programa avanzado. Te avisaré en cuanto abra plazas."
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
- **Fase 5 (Pendiente):** Pagos locales Venezuela + geolocalización — ver detalle abajo.

---

## FASE 5 (PENDIENTE): Pagos locales Venezuela + geolocalización

**Contexto:**  
Proyecto "Método Hexis". Landing page en Next.js desplegada en Netlify (`hexis.fyi`).  
Actualmente el checkout global usa Gumroad con subdominio `shop.hexis.fyi`.  
Se requiere añadir soporte para pagos locales en Venezuela (Pago Móvil, transferencias) y geolocalización para mostrar una oferta especial a visitantes de Venezuela.

**Prioridad:** Media (no bloquea el MVP, pero es alto impacto para el mercado venezolano).

**Dependencias:** Ninguna con otras fases. Puede ejecutarse en paralelo con Fase 2.

---

### Tareas ordenadas por prioridad

#### 1. Subdominios en Namecheap + Netlify

| Subdominio       | Propósito                                                         |
| ---------------- | ----------------------------------------------------------------- |
| `pay.hexis.fyi`  | Redirigir a checkout internacional alternativo (PayPal o Gumroad) |
| `pago.hexis.fyi` | Página de pago local venezolana con instrucciones                 |

**Acciones concretas:**

- En Namecheap: añadir registros CNAME para `pay` y `pago` → `hexis.netlify.app`
- En Netlify: agregar los dominios como alias (Domain management → Add domain alias) para HTTPS.
- Verificar SSL.

**Estimación:** ~1 hora (gestión DNS + Netlify).  
**Obstáculos:** Ninguno.

---

#### 2. Detección de geolocalización (país Venezuela)

**Dónde:** Landing page principal (`hexis.fyi`).

**Opciones técnicas:**

| Opción                    | Pros                                                         | Contras                                        |
| ------------------------- | ------------------------------------------------------------ | ---------------------------------------------- |
| Netlify Edge Functions    | No expone API keys, rendimiento, sin costo extra en plan Pro | Requiere configurar edge-functions en Netlify  |
| Cliente-side (`ipapi.co`) | Simple, sin configuración de infra                           | Llamada externa, posible bloqueo de adblockers |

**Si se usa Edge Function:**

- Crear `netlify/edge-functions/geo-offer.ts`
- Inyectar cabecera `x-visitor-country` que React lea desde `getServerSideProps` o desde el cliente.

**Si se usa cliente-side:**

- Fetch a `https://ipapi.co/json/`
- Leer `country_code`
- Mostrar/ocultar sección según resultado.

**Estimación:** 4-6 horas.  
**Obstáculos:** Límite de 125k invocaciones/mes en Netlify Edge Functions (plan Pro). ipapi.co tiene límite de 1000 req/día en plan gratis.

---

#### 3. Sección dinámica geolocalizada (solo Venezuela)

**Dónde:** En `hexis.fyi`, entre el Hero y la sección de dolor de mercado, o como un banner sticky.

**Diseño propuesto:**

```
┌─────────────────────────────────────────────┐
│  🇻🇪 ¡Oferta especial para Venezuela!       │
│                                             │
│  Sabemos que el acceso a divisas es         │
│  difícil. Por eso te ofrecemos el Método    │
│  Hexis en bolívares al tipo de cambio       │
│  oficial del día.                           │
│                                             │
│  [Pagar en bolívares → pago.hexis.fyi]      │
│  [Pagar con PayPal / Tarjeta (USD)]         │
└─────────────────────────────────────────────┘
```

- Botón primario: "Pagar en bolívares – Ir a pago.hexis.fyi"
- Botón secundario: "Pagar con PayPal / Tarjeta (USD)" → redirige a `pay.hexis.fyi`
- La sección **NO debe renderizarse** para visitantes fuera de Venezuela.
- La tarjeta debe tener un fondo suave (ej. gradiente amarillo/azul) para destacar.

**Estimación:** 3-4 horas.  
**Obstáculos:** Pruebas de geolocalización (usar VPN para simular Venezuela).

---

#### 4. Página de pago local (`pago.hexis.fyi`)

**Dónde:** Nueva página en el proyecto, ruta `/pago` o desplegada como sitio separado en Netlify apuntando a una carpeta específica.

**Estructura:**

1. **Header:** Logo Hexis + título "Pago Local — Método Hexis"
2. **Instrucciones paso a paso:**
   - Calcular monto en bolívares (según tasa BCV, mostrada en vivo o actualizable manualmente).
   - Mostrar datos bancarios (banco, titular, cédula, número de cuenta) y número de Pago Móvil.
   - Indicar que el pago debe ser identificado con el correo electrónico del comprador.
3. **Formulario de comprobante:**
   - Nombre completo
   - Correo electrónico
   - Número de teléfono / WhatsApp
   - Subir imagen del comprobante (limitación: en Netlify, subir a Supabase Storage o enviar por email con SendGrid)
   - Botón: "Enviar comprobante"
4. **Post-envío:**
   - Mensaje de confirmación: "Recibimos tu comprobante. Te enviaremos el PDF en 12-24 horas a tu correo. Si tienes dudas, escríbenos a saturno@hexis.fyi."
   - Enviar email automático al admin con los datos.

**Almacenamiento de datos:** Google Sheets (vía Google Forms API o embebido) o Supabase (tabla `pagos_locales`).

**Estimación:** 16-24 horas (incluye diseño, formulario, backend de almacenamiento, email automático).  
**Obstáculos:**

- Subida de archivos en Netlify requiere servicio externo (Supabase Storage, Cloudinary, o enviar por email).
- Tasa de cambio: si se consume API de BCV, puede fallar si cambia el endpoint. Alternativa: tasa fija actualizable manualmente cada semana.
- Pago Móvil es una red privada — no hay API pública para verificar pagos. Todo es manual hasta integrar con servicios como PagoFlash.

---

#### 5. Página de redirección (`pay.hexis.fyi`)

**Opción A (simple):** Redirección Netlify — crear `_redirects` o `netlify.toml`:

```
/pay/*  https://shop.hexis.fyi  301
```

**Opción B (más control):** Página simple con:

- Logo Hexis
- Botón "Comprar con PayPal" (integrar SDK de PayPal con botón de compra)
- Texto: "También disponible en Gumroad" → enlace a `shop.hexis.fyi`

**Opción C (completa):** Página con dos botones:

1. PayPal directo (botón generado desde PayPal Business)
2. Gumroad como respaldo

Recomendación: Opción A para MVP rápido, migrar a Opción C si se necesita.

**Estimación:** 1-2 horas.  
**Obstáculos:** Ninguno.

---

#### 6. Pruebas de integración

- ✅ Venezuela → se muestra oferta especial + botones funcionan
- ✅ Otros países → NO se muestra la sección
- ✅ `pago.hexis.fyi` → accesible, formulario envía datos
- ✅ `pay.hexis.fyi` → redirige a Gumroad o PayPal
- ✅ SSL activo en todos los subdominios
- ✅ El formulario de `pago` llega al admin y se almacena

**Estimación:** 2-4 horas.

---

### Resumen de tiempos

| Tarea                | Estimación | Dependencias |
| -------------------- | ---------- | ------------ |
| 1. Subdominios       | ~1h        | Ninguna      |
| 2. Geolocalización   | ~5h        | Ninguna      |
| 3. Sección dinámica  | ~4h        | Tarea 2      |
| 4. Página pago local | ~20h       | Tarea 1      |
| 5. Redirección pay   | ~2h        | Tarea 1      |
| 6. Pruebas           | ~3h        | Tareas 2-5   |
| **Total**            | **~35h**   | —            |

**Nota:** Tarea 1 puede iniciarse inmediatamente (no requiere deploy de código, solo DNS).  
**Todas las tareas están marcadas como pendientes** — no se implementan hasta después del lanzamiento inicial (el MVP ya funciona con Gumroad).

---

Todo crece orgánicamente desde la misma base técnica y desde la misma promesa de marca: **Hexis, ventaja construida con práctica.**

---

Tu primer movimiento: ejecuta el Prompt 0.1 en este mismo chat (o en tu terminal con un agente). Luego sigue el orden.  
Cuando tengas dudas con el logo o necesites ajustar el diseño, pídemelo.  
**Hexis ya no es solo una idea; es tu activo digital empezando hoy.**
