<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <Loader v-if="isRouteLoading" />
      <div v-else>
        <transition name="page-fade-slide" mode="out-in">
          <router-view />
        </transition>
        <CookieConsent />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Loader from './components/Loader.vue'
import CookieConsent from './components/CookieConsent.vue'

const isRouteLoading = ref(false)
const router = useRouter()

router.beforeEach((_to, _from, next) => {
  isRouteLoading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    isRouteLoading.value = false
  }, 1200) // increased delay for better UX
})
</script>

<style>
#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* Existing page transition */
.page-fade-slide-enter-active, .page-fade-slide-leave-active {
  transition: opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1);
}
.page-fade-slide-enter-from, .page-fade-slide-leave-to {
  opacity: 0;
  transform: translateY(32px);
}
.page-fade-slide-enter-to, .page-fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Loader fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
