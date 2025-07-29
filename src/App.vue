<template>
  <div id="app">
    <router-view />
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
</style>
