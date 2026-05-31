# Forever33 Systems Website

Sitio estático para `forever33systems.com`.

## Estado De Publicación

El sitio ya está publicado en Cloudflare Pages.

URLs activas:

```text
https://forever33systems.com/
https://forever33-site.pages.dev/
```

Repositorio GitHub:

```text
https://github.com/Jorgeforever33/forever33-site
```

Configuración usada en Cloudflare Pages:

```text
Project name: forever33-site
Production branch: main
Framework preset: None
Build command: vacío
Output directory: /
```

## Dominio Principal Y WWW

Dominio principal:

```text
https://forever33systems.com/
```

`www.forever33systems.com` está agregado como dominio personalizado en Pages y redirige al dominio principal.

Regla activa en Cloudflare:

```text
Redirigir de WWW a raíz [Plantilla]
```

Comportamiento esperado:

```text
https://www.forever33systems.com/ -> 301 -> https://forever33systems.com/
```

También conserva rutas y query strings:

```text
https://www.forever33systems.com/contacto?x=1
-> https://forever33systems.com/contacto?x=1
```

## Publicación En Cloudflare Pages

Este proyecto no usa backend, login, pagos online ni herramientas de build. Se publica como HTML, CSS y JS estático.

Si se necesita recrear el proyecto:

1. Crear un proyecto nuevo en Cloudflare Pages.
2. Elegir el repositorio `Jorgeforever33/forever33-site`.
3. Configurar `Build command` vacío.
4. Configurar `Output directory` como `/`.
5. Publicar el proyecto desde la rama `main`.
6. Conectar el dominio `forever33systems.com`.
7. Agregar `www.forever33systems.com`.
8. Crear redirección 301 de `www` a raíz.
9. Verificar HTTPS.
10. Probar WhatsApp y vista móvil.

Archivos esperados en la raíz publicable:

```text
index.html
styles.css
script.js
robots.txt
sitemap.xml
_headers
README.md
assets/
```

## Configurar WhatsApp

Editar `script.js`:

```js
const CONTACT = {
  whatsappNumber: "5491151275465",
  whatsappMessage: "Hola, quiero consultar por Forever33 Systems y el POS para ferreterías.",
};
```

Usar formato internacional sin `+`, espacios ni guiones.

## SEO Y Vista Previa Social

El sitio usa como URL canónica:

```text
https://forever33systems.com/
```

La imagen configurada para WhatsApp, Facebook y Twitter/X es:

```text
https://forever33systems.com/assets/pos-preview-ferreteria-ticket.png
```

`robots.txt` permite indexación y apunta a:

```text
https://forever33systems.com/sitemap.xml
```

## Headers De Cloudflare Pages

El archivo `_headers` define headers básicos de seguridad:

- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `X-Frame-Options`

No bloquea CSS, JS ni imágenes.

## Descargas Futuras

La web está preparada para ofrecer el instalador o ZIP cuando el producto esté listo. En Cloudflare Pages Free, los archivos individuales grandes no son la mejor opción; si el instalador pesa mucho, conviene enlazarlo desde otro almacenamiento o desde el futuro servidor.

## Checklist Final

- [x] Sitio carga correctamente.
- [x] CSS carga correctamente.
- [x] JS carga correctamente.
- [x] Imágenes cargan correctamente.
- [x] WhatsApp funciona.
- [x] Menú móvil funciona.
- [x] No hay enlaces prohibidos.
- [x] Sitemap correcto.
- [x] Robots correcto.
- [x] HTTPS activo en el dominio final.
- [x] `www` redirige al dominio principal.
