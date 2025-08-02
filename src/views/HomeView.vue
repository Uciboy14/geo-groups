<template>
  <div class="home">
    <AppLayout>
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-background"></div>
        <div class="hero-content">
          <h1 class="hero-title">
            Welcome to <span class="highlight">Geo Groups</span>
          </h1>
          <p class="hero-subtitle">
            Your comprehensive solution for property management, recycling services, and sustainable transport
          </p>
          <div class="hero-buttons">
            <router-link to="/geo-recycling" class="primary-button" :class="{ bounceUp: bounceA }">
              Start Recycling
            </router-link>
            <router-link to="/geo-property" class="secondary-button" :class="{ bounceUp: bounceB }">
              Explore Properties
            </router-link>
          </div>
        </div>
      </div>

      <!-- Services Overview Section -->
      <section class="services-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Our Services</h2>
            <p class="section-subtitle">
              Comprehensive solutions for sustainable business operations
            </p>
          </div>
          <div class="services-grid">
            <div
              v-for="(service, idx) in [
                { icon: '🏠', title: 'Geo Property', desc: 'Professional property management with sustainable development focus', link: '/geo-property' },
                { icon: '♻️', title: 'Geo Recycling', desc: 'Eco-friendly recycling solutions for businesses and communities', link: '/geo-recycling' },
                { icon: '🚚', title: 'Geo Transport', desc: 'Sustainable transportation and logistics services', link: '/geo-transport' }
              ]"
              :key="service.title"
              class="service-card"
              :class="{ 'service-animate': servicesVisible, [`service-delay-${idx}`]: servicesVisible }"
            >
              <div class="service-icon">{{ service.icon }}</div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.desc }}</p>
              <router-link :to="service.link" class="service-link">Learn More →</router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section class="about-section">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2>About Geo Groups</h2>
              <p class="about-description">
                We are a forward-thinking company dedicated to sustainable business practices.
                Our integrated approach combines property management, recycling services, and
                sustainable transport to create comprehensive solutions for modern businesses.
              </p>
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-number">{{ aboutVisible ? stat1 + '+' : '0+' }}</div>
                  <div class="stat-label">Properties Managed</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">{{ aboutVisible ? (stat2 >= 10000 ? (stat2/1000).toFixed(0) + 'K+' : stat2 + '+') : '0+' }}</div>
                  <div class="stat-label">Tons Recycled</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">{{ aboutVisible ? stat3 + '%' : '0%' }}</div>
                  <div class="stat-label">Sustainable</div>
                </div>
              </div>
            </div>
            <div class="about-image" :class="{ 'about-img-animate': aboutVisible }">
              <img src="@/assets/recycle1.jpg" alt="Sustainable Business Solutions" class="about-img" />
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Why Choose Geo Groups?</h2>
            <p class="section-subtitle">
              We combine innovation with sustainability to deliver exceptional results
            </p>
          </div>
          <div class="features-grid">
            <div class="feature-item">
              <div class="feature-icon">🌍</div>
              <h3>Environmental Focus</h3>
              <p>All our services prioritize environmental sustainability and green practices</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">⚡</div>
              <h3>Innovation Driven</h3>
              <p>Cutting-edge technology and modern solutions for optimal efficiency</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🤝</div>
              <h3>Expert Team</h3>
              <p>Experienced professionals dedicated to delivering quality service</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">📈</div>
              <h3>Proven Results</h3>
              <p>Track record of successful projects and satisfied clients</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Electronics Recycling Section -->
      <section class="electronics-recycling-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Comprehensive Electronics Recycling</h2>
            <p class="section-subtitle">
              Transform your electronic waste into environmental solutions. We specialize in safe, secure, and sustainable recycling of all types of electronic devices and components.
            </p>
          </div>

          <!-- Recycling Categories -->
          <div class="recycling-categories">
            <div class="category-card">
              <div class="category-icon">📱</div>
              <h3>Mobile Devices</h3>
              <ul>
                <li>Smartphones & Tablets</li>
                <li>Phone Panels & Screens</li>
                <li>Batteries & Chargers</li>
                <li>Accessories & Cables</li>
              </ul>
              <div class="category-stats">
                <span class="stat">98% Recovery Rate</span>
                <span class="stat">Zero Landfill</span>
              </div>
            </div>

            <div class="category-card">
              <div class="category-icon">💻</div>
              <h3>Computers & Laptops</h3>
              <ul>
                <li>Desktop & Laptop Computers</li>
                <li>Circuit Boards & Processors</li>
                <li>Hard Drives & Memory</li>
                <li>Peripherals & Monitors</li>
              </ul>
              <div class="category-stats">
                <span class="stat">95% Material Recovery</span>
                <span class="stat">Secure Data Destruction</span>
              </div>
            </div>

            <div class="category-card">
              <div class="category-icon">🔌</div>
              <h3>Electronic Components</h3>
              <ul>
                <li>Circuit Boards & Chips</li>
                <li>Wiring & Connectors</li>
                <li>Power Supplies</li>
                <li>Electronic Sensors</li>
              </ul>
              <div class="category-stats">
                <span class="stat">99% Component Recovery</span>
                <span class="stat">Precious Metal Extraction</span>
              </div>
            </div>
          </div>

          <!-- Recycling Process -->
          <div class="recycling-process">
            <h3 class="process-title">Our Recycling Process</h3>
            <div class="process-steps">
              <div class="process-step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>Collection & Assessment</h4>
                  <p>Secure pickup and thorough assessment of electronic waste for optimal processing</p>
                </div>
              </div>

              <div class="process-step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>Data Security</h4>
                  <p>Complete data destruction and secure handling of sensitive information</p>
                </div>
              </div>

              <div class="process-step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>Dismantling</h4>
                  <p>Careful disassembly to separate components for specialized recycling</p>
                </div>
              </div>

              <div class="process-step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h4>Material Recovery</h4>
                  <p>Extraction of valuable materials including precious metals and rare earth elements</p>
                </div>
              </div>

              <div class="process-step">
                <div class="step-number">5</div>
                <div class="step-content">
                  <h4>Certification</h4>
                  <p>Complete documentation and certification of environmentally responsible disposal</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Environmental Impact -->
          <div class="environmental-impact">
            <h3 class="impact-title">Environmental Impact</h3>
            <div class="impact-grid">
              <div class="impact-item">
                <div class="impact-icon">🌱</div>
                <h4>Carbon Footprint Reduction</h4>
                <p>Prevents harmful emissions from improper disposal and reduces mining demand</p>
              </div>

              <div class="impact-item">
                <div class="impact-icon">💧</div>
                <h4>Water Protection</h4>
                <p>Prevents toxic chemicals from leaching into groundwater and water systems</p>
              </div>

              <div class="impact-item">
                <div class="impact-icon">🏭</div>
                <h4>Resource Conservation</h4>
                <p>Recovers valuable materials reducing the need for new resource extraction</p>
              </div>

              <div class="impact-item">
                <div class="impact-icon">🔄</div>
                <h4>Circular Economy</h4>
                <p>Supports sustainable business practices and closed-loop material systems</p>
              </div>
            </div>
          </div>

          <!-- Call to Action for Recycling -->
          <div class="recycling-cta">
            <div class="cta-content">
              <h3>Ready to Recycle Responsibly?</h3>
              <p>Join thousands of businesses and individuals who trust us with their electronic waste</p>
              <div class="cta-buttons">
                <router-link to="/geo-recycling" class="recycling-btn primary">Start Recycling Today</router-link>
                <router-link to="/contact" class="recycling-btn secondary">Get Free Quote</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="testimonials-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">What Our Clients Say</h2>
            <p class="section-subtitle">
              Trusted by businesses across the industry
            </p>
          </div>
          <div class="testimonials-grid">
            <div
              v-for="(testimonial, idx) in [
                { text: 'Geo Groups transformed our property management with their sustainable approach. Highly recommended!', name: 'Sarah Johnson', role: 'Property Manager, Green Estates', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
                { text: 'Their recycling solutions helped us achieve our sustainability goals while reducing costs.', name: 'Michael Chen', role: 'Operations Director, EcoCorp', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
                { text: 'Professional, reliable, and environmentally conscious. Exactly what we needed for our transport needs.', name: 'Emma Rodriguez', role: 'Logistics Manager, SustainLog', img: 'https://randomuser.me/api/portraits/women/65.jpg' }
              ]"
              :key="testimonial.name"
              class="testimonial-card"
              :class="{ 'testimonial-animate': testimonialsVisible, [`testimonial-delay-${idx}`]: testimonialsVisible }"
            >
              <div class="testimonial-content">
                <p>"{{ testimonial.text }}"</p>
              </div>
              <div class="testimonial-author">
                <img class="testimonial-img" :src="testimonial.img" :alt="testimonial.name" />
                <div class="author-info">
                  <h4>{{ testimonial.name }}</h4>
                  <span>{{ testimonial.role }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join hundreds of businesses already working with Geo Groups</p>
            <div class="cta-buttons">
              <router-link to="/contact" class="cta-primary">Contact Us</router-link>
              <router-link to="/about" class="cta-secondary">Learn More</router-link>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  </div>
</template>

<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const bounceA = ref(true)
const bounceB = ref(true)
let bounceInterval: ReturnType<typeof setInterval> | undefined
let bounceCount = 0
const maxBounces = 6 // 6 cycles (about 3 seconds)

const alternateBounce = () => {
  bounceA.value = !bounceA.value
  bounceB.value = !bounceB.value
  bounceCount++
  if (bounceCount >= maxBounces) {
    bounceA.value = false
    bounceB.value = false
    clearInterval(bounceInterval)
    window.removeEventListener('scroll', stopBounce)
  }
}

const stopBounce = () => {
  bounceA.value = false
  bounceB.value = false
  clearInterval(bounceInterval)
  window.removeEventListener('scroll', stopBounce)
}

// Service section animation
const servicesVisible = ref(false)

const observeServices = () => {
  const section = document.querySelector('.services-section')
  if (!section) return
  const observer = new window.IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        servicesVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  observer.observe(section)
}

// About section animation
const aboutVisible = ref(false)
const stat1 = ref(0)
const stat2 = ref(0)
const stat3 = ref(0)
const stat1Target = 500
const stat2Target = 10000
const stat3Target = 100

const animateStats = () => {
  // Animate stat1
  const duration = 2500
  const start = performance.now()
  const animate = (now: number) => {
    const progress = Math.min((now - start) / duration, 1)
    stat1.value = Math.floor(progress * stat1Target)
    stat2.value = Math.floor(progress * stat2Target)
    stat3.value = Math.floor(progress * stat3Target)
    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      stat1.value = stat1Target
      stat2.value = stat2Target
      stat3.value = stat3Target
    }
  }
  requestAnimationFrame(animate)
}

const observeAbout = () => {
  const section = document.querySelector('.about-section')
  if (!section) return
  const observer = new window.IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        aboutVisible.value = true
        animateStats()
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  observer.observe(section)
}

// Testimonials section animation
const testimonialsVisible = ref(false)

const observeTestimonials = () => {
  const section = document.querySelector('.testimonials-section')
  if (!section) return
  const observer = new window.IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        testimonialsVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  observer.observe(section)
}

onMounted(() => {
  bounceA.value = true
  bounceB.value = false
  bounceInterval = setInterval(alternateBounce, 500)
  window.addEventListener('scroll', stopBounce)
  nextTick(() => {
    observeServices()
    observeAbout()
    observeTestimonials()
  })
})

onUnmounted(() => {
  clearInterval(bounceInterval)
  window.removeEventListener('scroll', stopBounce)
})
</script>

<style scoped>
.home {
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
.hero-section {
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(240, 253, 244, 0.9) 0%, rgba(220, 252, 231, 0.9) 50%, rgba(187, 247, 208, 0.9) 100%),
              url('@/assets/recycle1.jpg') center/cover no-repeat;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content {
  text-align: center;
  max-width: 800px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.highlight {
  color: #10B981;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-button {
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

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.secondary-button {
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

.secondary-button:hover {
  background: #10B981;
  color: white;
  transform: translateY(-2px);
}

/* Services Section */
.services-section {
  padding: 5rem 0;
  background: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #f3f4f6;
  opacity: 1;
  transform: none;
}

.service-animate {
  opacity: 1;
  transform: translateY(0);
  animation: serviceFadeInUp 0.7s cubic-bezier(.4,2,.6,1) both;
}

.service-delay-0 {
  animation-delay: 0.05s;
}
.service-delay-1 {
  animation-delay: 0.25s;
}
.service-delay-2 {
  animation-delay: 0.45s;
}

@keyframes serviceFadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
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
  margin-bottom: 1.5rem;
}

.service-link {
  color: #10B981;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.service-link:hover {
  color: #059669;
}

/* About Section */
.about-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.about-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #10B981;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1);
}

.about-img {
  width: 100%;
  max-width: 520px;
  height: 340px;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.13);
}

.about-img-animate {
  opacity: 1;
  transform: translateY(0);
}

/* Features Section */
.features-section {
  padding: 5rem 0;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-item {
  text-align: center;
  padding: 2rem;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.feature-item p {
  color: #6b7280;
  line-height: 1.6;
}

/* Electronics Recycling Section */
.electronics-recycling-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.recycling-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.category-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  border: 1px solid #f3f4f6;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #10B981;
}

.category-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.category-card ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.category-card ul li {
  margin-bottom: 0.5rem;
  color: #6b7280;
  font-size: 1rem;
}

.category-stats {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.stat {
  background: #e0f2fe;
  color: #10B981;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.recycling-process {
  background: white;
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
  border: 1px solid #f3f4f6;
}

.process-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.process-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px dashed #e5e7eb;
  transition: all 0.3s ease;
}

.process-step:hover {
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0 -1rem;
}

.process-step:last-child {
  border-bottom: none;
}

.step-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #10B981;
  width: 30px;
  text-align: center;
  background: #e0f2fe;
  border-radius: 50%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-content h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.step-content p {
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.5;
}

.environmental-impact {
  background: white;
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;
  border: 1px solid #f3f4f6;
}

.impact-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.impact-item {
  text-align: center;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 0.8rem;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.impact-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.impact-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #10B981;
}

.impact-item h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.impact-item p {
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.5;
}

.recycling-cta {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  border-radius: 1rem;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #10B981;
}

.recycling-cta .cta-content {
  color: white;
}

.recycling-cta .cta-content h3 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.recycling-cta .cta-content p {
  font-size: 1.125rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.recycling-cta .cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.recycling-btn {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.recycling-btn.primary {
  background: white;
  color: #10B981;
  border: 2px solid white;
}

.recycling-btn.primary:hover {
  background: #10B981;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.recycling-btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.recycling-btn.secondary:hover {
  background: white;
  color: #10B981;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

/* Testimonials Section */
.testimonials-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  opacity: 1;
  transform: none;
}

.testimonial-animate {
  opacity: 1;
  transform: translateY(0);
  animation: testimonialFadeInUp 0.7s cubic-bezier(.4,2,.6,1) both;
}

.testimonial-delay-0 {
  animation-delay: 0.05s;
}
.testimonial-delay-1 {
  animation-delay: 0.25s;
}
.testimonial-delay-2 {
  animation-delay: 0.45s;
}

@keyframes testimonialFadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.testimonial-content p {
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(16,185,129,0.10);
}

.author-info h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.author-info span {
  font-size: 0.875rem;
  color: #6b7280;
}

/* CTA Section */
.cta-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  opacity: 0.9;
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
  background: white;
  color: #1e40af;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.cta-secondary {
  background: transparent;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid white;
  transition: all 0.2s ease;
}

.cta-secondary:hover {
  background: white;
  color: #1e40af;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
    max-width: 300px;
    text-align: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .services-grid,
  .features-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .recycling-categories {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .recycling-process {
    padding: 2rem;
  }

  .process-steps {
    flex-direction: column;
    gap: 1rem;
  }

  .impact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
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
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }
}

@keyframes bounceUp {
  0%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-16px);
  }
  60% {
    transform: translateY(0);
  }
}

@keyframes bounceDown {
  0%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(16px);
  }
  60% {
    transform: translateY(0);
  }
}

.bounceUp {
  animation: bounceUp 0.5s cubic-bezier(.4,2,.6,1);
}
.bounceDown {
  animation: bounceDown 0.5s cubic-bezier(.4,2,.6,1);
}
</style>
