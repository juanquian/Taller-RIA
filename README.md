# Taller RIA 2026 - Anime Explorer

`Anime Explorer` es una SPA desarrollada con Vue 3 para el laboratorio de Taller de RIA 2026. La aplicación permite explorar animes, buscar títulos, ver detalles, guardar favoritos y mantener preferencias del usuario mediante persistencia en el navegador.

## Objetivo

El objetivo del proyecto es aplicar de forma integrada los conceptos del curso:

- HTML semántico
- CSS moderno y responsive
- arquitectura organizada del frontend
- metodología BEM
- componentización
- manejo de estado compartido
- persistencia frontend
- consumo de APIs externas

## Tecnologías

- Vue 3
- Vite
- Vue Router
- Pinia
- Jikan API
- localStorage
- sessionStorage

## Funcionalidades principales

- navegación entre múltiples vistas
- búsqueda dinámica de animes
- detalle por anime
- listado de favoritos persistente
- historial y última búsqueda de la sesión
- modo oscuro y claro
- contador de visualizaciones por anime
- vista inicial con top anime y carga incremental

## Estructura general

```text
Taller-RIA/
  README.md
  DOCUMENTACION.md
  media-explorer/
    src/
      assets/
      components/
      composables/
      router/
      services/
      stores/
      views/
```

## Decisiones arquitectónicas

- `views/`: contienen las pantallas principales de la SPA.
- `components/`: encapsulan UI reutilizable como tarjetas, buscador y encabezado.
- `stores/`: centralizan estado compartido con Pinia, como favoritos, tema y búsquedas.
- `services/`: aíslan el acceso a la API externa.
- `composables/`: desacoplan lógica reutilizable de persistencia y comportamiento.

## Persistencia frontend

### localStorage

- favoritos del usuario
- tema oscuro/claro
- contador de vistas por anime

### sessionStorage

- última búsqueda realizada
- historial breve de búsquedas de la sesión

## Instalación y ejecución

### Requisitos previos

- Node.js
- npm
- Git

### Clonar el repositorio

```bash
git clone https://github.com/juanquian/Taller-RIA.git
cd Taller-RIA/media-explorer
```

### Instalar dependencias

```bash
npm install
```

### Iniciar el entorno de desarrollo

```bash
npm run dev
```

Abrir en el navegador la URL que muestra Vite, por ejemplo `http://localhost:5173`.

### Generar build de producción

```bash
npm run build
```
