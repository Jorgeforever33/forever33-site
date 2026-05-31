# Forever33 Systems Website

Sitio estático para `forever33systems.com`.

## Publicación en Cloudflare Pages

Este proyecto no usa backend, login, pagos online ni herramientas de build. Se publica como HTML, CSS y JS estático.

Pasos recomendados:

1. Crear un proyecto nuevo en Cloudflare Pages.
2. Elegir el repositorio o carpeta que contiene este sitio.
3. Configurar `Build command` vacío.
4. Configurar `Output directory` como `/`.
5. Publicar el proyecto.
6. Conectar el dominio `forever33systems.com`.
7. Verificar que `https://forever33systems.com/` cargue con HTTPS activo.
8. Probar los botones de WhatsApp.
9. Probar la vista móvil.
10. Revisar que `robots.txt` y `sitemap.xml` carguen correctamente.

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

## SEO y vista previa social

El sitio usa como URL canónica:

```text
https://forever33systems.com/
```

La imagen configurada para WhatsApp, Facebook y Twitter/X es:

```text
https://forever33systems.com/assets/pos-preview-ferreteria-ticket.png
```

`robots.txt` permite indexación y apunta a `https://forever33systems.com/sitemap.xml`.

## Headers de Cloudflare Pages

El archivo `_headers` define headers básicos de seguridad:

- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `X-Frame-Options`

No bloquea CSS, JS ni imágenes.

## Descargas futuras

La web está preparada para ofrecer el instalador o ZIP cuando el producto esté listo. En Cloudflare Pages Free, los archivos individuales grandes no son la mejor opción; si el instalador pesa mucho, enlazarlo desde otro almacenamiento o desde el futuro servidor.

## Checklist final antes de publicar

- [ ] Sitio carga correctamente.
- [ ] CSS carga correctamente.
- [ ] JS carga correctamente.
- [ ] Imágenes cargan correctamente.
- [ ] WhatsApp funciona.
- [ ] Menú móvil funciona.
- [ ] No hay enlaces prohibidos.
- [ ] Sitemap correcto.
- [ ] Robots correcto.
- [ ] HTTPS activo en el dominio final.
