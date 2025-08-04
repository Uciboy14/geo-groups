<template>
  <div class="about">
    <AppLayout>
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="hero-bg">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" alt="About Hero Background" />
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content" :class="{ 'hero-animate': heroVisible }">
          <div class="hero-badge">About Us</div>
          <h1 class="hero-title">About Geo Groups</h1>
          <p class="hero-subtitle">
            Leading sustainable business solutions for a greener future.<br>
            We combine innovation with environmental responsibility to create lasting impact.
          </p>
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="stat-number">10+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="hero-stat">
              <div class="stat-number">500+</div>
              <div class="stat-label">Properties Managed</div>
            </div>
            <div class="hero-stat">
              <div class="stat-number">100%</div>
              <div class="stat-label">Sustainable</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="mission-section">
        <div class="mission-bg-pattern"></div>
        <div class="container">
          <div class="mission-content" :class="{ 'mission-animate': missionVisible }">
            <div class="mission-text">
              <div class="mission-badge">Our Mission</div>
              <h2 class="mission-title">Driving Sustainable Business Solutions</h2>
              <p class="mission-description">
                At Geo Groups, we believe that sustainable business practices are not just good for the environment—they're essential for long-term success. Our mission is to provide comprehensive, eco-friendly solutions that help businesses thrive while protecting our planet.
              </p>
              <p class="mission-description">
                We combine innovation with environmental responsibility to create solutions that benefit both our clients and the world we share.
              </p>
              <div class="mission-features">
                <div class="feature-item">
                  <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                  </div>
                  <span>Environmental Responsibility</span>
                </div>
                <div class="feature-item">
                  <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                  </div>
                  <span>Innovation & Technology</span>
                </div>
                <div class="feature-item">
                  <div class="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                  </div>
                  <span>Long-term Success</span>
                </div>
              </div>
            </div>
            <div class="mission-image" :class="{ 'mission-img-animate': missionVisible }">
              <img src="@/assets/recycling-process.jpg" alt="Sustainable Business Solutions" class="mission-img" />
              <div class="mission-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="values-section">
        <div class="values-bg-pattern"></div>
        <div class="container">
          <div class="values-header" :class="{ 'values-header-animate': valuesVisible }">
            <div class="values-badge">Our Values</div>
            <h2 class="values-title">The Principles That Guide Everything We Do</h2>
            <p class="values-subtitle">
              Core values that drive our commitment to sustainability and excellence
            </p>
          </div>
          <div class="values-grid">
            <div class="value-card" :class="{ 'value-animate': valuesVisible, 'value-delay-0': valuesVisible }">
              <div class="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Sustainability</h3>
              <p>Environmental responsibility is at the core of every decision we make and every solution we provide.</p>
            </div>
            <div class="value-card" :class="{ 'value-animate': valuesVisible, 'value-delay-1': valuesVisible }">
              <div class="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Partnership</h3>
              <p>We work closely with our clients to understand their needs and deliver tailored solutions.</p>
            </div>
            <div class="value-card" :class="{ 'value-animate': valuesVisible, 'value-delay-2': valuesVisible }">
              <div class="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>We continuously explore new technologies and methods to improve our services and reduce environmental impact.</p>
            </div>
            <div class="value-card" :class="{ 'value-animate': valuesVisible, 'value-delay-3': valuesVisible }">
              <div class="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards of quality and professionalism in all our operations.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section">
        <div class="team-bg-pattern"></div>
        <div class="container">
          <div class="team-header" :class="{ 'team-header-animate': teamVisible }">
            <div class="team-badge">Leadership Team</div>
            <h2 class="team-title">Meet Our Expert Leadership</h2>
            <p class="team-subtitle">
              Experienced professionals dedicated to sustainable business solutions
            </p>
          </div>
          <div class="team-grid">
            <div class="team-member" :class="{ 'team-animate': teamVisible, 'team-delay-0': teamVisible }">
              <div class="member-avatar">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="David Thompson" />
                <div class="member-overlay"></div>
              </div>
              <h3>David Thompson</h3>
              <p class="member-title">Chief Executive Officer</p>
              <p class="member-bio">20+ years of experience in sustainable business development and environmental management.</p>
              <div class="member-social">
                <a href="#" class="social-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
            <div class="team-member" :class="{ 'team-animate': teamVisible, 'team-delay-1': teamVisible }">
              <div class="member-avatar">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Chen" />
                <div class="member-overlay"></div>
              </div>
              <h3>Sarah Chen</h3>
              <p class="member-title">Chief Operations Officer</p>
              <p class="member-bio">Expert in operational efficiency and sustainable supply chain management.</p>
              <div class="member-social">
                <a href="#" class="social-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
            <div class="team-member" :class="{ 'team-animate': teamVisible, 'team-delay-2': teamVisible }">
              <div class="member-avatar">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Dr. Michael Rodriguez" />
                <div class="member-overlay"></div>
              </div>
              <h3>Dr. Michael Rodriguez</h3>
              <p class="member-title">Head of Sustainability</p>
              <p class="member-bio">PhD in Environmental Science with 15 years of research and implementation experience.</p>
              <div class="member-social">
                <a href="#" class="social-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
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
import { ref, onMounted, nextTick } from 'vue'

// Define component name
defineOptions({
  name: 'AboutView'
})

// Hero section animation
const heroVisible = ref(false)

const observeHero = () => {
  const section = document.querySelector('.about-hero')
  if (!section) return
  const observer = new window.IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        heroVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  observer.observe(section)
}

// Mission section animation
const missionVisible = ref(false)

const observeMission = () => {
  const section = document.querySelector('.mission-section')
  if (!section) return
  const observer = new window.IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        missionVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  observer.observe(section)
}

// Values section animation
const valuesVisible = ref(false)

const observeValues = () => {
  const section = document.querySelector('.values-section')
  if (!section) return
  const observer = new window.IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        valuesVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  observer.observe(section)
}

// Team section animation
const teamVisible = ref(false)

const observeTeam = () => {
  const section = document.querySelector('.team-section')
  if (!section) return
  const observer = new window.IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        teamVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  observer.observe(section)
}

onMounted(() => {
  nextTick(() => {
    observeHero()
    observeMission()
    observeValues()
    observeTeam()
  })
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
  position: relative;
  min-height: calc(100vh - 118px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  color: white;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.7) blur(0px);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(34,34,34,0.6) 0%, rgba(34,34,34,0.4) 60%, rgba(34,34,34,0.8) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-animate {
  opacity: 1;
  transform: translateY(0);
}

.hero-badge {
  display: inline-block;
  background: rgba(105, 179, 29, 0.9);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: heroBadgePulse 2s ease-in-out infinite;
}

@keyframes heroBadgePulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(105, 179, 29, 0.4);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(105, 179, 29, 0);
  }
}

.hero-title {
  font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-family: 'Inter', 'Roboto', Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 3rem;
  color: #e5e7eb;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.hero-stat {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  min-width: 120px;
}

.hero-stat:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.hero-stat .stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.hero-stat .stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Mission Section */
.mission-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;
}

.mission-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(105, 179, 29, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(5, 150, 105, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.mission-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.mission-animate {
  opacity: 1;
  transform: translateY(0);
}

.mission-badge {
  display: inline-block;
  background: #69B31D;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.mission-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.mission-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.mission-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
}

.feature-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: #69B31D;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.feature-item span {
  color: #374151;
  font-size: 0.95rem;
  font-weight: 500;
}

.mission-image {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1);
  position: relative;
  z-index: 2;
}

.mission-img {
  width: 100%;
  max-width: 520px;
  height: 340px;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(105, 179, 29, 0.1);
  transition: all 0.3s ease;
}

.mission-img:hover {
  transform: scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.mission-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(105, 179, 29, 0.1) 0%, transparent 100%);
  border-radius: 1.5rem;
  pointer-events: none;
}

.mission-img-animate {
  opacity: 1;
  transform: translateY(0);
}

/* Values Section */
.values-section {
  padding: 6rem 0;
  background: #69B31D;
  position: relative;
  overflow: hidden;
}

.values-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 60% 60%, rgba(105, 179, 29, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.values-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.values-header-animate {
  opacity: 1;
  transform: translateY(0);
}

.values-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.values-title {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.values-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 2;
}

.value-card {
  background: rgba(255, 255, 255, 0.12);
  padding: 2.5rem 2rem;
  border-radius: 1.5rem;
  text-align: center;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(40px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.value-animate {
  opacity: 1;
  transform: translateY(0);
  animation: valueFadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.value-delay-0 { animation-delay: 0.1s; }
.value-delay-1 { animation-delay: 0.3s; }
.value-delay-2 { animation-delay: 0.5s; }
.value-delay-3 { animation-delay: 0.7s; }

@keyframes valueFadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.35);
}

.value-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.value-card:hover .value-icon {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.value-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.value-card p {
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Team Section */
.team-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;
}

.team-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(105, 179, 29, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(5, 150, 105, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.team-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.team-header-animate {
  opacity: 1;
  transform: translateY(0);
}

.team-badge {
  display: inline-block;
  background: #69B31D;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.team-title {
  font-size: 3rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.team-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  position: relative;
  z-index: 2;
}

.team-member {
  text-align: center;
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(105, 179, 29, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(40px);
}

.team-animate {
  opacity: 1;
  transform: translateY(0);
  animation: teamFadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.team-delay-0 { animation-delay: 0.1s; }
.team-delay-1 { animation-delay: 0.3s; }
.team-delay-2 { animation-delay: 0.5s; }

@keyframes teamFadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.team-member:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(105, 179, 29, 0.2);
}

.member-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  position: relative;
  overflow: hidden;
  border: 3px solid #69B31D;
  box-shadow: 0 8px 24px rgba(105, 179, 29, 0.2);
  transition: all 0.3s ease;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-member:hover .member-avatar img {
  transform: scale(1.1);
}

.member-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(105, 179, 29, 0.2) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-member:hover .member-overlay {
  opacity: 1;
}

.team-member h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.member-title {
  color: #69B31D;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.member-bio {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.member-social {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(105, 179, 29, 0.1);
  border-radius: 50%;
  color: #69B31D;
  transition: all 0.3s ease;
  border: 1px solid rgba(105, 179, 29, 0.2);
}

.social-link:hover {
  background: #69B31D;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(105, 179, 29, 0.3);
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
