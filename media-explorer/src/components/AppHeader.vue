<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '../stores/favoritesStore'
import { useThemeStore } from '../stores/themeStore'

const favoritesStore = useFavoritesStore()
const favCount = computed(() => favoritesStore.favorites.length)
const themeStore = useThemeStore()

</script>
<template>
  <header class="app-header">
    <div class="app-header__container">
      <RouterLink to="/" class="app-header__logo">Anime Explorer</RouterLink>
        <nav class="app-header__nav">
          <RouterLink to="/">Inicio</RouterLink>
          <RouterLink to="/explorar">Explorar</RouterLink>

          <RouterLink to="/favoritos">
            Favoritos
            <span v-if="favCount > 0" class="app-header__badge">
              {{ favCount }}
            </span>
          </RouterLink>

          <RouterLink to="/acerca">Acerca</RouterLink>

          <button
            class="app-header__theme-btn"
            @click="themeStore.toggleTheme"
          >
            {{ themeStore.darkMode ? 'Claro' : 'Oscuro' }}
          </button>
        </nav>
    </div>
  </header>
</template>

<style scoped src="./AppHeader.css"></style>
