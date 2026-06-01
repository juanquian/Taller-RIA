<script setup>
import AnimeCard from '../components/AnimeCard.vue'
import { useFavoritesStore } from '../stores/favoritesStore'
import { storeToRefs } from 'pinia'

const favoritesStore = useFavoritesStore()
const { favorites } = storeToRefs(favoritesStore)
</script>

<template>
  <div class="favorites-view">
    <div class="container">
      <h1>Favoritos ({{ favorites.length }})</h1>

      <p v-if="favorites.length === 0" class="favorites-view__empty">
        No hay favoritos guardados. Explorá anime y agregá algunos con el botón 🤍.
      </p>

      <template v-else>
        <button class="btn btn--outline favorites-view__clear" @click="favoritesStore.clear">
          Limpiar todo
        </button>
        <div class="favorites-view__grid">
          <AnimeCard v-for="item in favorites" :key="item.id" :item="item" />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
/* BEM: favorites-view */
.favorites-view {
  padding: 2rem 1rem;
}

.favorites-view__empty {
  color: #888;
  margin-top: 1rem;
}

.favorites-view__clear {
  margin: 1rem 0;
}

.favorites-view__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

@media (min-width: 600px) {
  .favorites-view__grid {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }
}
</style>

