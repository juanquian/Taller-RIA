# Anime Explorer

Aplicación SPA desarrollada como trabajo práctico para el **Taller de RIA 2026**.

> **Estado:** primera versión funcional. El objetivo es mostrar la arquitectura base y el flujo principal — búsqueda de anime, persistencia de favoritos y navegación entre vistas. No es una app terminada.

---

## Tecnologías

| Tecnología | Rol |
|---|---|
| [Vue 3](https://vuejs.org/) | Framework principal (Composition API) |
| [Vite](https://vite.dev/) | Bundler y servidor de desarrollo |
| [Vue Router 4](https://router.vuejs.org/) | Navegación SPA |
| [Pinia](https://pinia.vuejs.org/) | Estado global |
| [Jikan API v4](https://docs.api.jikan.moe/) | API pública de MyAnimeList — sin API key |

---

## Estructura

```
src/
  components/
    AppHeader.vue     # Barra de navegación
    AnimeCard.vue     # Tarjeta de resultado (imagen, título, score, favorito)
    SearchBar.vue     # Input de búsqueda

  views/
    HomeView.vue      # Bienvenida
    ExploreView.vue   # Búsqueda y resultados
    FavoritesView.vue # Favoritos guardados
    AboutView.vue     # Tecnologías y próximos pasos

  router/
    index.js          # 4 rutas

  stores/
    animeStore.js     # Búsqueda + sessionStorage (última búsqueda)
    favoritesStore.js # Favoritos + localStorage

  services/
    animeService.js   # Llamadas a la Jikan API

  assets/
    main.css          # CSS global (BEM, sin frameworks)

  App.vue
  main.js
```

---

## Instalación y ejecución

```bash
git clone https://github.com/juanquian/Taller-RIA.git
cd Taller-RIA/media-explorer
npm install
npm run dev
```

La app estará disponible en `http://localhost:5173`

---

## Rutas

| Ruta | Vista |
|---|---|
| `/` | Inicio |
| `/explorar` | Búsqueda de anime |
| `/favoritos` | Favoritos guardados |
| `/acerca` | Tecnologías y próximos pasos |

---

## Funcionalidades implementadas

- Búsqueda de anime por nombre usando la Jikan API
- Resultados en grilla de tarjetas (imagen, título, tipo, score)
- Agregar/quitar favoritos por tarjeta
- Favoritos persistidos en `localStorage`
- Última búsqueda guardada en `sessionStorage`
- Navegación entre vistas con Vue Router
- Estado global con Pinia

## Próximos pasos

- Página de detalle de cada anime
- Paginación en resultados
- Filtro por tipo (TV, película, OVA)
- Tema claro/oscuro

---

## Notas

- API: Jikan API v4 — pública, sin API key, sin registro
- Sin backend, sin base de datos, sin TypeScript
- CSS propio con metodología BEM, sin librerías de UI
