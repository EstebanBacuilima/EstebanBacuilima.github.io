# Portafolio — Esteban Bacuilima

Sitio estático con Astro 7, TypeScript y Tailwind CSS 4. Español en `/` e inglés en `/en/`.

## Comandos

| Comando | Acción |
|---|---|
| `npm install` | Instala dependencias (Node >= 22.23.4, ver `.nvmrc`) |
| `npm run dev` | Servidor local en `http://localhost:4321` |
| `npm run build` | `astro check` + build de producción en `dist/` |
| `npm run preview` | Sirve `dist/` localmente |

## Estructura

- `src/data/` — proyectos, stack y contacto (`site.ts`). Añadir un proyecto = añadir un objeto en `projects.ts`.
- `src/i18n/` — textos de interfaz `es.ts` / `en.ts` (el tipo de `en` obliga a tener las mismas claves).
- `src/components/{layout,sections,ui}/` — componentes.
- `src/assets/projects/` — capturas (Astro las convierte a WebP).

## Contenido pendiente

- **CV**: copia el PDF a `public/cv/` y pon su ruta en `cvPath` de `src/data/site.ts` (p. ej. `'/cv/Esteban-Bacuilima-CV.pdf'`). Mientras sea `null`, no se muestra ningún botón.
- **Sobre mí** (`about` en `src/i18n/*.ts`): perfil ya incluido; faltan estudios e idiomas si quieres añadirlos.
- **Experiencia**: sección no incluida hasta tener datos confirmados.
- **Imagen Open Graph**: no hay; añadir `og:image` en `BaseLayout.astro` cuando exista.

## Despliegue (GitHub Pages)

1. El repo debe llamarse exactamente `EstebanBacuilima.github.io` para servir en la raíz.
2. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada push a `main` ejecuta `.github/workflows/deploy.yml`.
4. Comprueba en la pestaña **Actions** que `build` y `deploy` terminen en verde, y abre `https://estebanbacuilima.github.io/` y `/en/`.
