# EPISUIS — sitio web consolidado

Sitio web ligero para EPISUIS, construido con HTML, CSS y JavaScript sin WordPress ni dependencias de compilación.

El diseño, la identidad visual, la estructura general, la iconografía actual y la experiencia responsive se consideran **consolidados**. No se contemplan cambios de identidad ni rediseños generales mientras no exista una necesidad funcional concreta.

## Posicionamiento vigente

Desde octubre de 2026, el sitio deja de definir a EPISUIS únicamente como una consultoría.

Definición maestra corta:

> **EPISUIS es una firma técnica especializada en sistemas de producción porcina que combina epidemiología, análisis de datos y soluciones propias para transformar información sanitaria y productiva en decisiones útiles.**

La arquitectura de la oferta se comunica mediante tres componentes complementarios:

1. **Consultoría** — servicio especializado construido alrededor de la pregunta y del contexto.
2. **Vigilancia EPISUIS** — infraestructura propia para estructurar y ejecutar proyectos epidemiológicos con trazabilidad.
3. **EPISUIS Producción** — solución propia para organizar información productiva, dar seguimiento a las unidades de producción y generar indicadores útiles.

La fuente de verdad editorial completa está en [`docs/POSICIONAMIENTO.md`](docs/POSICIONAMIENTO.md).

## Estructura

- `index.html` — inicio en español
- `consultoria.html` — consultoría en español
- `sobre.html` — identidad, capacidades y alcance de EPISUIS
- `contacto.html` — contacto
- `en/` — versión inglesa equivalente, redactada para audiencia internacional y no como traducción literal
- `assets/css/style.css` — sistema visual completo
- `assets/js/main.js` — navegación, animaciones y formulario
- `assets/images/identity/` — logo y favicon
- `assets/images/visuals/` — visuales vectoriales propios
- `docs/POSICIONAMIENTO.md` — fuente de verdad de posicionamiento y comunicación
- `sobre-nosotros/index.html` — puente de migración desde una URL heredada
- `robots.txt` y `sitemap.xml` — SEO técnico
- `CNAME` — dominio personalizado `episuis.com.mx`

## Publicación en GitHub Pages

El sitio se publica desde GitHub Pages usando la rama `main` y la raíz del repositorio. El dominio personalizado `episuis.com.mx` está configurado mediante el archivo `CNAME`.

## Formulario de contacto

El formulario está diseñado para captar un primer contacto sin pedir información sanitaria confidencial. Solicita únicamente nombre, organización o institución, correo, ámbito y una descripción breve de lo que se necesita comprender, resolver o desarrollar.

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

La versión de escritorio y la experiencia móvil han sido revisadas y se consideran funcionalmente cerradas.

Regla de mantenimiento: **cambiar primero contenido, no estructura**. Las ampliaciones editoriales deben reutilizar las clases y componentes existentes antes de introducir nuevos patrones. En especial, preservar el comportamiento responsive de `split`, `capability-grid`, `scale-track`, `output-flow`, `process`, `about-panel` y `contact-grid`.

Los cambios futuros deberán responder a necesidades concretas de contenido o funcionalidad, no a un rediseño general.

## SEO e internacionalización

La raíz es español (`es-MX`) y `en/` contiene una versión inglesa adaptada a audiencia técnica internacional.

La actualización editorial y SEO de octubre de 2026 incorporó:

- títulos y metadescripciones específicos por página;
- Open Graph y tarjeta de Twitter en las páginas principales;
- `canonical`, `hreflang` y `x-default` homogéneos;
- sitemap bilingüe actualizado con `lastmod`;
- datos estructurados `Organization` + `WebSite` en Home;
- datos estructurados `Service` en Consultoría;
- actualización de footers para representar Consultoría, Vigilancia y Producción;
- posicionamiento semántico alrededor de epidemiología porcina, salud porcina, vigilancia epidemiológica, riesgo, bioseguridad, epidemiología molecular, producción porcina y análisis de datos, sin relleno artificial de palabras clave.

No se utiliza `meta keywords`.

## URL heredada `/sobre-nosotros/`

Una versión anterior del portal utilizó la ruta `https://episuis.com.mx/sobre-nosotros/`. Esa URL puede permanecer temporalmente en índices externos, pero la página canónica vigente es:

```text
https://episuis.com.mx/sobre.html
```

GitHub Pages no permite definir desde este repositorio una redirección HTTP 301 tradicional. Por ello, `sobre-nosotros/index.html` funciona como puente mediante:

- `canonical` a `/sobre.html`;
- `meta refresh` inmediato;
- `window.location.replace()` para navegación del visitante;
- enlace HTML de respaldo.

La URL antigua no se incluye en `sitemap.xml` y no debe reutilizarse como URL canónica.

## Reglas de comunicación importantes

- No definir EPISUIS únicamente como consultoría.
- No posicionar EPISUIS como una empresa de software; la tecnología es una capacidad aplicada al problema.
- Mantener la consultoría como servicio, y Vigilancia EPISUIS y EPISUIS Producción como soluciones propias dentro del ecosistema.
- EPISUIS Producción se comunica externamente como producto consolidado.
- En EPISUIS Producción comunicar el valor para el usuario, **no revelar la lógica interna que constituye su ventaja de facilidad de uso**.
- Mantener separados EPISUIS, el perfil académico/profesional y Notas técnicas.
- Las colaboraciones nacionales o internacionales pueden comunicarse como capacidad técnica de EPISUIS sin sustituir la identidad académica del responsable.

## Pendientes editoriales

- Construir una guía específica para redes sociales — LinkedIn, Facebook e Instagram — con propósito, tono, banco de temas, mensajes reutilizables y reglas de separación entre marca y perfil académico.
- Revisar periódicamente si quedan otras URLs históricas indexadas y, cuando corresponda, crear puentes de migración equivalentes sin incorporarlas al sitemap.

No existen pendientes de rediseño visual ni de corrección general del responsive en esta etapa.
