import { defineStore } from 'pinia'
import { ref } from 'vue'
import { searchAnime } from '../services/animeService'

export const useAnimeStore = defineStore('anime', () => {
  const results = ref([])
  const isLoading = ref(false)
  const error = ref(null)
  const lastQuery = ref(sessionStorage.getItem('lastQuery') ?? '')

  async function search(query) {
    if (!query.trim()) return
    isLoading.value = true
    error.value = null
    lastQuery.value = query
    sessionStorage.setItem('lastQuery', query)
    try {
      results.value = await searchAnime(query)
    } catch (e) {
      error.value = e.message
    } finally {
      isLoading.value = false
    }
  }

  return { results, isLoading, error, lastQuery, search }
})
