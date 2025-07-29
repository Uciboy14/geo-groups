<template>
  <div class="about">
    <AppLayout>
      <!-- Hero Section -->
      <div class="about-hero">
        <div class="container">
          <h1 class="page-title">About Geo Groups</h1>
          <p class="page-subtitle">
            Leading sustainable business solutions for a greener future
          </p>
        </div>
      </div>

      <!-- Mission Section -->
      <section class="mission-section">
        <div class="container">
          <div class="mission-content">
            <div class="mission-text">
              <h2>Our Mission</h2>
              <p class="mission-description">
                At Geo Groups, we believe that sustainable business practices are not just good for the environment—they're essential for long-term success. Our mission is to provide comprehensive, eco-friendly solutions that help businesses thrive while protecting our planet.
              </p>
              <p class="mission-description">
                We combine innovation with environmental responsibility to create solutions that benefit both our clients and the world we share.
              </p>
            </div>
            <div class="mission-image">
              <div class="image-placeholder">
                <span>🌱</span>
                <p>Sustainable Business Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Our Values</h2>
            <p class="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">🌍</div>
              <h3>Sustainability</h3>
              <p>Environmental responsibility is at the core of every decision we make and every solution we provide.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h3>Partnership</h3>
              <p>We work closely with our clients to understand their needs and deliver tailored solutions.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">⚡</div>
              <h3>Innovation</h3>
              <p>We continuously explore new technologies and methods to improve our services and reduce environmental impact.</p>
            </div>
            <div class="value-card">
              <div class="value-icon">📈</div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards of quality and professionalism in all our operations.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Our Leadership Team</h2>
            <p class="section-subtitle">
              Experienced professionals dedicated to sustainable business solutions
            </p>
          </div>
          <div class="team-grid">
            <div class="team-member">
              <div class="member-avatar">
                <span>👨‍💼</span>
              </div>
              <h3>David Thompson</h3>
              <p class="member-title">Chief Executive Officer</p>
              <p class="member-bio">20+ years of experience in sustainable business development and environmental management.</p>
            </div>
            <div class="team-member">
              <div class="member-avatar">
                <span>👩‍💼</span>
              </div>
              <h3>Sarah Chen</h3>
              <p class="member-title">Chief Operations Officer</p>
              <p class="member-bio">Expert in operational efficiency and sustainable supply chain management.</p>
            </div>
            <div class="team-member">
              <div class="member-avatar">
                <span>👨‍🔬</span>
              </div>
              <h3>Dr. Michael Rodriguez</h3>
              <p class="member-title">Head of Sustainability</p>
              <p class="member-bio">PhD in Environmental Science with 15 years of research and implementation experience.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats-section">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">Years of Experience</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">Properties Managed</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10K+</div>
              <div class="stat-label">Tons Recycled</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">Sustainable Practices</div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="about-cta">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to Work Together?</h2>
            <p>Join us in creating a more sustainable future for your business</p>
            <div class="cta-buttons">
              <router-link to="/contact" class="cta-primary">Get Started</router-link>
              <router-link to="/geo-property" class="cta-secondary">Our Services</router-link>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  </div>
</template>

<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue'

// Define component name
defineOptions({
  name: 'AboutView'
})
</script>

<style scoped>
.about {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

/* Hero Section */
.about-hero {
  background: linear-gradient(135deg, #059669 0%, #10B981 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
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

/* Mission Section */
.mission-section {
  padding: 5rem 0;
  background: white;
}

.mission-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.mission-text h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.mission-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.mission-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  padding: 3rem;
  border-radius: 1rem;
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.image-placeholder span {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.image-placeholder p {
  font-size: 1.25rem;
  font-weight: 600;
}

/* Values Section */
.values-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.value-card p {
  color: #6b7280;
  line-height: 1.6;
}

/* Team Section */
.team-section {
  padding: 5rem 0;
  background: white;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.team-member {
  text-align: center;
  padding: 2rem;
}

.member-avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
}

.team-member h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.member-title {
  color: #10B981;
  font-weight: 600;
  margin-bottom: 1rem;
}

.member-bio {
  color: #6b7280;
  line-height: 1.6;
}

/* Stats Section */
.stats-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
}

/* CTA Section */
.about-cta {
  padding: 5rem 0;
  background: #f8fafc;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-primary {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.cta-secondary {
  background: white;
  color: #10B981;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid #10B981;
  transition: all 0.2s ease;
}

.cta-secondary:hover {
  background: #10B981;
  color: white;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .mission-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .values-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-primary,
  .cta-secondary {
    width: 100%;
    max-width: 300px;
    text-align: center;
  }

  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
