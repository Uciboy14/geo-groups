<template>
  <div class="geo-recycling">
    <AppLayout>
      <div class="recycling-hero">
        <div class="hero-background"></div>
        <div class="container">
          <h1 class="page-title">Geo Recycling</h1>
          <p class="page-subtitle">
            Sustainable electronics waste management and recycling solutions for a greener future. Specializing in phone panels, circuit boards, and electronic devices.
          </p>
        </div>
      </div>

      <div class="recycling-content">
        <div class="container">
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">📱</div>
              <h3>Electronics Collection</h3>
              <p>Pickup services for old phones, panels, circuit boards, and other e-waste from homes and businesses</p>
            </div>

            <div class="service-card">
              <div class="service-icon">🔬</div>
              <h3>Safe Processing</h3>
              <p>Environmentally responsible dismantling and recycling of electronic components</p>
            </div>

            <div class="service-card">
              <div class="service-icon">📊</div>
              <h3>Impact Tracking</h3>
              <p>Monitor your environmental impact with detailed recycling reports</p>
            </div>

            <div class="service-card">
              <div class="service-icon">🌍</div>
              <h3>Eco Education</h3>
              <p>Learn about sustainable practices and recycling best practices</p>
            </div>
          </div>

          <!-- Recycling Calculator -->
          <RecyclingCalculator />

          <div class="cta-section">
            <h2>Ready to Start Recycling?</h2>
            <p>Join thousands of households making a difference</p>
            <button class="cta-button" @click="goToSchedulePickup">Schedule Pickup</button>
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue'
import RecyclingCalculator from '@/components/RecyclingCalculator.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToSchedulePickup = () => {
  router.push({ path: '/contact', query: { service: 'recycling' } })
}
</script>

<style scoped>
.geo-recycling {
  min-height: 100vh;
}

.recycling-hero {
  background: linear-gradient(135deg, rgba(5, 150, 105, 0.9) 0%, rgba(16, 185, 129, 0.9) 100%),
              url('@/assets/hero-recycling.jpg') center/cover no-repeat;
  color: white;
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(5, 150, 105, 0.8) 0%, rgba(16, 185, 129, 0.8) 100%);
  z-index: 1;
}

.recycling-hero .container {
  position: relative;
  z-index: 2;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.recycling-content {
  padding: 4rem 0;
  background: #f0fdf4;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(16, 185, 129, 0.1);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.15);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.service-card p {
  color: #6b7280;
  line-height: 1.6;
}

.cta-section {
  text-align: center;
  background: white;
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.cta-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.cta-button {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .cta-section h2 {
    font-size: 2rem;
  }
}
</style>
