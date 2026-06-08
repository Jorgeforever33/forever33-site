# Forever33 Systems - Contexto de proyecto

Sitio web estático para:

```text
https://forever33systems.com/
```

## Estado actual de la landing

- Sitio publicado en Cloudflare Pages y accesible en `https://forever33systems.com/`.
- Dominio principal activo: `https://forever33systems.com/`.
- `www.forever33systems.com` redirige al dominio raíz con código 301.
- HTTPS operativo.
- Landing responsive validada en desktop y mobile.
- WhatsApp principal: `5491151275465`.
- Email visible: `jorgeforever33@gmail.com`.
- Redes oficiales visibles en contacto y footer:
  - YouTube: `https://www.youtube.com/@Forever33systems`
  - Instagram: `https://www.instagram.com/forever33308/`
- No hay backend, login/registro, pagos online, precios publicados ni descarga real en esta etapa.

## Posicionamiento actual

- La marca/empresa de la web es **Forever33 Systems**.
- El producto principal es **F33 POS**.
- La variante comunicada es **F33 POS local para ferreterías y distribuidoras**.
- Mensaje principal actual:

```text
F33 POS local para ferreterías y distribuidoras.
Versión funcional disponible para demo/piloto asistido.
```

- La landing debe sonar como una versión local demostrable y lista para piloto inicial, sin prometer sistema final perfecto.
- Se permite comunicar:
  - versión local funcional
  - demo/piloto asistido
  - instalación local asistida en Windows
  - base limpia disponible para instalación inicial
  - licencia local/manual
  - soporte directo por WhatsApp
  - presupuesto adaptable
  - funciones adicionales si el comercio las necesita

## Estado del producto

- F33 POS cuenta con una versión local funcional para demo/piloto asistido.
- La instalación actual es asistida y requiere configuración inicial.
- No se comunica descarga pública autoservicio todavía.
- No se comunica instalador MSI automático todavía.
- No se comunica servicio Windows todavía.
- La activación comercial se comunica como licencia local/manual.
- La renovación y el soporte se gestionan por WhatsApp.

## Aclaración fiscal

- F33 no incluye facturación fiscal en esta etapa.
- El sistema puede generar comprobantes comerciales internos no fiscales.
- No reemplaza factura fiscal, AFIP, CAE ni facturación electrónica.
- Esta aclaración debe mantenerse visible en la landing y en FAQ.

## Funciones actuales comunicadas

- POS de mostrador.
- Caja.
- Productos y stock.
- Compras y proveedores.
- Clientes y mayoristas.
- Catálogo comercial.
- PDF comercial con estilos.
- Comprobante A4 no fiscal.
- Reportes industriales.
- Acceso móvil por red local.
- Imagen para Estado de WhatsApp.
- Vista cliente para segundo monitor.
- Backups y cierre seguro.
- Licencia local.

## Estructura actual de la landing

- Header con logo de Forever33 Systems.
- Hero: F33 POS local para ferreterías y distribuidoras.
- CTAs:
  - Solicitar demo
  - Ver funciones
  - Consultar instalación
- Productos:
  - F33 POS como producto principal
  - bloques "Próximamente" debajo, sin quitar foco al POS
- Showcase con capturas reales:
  - POS
  - Productos
  - Precios
  - Reportes
  - Clientes
  - Exportadores
- Bloque de salidas comerciales:
  - Lista PDF
  - Pedido Excel
  - Reportes
  - A medida
- Funciones principales con grilla de módulos.
- Cómo funciona: coordinar, instalar, activar.
- Instalación local asistida en Windows.
- Licencia local con activación manual.
- Qué incluye / aclaración fiscal.
- FAQ.
- Contacto por WhatsApp, email y redes.
- Footer con marca, navegación, producto, contacto y redes.

## Identidad visual

- La web usa la marca principal: **Forever33 Systems**.
- El programa/producto usa la marca: **F33 POS**.
- Variante del producto: **Ferreterías y Distribuidoras**.
- Identidades separadas:
  - Forever33 Systems = empresa / web
  - F33 POS = producto / programa
- No usar F33 POS como logo principal de la web.
- No usar Forever33 Systems como logo principal interno del programa si ya existe logo de producto.
- Separación de assets fuente en `C:\Users\chay\Documents\dinero\logos`:
  - `logos\empresa\forever33-logo-horizontal.png`
  - `logos\empresa\forever33-icon.png`
  - `logos\producto\f33-pos-logo-horizontal.png` (pendiente si el usuario aporta logo de producto)
  - `logos\producto\f33-pos-icon.png` (pendiente si el usuario aporta icono de producto)
- No duplicar logos de Forever33 Systems dentro de `logos\producto`.

## Logos en uso

- Logo principal de web:

```text
assets/brand/forever33-logo-horizontal.png
```

- Ícono de empresa:

```text
assets/brand/forever33-icon.png
```

- Logo usado en footer:

```text
assets/brand/forever33-logo-horizontal.png
```

Notas:

- Estos logos están siendo usados en la landing.
- No generar logos nuevos sin pedido explícito.
- No reemplazar logos sin confirmación.
- Se dejaron propuestas de logos en `assets/logo-concepts`, pero no se usan como producción final.

## Imágenes y capturas

- La landing usa capturas reales del sistema en `assets/captures/`.
- No usar imágenes externas.
- No generar imágenes nuevas.
- No inventar capturas.
- `login.png` no debe mostrarse en la landing principal.
- La sección de documentos ya no repite capturas de otros módulos; usa tarjetas de texto para evitar confusión visual.

Capturas principales actuales:

```text
assets/captures/hero-pos-desktop.png
assets/captures/hero-pos-mobile.png
assets/captures/showcase-pos.png
assets/captures/showcase-productos.png
assets/captures/showcase-precios.png
assets/captures/showcase-reportes.png
assets/captures/showcase-clientes.png
assets/captures/showcase-exportadores.png
assets/captures/mobile-pos.png
assets/captures/mobile-stock.png
assets/captures/mobile-catalogo.png
```

Hooks en `index.html` para reemplazo rápido:

- Hero:
  - `hero-main-preview`
- Showcase desktop:
  - `showcase-image--desktop`
  - `data-showcase-desktop`
- Showcase mobile:
  - `showcase-image--mobile`
  - `data-showcase-mobile`

## Contacto y redes

- WhatsApp:

```text
5491151275465
```

- URL esperada para CTAs:

```text
https://wa.me/5491151275465?text=Hola%2C%20quiero%20consultar%20por%20F33%20POS%20para%20ferreter%C3%ADas%20y%20distribuidoras.
```

- Email:

```text
jorgeforever33@gmail.com
```

- YouTube:

```text
https://www.youtube.com/@Forever33systems
```

- Instagram:

```text
https://www.instagram.com/forever33308/
```

Las redes también están declaradas en JSON-LD como `sameAs`.

## SEO y Google

- Canonical principal:

```text
https://forever33systems.com/
```

- Title actual:

```text
F33 POS local para ferreterías y distribuidoras | Forever33 Systems
```

- Meta description actual:

```text
F33 POS local para ferreterías y distribuidoras: ventas, stock, caja, compras, clientes, proveedores, catálogo comercial, reportes y demo/piloto asistido.
```

- Imagen OG actual:

```text
https://forever33systems.com/assets/forever33-og-image.png
```

- SEO técnico activo:
  - `robots` con `index, follow, max-image-preview:large`
  - canonical
  - `hreflang` `es-AR`
  - `hreflang` `x-default`
  - Open Graph
  - Twitter Card
  - JSON-LD con `Organization` y `SoftwareApplication`
  - `sameAs` para YouTube e Instagram
  - `sitemap.xml` con `lastmod` actualizado a `2026-06-08`
  - `robots.txt` apunta al sitemap
- El usuario indicó que ya hizo los pasos de Google Search Console. Google puede tardar en verificar e indexar.
- No agregar `noindex`.

## Reglas permanentes del proyecto

- No agregar backend.
- No agregar login/registro.
- No agregar pagos online.
- No agregar precios publicados.
- No agregar descarga real.
- No prometer producto final perfecto.
- No prometer facturación fiscal.
- No agregar enlaces a:
  - `http://localhost:5180/pos`
  - `api.forever33systems.com`
  - `app.forever33systems.com`
- Mantener WhatsApp en `5491151275465`.
- Mantener tono comercial claro y argentino neutro.
- Usar siempre **distribuidoras**, nunca **distruibuidoras**.

## Restricciones técnicas

- No agregar dependencias ni build tools.
- Mantener HTML/CSS/JS simple y sin framework.
- No tocar `_headers`, DNS, Cloudflare, robots, sitemap o canonical salvo necesidad real o instrucción explícita.
- Si se cambia CSS en producción, actualizar el query string del stylesheet para evitar caché viejo.

## Assets identificados como no usados o pendientes

- `assets/f33-cash-preview.png`
- `assets/f33-dashboard-preview.png`
- `assets/logo-concepts/`
- `captures/`

No se borran sin confirmación explícita. Quedan como candidatos a limpiar más adelante.

## Publicación en Cloudflare Pages

- Proyecto sin backend y sin build tools.
- Configuración estable de Pages:

```text
Project name: forever33-site
Production branch: main
Framework preset: None
Build command: (vacío)
Output directory: /
```

Enlaces esperados:

```text
https://forever33systems.com/
https://forever33-site.pages.dev/
```

## Checklist del estado actual

- [x] Sitio carga correctamente.
- [x] CSS carga correctamente.
- [x] JS carga correctamente.
- [x] Imágenes cargan correctamente.
- [x] WhatsApp funciona con el número configurado.
- [x] Email visible funciona con `mailto`.
- [x] Redes sociales visibles y declaradas en JSON-LD.
- [x] Menú mobile funciona.
- [x] Tabs funcionan.
- [x] FAQ funciona.
- [x] No hay enlaces prohibidos.
- [x] No aparece `distruibuidoras`.
- [x] No aparece login/registro.
- [x] Aclaración fiscal visible.
- [x] Sitemap correcto.
- [x] Robots correcto.
- [x] HTTPS activo en dominio final.
- [x] `www` redirige al dominio principal con 301.
- [x] Estado y reglas documentadas.
