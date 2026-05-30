# Dev Logs

## 2026-05-30

### Proyecto inicializado
- Next.js 14.2.35 con App Router, TypeScript, Tailwind CSS
- shadcn/ui inicializado con tema base-nova, baseColor neutral
- Metadatos: title "Hexis – Construye ventaja a través de la práctica", favicon apuntando a /logos/favicon.ico

### Componentes creados
- **Navbar** (`src/components/navbar.tsx`): fixed, transparente al inicio, fondo sólido + sombra al hacer scroll (>50px). Logo a la izquierda (texto "Hexis" primero, luego imagen `/logos/hexis-logo-black-font-ES.png` redimensionada de ~2MB a ~17KB con sharp-cli). Botón "Descargar el Método" con scroll suave a `#cta-form`. Responsive con icono solo en móvil.
- **Footer** (`src/components/footer.tsx`): logo, tagline, enlaces LinkedIn/GitHub/Email, copyright 2026.
- **Button** (`src/components/ui/button.tsx`): componente shadcn/ui.

### Configuración
- Tailwind config con colores HSL y plugin tailwindcss-animate
- CSS variables de shadcn (tema neutral)
- `src/lib/utils.ts` con función `cn()`

### Assets
- Carpeta `public/logos/` creada con logos en ESP y ENG
- Logos redimensionados a 400px de ancho con sharp-cli
- Aspect ratio real: 400×267 → usado height={93} para width={140}
- Logo del navbar ajustado a 196×130px

### Pendiente
- Optimizar logos a SVG si es posible
- Formulario de descarga en sección `#cta-form`
