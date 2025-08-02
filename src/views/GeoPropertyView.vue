<template>
  <div class="geo-property">
    <AppLayout>
      <div class="property-hero">
        <div class="hero-background"></div>
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
  color: white;
  padding: 4rem 0;
  text-align: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(29, 78, 216, 0.8) 0%, rgba(30, 64, 175, 0.8) 100%),
    url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop')
      center/cover no-repeat;
  z-index: 1;
}

.property-hero .container {
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
