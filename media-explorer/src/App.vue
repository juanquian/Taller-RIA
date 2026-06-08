<script setup>
import AppHeader from './components/AppHeader.vue'
import { useThemeStore } from './stores/themeStore'

const themeStore = useThemeStore()
</script>

<template>
  <div
    :class="{
      'theme-dark': themeStore.darkMode,
      'theme-light': !themeStore.darkMode
    }"
  >
    <AppHeader />

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<style>
.app-main {
  min-height: calc(100vh - 56px);
}

.theme-dark {
  background-color: #121212;
  color: #e0e0e0;
  min-height: 100vh;
}

.theme-light {
  background-color: #f5f5f5;
  color: #222;
  min-height: 100vh;
}
</style>