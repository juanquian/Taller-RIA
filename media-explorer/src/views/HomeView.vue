<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import AnimeCard from '../components/AnimeCard.vue'
import { getTopAnime } from '../services/animeService'

const router = useRouter()

const topAnime = ref([])
const page = ref(1)
const loadingMore = ref(false)
const hasMore = ref(true)
const loadingInitial = ref(true)
const error = ref(null)

async function loadMore() {
  if (loadingMore.value || !hasMore.value) return

  loadingMore.value = true

  try {
    page.value++

    const moreAnime = await getTopAnime(page.value)

    if (moreAnime.length === 0) {
      hasMore.value = false
      return
    }

    topAnime.value.push(...moreAnime)
  } catch (err) {
    error.value = err.message
  }
  finally {
    loadingMore.value = false
  }
}

function handleScroll() {
  const bottom =
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 300

  if (bottom) {
    loadMore()
  }
}

onMounted(async () => {
  try {
    error.value = null
    topAnime.value = await getTopAnime()
    window.addEventListener('scroll', handleScroll)
  } catch (err) {
    error.value = err.message
    hasMore.value = false
  } finally {
    loadingInitial.value = false
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="home-view">
    <div class="home-view__hero">
      <div class="home-view__hero-content">
        <h1 class="home-view__title">
           Anime Explorer
        </h1>

        <p class="home-view__desc">
          Proyecto de RIA para explorar y guardar tus animes favoritos.
          Además de también ver detalles de cada anime y descubrir nuevos títulos.
        </p>

        <div class="home-view__actions">
          <button
            class="btn"
            @click="router.push('/explorar')"
          >
            Explorar Anime
          </button>

          <button
            class="btn btn--outline"
            @click="router.push('/favoritos')"
          >
            Ver Favoritos
          </button>
        </div>
      </div>
    </div>

    <section class="home-view__section">
      <h2>🔥 Top Anime</h2>

      <p v-if="loadingInitial" class="home-view__loading">
        Cargando animes destacados...
      </p>

      <p v-else-if="error" class="home-view__error">
        {{ error }}
      </p>

      <div v-else class="home-view__grid">
        <AnimeCard
          v-for="anime in topAnime"
          :key="anime.id"
          :item="anime"
        />
      </div>
      <p v-if="loadingMore" class="home-view__loading">
      Estamos cargando más animes, no te desesperes...
      </p>
    </section>
  </div>
</template>

<style scoped src="./HomeView.css"></style>
