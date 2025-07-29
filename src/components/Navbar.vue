<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }" :data-mounted="isMounted">
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

      <!-- Theme Toggle -->
      <div class="navbar-theme">
        <ThemeToggle />
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
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

// Define component name to fix linter error
defineOptions({
  name: 'AppNavbar'
})

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isMounted = ref(false)
const showShine = ref(true)
const triggerShine = () => {
  if (showShine.value) return; // Prevent duplicate shine
  showShine.value = true
  setTimeout(() => { showShine.value = false }, 1200)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
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
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  backdrop-filter: blur(10px);
  border-bottom: none;
  box-shadow: none;
  transition: background 0.3s, box-shadow 0.3s, border-bottom 0.3s;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid rgba(16, 185, 129, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.10);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
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

/* Remove the animated underline effect */
/* Deleted .nav-link::after and related hover/active selectors */

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

.navbar-theme {
  flex-shrink: 0;
  margin-right: 1rem;
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
}

.mobile-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .navbar-theme {
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
  .logo-text {
    font-size: 1.25rem;
  }

  .navbar-container {
    height: 60px;
  }
}
</style>
