<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getAnimeById } from '../services/animeService'
import { useAnimeViews } from '../composables/useAnimeViews'

const route = useRoute()
const { incrementViews, getViews } = useAnimeViews()

const views = ref(0)

const anime = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    anime.value = await getAnimeById(route.params.id)
    const id = route.params.id
    views.value = incrementViews(id)

  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="anime-detail">
    <div class="container">

      <p v-if="loading">Cargando...</p>

      <p v-else-if="error">
        {{ error }}
      </p>
      
      <div
        v-else
        class="anime-detail__content"
      >
        <h1 class="anime-detail__title">
          {{ anime.title }}
        </h1>
        <div class="anime-detail__main">

            <div class="anime-detail__poster">
                <img
                :src="anime.image"
                :alt="anime.title"
                class="anime-detail__image"
                >
            </div>

            <div class="anime-detail__info">

                <div class="anime-detail__stats">

                <div class="anime-detail__stat">
                    ⭐ <strong>{{ anime.score ?? 'N/A' }}</strong>
                </div>

                <div class="anime-detail__stat">
                    📺 {{ anime.episodes ?? 'Desconocido' }} episodios
                </div>

                <div class="anime-detail__stat">
                    🎬 {{ anime.status }}
                </div>
                <div class="anime-detail__stat">
                    👁️ {{ views }} visitas
                </div>
                </div>

                <div class="anime-detail__genres">
                <span
                    v-for="genre in anime.genres"
                    :key="genre.mal_id"
                    class="anime-detail__genre"
                >
                    {{ genre.name }}
                </span>
                </div>

                <section class="anime-detail__synopsis">
                <h2>📖 Sinopsis</h2>

                <p>
                    {{ anime.synopsis }}
                </p>
                </section>

            </div>

        </div>
        <section
            v-if="anime.trailer"
            class="anime-detail__trailer"
            >
            <h2>Trailer</h2>

            <iframe
                :src="anime.trailer"
                title="Anime Trailer"
                allowfullscreen
                class="anime-detail__iframe"
            />
        </section>
      </div>

    </div>
  </div>
</template>
<style scoped src="./AnimeDetailView.css"></style>
