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
}
.dark .app-layout {
  background: var(--color-bg-dark);
  color: var(--color-text-dark);
}

.main-content {
  flex: 1;
  padding-top: 126px; /* Account for full navbar height: top bar (48px) + main navbar (70px) */
  background: transparent;
}
.dark .main-content {
  background: transparent;
}

/* Global fix for all pages with hero sections */
.page-hero {
  margin-top: 0; /* Remove the margin since we're using padding-top on main-content */
}

@media (max-width: 768px) {
  .main-content {
    padding-top: 160px; /* Mobile: top bar (90px) + main navbar (70px) */
  }

  .page-hero {
    margin-top: 0;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding-top: 200px; /* Small mobile: top bar (130px) + main navbar (70px) */
  }

  .page-hero {
    margin-top: 0;
  }
}
</style>
