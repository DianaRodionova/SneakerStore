import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Favorites from '../pages/Favorites.vue';
import Profile from '../pages/Profile.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
  ]
})

export default router
