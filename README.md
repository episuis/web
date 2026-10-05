# EPISUIS — sitio web consolidado

Sitio web ligero para EPISUIS, construido con HTML, CSS y JavaScript sin WordPress ni dependencias de compilación.

El diseño, la identidad visual, la estructura general, la iconografía actual y la experiencia responsive se consideran **consolidados**. No se contemplan cambios de identidad ni rediseños generales mientras no exista una necesidad funcional concreta.

## Estructura

- `index.html` — inicio en español
- `consultoria.html` — consultoría en español
- `sobre.html` — EPISUIS / sobre la consultoría
- `contacto.html` — contacto
- `en/` — versión inglesa equivalente
- `assets/css/style.css` — sistema visual completo
- `assets/js/main.js` — navegación, animaciones y formulario
- `assets/images/identity/` — logo y favicon
- `assets/images/visuals/` — visuales vectoriales propios
- `robots.txt` y `sitemap.xml` — SEO técnico básico
- `CNAME` — dominio personalizado `episuis.com.mx`

## Publicación en GitHub Pages

El sitio se publica desde GitHub Pages usando la rama `main` y la raíz del repositorio. El dominio personalizado `episuis.com.mx` está configurado mediante el archivo `CNAME`.

## Formulario de contacto

El formulario está diseñado para captar un primer contacto institucional sin pedir información sanitaria confidencial. Solicita únicamente nombre, organización o institución, correo, ámbito del proyecto y una descripción breve del problema que se necesita comprender o resolver.

Por decisión de diseño, en su estado actual el formulario **no utiliza un servicio externo ni un endpoint de formularios**. Cuando no existe `data-endpoint`, el sitio genera un correo dirigido a `episuis@gmail.com` con los campos organizados para facilitar el primer contacto.

La posibilidad de conectar posteriormente un servicio de formularios estáticos queda abierta como mejora funcional futura, pero no constituye un pendiente del sitio actual.

## Identidad visual

Dirección consolidada: **red epidemiológica + laboratorio de soluciones**, con elementos de cartografía del riesgo.

Paleta base:

- Verde epidemiológico: `#0F3D36`
- Rosa EPISUIS: `#E6AAAA`
- Marrón profundo: `#662112`
- Grafito: `#4D4D4D`
- Fondo cálido: `#F6F3EE`
- Verde suave: `#E8EEE9`

Los SVG de `assets/images/visuals/` son propios del sitio y pueden editarse como texto. La identidad visual vigente se considera definitiva para esta etapa y no requiere sustitución por otra paleta, estilo iconográfico o sistema gráfico.

## Responsive

La versión de escritorio y la experiencia móvil han sido revisadas y se consideran funcionalmente cerradas. Los cambios futuros deberán responder a necesidades concretas de contenido o funcionalidad, no a un rediseño general.

## Idiomas e internacionalización

La raíz es español (`es-MX`) y `en/` contiene la versión inglesa. Se incluyen `canonical`, `hreflang` y sitemap bilingüe para mantener una base SEO internacional correcta.
