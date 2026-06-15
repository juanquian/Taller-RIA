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
  topAnime.value = await getTopAnime()

  window.addEventListener('scroll', handleScroll)
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

      <div class="home-view__grid">
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

<style scoped>
.home-view {
  padding: 1rem;
}

.home-view__hero {
  min-height: 60vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  background:
    linear-gradient(
      rgba(0,0,0,0.5),
      rgba(0,0,0,0.7)
    ),
    url('../assets/images/anime-banner.jpg');

  background-size: cover;
  background-position: center;

  border-radius: 12px;
  margin-bottom: 3rem;
}

.home-view__hero-content {
  max-width: 700px;
  padding: 2rem;
}

.home-view__title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: 1rem;
}

.home-view__desc {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.home-view__actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.home-view__section {
  margin-top: 3rem;
}

.home-view__grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(170px, 1fr)
  );
  gap: 1rem;
  margin-top: 1rem;
}
.home-view__loading {
  text-align: center;
  margin-top: 2rem;
  opacity: 0.8;
}
</style>