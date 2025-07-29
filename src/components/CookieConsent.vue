<template>
  <transition name="fade">
    <div v-if="show" class="cookie-consent">
      <div class="cookie-content">
        <div class="cookie-icon">🍪</div>
        <div class="cookie-message">
          This website uses cookies to ensure you get the best experience. By clicking "Accept", you consent to the use of cookies in accordance with our <a href="/privacy" class="cookie-learn-more">Privacy Policy</a>.
        </div>
        <div class="cookie-actions">
          <button class="cookie-accept" @click="acceptCookies">Accept</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const show = ref(false)
const CONSENT_KEY = 'cookie_consent_accepted'

onMounted(() => {
  if (localStorage.getItem(CONSENT_KEY)) return
  setTimeout(() => {
    show.value = true
  }, 1500) // Show after 1.5 seconds
})

function acceptCookies() {
  localStorage.setItem(CONSENT_KEY, 'true')
  show.value = false
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.cookie-consent {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 2rem;
  z-index: 2000;
  display: flex;
  justify-content: center;
  pointer-events: none;
}
.cookie-content {
  background: #f9fafb;
  color: #222;
  border-radius: 1.25rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  padding: 1.5rem 2.5rem 1.25rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
  min-width: 340px;
  max-width: 95vw;
  pointer-events: auto;
  border: 1px solid #e5e7eb;
}
.cookie-icon {
  font-size: 2.2rem;
  margin-bottom: 0.2rem;
}
.cookie-message {
  font-size: 1.05rem;
  text-align: center;
  color: #374151;
  line-height: 1.6;
}
.cookie-actions {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 0.2rem;
}
.cookie-accept {
  background: linear-gradient(90deg, #6366f1 0%, #06b6d4 100%);
  color: #fff;
  border: none;
  border-radius: 2rem;
  padding: 0.55rem 2.1rem;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(99,102,241,0.08);
  transition: background 0.2s, box-shadow 0.2s;
}
.cookie-accept:hover {
  background: linear-gradient(90deg, #06b6d4 0%, #6366f1 100%);
  box-shadow: 0 4px 16px rgba(6,182,212,0.13);
}
.cookie-learn-more {
  color: #06b6d4;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.2s;
}
.cookie-learn-more:hover {
  color: #6366f1;
}
</style>
