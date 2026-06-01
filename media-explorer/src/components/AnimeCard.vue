<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '../stores/favoritesStore'

const props = defineProps({
  item: { type: Object, required: true },
})

const favoritesStore = useFavoritesStore()
const isFavorite = computed(() => favoritesStore.isFavorite(props.item.id))

function toggleFavorite() {
  favoritesStore.toggle(props.item)
}
</script>

<template>
  <div class="anime-card">
    <img
      v-if="item.image"
      :src="item.image"
      :alt="item.title"
      class="anime-card__image"
      loading="lazy"
    />
    <div v-else class="anime-card__no-image">Sin imagen</div>

    <div class="anime-card__body">
      <p class="anime-card__title">{{ item.title }}</p>
      <p class="anime-card__meta">
        {{ item.type }}<span v-if="item.score"> · ⭐ {{ item.score }}</span>
      </p>
      <button
        class="anime-card__btn"
        :class="{ 'anime-card__btn--active': isFavorite }"
        @click="toggleFavorite"
      >
        {{ isFavorite ? '❤️ Quitar' : '🤍 Favorito' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* BEM: anime-card */
.anime-card {
  border: 1px solid #333;
  border-radius: 6px;
  overflow: hidden;
  background-color: #2a2a2a;
  display: flex;
  flex-direction: column;
}

.anime-card__image {
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
}

.anime-card__no-image {
  aspect-ratio: 2 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #777;
  font-size: 0.85rem;
}

.anime-card__body {
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
}

.anime-card__title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #e0e0e0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.anime-card__meta {
  font-size: 0.8rem;
  color: #888;
}

.anime-card__btn {
  margin-top: auto;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  border: 1px solid #444;
  border-radius: 4px;
  background: none;
  color: #aaa;
  cursor: pointer;
  font-family: inherit;
}

.anime-card__btn:hover {
  border-color: #e05c7a;
  color: #e05c7a;
}

.anime-card__btn--active {
  border-color: #e05c7a;
  color: #e05c7a;
}
</style>
