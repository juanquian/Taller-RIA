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
  <div class="search-wrapper">
    <div class="search-bar">
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
      class="suggestions"
    >
      <div
        v-for="item in getSearchHistory()"
        :key="item"
        class="suggestion-item"
        @mousedown.prevent="selectSuggestion(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.search-bar-container {
  position: relative;
}

.search-bar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.search-bar__input {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #2a2a2a;
  color: #e0e0e0;
  font-size: 0.95rem;
  font-family: inherit;
}

.search-bar__input:focus {
  outline: none;
  border-color: #4f6ef7;
}

.search-bar__btn {
  padding: 0.5rem 1rem;
  background-color: #4f6ef7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95rem;
  font-family: inherit;
}

.search-bar__btn:hover {
  background-color: #3a57d4;
}

.search-wrapper {
  position: relative;
}

.suggestions {
  position: absolute;
  width: 100%;
  background: #2a2a2a;
  border: 1px solid #444;
  border-radius: 4px;
  margin-top: 4px;
  z-index: 100;
}

.suggestion-item {
  padding: 0.75rem;
  cursor: pointer;
}

.suggestion-item:hover {
  background: #3a3a3a;
}
</style>