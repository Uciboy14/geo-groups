<template>
  <div class="app-layout">
    <ParticleBackground />
    <Navbar />
    <main class="main-content">
      <slot />
    </main>
    <Footer />
    <FloatingActionButton />
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import FloatingActionButton from './FloatingActionButton.vue'
import ParticleBackground from './ParticleBackground.vue'
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 70px; /* Account for fixed navbar */
}
</style>
