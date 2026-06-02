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
