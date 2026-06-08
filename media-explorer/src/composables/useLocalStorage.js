import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
  const storedValue = localStorage.getItem(key)

  const state = ref(
    storedValue
      ? JSON.parse(storedValue)
      : defaultValue
  )

  watch(
    state,
    (newValue) => {
      localStorage.setItem(
        key,
        JSON.stringify(newValue)
      )
    },
    { deep: true }
  )

  return state
}