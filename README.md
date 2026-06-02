# Hexis Landing

Landing page para profesionales tech de Latinoamérica que buscan oportunidades laborales en 2026.

---

## ¿Qué es Hexis?

El mercado tech en 2026 es más competitivo que nunca. Cada oferta recibe cientos de aplicaciones, los filtros ATS descartan perfiles en segundos y la IA generativa ha estandarizado los CVs al punto de que todos lucen iguales.

Hexis nace para ayudar a desarrolladores, ingenieros de software y profesionales tech de LATAM a romper ese ciclo. No somos un curso ni una plataforma de empleos: somos un enfoque distinto para posicionarte como candidato, construyendo una ventaja real a través de la práctica.

Si estás en Argentina, México, Colombia, Chile, Perú, Uruguay o cualquier país de habla hispana y sientes que tu experiencia no se traduce en oportunidades, este proyecto está pensado para vos.

---

## Contenido de la landing

- **Hero:** Mensaje central de marca y formulario de captura
- **Mercado laboral:** Datos y contexto sobre la saturación del sector tech
- **Rechazos laborales:** Carrusel con situaciones reales que enfrentan los candidatos LATAM
- **Testimonial:** Historia real de superación en la búsqueda laboral
- **Preview del método:** Contenido del lead magnet (28 páginas de acción)
- **Visión de futuro:** Próximos programas, mentorías y comunidad
- **CTA:** Formulario de captura con newsletter

---

## Stack técnico

| Herramienta | Versión |
|-------------|---------|
| Next.js | 14 (App Router) |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| shadcn/ui | base-nova |
| Framer Motion | 12 |
| Lucide React | 1.17 |

### Tipografía

- **Textos y títulos:** Plus Jakarta Sans (300, 400, 500, 600, 700)
- **Código y datos:** JetBrains Mono (400, 500)

### Paleta de colores (Light)

| Token | Hex | Uso |
|-------|-----|-----|
| Fondo principal | `#FFFFFF` | Página y secciones |
| Fondo secundario | `#F8F9FA` | Tarjetas, fondos alternos |
| Texto principal | `#1A1A1A` | Párrafos |
| Títulos | `#0B1E33` | h1, h2, h3 |
| Acento primario | `#2563EB` | Enlaces, botones |
| Acento secundario | `#F59E0B` | CTAs, badges |
| Bordes | `#E2E8F0` | Separadores |

---

## SEO y posicionamiento

Esta landing está optimizada para búsquedas relacionadas con:

- Buscar trabajo en tecnología 2026
- Cómo conseguir empleo como programador en Estados Unidos desde Latinoamérica
- Empleos para desarrolladores LATAM remoto
- Cómo destacar en entrevistas técnicas
- Consejos para encontrar trabajo en tech siendo latino
- Alternativas a LinkedIn para ingenieros de software
- Cómo armar un portfolio que consiga entrevistas
- Guía de empleo para ingenieros en América Latina

---

## Estructura del proyecto

```
hexis-landing/
├── src/
│   ├── app/              # Páginas y layout global
│   ├── components/
│   │   ├── sections/     # Secciones de la landing
│   │   └── ui/           # Componentes base (shadcn/ui)
│   └── lib/              # Utilidades
├── public/
│   ├── images/           # Imágenes generadas por IA
│   └── logos/            # Branding Hexis
├── docs/                 # Documentación interna
└── netlify.toml          # Configuración de deploy
```

---

## Desarrollo local

```bash
# Clonar el repo
git clone https://github.com/tuusuario/hexis-landing.git
cd hexis/hexis-landing

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

---

## Despliegue

Proyecto listo para deploy automático en **Netlify** desde GitHub.

**Configuración:**
- Base directory: `hexis-landing`
- Build command: `npm run build`
- Publish directory: `.next`

Incluye `netlify.toml` en la raíz del repo con la configuración predefinida.

---

<p align="center">
  <sub>Hecho con dedicación para la comunidad tech LATAM. Construye ventaja a través de la práctica.</sub>
</p>
