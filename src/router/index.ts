import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GeoPropertyView from '../views/GeoPropertyView.vue'
import GeoRecyclingView from '../views/GeoRecyclingView.vue'
import GeoTransportView from '../views/GeoTransportView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/geo-property',
      name: 'geo-property',
      component: GeoPropertyView,
    },
    {
      path: '/geo-recycling',
      name: 'geo-recycling',
      component: GeoRecyclingView,
    },
    {
      path: '/geo-transport',
      name: 'geo-transport',
      component: GeoTransportView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
