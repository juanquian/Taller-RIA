<script setup>
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <main class="app-main">
    <RouterView />
  </main>
</template>

<style>
.app-main {
  min-height: calc(100vh - 56px);
}
</style>

