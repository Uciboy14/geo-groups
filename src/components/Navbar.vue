<template>
  <div class="navbar-wrapper" :class="{ 'navbar-hidden': !isNavbarVisible }">
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="top-bar-container">
        <!-- Contact Information -->
        <div class="contact-info">
          <div class="contact-item">
            <svg class="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
              <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span class="contact-text">Monday - Friday 08.00 - 18.00</span>
          </div>

          <div class="contact-item">
            <svg class="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span class="contact-text">contact@geogroups.com</span>
          </div>

          <div class="contact-item">
            <svg class="contact-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span class="contact-text">+44 20 1234 5678</span>
          </div>
        </div>

        <!-- Social Media Links -->
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          <a href="#" class="social-link" aria-label="Twitter">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>

          <a href="#" class="social-link" aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          <a href="#" class="social-link" aria-label="Pinterest">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
          </a>

          <a href="#" class="social-link" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navbar -->
    <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="navbar-logo">
        <router-link to="/" class="logo-link">
          <div class="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L20 8L26 10L20 12L16 18L12 12L6 10L12 8L16 2Z" fill="#10B981"/>
              <circle cx="16" cy="16" r="12" stroke="#10B981" stroke-width="2" fill="none"/>
              <path d="M8 20L12 24L20 24L24 20" stroke="#10B981" stroke-width="2" fill="none"/>
            </svg>
          </div>
            <span class="logo-text">Geo Groups</span>
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <div class="navbar-nav desktop-nav">
          <router-link to="/geo-property" class="nav-link">
            <span class="nav-icon">🏠</span>
            Geo Property
          </router-link>
          <router-link to="/geo-recycling" class="nav-link">
            <span class="nav-icon">♻️</span>
            Geo Recycling
          </router-link>
          <router-link to="/geo-transport" class="nav-link">
            <span class="nav-icon">🚚</span>
            Geo Transport
          </router-link>
        </div>

        <!-- CTA Button -->
        <div class="navbar-cta">
          <router-link to="/contact" class="cta-button" @mouseenter="triggerShine">
            Get Started
            <span v-if="showShine" class="shine"></span>
          </router-link>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-toggle" @click="toggleMobileMenu" :class="{ 'active': isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav" :class="{ 'mobile-nav-open': isMobileMenuOpen }">
        <router-link to="/geo-property" class="mobile-nav-link" @click="closeMobileMenu">
          <span class="nav-icon">🏠</span>
          Geo Property
        </router-link>
        <router-link to="/geo-recycling" class="mobile-nav-link" @click="closeMobileMenu">
          <span class="nav-icon">♻️</span>
          Geo Recycling
        </router-link>
        <router-link to="/geo-transport" class="mobile-nav-link" @click="closeMobileMenu">
          <span class="nav-icon">🚚</span>
          Geo Transport
        </router-link>
        <router-link to="/contact" class="mobile-cta-button" @click="closeMobileMenu">
          Get Started
        </router-link>
      </div>
    </nav>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

defineOptions({
  name: 'AppNavbar'
})

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isMounted = ref(false)
const showShine = ref(true)
const isNavbarVisible = ref(true)
const lastScrollY = ref(0)

const triggerShine = () => {
  if (showShine.value) return;
  showShine.value = true
  setTimeout(() => { showShine.value = false }, 1200)
}

const handleScroll = () => {
  const currentScrollY = window.scrollY

  // Show navbar when scrolling to top
  if (currentScrollY <= 100) {
    isNavbarVisible.value = true
    isScrolled.value = false
  } else {
    isScrolled.value = true

    // Hide navbar when scrolling down, show when scrolling up
    if (currentScrollY > lastScrollY.value && currentScrollY > 200) {
      isNavbarVisible.value = false
    } else if (currentScrollY < lastScrollY.value) {
      isNavbarVisible.value = true
    }
  }

  lastScrollY.value = currentScrollY
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  nextTick(() => {
    isMounted.value = true
  })
  setTimeout(() => { showShine.value = false }, 1600)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar-wrapper.navbar-hidden {
  transform: translateY(-100%);
}

/* Top Bar Styles */
.top-bar {
  background: linear-gradient(135deg, #0f766e 0%, #115e59 100%);
  color: white;
  padding: 0.75rem 0;
  font-size: 0.875rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.top-bar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.2s ease;
}

.contact-item:hover {
  opacity: 0.8;
}

.contact-icon {
  flex-shrink: 0;
  color: #10b981;
}

.contact-text {
  font-weight: 500;
  white-space: nowrap;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-link:hover {
  background: #10b981;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

/* Main Navbar Styles */
.navbar {
  background: transparent;
  height: 70px;
  transition: background 0.3s ease;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar-logo {
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  gap: 0.75rem;
  transition: color 0.3s cubic-bezier(.4,2,.6,1);
}

.logo-link:hover .logo-icon {
  animation: logo-bounce 0.6s cubic-bezier(.4,2,.6,1);
}

.logo-link:hover .logo-text {
  color: #059669;
  text-shadow: 0 0 8px #10B98155;
}

@keyframes logo-bounce {
  0%   { transform: translateY(0); }
  30%  { transform: translateY(-8px) scale(1.08); }
  50%  { transform: translateY(2px) scale(0.98); }
  70%  { transform: translateY(-4px) scale(1.04); }
  100% { transform: translateY(0); }
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

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: color 0.2s, background 0.2s;
  position: relative;
}

.nav-link:hover {
  color: #10B981;
  background: rgba(16, 185, 129, 0.1);
}

.nav-link.router-link-active {
  color: #10B981;
  background: rgba(16, 185, 129, 0.1);
}

.nav-icon {
  font-size: 1.1rem;
}

.navbar-cta {
  flex-shrink: 0;
}

.cta-button {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

.cta-button .shine {
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.1) 100%);
  transform: skewX(-20deg);
  pointer-events: none;
  animation: shine-move 1.2s cubic-bezier(.4,2,.6,1) 0.3s 1;
}

@keyframes shine-move {
  0% {
    left: -75%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    left: 120%;
    opacity: 0;
  }
}

.cta-button:active {
  transform: scale(0.97);
}

.cta-button::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  background: rgba(255,255,255,0.4);
  border-radius: 100%;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
  transition: width 0.4s cubic-bezier(.4,2,.6,1), height 0.4s cubic-bezier(.4,2,.6,1), opacity 0.4s;
}

.cta-button:active::after {
  width: 200%;
  height: 200%;
  opacity: 0.5;
  transition: 0s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 4px;
}

.mobile-menu-toggle span {
  width: 24px;
  height: 2px;
  background: #374151;
  transition: all 0.3s ease;
  border-radius: 1px;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.mobile-nav {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid rgba(16, 185, 129, 0.1);
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-30px) scaleY(0.95);
  opacity: 0;
  pointer-events: none;
  transition: all 0.35s cubic-bezier(.4,2,.6,1);
}

.mobile-nav-open {
  transform: translateY(0) scaleY(1);
  opacity: 1;
  pointer-events: auto;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  margin-bottom: 0.5rem;
}

.mobile-nav-link:hover {
  color: #10B981;
  background: rgba(16, 185, 129, 0.1);
}

.mobile-nav-link.router-link-active {
  color: #10B981;
  background: rgba(16, 185, 129, 0.1);
}

.mobile-cta-button {
  width: 100%;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
  text-decoration: none;
}

.mobile-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .top-bar-container {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }

  .contact-info {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .contact-item {
    font-size: 0.8rem;
  }

  .social-links {
    gap: 0.75rem;
  }

  .social-link {
    width: 28px;
    height: 28px;
  }

  .desktop-nav {
    display: none;
  }

  .navbar-cta {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .mobile-nav {
    display: block;
  }

  .navbar-container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .contact-info {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  .contact-item {
    font-size: 0.75rem;
  }

  .social-links {
    gap: 0.5rem;
  }

  .social-link {
    width: 24px;
    height: 24px;
  }

  .logo-text {
    font-size: 1.25rem;
  }

  .navbar {
    height: 60px;
  }
}
</style>
