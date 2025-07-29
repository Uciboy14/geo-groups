<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="container">
        <!-- Main Footer Sections -->
        <div class="footer-sections">
          <!-- Company Info -->
          <div class="footer-section">
            <div class="footer-logo">
              <div class="logo-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2L20 8L26 10L20 12L16 18L12 12L6 10L12 8L16 2Z" fill="#10B981"/>
                  <circle cx="16" cy="16" r="12" stroke="#10B981" stroke-width="2" fill="none"/>
                  <path d="M8 20L12 24L20 24L24 20" stroke="#10B981" stroke-width="2" fill="none"/>
                </svg>
              </div>
              <span class="logo-text">Geo Groups</span>
            </div>
            <p class="company-description">
              Leading sustainable business solutions for property management, recycling, and transport services.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Services -->
          <div class="footer-section">
            <h3 class="footer-title">Services</h3>
            <ul class="footer-links">
              <li><router-link to="/geo-property" class="footer-link">Geo Property</router-link></li>
              <li><router-link to="/geo-recycling" class="footer-link">Geo Recycling</router-link></li>
              <li><router-link to="/geo-transport" class="footer-link">Geo Transport</router-link></li>
              <li><a href="#" class="footer-link">Consulting</a></li>
              <li><a href="#" class="footer-link">Sustainability Solutions</a></li>
            </ul>
          </div>

          <!-- Company -->
          <div class="footer-section">
            <h3 class="footer-title">Company</h3>
            <ul class="footer-links">
              <li><router-link to="/about" class="footer-link">About Us</router-link></li>
              <li><a href="#" class="footer-link">Our Team</a></li>
              <li><a href="#" class="footer-link">Careers</a></li>
              <li><a href="#" class="footer-link">News & Updates</a></li>
              <li><a href="#" class="footer-link">Sustainability Report</a></li>
            </ul>
          </div>

          <!-- Contact & Newsletter -->
          <div class="footer-section">
            <h3 class="footer-title">Contact</h3>
            <div class="contact-info">
              <div class="contact-item">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>123 Business Ave, London, UK</span>
              </div>
              <div class="contact-item">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>info@geogroups.com</span>
              </div>
              <div class="contact-item">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+44 20 1234 5678</span>
              </div>
            </div>

            <!-- Newsletter Signup -->
            <div class="newsletter">
              <h4 class="newsletter-title">Stay Updated</h4>
              <p class="newsletter-subtitle">Get the latest sustainability insights</p>
              <form class="newsletter-form" @submit.prevent="handleNewsletterSignup">
                <div class="newsletter-input-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    class="newsletter-input"
                    v-model="email"
                    required
                  />
                  <button type="submit" class="newsletter-button">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <div class="copyright">
              <p>&copy; 2024 Geo Groups LTD. All rights reserved.</p>
            </div>
            <div class="footer-legal">
              <a href="#" class="legal-link">Privacy Policy</a>
              <a href="#" class="legal-link">Terms of Service</a>
              <a href="#" class="legal-link">Cookie Policy</a>
              <a href="#" class="legal-link">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Define component name
defineOptions({
  name: 'AppFooter'
})

const email = ref('')

const handleNewsletterSignup = () => {
  // Handle newsletter signup logic here
  console.log('Newsletter signup:', email.value)
  // You can add API call here
  alert('Thank you for subscribing!')
  email.value = ''
}
</script>

<style scoped>
.footer {
  background: #1f2937;
  color: #f9fafb;
  margin-top: auto;
}

.footer-content {
  padding: 4rem 0 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-sections {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.logo-icon {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #10B981;
  letter-spacing: -0.025em;
}

.company-description {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 300px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(16, 185, 129, 0.1);
  color: #10B981;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.social-link:hover {
  background: #10B981;
  color: white;
  transform: translateY(-2px);
}

.footer-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #f9fafb;
  margin-bottom: 1.5rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.95rem;
}

.footer-link:hover {
  color: #10B981;
}

.contact-info {
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #d1d5db;
  font-size: 0.95rem;
}

.contact-item svg {
  color: #10B981;
  flex-shrink: 0;
}

.newsletter {
  margin-top: 1rem;
}

.newsletter-title {
  font-size: 1rem;
  font-weight: 600;
  color: #f9fafb;
  margin-bottom: 0.5rem;
}

.newsletter-subtitle {
  color: #d1d5db;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.newsletter-form {
  width: 100%;
}

.newsletter-input-group {
  display: flex;
  gap: 0.5rem;
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #374151;
  border-radius: 0.5rem;
  background: #374151;
  color: #f9fafb;
  font-size: 0.875rem;
}

.newsletter-input::placeholder {
  color: #9ca3af;
}

.newsletter-input:focus {
  outline: none;
  border-color: #10B981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.newsletter-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #10B981;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.newsletter-button:hover {
  background: #059669;
  transform: translateY(-1px);
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding: 2rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright p {
  color: #9ca3af;
  font-size: 0.875rem;
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: 2rem;
}

.legal-link {
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.legal-link:hover {
  color: #10B981;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-sections {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer-sections {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-legal {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 3rem 0 0 0;
  }

  .social-links {
    gap: 0.75rem;
  }

  .social-link {
    width: 36px;
    height: 36px;
  }
}
</style>
