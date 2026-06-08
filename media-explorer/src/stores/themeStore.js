import { defineStore } from 'pinia'
import { useLocalStorage } from '../composables/useLocalStorage'

export const useThemeStore = defineStore('theme', () => {
  const darkMode = useLocalStorage(
    'anime-explorer:dark-mode',
    true
  )

  function toggleTheme() {
    darkMode.value = !darkMode.value
  }

  return {
    darkMode,
    toggleTheme
  }
})