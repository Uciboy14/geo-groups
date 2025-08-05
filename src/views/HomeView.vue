<template>
  <div class="home">
    <AppLayout>
      <!-- Hero Section -->
      <section class="hero-section page-hero">
        <div class="hero-bg">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80" alt="Hero Background" />
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
          <h1 class="hero-title">Geo Groups</h1>
          <p class="hero-subtitle">
            Delivering smart, sustainable solutions for property, recycling, and transport.<br>
            Keeping your business and the environment thriving every day.
          </p>
          <div class="hero-actions">
            <router-link to="/contact" class="hero-btn hero-btn-primary">Schedule Pickup</router-link>
            <router-link to="/geo-property" class="hero-btn hero-btn-secondary">View Projects</router-link>
          </div>
        </div>
      </section>

      <!-- Services Overview Section -->
      <section class="services-section">
        <div class="services-bg-pattern"></div>
        <div class="container">
          <div class="services-grid">
            <div class="service-card" :class="{ 'service-animate': servicesVisible, 'service-delay-0': servicesVisible }">
              <div class="service-image">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80" alt="Geo Property" />
                <div class="service-overlay"></div>
              </div>
              <div class="service-content">
                <h3>Geo Property</h3>
                <p>Professional property management with sustainable development focus. We help you build and manage properties that respect our environment.</p>
                <router-link to="/geo-property" class="service-link">Learn More →</router-link>
              </div>
            </div>

            <div class="service-card" :class="{ 'service-animate': servicesVisible, 'service-delay-1': servicesVisible }">
              <div class="service-image">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80" alt="Geo Recycling" />
                <div class="service-overlay"></div>
              </div>
              <div class="service-content">
                <h3>Geo Recycling</h3>
                <p>Eco-friendly recycling solutions for businesses and communities. Transform waste into valuable resources with our innovative processes.</p>
                <router-link to="/geo-recycling" class="service-link">Learn More →</router-link>
              </div>
            </div>

            <div class="service-card" :class="{ 'service-animate': servicesVisible, 'service-delay-2': servicesVisible }">
              <div class="service-image">
                <img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=400&q=80" alt="Geo Transport" />
                <div class="service-overlay"></div>
              </div>
              <div class="service-content">
                <h3>Geo Transport</h3>
                <p>Sustainable transportation and logistics services. Reduce your carbon footprint with our green transport solutions.</p>
                <router-link to="/geo-transport" class="service-link">Learn More →</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section class="about-section">
        <div class="container">
          <div class="testimonials-header">
            <div class="testimonials-badge">About Us</div>
            <h2 class="testimonials-title">About Geo Groups</h2>
          </div>
          <div class="about-content">
            <div class="about-text">
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



      <!-- How It Works Section -->
      <section class="how-it-works-section">
        <div class="container">
          <div class="how-it-works-content">
            <!-- Left Side - Text and Buttons -->
            <div class="how-it-works-text">
              <div class="section-badge">How It Works</div>
              <h2 class="section-title">A Simple Process For All Your Waste Management Needs</h2>
              <p class="section-description">
                Delivering smart waste solutions for homes, businesses & industries to keeping communities clean and protecting the environment every day.
              </p>
              <div class="section-buttons">
                <router-link to="/contact" class="primary-btn">Schedule Pickup</router-link>

              </div>
            </div>

            <!-- Right Side - Process Steps -->
            <div class="process-steps">
              <div class="step-card">
                <div class="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <h3>Request & Pickup</h3>
                <p>Waste pickups are scheduled and collected from homes, businesses, or job sites.</p>
              </div>

              <div class="step-card">
                <div class="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 3h15v13H1z"/>
                    <path d="M16 8h4l3 3v5h-7V8z"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                </div>
                <h3>Transportation</h3>
                <p>Waste is safely transported in specialized vehicles to treatment or disposal facilities.</p>
              </div>

              <div class="step-card">
                <div class="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 6h18"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    <path d="M10 11v6"/>
                    <path d="M14 11v6"/>
                  </svg>
                </div>
                <h3>Sorting & Processing</h3>
                <p>Waste is sorted into types and processed for recycling, composting, or disposal.</p>
              </div>

              <div class="step-card">
                <div class="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3>Disposal or Recycling</h3>
                <p>Recyclables are reused, organics composted, and the rest safely disposed of or incinerated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="mission-section">
        <div class="container">
          <div class="mission-content">
            <!-- Left Side - Mission Statement -->
            <div class="mission-text">
              <div class="mission-badge">Our Mission</div>
              <h2 class="mission-title">Responsible Waste Disposal for a Healthier Tomorrow</h2>
            </div>

            <!-- Right Side - Mission Objectives -->
            <div class="mission-objectives">
              <div class="objective-item">
                <div class="objective-icon">✓</div>
                <p>Deliver efficient, eco-friendly waste collection, recycling, and disposal services.</p>
              </div>

              <div class="objective-item">
                <div class="objective-icon">✓</div>
                <p>Promote sustainability through waste reduction, reuse, and recycling initiatives.</p>
              </div>

              <div class="objective-item">
                <div class="objective-icon">✓</div>
                <p>Ensure compliance with environmental regulations and best industry practices.</p>
              </div>

              <div class="objective-item">
                <div class="objective-icon">✓</div>
                <p>Educate communities on responsible waste management and environmental stewardship.</p>
              </div>

              <div class="objective-item">
                <div class="objective-icon">✓</div>
                <p>Utilize advanced technology to enhance waste management efficiency and sustainability.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Large Recycling Symbol Background -->
        <div class="recycling-symbol-bg">
          <svg width="300" height="300" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L22 8.5L12 15L2 8.5L12 2Z" fill="#69B31D" opacity="0.3"/>
            <path d="M12 15L22 8.5L12 2L2 8.5L12 15Z" fill="#10B981" opacity="0.2"/>
            <path d="M12 2L22 8.5L12 15L2 8.5L12 2Z" fill="#059669" opacity="0.1"/>
          </svg>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="testimonials-section">
        <div class="container">
          <div class="testimonials-header">
            <div class="testimonials-badge">Testimonials</div>
            <h2 class="testimonials-title">Our Happy Customers</h2>
          </div>

          <div class="testimonials-carousel">
            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <div class="testimonial-profile">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael S." class="profile-img" />
                <h4 class="customer-name">Michael S.</h4>
                <span class="customer-role">Customer</span>
              </div>
              <p class="testimonial-text">
                Working with this company has been a game changer for our business. Their waste collection is always reliable, and they took the time to understand our unique needs.
              </p>
            </div>

            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <div class="testimonial-profile">
                <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Robert L." class="profile-img" />
                <h4 class="customer-name">Robert L.</h4>
                <span class="customer-role">Customer</span>
              </div>
              <p class="testimonial-text">
                Working with this company has been a game changer for our business. Their waste collection is always reliable, and they took the time to understand our unique needs.
              </p>
            </div>

            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <div class="testimonial-profile">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Jake M." class="profile-img" />
                <h4 class="customer-name">Jake M.</h4>
                <span class="customer-role">Customer</span>
              </div>
              <p class="testimonial-text">
                Working with this company has been a game changer for our business. Their waste collection is always reliable, and they took the time to understand our unique needs.
              </p>
            </div>

            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <div class="testimonial-profile">
                <img src="https://randomuser.me/api/portraits/men/89.jpg" alt="Alex P." class="profile-img" />
                <h4 class="customer-name">Alex P.</h4>
                <span class="customer-role">Customer</span>
              </div>
              <p class="testimonial-text">
                Working with this company has been a game changer for our business. Their waste collection is always reliable, and they took the time to understand our unique needs.
              </p>
            </div>

            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <div class="testimonial-profile">
                <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="David K." class="profile-img" />
                <h4 class="customer-name">David K.</h4>
                <span class="customer-role">Customer</span>
              </div>
              <p class="testimonial-text">
                Working with this company has been a game changer for our business. Their waste collection is always reliable, and they took the time to understand our unique needs.
              </p>
            </div>

            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <div class="testimonial-profile">
                <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="Chris R." class="profile-img" />
                <h4 class="customer-name">Chris R.</h4>
                <span class="customer-role">Customer</span>
              </div>
              <p class="testimonial-text">
                Working with this company has been a game changer for our business. Their waste collection is always reliable, and they took the time to understand our unique needs.
              </p>
            </div>

            <div class="testimonial-card">
              <div class="quote-mark">"</div>
              <div class="testimonial-profile">
                <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Mark T." class="profile-img" />
                <h4 class="customer-name">Mark T.</h4>
                <span class="customer-role">Customer</span>
              </div>
              <p class="testimonial-text">
                Working with this company has been a game changer for our business. Their waste collection is always reliable, and they took the time to understand our unique needs.
              </p>
            </div>
          </div>

          <!-- Pagination Dots -->
          <div class="pagination-dots">
            <div class="dot"></div>
            <div class="dot active"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </section>

            <!-- CTA Section -->
      <section class="cta-section">
        <div class="cta-bg-pattern"></div>
        <div class="container">
          <div class="cta-content" :class="{ 'cta-animate': ctaVisible }">
            <h2 class="cta-title">Ready to Get Started?</h2>
            <p class="cta-description">Join hundreds of businesses already working with Geo Groups</p>
            <div class="cta-buttons">
              <router-link to="/contact" class="cta-btn cta-btn-primary">
                <span class="btn-text">Contact Us</span>
                <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </router-link>
              <router-link to="/about" class="cta-btn cta-btn-secondary">
                <span class="btn-text">Learn More</span>
                <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Floating Elements -->
        <div class="cta-floating-elements">
          <div class="floating-circle"></div>
          <div class="floating-square"></div>
          <div class="floating-triangle"></div>
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
  const duration = 3000 // Increased duration for smoother animation
  const start = performance.now()

  // Use easing function for smoother animation
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

  // Throttle updates to prevent excessive re-renders
  let lastUpdate = 0
  const throttleInterval = 16 // ~60fps

  const animate = (now: number) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeOutQuart(progress)

    // Only update if enough time has passed
    if (now - lastUpdate >= throttleInterval) {
      // Use Math.round instead of Math.floor for smoother transitions
      stat1.value = Math.round(easedProgress * stat1Target)
      stat2.value = Math.round(easedProgress * stat2Target)
      stat3.value = Math.round(easedProgress * stat3Target)
      lastUpdate = now
    }

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      // Ensure final values are exact
      stat1.value = stat1Target
      stat2.value = stat2Target
      stat3.value = stat3Target
    }
  }

  // Add a small delay to prevent immediate start
  setTimeout(() => {
    requestAnimationFrame(animate)
  }, 200)
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

// CTA section animation
const ctaVisible = ref(false)

const observeCTA = () => {
  const section = document.querySelector('.cta-section')
  if (!section) return
  const observer = new window.IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        ctaVisible.value = true
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
    observeCTA()
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

/* Hero Section - Fixed for new navbar */
.hero-section {
  position: relative;
  min-height: 100vh; /* Use full viewport height since spacing is handled by AppLayout */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 4rem;
}

/* Mobile responsive fixes */
@media (max-width: 768px) {
  .hero-section {
    min-height: calc(100vh - 160px); /* Account for navbar height */
    padding-top: 2rem; /* Add more top padding for mobile */
    margin-top: 0;
  }

  .hero-content {
    padding: 0 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: calc(100vh - 200px); /* Account for navbar height */
    padding-top: 1.5rem;
    margin-top: 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-actions {
    flex-direction: column;
    gap: 1rem;
  }

  .hero-btn {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
}

/* Hero Section */
.hero-bg {
  position: absolute;
  top: 0; /* Start from the very top */
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
  top: 0; /* Start from the very top */
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(34,34,34,0.5) 0%, rgba(34,34,34,0.3) 60%, rgba(34,34,34,0.7) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  max-width: 800px;
  margin: 0 auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
}

.hero-title {
  font-family: 'Poppins', 'Montserrat', Arial, sans-serif;
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.hero-subtitle {
  font-family: 'Inter', 'Roboto', Arial, sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 2.5rem;
  color: #e5e7eb;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-btn {
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.15);
  border: none;
  outline: none;
}

.hero-btn-primary {
  background: #69B31D;
  color: #fff;
  border: 2px solid #69B31D;
}

.hero-btn-primary:hover {
  background: #fff;
  color: #69B31D;
  border: 2px solid #69B31D;
}

.hero-btn-secondary {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.hero-btn-secondary:hover {
  background: #fff;
  color: #69B31D;
  border: 2px solid #69B31D;
}

/* Services Section */
.services-section {
  padding: 6rem 0;
  background: #69B31D;
  position: relative;
  overflow: hidden;
}

.services-bg-pattern {
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 1rem;
  overflow: hidden;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(40px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.service-animate {
  opacity: 1;
  transform: translateY(0);
  animation: serviceFadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.service-delay-0 { animation-delay: 0.1s; }
.service-delay-1 { animation-delay: 0.3s; }
.service-delay-2 { animation-delay: 0.5s; }

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
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.35);
}

.service-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.service-card:hover .service-image img {
  transform: scale(1.1);
}

.service-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(to top, rgba(105, 179, 29, 0.9) 0%, transparent 100%);
  pointer-events: none;
}

.service-content {
  padding: 1.5rem;
  color: white;
}

.service-content h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.3;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.service-content p {
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.service-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateX(4px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .services-section {
    padding: 4rem 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-image {
    height: 180px;
  }

  .service-content {
    padding: 1.25rem;
  }

  .service-content h3 {
    font-size: 1.25rem;
  }
}

@media (max-width: 480px) {
  .services-section {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .service-image {
    height: 160px;
  }

  .service-content {
    padding: 1rem;
  }

  .service-content h3 {
    font-size: 1.125rem;
  }

  .service-content p {
    font-size: 0.875rem;
  }
}

/* About Section */
.about-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
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

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.about-description {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  font-weight: 400;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  background: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(105, 179, 29, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  will-change: transform; /* Optimize for animations */
}

.stat-item {
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(105, 179, 29, 0.05);
  transform: translateY(-2px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #69B31D;
  margin-bottom: 0.5rem;
  line-height: 1;
  min-width: 80px; /* Prevent layout shifts */
  display: inline-block;
  text-align: center;
  font-variant-numeric: tabular-nums; /* Use monospace numbers for consistent width */
  transition: color 0.3s ease;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1);
  position: relative;
  z-index: 2;
  will-change: transform, opacity; /* Optimize for animations */
}

.about-img {
  width: 100%;
  max-width: 520px;
  height: 340px;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(105, 179, 29, 0.1);
  transition: all 0.3s ease;
}

.about-img:hover {
  transform: scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.about-img-animate {
  opacity: 1;
  transform: translateY(0);
}



/* How It Works Section */
.how-it-works-section {
  padding: 6rem 0;
  background: #1C4B41;
  position: relative;
  overflow: hidden;
}

.how-it-works-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.how-it-works-text {
  color: white;
}

.section-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.section-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.section-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.primary-btn {
  background: #69B31D;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.primary-btn:hover {
  background: #059669;
  transform: translateY(-2px);
}

.secondary-btn {
  background: #374151;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.secondary-btn:hover {
  background: #4b5563;
  transform: translateY(-2px);
}

.secondary-btn svg {
  color: #10b981;
}

/* Process Steps */
.process-steps {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.step-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.step-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
}

.step-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #69B31D;
  border-radius: 50%;
  color: #69B31D;
  background: rgba(255, 255, 255, 0.1);
}

.step-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.75rem;
}

.step-card p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .how-it-works-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .process-steps {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .section-buttons {
    flex-direction: column;
  }

  .primary-btn,
  .secondary-btn {
    text-align: center;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .how-it-works-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .step-card {
    padding: 1.5rem;
  }

  .step-icon {
    width: 48px;
    height: 48px;
  }
}

/* Testimonials Section */
.testimonials-section {
  padding: 4rem 0;
  background: #f8fef6;
  text-align: center;
}

.testimonials-header {
  margin-bottom: 2rem;
}

.testimonials-badge {
  color: #69B31D;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.testimonials-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.testimonials-carousel {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 2rem;
}

.testimonial-card {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(105,179,29,0.07);
  padding: 2rem 1.5rem 2.5rem 1.5rem;
  min-width: 340px;
  max-width: 340px;
  flex: 0 0 auto;
  margin: 0 auto;
  position: relative;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.quote-mark {
  color: #69B31D;
  font-size: 2.5rem;
  font-weight: 900;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}

.testimonial-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.profile-img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
}

.customer-name {
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.1rem;
}

.customer-role {
  color: #6b7280;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.testimonial-text {
  color: #374151;
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0;
  font-style: normal;
}

.pagination-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  background: #d1fae5;
  border-radius: 50%;
  transition: background 0.2s;
}

.dot.active {
  background: #69B31D;
}

@media (max-width: 900px) {
  .testimonials-carousel {
    gap: 1rem;
  }
  .testimonial-card {
    min-width: 280px;
    max-width: 280px;
    padding: 1.5rem 1rem 2rem 1rem;
  }
}

@media (max-width: 600px) {
  .testimonials-title {
    font-size: 1.5rem;
  }
  .testimonial-card {
    min-width: 90vw;
    max-width: 90vw;
  }
}

/* CTA Section */
.cta-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #1e3a8a 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 60% 60%, rgba(30, 64, 175, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-animate {
  opacity: 1;
  transform: translateY(0);
}



.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cta-description {
  font-size: 1.125rem;
  opacity: 0.95;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  font-weight: 400;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
}

.cta-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.cta-btn:hover::before {
  left: 100%;
}

.cta-btn-primary {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  color: #1e40af;
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.cta-btn-primary:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
  background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
}

.cta-btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.cta-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-icon {
  transition: transform 0.3s ease;
}

.cta-btn:hover .btn-icon {
  transform: translateX(4px);
}



/* Floating Elements */
.cta-floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.floating-circle {
  position: absolute;
  width: 80px;
  height: 80px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: 20%;
  right: 10%;
  animation: floatCircle 6s ease-in-out infinite;
}

.floating-square {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(255, 255, 255, 0.08);
  transform: rotate(45deg);
  bottom: 30%;
  left: 5%;
  animation: floatSquare 8s ease-in-out infinite;
}

.floating-triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 52px solid rgba(255, 255, 255, 0.06);
  top: 60%;
  right: 20%;
  animation: floatTriangle 7s ease-in-out infinite;
}

@keyframes floatCircle {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes floatSquare {
  0%, 100% {
    transform: translateY(0px) rotate(45deg);
  }
  50% {
    transform: translateY(-15px) rotate(225deg);
  }
}

@keyframes floatTriangle {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-25px);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-section {
    min-height: 100vh; /* Use full viewport height since spacing is handled by AppLayout */
  }
  .hero-content {
    padding: 0 1rem;
  }
  .hero-btn {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
  .section-title {
    font-size: 2rem;
  }
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .services-grid,
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

  .cta-btn {
    width: 100%;
    max-width: 300px;
    text-align: center;
    justify-content: center;
  }

  .cta-title {
    font-size: 2.5rem;
  }

  .hero-section {
    min-height: 100vh; /* Use full viewport height since spacing is handled by AppLayout */
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

  .hero-section {
    min-height: 100vh; /* Use full viewport height since spacing is handled by AppLayout */
  }

  .about-section {
    padding: 4rem 0;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    padding: 1rem;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .about-img {
    height: 280px;
  }

  .cta-section {
    padding: 4rem 0;
  }

  .cta-title {
    font-size: 2rem;
  }

  .cta-description {
    font-size: 1.125rem;
  }

  .floating-circle,
  .floating-square,
  .floating-triangle {
    display: none;
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

/* Mission Section */
.mission-section {
  padding: 4rem 0;
  background: #f0fdf4;
  position: relative;
  overflow: hidden;
  border-top: 2px solid #1f2937;
  border-bottom: 4px solid #69B31D;
}

.mission-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  position: relative;
  z-index: 2;
}

.mission-text {
  color: #1f2937;
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
  line-height: 1.2;
  margin: 0;
}

.mission-objectives {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.objective-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.5rem 0;
}

.objective-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background: #69B31D;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
}

.objective-item p {
  color: #374151;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  font-weight: 400;
}

/* Large Recycling Symbol Background */
.recycling-symbol-bg {
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 300px;
  height: 300px;
  opacity: 0.4;
  z-index: 1;
  pointer-events: none;
}

.recycling-symbol-bg svg {
  width: 100%;
  height: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .mission-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .mission-title {
    font-size: 2rem;
  }

  .recycling-symbol-bg {
    width: 200px;
    height: 200px;
    bottom: -25px;
    right: -25px;
  }
}

@media (max-width: 480px) {
  .mission-section {
    padding: 3rem 0;
  }

  .mission-title {
    font-size: 1.75rem;
  }

  .objective-item p {
    font-size: 0.875rem;
  }

  .recycling-symbol-bg {
    width: 150px;
    height: 150px;
    bottom: -15px;
    right: -15px;
  }
}

</style>
