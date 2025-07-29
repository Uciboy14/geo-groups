<template>
  <div class="geo-transport">
    <AppLayout>
      <div class="transport-hero">
        <div class="container">
          <h1 class="page-title">Geo Transport</h1>
          <p class="page-subtitle">
            Sustainable transportation solutions for efficient and eco-friendly logistics
          </p>
        </div>
      </div>

      <div class="transport-content">
        <div class="container">
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🚚</div>
              <h3>Fleet Management</h3>
              <p>Comprehensive fleet management with real-time tracking and optimization</p>
            </div>

            <div class="service-card">
              <div class="service-icon">⚡</div>
              <h3>Electric Vehicles</h3>
              <p>Zero-emission transport solutions with electric and hybrid vehicles</p>
            </div>

            <div class="service-card">
              <div class="service-icon">🛣️</div>
              <h3>Route Optimization</h3>
              <p>AI-powered route planning for maximum efficiency and fuel savings</p>
            </div>

            <div class="service-card">
              <div class="service-icon">📦</div>
              <h3>Logistics Solutions</h3>
              <p>End-to-end logistics services for businesses and individuals</p>
            </div>
          </div>

          <div class="features-section">
            <h2>Why Choose Geo Transport?</h2>
            <div class="features-grid">
              <div class="feature">
                <div class="feature-icon">🌱</div>
                <h4>Eco-Friendly</h4>
                <p>Reduced carbon footprint with sustainable transport options</p>
              </div>
              <div class="feature">
                <div class="feature-icon">💰</div>
                <h4>Cost Effective</h4>
                <p>Optimized routes and fuel-efficient vehicles save you money</p>
              </div>
              <div class="feature">
                <div class="feature-icon">⏰</div>
                <h4>Reliable</h4>
                <p>On-time delivery with real-time tracking and updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue'
</script>

<style scoped>
.geo-transport {
  min-height: 100vh;
}

.transport-hero {
  background: linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
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

.transport-content {
  padding: 4rem 0;
  background: #faf5ff;
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
  border: 1px solid rgba(124, 58, 237, 0.1);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(124, 58, 237, 0.15);
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

.features-section {
  text-align: center;
  margin-top: 4rem;
}

.features-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
}

.feature:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.feature p {
  color: #6b7280;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
  }

  .services-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }

  .features-section h2 {
    font-size: 2rem;
  }
}
</style>
