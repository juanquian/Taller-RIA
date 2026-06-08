import { defineStore } from 'pinia'
import { useLocalStorage } from '../composables/useLocalStorage'

export const useFavoritesStore = defineStore(
  'favorites',
  () => {

    const favorites = useLocalStorage(
      'anime-explorer:favorites',
      []
    )

    function isFavorite(id) {
      return favorites.value.some(
        f => f.id === id
      )
    }

    function toggle(item) {
      if (isFavorite(item.id)) {
        favorites.value =
          favorites.value.filter(
            f => f.id !== item.id
          )
      } else {
        favorites.value.push(item)
      }
    }

    function clear() {
      favorites.value = []
    }

    return {
      favorites,
      isFavorite,
      toggle,
      clear,
    }
  }
)