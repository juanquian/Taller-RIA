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

<style src="./app.css"></style>
