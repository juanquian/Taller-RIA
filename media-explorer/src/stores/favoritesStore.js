import { defineStore } from 'pinia'
import { ref } from 'vue'

const STORAGE_KEY = 'anime-explorer:favorites'

export const useFavoritesStore = defineStore('favorites', () => {
  const stored = localStorage.getItem(STORAGE_KEY)
  const favorites = ref(stored ? JSON.parse(stored) : [])

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites.value))
  }

  function isFavorite(id) {
    return favorites.value.some(f => f.id === id)
  }

  function toggle(item) {
    if (isFavorite(item.id)) {
      favorites.value = favorites.value.filter(f => f.id !== item.id)
    } else {
      favorites.value.push(item)
    }
    save()
  }

  function clear() {
    favorites.value = []
    save()
  }

  return { favorites, isFavorite, toggle, clear }
})

