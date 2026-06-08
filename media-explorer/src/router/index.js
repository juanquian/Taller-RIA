import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExploreView from '../views/ExploreView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import AboutView from '../views/AboutView.vue'
import AnimeDetailView from '../views/AnimeDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/explorar', component: ExploreView },
    { path: '/favoritos', component: FavoritesView },
    { path: '/acerca', component: AboutView },

    {
      path: '/anime/:id',
      component: AnimeDetailView,
    },
  ],
})

export default router

