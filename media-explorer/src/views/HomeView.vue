<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="home-view">
    <div class="container">
      <h1>Anime Explorer</h1>
      <p class="home-view__desc">
        Aplicación web desarrollada como trabajo práctico para el
        <strong>Taller de RIA 2026</strong>.<br />
        Primera versión funcional: buscá anime, guardá favoritos y navegá entre vistas.
      </p>
      <div class="home-view__actions">
        <button class="btn" @click="router.push('/explorar')">Ir a Explorar</button>
        <button class="btn btn--outline" @click="router.push('/favoritos')">Ver Favoritos</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* BEM: home-view */
.home-view {
  padding: 3rem 1rem;
}

.home-view__desc {
  margin: 1rem 0 2rem;
  color: #aaa;
  line-height: 1.7;
  max-width: 600px;
}

.home-view__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>

