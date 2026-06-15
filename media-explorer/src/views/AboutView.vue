<template>
  <div class="about-view">
    <div class="container">
      <h1>Acerca del proyecto</h1>
      <h2>Anime Explorer</h2>

      <p class="about-view__intro">
        <strong>Anime Explorer</strong> es una aplicación SPA desarrollada como trabajo práctico
        para el <strong>Taller de RIA 2026</strong>. 
        Utiliza la API de Jikan para mostrar información sobre miles 
        de animes, permitiendo a los usuarios explorar, buscar y guardar 
        sus títulos favoritos.</p>
        <p class="about-view__intro"> El proyecto está construido con Vue 3, 
        Vue Router y Pinia, y cuenta con un diseño responsive y un modo 
        oscuro/claro para una mejor experiencia de usuario.
      </p>
      <p class="about-view__intro">
        El código fuente está disponible en GitHub, y se implementaron 
        funcionalidades como la persistencia de favoritos en localStorage, 
        navegación fluida entre vistas y una interfaz intuitiva para descubrir nuevos animes.
      </p>
      <h2>Tecnologías</h2>
      <ul class="about-view__list">
        <li>Vue 3</li>
        <li>Vue Router</li>
        <li>Pinia</li>
        <li>Jikan API</li>
      </ul>
      <h2>Funcionalidades</h2>
      <ul class="about-view__list">
        <li>🔎 Búsqueda de anime en tiempo real</li>
        <li>⭐ Sistema de favoritos persistentes</li>
        <li>📄 Página de detalle por anime</li>
        <li>🧠 Persistencia de última búsqueda (sessionStorage)</li>
        <li>👁 Contador de visualizaciones por anime (tracking local)</li>
        <li>🌙 Modo oscuro / claro</li>
        <li>💾 Persistencia de estado en el navegador</li>
        <li>📱 Diseño responsive</li>
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
