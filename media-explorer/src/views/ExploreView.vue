<script setup>
import SearchBar from '../components/SearchBar.vue'
import AnimeCard from '../components/AnimeCard.vue'
import { useAnimeStore } from '../stores/animeStore'
import { storeToRefs } from 'pinia'

const animeStore = useAnimeStore()
const { results, isLoading, error, lastQuery } = storeToRefs(animeStore)
</script>

<template>
  <div class="explore-view">
    <div class="container">
      <h1>Explorar</h1>
      <p v-if="lastQuery" class="explore-view__last">
        Última búsqueda: <strong>{{ lastQuery }}</strong>
      </p>

      <SearchBar @search="animeStore.search" />

      <p v-if="isLoading" class="explore-view__status">Buscando...</p>
      <p v-else-if="error" class="explore-view__status explore-view__status--error">
        {{ error }}
      </p>
      <p v-else-if="results.length === 0" class="explore-view__status">
        Ingresá el nombre de un anime para buscar.
      </p>

      <div v-else class="explore-view__grid">
        <AnimeCard v-for="item in results" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* BEM: explore-view */
.explore-view {
  padding: 2rem 1rem;
}

.explore-view__last {
  color: #888;
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.explore-view__status {
  color: #aaa;
  margin-top: 1rem;
}

.explore-view__status--error {
  color: #e04f4f;
}

.explore-view__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

@media (min-width: 600px) {
  .explore-view__grid {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }
}
</style>

