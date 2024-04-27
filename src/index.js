import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FavoritesVue from '/src/views/favorites/FavoritesVue.vue'
import HomeView from '/src/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/favorites', // Define route for /favorites
    name: 'Favorites',
    component: FavoritesVue
  },
  // Add more routes here as needed
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
