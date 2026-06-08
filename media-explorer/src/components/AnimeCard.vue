<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFavoritesStore } from '../stores/favoritesStore'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const router = useRouter()
const favoritesStore = useFavoritesStore()

const isFavorite = computed(() =>
  favoritesStore.isFavorite(props.item.id),
)

function toggleFavorite() {
  favoritesStore.toggle(props.item)
}

function goToDetail() {
  router.push(`/anime/${props.item.id}`)
}
</script>

<template>
  <div class="anime-card" @click="goToDetail">
    <img
      v-if="item.image"
      :src="item.image"
      :alt="item.title"
      class="anime-card__image"
      loading="lazy"
    />
    
    <div v-else class="anime-card__no-image">
      Sin imagen
    </div>

    <div class="anime-card__body">
      <p class="anime-card__title">
        {{ item.title }}
      </p>

      <p class="anime-card__meta">
        {{ item.type }}
        <span v-if="item.score">
          · ⭐ {{ item.score }}
        </span>
      </p>

      <button
        class="anime-card__btn"
        :class="{ 'anime-card__btn--active': isFavorite }"
        @click.stop="toggleFavorite"
      >
        {{ isFavorite ? '❤️ Quitar' : '🤍 Favorito' }}
      </button>
    </div>
  </div>
</template>
<style scoped>
  .anime-card {
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .anime-card:hover {
    transform: translateY(-2px);  
  }
</style>