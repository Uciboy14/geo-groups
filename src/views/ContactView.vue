<template>
  <div class="contact">
    <AppLayout>
      <!-- Hero Section -->
      <div class="contact-hero">
        <div class="container">
          <h1 class="page-title">Contact Us</h1>
          <p class="page-subtitle">
            Get in touch with our team for sustainable business solutions
          </p>
        </div>
      </div>

      <!-- Contact Content -->
      <div class="contact-content">
        <div class="container">
          <div class="contact-grid">
            <!-- Contact Wizard -->
            <div class="contact-form-section">
              <ContactWizard />
            </div>

            <!-- Contact Information -->
            <div class="contact-info-section">
              <h2>Get in Touch</h2>
              <p class="info-subtitle">
                We're here to help you with your sustainable business needs.
              </p>

              <div class="contact-methods">
                <div class="contact-method">
                  <div class="method-icon">📍</div>
                  <div class="method-content">
                    <h3>Visit Us</h3>
                    <p>123 Business Avenue<br>London, UK SW1A 1AA</p>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="method-icon">📧</div>
                  <div class="method-content">
                    <h3>Email Us</h3>
                    <p>info@geogroups.com<br>support@geogroups.com</p>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="method-icon">📞</div>
                  <div class="method-content">
                    <h3>Call Us</h3>
                    <p>+44 20 1234 5678<br>Mon-Fri 9AM-6PM GMT</p>
                  </div>
                </div>
              </div>

              <!-- Office Hours -->
              <div class="office-hours">
                <h3>Office Hours</h3>
                <div class="hours-grid">
                  <div class="hours-item">
                    <span class="day">Monday - Friday</span>
                    <span class="time">9:00 AM - 6:00 PM</span>
                  </div>
                  <div class="hours-item">
                    <span class="day">Saturday</span>
                    <span class="time">10:00 AM - 4:00 PM</span>
                  </div>
                  <div class="hours-item">
                    <span class="day">Sunday</span>
                    <span class="time">Closed</span>
                  </div>
                </div>
              </div>

              <!-- Emergency Contact -->
              <div class="emergency-contact">
                <h3>Emergency Support</h3>
                <p>For urgent matters outside business hours:</p>
                <p class="emergency-phone">+44 20 1234 5679</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <section class="map-section">
        <div class="container">
          <h2>Find Our Office</h2>
          <div class="map-placeholder">
            <div class="map-content">
              <span class="map-icon">🗺️</span>
              <h3>Interactive Map</h3>
              <p>Our office is located in the heart of London's business district</p>
              <button class="map-button" @click="openMap">Open in Google Maps</button>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  </div>
</template>

<script setup lang="ts">
import AppLayout from '@/components/AppLayout.vue'
import ContactWizard from '@/components/ContactWizard.vue'

// Define component name
defineOptions({
  name: 'ContactView'
})

const openMap = () => {
  window.open('https://www.google.com/maps?q=123+Business+Ave,+London,+UK', '_blank')
}
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
  background: url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
  color: white;
  padding: 4rem 0;
  text-align: center;
}
.contact-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(20,184,166,0.85) 0%, rgba(59, 246, 59, 0.747) 100%);
  z-index: 0;
  pointer-events: none;
}
.contact-hero .container {
  position: relative;
  z-index: 1;
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

/* Contact Content */
.contact-content {
  padding: 4rem 0;
  background: #f8fafc;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* Contact Form */
.contact-form-section h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.form-subtitle {
  color: #6b7280;
  margin-bottom: 2rem;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: white;
}

.form-input:focus {
  outline: none;
  border-color: #10B981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.form-input::placeholder {
  color: #9ca3af;
}

textarea.form-input {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  width: 100%;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Contact Information */
.contact-info-section h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.info-subtitle {
  color: #6b7280;
  margin-bottom: 2rem;
}

.contact-methods {
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.method-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
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
  margin: 0;
}

/* Office Hours */
.office-hours {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
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
  padding: 0.5rem 0;
  border-bottom: 1px solid #f3f4f6;
}

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

/* Emergency Contact */
.emergency-contact {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
}

.emergency-contact h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.emergency-contact p {
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.emergency-phone {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
}

/* Map Section */
.map-section {
  padding: 4rem 0;
  background: white;
}

.map-section h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 2rem;
}

.map-placeholder {
  background: #f8fafc;
  border: 2px dashed #d1d5db;
  border-radius: 1rem;
  padding: 4rem 2rem;
  text-align: center;
}

.map-content {
  max-width: 400px;
  margin: 0 auto;
}

.map-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

.map-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.map-content p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.map-button {
  background: #10B981;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.map-button:hover {
  background: #059669;
  transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .contact-form-section h2,
  .contact-info-section h2 {
    font-size: 1.75rem;
  }

  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 2rem;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .contact-method {
    flex-direction: column;
    text-align: center;
  }
}
</style>
