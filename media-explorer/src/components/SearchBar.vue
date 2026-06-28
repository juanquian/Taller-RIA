<script setup>
import { ref } from 'vue'
import { useSessionSearch } from '../composables/useSessionSearch'

const emit = defineEmits(['search'])

const query = ref('')
const showSuggestions = ref(false)

const { saveSearch, getSearchHistory } = useSessionSearch()

function handleSearch() {
  const text = query.value.trim()

  if (!text) return

  saveSearch(text)
  emit('search', text)

  showSuggestions.value = false
}

function handleFocus() {
  showSuggestions.value = true
}

function selectSuggestion(search) {
  query.value = search

  // Buscar automáticamente
  emit('search', search)

  showSuggestions.value = false
}
</script>

<template>
  <div class="search-bar">
    <div class="search-bar__controls">
      <input
        v-model="query"
        type="text"
        class="search-bar__input"
        placeholder="Buscar anime..."
        @keyup.enter="handleSearch"
        @focus="handleFocus"
      />

      <button class="search-bar__btn" @click="handleSearch">
        Buscar
      </button>
    </div>

    <div
      v-if="showSuggestions && getSearchHistory().length"
      class="search-bar__suggestions"
    >
      <div
        v-for="item in getSearchHistory()"
        :key="item"
        class="search-bar__suggestion"
        @mousedown.prevent="selectSuggestion(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<style scoped src="./SearchBar.css"></style>
