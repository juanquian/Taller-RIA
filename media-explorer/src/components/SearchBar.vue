<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])
const query = ref('')

function handleSearch() {
  if (query.value.trim()) {
    emit('search', query.value.trim())
  }
}
</script>

<template>
  <div class="search-bar">
    <input
      v-model="query"
      type="text"
      class="search-bar__input"
      placeholder="Buscar anime... (ej: Naruto, Bleach, One Piece)"
      @keyup.enter="handleSearch"
    />
    <button class="search-bar__btn" @click="handleSearch">Buscar</button>
  </div>
</template>

<style scoped>
/* BEM: search-bar */
.search-bar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
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
</style>
