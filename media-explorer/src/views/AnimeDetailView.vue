<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getAnimeById } from '../services/animeService'

const route = useRoute()

const anime = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    anime.value = await getAnimeById(route.params.id)
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
<style scoped>
.anime-detail__trailer {
  margin-top: 2rem;
}

.anime-detail__iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  border-radius: 12px;
}
.anime-detail {
  padding: 2rem 1rem;
}

.anime-detail__title {
  margin-bottom: 2rem;
}

.anime-detail__main {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.anime-detail__image {
  width: 100%;
  border-radius: 12px;
  display: block;
}

.anime-detail__info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.anime-detail__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.anime-detail__stat {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background-color: rgba(255,255,255,0.08);
}

.anime-detail__genres {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.anime-detail__genre {
  background-color: #4f6ef7;
  color: white;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.85rem;
}

.anime-detail__synopsis {
  padding: 1.5rem;
  border-radius: 12px;
  background-color: rgba(255,255,255,0.05);
}

.anime-detail__synopsis h2 {
  margin-bottom: 1rem;
}

.anime-detail__synopsis p {
  line-height: 1.8;
}

@media (max-width: 768px) {
  .anime-detail__main {
    grid-template-columns: 1fr;
  }

  .anime-detail__poster {
    max-width: 300px;
    margin: 0 auto;
  }
}
</style>