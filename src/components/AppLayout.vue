<template>
  <div class="app-layout">
    <ParticleBackground />
    <Navbar />
    <main class="main-content">
      <slot />
    </main>
    <Footer />
    <!--- -<FloatingActionButton /> -->
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
//import FloatingActionButton from './FloatingActionButton.vue'
import ParticleBackground from './ParticleBackground.vue'
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-light);
  color: var(--color-text-light);
  padding-top: 0; /* Remove padding - let hero sections handle positioning */
}
.dark .app-layout {
  background: var(--color-bg-dark);
  color: var(--color-text-dark);
}

.main-content {
  flex: 1;
  padding-top: 128px; /* Remove padding - navbar is fixed */
  background: transparent;
}
.dark .main-content {
  background: transparent;
}

/* Responsive Design */
@media (max-width: 768px) {
  .app-layout {
    padding-top: 0; /* Remove padding */
  }
}
</style>
