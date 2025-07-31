<template>
  <div class="geo-property">
    <AppLayout>
      <div class="property-hero">
        <div class="container">
          <h1 class="page-title">Geo Property</h1>
          <p class="page-subtitle">
            Comprehensive property management solutions for sustainable real estate
          </p>
        </div>
      </div>

      <div class="property-content">
        <div class="container">
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🏢</div>
              <h3>Property Management</h3>
              <p>Professional management services for residential and commercial properties</p>
            </div>

            <div class="service-card">
              <div class="service-icon">📊</div>
              <h3>Investment Analysis</h3>
              <p>Data-driven insights for property investment decisions</p>
            </div>

            <div class="service-card">
              <div class="service-icon">🌱</div>
              <h3>Sustainable Development</h3>
              <p>Green building solutions and eco-friendly property development</p>
            </div>

            <div class="service-card">
              <div class="service-icon">📋</div>
              <h3>Maintenance Services</h3>
              <p>Regular maintenance and repair services for all property types</p>
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
.geo-property {
  min-height: 100vh;
}

.property-hero {
  position: relative;
  background: url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
  color: white;
  padding: 4rem 0;
  text-align: center;
}
.property-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(30,64,175,0.85) 0%, rgba(59,130,246,0.55) 100%);
  z-index: 0;
  pointer-events: none;
}
.property-hero .container {
  position: relative;
  z-index: 1;
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

.property-content {
  padding: 4rem 0;
  background: #f8fafc;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
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
}
</style>
