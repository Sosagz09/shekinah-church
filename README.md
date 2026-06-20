# Casa de Dios Shekinah — Sitio Web Oficial

Sitio web oficial de la Iglesia **Casa de Dios Shekinah**, iglesia cristiana evangélica ubicada en Cantón Cara Sucia, Ahuachapán, El Salvador. Isaías 35.

**[casadediosshekinah.vercel.app](https://casadediosshekinah.vercel.app)**

---

## Tecnologías utilizadas

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-F7DF1E?style=for-the-badge&logo=gmail&logoColor=black)

---

## Características principales

- Carrusel de imágenes animado en el Hero principal
- Enseñanzas y sermones cargados desde Sanity CMS con videos de YouTube
- Galería de fotos dinámica gestionada desde el panel de administración
- Página de Eventos actualizable sin tocar código
- Formulario de Petición de Oración funcional con EmailJS
- Formulario "Soy Nuevo" con integración directa a WhatsApp
- Los 12 Ministerios de la iglesia detallados
- Diseño responsive para móvil y escritorio
- Menú hamburguesa para dispositivos móviles
- SEO optimizado con metadatos, sitemap y Google Search Console
- Panel de administración integrado con Sanity Studio

---

## Páginas del sitio

| Página | Descripción |
|---|---|
| `/` | Inicio con carrusel, visión, misión y horarios |
| `/mensajes` | Enseñanzas, reels y galería de fotos |
| `/ministerios` | Los 12 ministerios de la iglesia |
| `/nosotros` | Pastores, historia y valores institucionales |
| `/eventos` | Actividades y eventos especiales |
| `/oracion` | Formulario de petición de oración |
| `/soy-nuevo` | Formulario de bienvenida para nuevos visitantes |
| `/studio` | Panel de administración Sanity Studio |

---

## Estructura del proyecto

    iglesia-web/
    ├── src/
    │   ├── app/
    │   │   ├── page.js
    │   │   ├── mensajes/
    │   │   ├── ministerios/
    │   │   ├── nosotros/
    │   │   ├── eventos/
    │   │   ├── oracion/
    │   │   ├── soy-nuevo/
    │   │   └── studio/
    │   └── components/
    │       ├── Navbar.js
    │       └── HeroCarrusel.js
    ├── sanity/
    │   ├── schemaTypes/
    │   │   ├── sermonType.js
    │   │   ├── eventoType.js
    │   │   └── galeriaType.js
    │   └── lib/
    │       ├── client.js
    │       └── image.js
    └── public/

---

## 🔑 Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

    NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
    NEXT_PUBLIC_SANITY_DATASET=production

---

## Instalación local

    git clone https://github.com/Sosagz09/shekinah-church.git
    cd shekinah-church
    npm install
    npm run dev

Abre http://localhost:3000 en tu navegador.

---

## Panel de administración

El equipo de multimedia puede gestionar el contenido desde Sanity Studio:

- Local: http://localhost:3000/studio
- Producción: https://casadediosshekinah.vercel.app/studio

Desde el Studio se puede:
- Agregar nuevos sermones con ID de YouTube
- Subir y organizar fotos en la galería
- Crear y editar eventos con imagen, descripción y fecha

---

## 👨‍💻 Desarrollado por

**Daniel Sosa** — **Ministerio de Multimedia**

---

> "El desierto se alegrará; se gozará el yermo y florecerá como la rosa." — Isaías 35:1
