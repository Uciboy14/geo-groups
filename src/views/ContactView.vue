<template>
  <div class="contact">
    <AppLayout>
      <!-- Hero Section -->
      <section class="contact-hero">
        <div class="hero-bg">
          <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=80" alt="Contact Hero Background" />
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content" :class="{ 'hero-animate': heroVisible }">
          <div class="hero-badge">Get In Touch</div>
          <h1 class="hero-title">Contact Us</h1>
          <p class="hero-subtitle">
            Ready to start your sustainable business journey?<br>
            Let's discuss how we can help you achieve your goals.
          </p>
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Support Available</div>
            </div>
            <div class="hero-stat">
              <div class="stat-number">2hr</div>
              <div class="stat-label">Response Time</div>
            </div>
            <div class="hero-stat">
              <div class="stat-number">100%</div>
              <div class="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Content -->
      <section class="contact-content">
        <div class="contact-bg-pattern"></div>
        <div class="container">
          <div class="contact-grid">
            <!-- Contact Wizard -->
            <div class="contact-form-section" :class="{ 'form-animate': formVisible }">
              <ContactWizard />
            </div>

            <!-- Contact Information -->
            <div class="contact-info-section" :class="{ 'info-animate': infoVisible }">
              <div class="info-header">
                <div class="info-badge">Contact Information</div>
              <h2>Get in Touch</h2>
              <p class="info-subtitle">
                We're here to help you with your sustainable business needs.
              </p>
              </div>

              <div class="contact-methods">
                <div class="contact-method" :class="{ 'method-animate': methodsVisible, 'method-delay-0': methodsVisible }">
                  <div class="method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div class="method-content">
                    <h3>Visit Us</h3>
                    <p>123 Business Avenue<br>London, UK SW1A 1AA</p>
                    <button class="method-action" @click="openMap">Get Directions</button>
                  </div>
                </div>

                <div class="contact-method" :class="{ 'method-animate': methodsVisible, 'method-delay-1': methodsVisible }">
                  <div class="method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div class="method-content">
                    <h3>Email Us</h3>
                    <p>info@geogroups.com<br>support@geogroups.com</p>
                    <button class="method-action" @click="sendEmail">Send Email</button>
                  </div>
                </div>

                <div class="contact-method" :class="{ 'method-animate': methodsVisible, 'method-delay-2': methodsVisible }">
                  <div class="method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div class="method-content">
                    <h3>Call Us</h3>
                    <p>+44 20 1234 5678<br>Mon-Fri 9AM-6PM GMT</p>
                    <button class="method-action" @click="makeCall">Call Now</button>
                  </div>
                </div>
              </div>

              <!-- Office Hours -->
              <div class="office-hours" :class="{ 'hours-animate': hoursVisible }">
                <h3>Office Hours</h3>
                <div class="hours-grid">
                  <div class="hours-item" :class="{ 'hours-animate': hoursVisible, 'hours-delay-0': hoursVisible }">
                    <span class="day">Monday - Friday</span>
                    <span class="time">9:00 AM - 6:00 PM</span>
                    <div class="hours-status open">Open Now</div>
                  </div>
                  <div class="hours-item" :class="{ 'hours-animate': hoursVisible, 'hours-delay-1': hoursVisible }">
                    <span class="day">Saturday</span>
                    <span class="time">10:00 AM - 4:00 PM</span>
                    <div class="hours-status closed">Closed</div>
                  </div>
                  <div class="hours-item" :class="{ 'hours-animate': hoursVisible, 'hours-delay-2': hoursVisible }">
                    <span class="day">Sunday</span>
                    <span class="time">Closed</span>
                    <div class="hours-status closed">Closed</div>
                  </div>
                </div>
              </div>

              <!-- Emergency Contact -->
              <div class="emergency-contact" :class="{ 'emergency-animate': emergencyVisible }">
                <div class="emergency-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <div class="emergency-content">
                <h3>Emergency Support</h3>
                <p>For urgent matters outside business hours:</p>
                <p class="emergency-phone">+44 20 1234 5679</p>
                  <button class="emergency-action" @click="emergencyCall">Call Emergency</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Map Section -->
      <section class="map-section">
        <div class="map-bg-pattern"></div>
        <div class="container">
          <div class="map-header" :class="{ 'map-header-animate': mapVisible }">
            <div class="map-badge">Location</div>
          <h2>Find Our Office</h2>
            <p class="map-subtitle">Visit us in the heart of London's business district</p>
          </div>
          <div class="map-container" :class="{ 'map-animate': mapVisible }">
          <div class="map-placeholder">
            <div class="map-content">
                <div class="map-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
              <h3>Interactive Map</h3>
                <p>Our office is located in the heart of London's business district, easily accessible by public transport.</p>
                <div class="map-actions">
                  <button class="map-button primary" @click="openMap">Open in Google Maps</button>
                  <button class="map-button secondary" @click="getDirections">Get Directions</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="faq-bg-pattern"></div>
        <div class="container">
          <div class="faq-header" :class="{ 'faq-header-animate': faqVisible }">
            <div class="faq-badge">FAQ</div>
            <h2>Frequently Asked Questions</h2>
            <p class="faq-subtitle">Quick answers to common questions about our services</p>
          </div>
          <div class="faq-grid">
            <div class="faq-item" :class="{ 'faq-animate': faqVisible, 'faq-delay-0': faqVisible }">
              <div class="faq-question" @click="toggleFaq(0)">
                <h3>What services do you offer?</h3>
                <div class="faq-icon" :class="{ 'faq-icon-rotate': openFaq === 0 }">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </div>
              </div>
              <div class="faq-answer" :class="{ 'faq-answer-open': openFaq === 0 }">
                <p>We offer comprehensive sustainable business solutions including property management, recycling services, and sustainable transportation. Our integrated approach helps businesses reduce their environmental impact while improving efficiency.</p>
              </div>
            </div>

            <div class="faq-item" :class="{ 'faq-animate': faqVisible, 'faq-delay-1': faqVisible }">
              <div class="faq-question" @click="toggleFaq(1)">
                <h3>How quickly can you respond to inquiries?</h3>
                <div class="faq-icon" :class="{ 'faq-icon-rotate': openFaq === 1 }">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </div>
              </div>
              <div class="faq-answer" :class="{ 'faq-answer-open': openFaq === 1 }">
                <p>We typically respond to all inquiries within 2 hours during business hours. For urgent matters, we provide 24/7 emergency support through our dedicated hotline.</p>
              </div>
            </div>

            <div class="faq-item" :class="{ 'faq-animate': faqVisible, 'faq-delay-2': faqVisible }">
              <div class="faq-question" @click="toggleFaq(2)">
                <h3>Do you work with small businesses?</h3>
                <div class="faq-icon" :class="{ 'faq-icon-rotate': openFaq === 2 }">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </div>
              </div>
              <div class="faq-answer" :class="{ 'faq-answer-open': openFaq === 2 }">
                <p>Absolutely! We work with businesses of all sizes, from startups to large corporations. We tailor our solutions to meet the specific needs and budget constraints of each client.</p>
              </div>
            </div>

            <div class="faq-item" :class="{ 'faq-animate': faqVisible, 'faq-delay-3': faqVisible }">
              <div class="faq-question" @click="toggleFaq(3)">
                <h3>What areas do you serve?</h3>
                <div class="faq-icon" :class="{ 'faq-icon-rotate': openFaq === 3 }">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </div>
              </div>
              <div class="faq-answer" :class="{ 'faq-answer-open': openFaq === 3 }">
                <p>We primarily serve the Greater London area and surrounding regions. However, we also provide consulting services nationwide and can arrange special arrangements for clients outside our immediate service area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppLayout from '@/components/AppLayout.vue'
import ContactWizard from '@/components/ContactWizard.vue'

// Define component name
defineOptions({
  name: 'ContactView'
})

// Animation states
const heroVisible = ref(false)
const formVisible = ref(false)
const infoVisible = ref(false)
const methodsVisible = ref(false)
const hoursVisible = ref(false)
const emergencyVisible = ref(false)
const mapVisible = ref(false)
const faqVisible = ref(false)
const openFaq = ref<number | null>(null)

// Intersection Observer for animations
let observers: IntersectionObserver[] = []

const createObserver = (target: string, callback: (entries: IntersectionObserverEntry[]) => void) => {
  const observer = new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  const element = document.querySelector(target)
  if (element) {
    observer.observe(element)
    observers.push(observer)
  }
}

const openMap = () => {
  window.open('https://www.google.com/maps?q=123+Business+Ave,+London,+UK', '_blank')
}

const getDirections = () => {
  window.open('https://www.google.com/maps/dir//123+Business+Ave,+London,+UK', '_blank')
}

const sendEmail = () => {
  window.open('mailto:info@geogroups.com?subject=Inquiry from Geo Groups Website', '_blank')
}

const makeCall = () => {
  window.open('tel:+442012345678', '_blank')
}

const emergencyCall = () => {
  window.open('tel:+442012345679', '_blank')
}

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}

onMounted(() => {
  // Create observers for animations
  createObserver('.hero-content', (entries) => {
    if (entries[0].isIntersecting) heroVisible.value = true
  })

  createObserver('.contact-form-section', (entries) => {
    if (entries[0].isIntersecting) formVisible.value = true
  })

  createObserver('.contact-info-section', (entries) => {
    if (entries[0].isIntersecting) {
      infoVisible.value = true
      setTimeout(() => methodsVisible.value = true, 200)
      setTimeout(() => hoursVisible.value = true, 400)
      setTimeout(() => emergencyVisible.value = true, 600)
    }
  })

  createObserver('.map-header', (entries) => {
    if (entries[0].isIntersecting) mapVisible.value = true
  })

  createObserver('.faq-header', (entries) => {
    if (entries[0].isIntersecting) faqVisible.value = true
  })
})

onUnmounted(() => {
  observers.forEach(observer => observer.disconnect())
})
</script>

<style scoped>
.contact {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.contact-hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(20,184,166,0.85) 0%, rgba(59, 246, 59, 0.747) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-content.hero-animate {
  opacity: 1;
  transform: translateY(0);
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.hero-stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  display: block;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
  font-weight: 500;
}

/* Contact Content */
.contact-content {
  position: relative;
  padding: 6rem 0;
  background: #f8fafc;
  overflow: hidden;
}

.contact-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(59, 246, 59, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  position: relative;
  z-index: 1;
}

/* Contact Form */
.contact-form-section {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-form-section.form-animate {
  opacity: 1;
  transform: translateX(0);
}

/* Contact Information */
.contact-info-section {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-info-section.info-animate {
  opacity: 1;
  transform: translateX(0);
}

.info-header {
  margin-bottom: 2rem;
}

.info-badge {
  display: inline-block;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.info-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.info-subtitle {
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.6;
}

.contact-methods {
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.1);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-method.method-animate {
  opacity: 1;
  transform: translateY(0);
}

.contact-method.method-delay-0 { transition-delay: 0.1s; }
.contact-method.method-delay-1 { transition-delay: 0.2s; }
.contact-method.method-delay-2 { transition-delay: 0.3s; }

.method-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  border-radius: 12px;
  flex-shrink: 0;
}

.method-content {
  flex: 1;
}

.method-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.method-content p {
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.method-action {
  background: transparent;
  color: #10B981;
  border: 1px solid #10B981;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.method-action:hover {
  background: #10B981;
  color: white;
  transform: translateY(-2px);
}

/* Office Hours */
.office-hours {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  border: 1px solid rgba(16, 185, 129, 0.1);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.office-hours.hours-animate {
  opacity: 1;
  transform: translateY(0);
}

.office-hours h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.hours-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hours-item.hours-animate {
  opacity: 1;
  transform: translateX(0);
}

.hours-item.hours-delay-0 { transition-delay: 0.1s; }
.hours-item.hours-delay-1 { transition-delay: 0.2s; }
.hours-item.hours-delay-2 { transition-delay: 0.3s; }

.hours-item:last-child {
  border-bottom: none;
}

.day {
  font-weight: 500;
  color: #374151;
}

.time {
  color: #6b7280;
}

.hours-status {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.hours-status.open {
  background: #dcfce7;
  color: #166534;
}

.hours-status.closed {
  background: #fef2f2;
  color: #991b1b;
}

/* Emergency Contact */
.emergency-contact {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.emergency-contact.emergency-animate {
  opacity: 1;
  transform: translateY(0);
}

.emergency-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  flex-shrink: 0;
}

.emergency-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.emergency-content p {
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.emergency-phone {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.emergency-action {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.emergency-action:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* Map Section */
.map-section {
  position: relative;
  padding: 6rem 0;
  background: white;
  overflow: hidden;
}

.map-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(59, 246, 59, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.map-header {
  text-align: center;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

.map-header.map-header-animate {
  opacity: 1;
  transform: translateY(0);
}

.map-badge {
  display: inline-block;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.map-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.map-subtitle {
  color: #6b7280;
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto;
}

.map-container {
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.map-container.map-animate {
  opacity: 1;
  transform: translateY(0);
}

.map-placeholder {
  background: #f8fafc;
  border: 2px dashed #d1d5db;
  border-radius: 1rem;
  padding: 4rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.map-placeholder:hover {
  border-color: #10B981;
  background: #f0fdf4;
}

.map-content {
  max-width: 500px;
  margin: 0 auto;
}

.map-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
}

.map-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.map-content p {
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.map-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.map-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 0.875rem;
}

.map-button.primary {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.map-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.map-button.secondary {
  background: transparent;
  color: #10B981;
  border: 1px solid #10B981;
}

.map-button.secondary:hover {
  background: #10B981;
  color: white;
  transform: translateY(-2px);
}

/* FAQ Section */
.faq-section {
  position: relative;
  padding: 6rem 0;
  background: #f8fafc;
  overflow: hidden;
}

.faq-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(59, 246, 59, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.faq-header {
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

.faq-header.faq-header-animate {
  opacity: 1;
  transform: translateY(0);
}

.faq-badge {
  display: inline-block;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.faq-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.faq-subtitle {
  color: #6b7280;
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto;
}

.faq-grid {
  display: grid;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.faq-item {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.1);
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-item.faq-animate {
  opacity: 1;
  transform: translateY(0);
}

.faq-item.faq-delay-0 { transition-delay: 0.1s; }
.faq-item.faq-delay-1 { transition-delay: 0.2s; }
.faq-item.faq-delay-2 { transition-delay: 0.3s; }
.faq-item.faq-delay-3 { transition-delay: 0.4s; }

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: #f8fafc;
}

.faq-question h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.faq-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #6b7280;
  transition: all 0.3s ease;
}

.faq-icon-rotate {
  transform: rotate(180deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  background: #f8fafc;
}

.faq-answer-open {
  max-height: 200px;
}

.faq-answer p {
  padding: 0 1.5rem 1.5rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-stats {
    gap: 2rem;
  }
  }

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .map-actions {
    flex-direction: column;
  }

  .map-button {
    width: 100%;
  }

  .container {
    padding: 0 1rem;
  }

  .contact-content,
  .map-section,
  .faq-section {
    padding: 4rem 0;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .contact-method {
    flex-direction: column;
    text-align: center;
  }

  .method-icon {
    align-self: center;
  }

  .emergency-contact {
    flex-direction: column;
    text-align: center;
  }

  .emergency-icon {
    align-self: center;
  }
}

/* Dark mode styles */
:global(.dark) .contact-content {
  background: #111827;
}

:global(.dark) .contact-method,
:global(.dark) .office-hours,
:global(.dark) .faq-item {
  background: #1f2937;
  border-color: #374151;
}

:global(.dark) .method-content h3,
:global(.dark) .office-hours h3,
:global(.dark) .faq-question h3 {
  color: #f9fafb;
}

:global(.dark) .method-content p,
:global(.dark) .faq-answer p {
  color: #d1d5db;
}

:global(.dark) .map-section {
  background: #111827;
}

:global(.dark) .map-placeholder {
  background: #1f2937;
  border-color: #374151;
}

:global(.dark) .map-content h3 {
  color: #f9fafb;
}

:global(.dark) .map-content p {
  color: #d1d5db;
}

:global(.dark) .faq-section {
  background: #111827;
}

:global(.dark) .faq-question:hover {
  background: #374151;
}
</style>
