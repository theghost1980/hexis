# STYLE BIBLE — LANDING PAGE HEXIS (MODO LIGHT)

**Objetivo:** Trasladar la esencia visual del libro _Método Hexis_ a una landing page clara, premium y de alta legibilidad.  
**Base de diseño:** Adaptación del Style Bible v3.0 del libro (modo oscuro) a un tema claro.

---

## 1. TIPOGRAFÍA

| Uso                                   | Fuente                          | Pesos                                                                 |
| ------------------------------------- | ------------------------------- | --------------------------------------------------------------------- |
| **Textos, títulos, párrafos**         | `Plus Jakarta Sans`, sans-serif | 300 (light), 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold) |
| **Código, etiquetas técnicas, datos** | `JetBrains Mono`, monospace     | 400, 500                                                              |

**Reglas:**

- No usar `letter-spacing` negativo en títulos (h1–h4).
- No forzar `line-height` en títulos; usar valores por defecto o `normal`.
- La combinación de fuentes debe transmitir modernidad y precisión técnica.

---

## 2. PALETA DE COLORES (LIGHT)

| Token                 | Hex       | Uso principal                                         |
| --------------------- | --------- | ----------------------------------------------------- |
| **Fondo principal**   | `#FFFFFF` | Fondo de página y secciones.                          |
| **Fondo secundario**  | `#F8F9FA` | Tarjetas, acordeones, fondos alternos.                |
| **Texto principal**   | `#1A1A1A` | Párrafos y texto de lectura.                          |
| **Texto secundario**  | `#4A5568` | Textos de apoyo, fechas, metadatos.                   |
| **Títulos**           | `#0B1E33` | h1, h2, h3 (azul marino profundo).                    |
| **Acento primario**   | `#2563EB` | Enlaces, botones, iconos destacados (azul eléctrico). |
| **Acento secundario** | `#F59E0B` | CTAs principales, badges de urgencia (dorado).        |
| **Bordes**            | `#E2E8F0` | Bordes sutiles, separadores.                          |
| **Éxito / Confianza** | `#059669` | Iconos de check, badges de garantía.                  |

---

## 3. JERARQUÍA DE TEXTOS

| Elemento           | Tamaño            | Peso            | Color     | Observaciones                                       |
| ------------------ | ----------------- | --------------- | --------- | --------------------------------------------------- |
| **h1**             | `2.5rem` (40px)   | 700 (bold)      | `#0B1E33` | Título principal de la página.                      |
| **h2**             | `1.8rem` (29px)   | 600 (semi-bold) | `#0B1E33` | Títulos de sección.                                 |
| **h3**             | `1.3rem` (21px)   | 600 (semi-bold) | `#0B1E33` | Subtítulos o títulos de tarjeta.                    |
| **h4**             | `1rem` (16px)     | 600 (semi-bold) | `#2563EB` | Títulos de callout o etiquetas destacadas.          |
| **p (cuerpo)**     | `1rem` (16px)     | 400 (regular)   | `#1A1A1A` | Texto de párrafo. Interlineado 1.6.                 |
| **p (secundario)** | `0.875rem` (14px) | 400 (regular)   | `#4A5568` | Texto de apoyo, pies de foto.                       |
| **strong / bold**  | hereda            | 600 o 700       | `#0B1E33` | Sin fondo; solo peso.                               |
| **enlaces `<a>`**  | hereda            | 500 o 600       | `#2563EB` | Subrayado sutil al hover.                           |
| **código inline**  | `0.875rem`        | 400             | `#1A1A1A` | Fondo `#F1F5F9`, padding 2px 6px, borde redondeado. |

---

## 4. COMPONENTES ESENCIALES

### 4.1 Botones

**Primario (CTA dorado):**

- Fondo: `#F59E0B`
- Texto: `#0B1E33` (oscuro), peso 600.
- Padding: `12px 24px`, borde redondeado `0.5rem`.
- Hover: fondo `#D97706`.
- Sombra sutil.

**Secundario (borde azul):**

- Borde: `2px solid #2563EB`
- Texto: `#2563EB`, peso 600.
- Fondo: transparente.
- Hover: fondo `#EFF6FF`.

### 4.2 Tarjetas (Cards)

- Fondo: `#F8F9FA`
- Borde: `1px solid #E2E8F0`
- Sombra: `0 4px 6px -1px rgba(0,0,0,0.05)`
- Padding interno: `24px`
- Bordes redondeados: `0.75rem`
- Títulos dentro de tarjetas: `h3` (ver jerarquía).

### 4.3 Callout / Nota destacada

- Fondo: `#F0F4FF` (azul muy claro)
- Borde izquierdo: `4px solid #2563EB`
- Texto: `#1A1A1A`
- Padding: `16px 20px`
- Ideal para testimonios o avisos importantes.

### 4.4 Separadores

- Usar `<hr>` con `border-top: 1px solid #E2E8F0` y margen vertical `2rem`.

---

## 5. ICONOGRAFÍA

- Usar preferentemente `lucide-react` por su estética limpia y profesional.
- Tamaño base: `20px` o `24px`.
- Colores: heredar del contexto o usar `#2563EB` para iconos destacados.

---

## 6. ESPACIADO Y LAYOUT

- **Contenedor principal:** `max-width: 1200px`, centrado con `margin: 0 auto` y `padding: 0 20px`.
- **Secciones:** padding vertical de `4rem` (64px) en desktop, `2rem` en móvil.
- **Separación entre elementos:** usar múltiplos de `8px` (ej. `mt-4`, `mb-8`).
- **Tipografía base:** `16px` en `body` para un buen ritmo de lectura.

---

## 7. NOTAS PARA LA IMPLEMENTACIÓN

- No se requiere modo oscuro para la landing; el diseño es claro por defecto.
- La landing debe ser responsive, pero sin las restricciones de página fija A4 del libro. Usar layout web fluido.
- Mantener la coherencia visual con el libro: mismo espaciado generoso, misma personalidad tipográfica, pero adaptada a la web.
- Los elementos interactivos (botones, enlaces) deben tener transiciones suaves (`transition: all 0.2s ease`).

---
