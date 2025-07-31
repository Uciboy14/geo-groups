<template>
  <div id="app">
    <transition name="page-fade-slide" mode="out-in">
      <router-view />
    </transition>
    <CookieConsent />
  </div>
</template>

<script setup lang="ts">
// Main app component
import CookieConsent from './components/CookieConsent.vue'
</script>

<style>
#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

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
</style>
