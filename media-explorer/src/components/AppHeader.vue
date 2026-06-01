<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '../stores/favoritesStore'

const favoritesStore = useFavoritesStore()
const favCount = computed(() => favoritesStore.favorites.length)
</script>

<template>
  <header class="app-header">
    <div class="app-header__container">
      <RouterLink to="/" class="app-header__logo">🎌 Anime Explorer</RouterLink>
      <nav class="app-header__nav">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/explorar">Explorar</RouterLink>
        <RouterLink to="/favoritos">
          Favoritos
          <span v-if="favCount > 0" class="app-header__badge">{{ favCount }}</span>
        </RouterLink>
        <RouterLink to="/acerca">Acerca</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* BEM: app-header */
.app-header {
  background-color: #1e1e1e;
  border-bottom: 1px solid #333;
  padding: 0 1rem;
}

.app-header__container {
  max-width: 1100px;
  margin: 0 auto;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-header__logo {
  font-size: 1.1rem;
  font-weight: bold;
  color: #e0e0e0;
  text-decoration: none;
}

.app-header__nav {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.app-header__nav a {
  color: #aaa;
  text-decoration: none;
  font-size: 0.9rem;
}

.app-header__nav a:hover,
.app-header__nav a.router-link-active {
  color: #e0e0e0;
}

.app-header__badge {
  background-color: #e05c7a;
  color: white;
  font-size: 0.7rem;
  padding: 1px 5px;
  border-radius: 4px;
  margin-left: 4px;
}

@media (max-width: 480px) {
  .app-header__logo span {
    display: none;
  }
  .app-header__nav {
    gap: 0.75rem;
  }
}
</style>
