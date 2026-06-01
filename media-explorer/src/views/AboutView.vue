<template>
  <div class="about-view">
    <div class="container">
      <h1>Acerca del proyecto</h1>

      <p class="about-view__intro">
        <strong>Anime Explorer</strong> es una aplicación SPA desarrollada como trabajo práctico
        para el <strong>Taller de RIA 2026</strong>. Es una primera versión funcional — el objetivo
        es mostrar la arquitectura base y el flujo principal, no una app terminada.
      </p>
 

      <h2>Próximos pasos</h2>
      <ul class="about-view__list">
        <li>Página de detalle de cada anime</li>
        <li>Paginación en los resultados de búsqueda</li>
        <li>Filtro por tipo (TV, película, OVA)</li>
        <li>Tema claro/oscuro</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* BEM: about-view */
.about-view {
  padding: 2rem 1rem;
}

.about-view__intro {
  margin: 1rem 0 2rem;
  color: #aaa;
  line-height: 1.7;
  max-width: 650px;
}

h2 {
  margin: 1.5rem 0 0.75rem;
}

.about-view__list {
  list-style: disc;
  padding-left: 1.5rem;
  color: #bbb;
  line-height: 2.1;
}
</style>
