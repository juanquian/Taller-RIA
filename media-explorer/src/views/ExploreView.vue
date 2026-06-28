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

<style scoped src="./ExploreView.css"></style>

