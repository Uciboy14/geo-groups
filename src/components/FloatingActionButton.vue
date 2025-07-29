<template>
  <div>
    <!-- FAB Toggle Button (always visible, bottom right) -->
    <button
      class="fab-toggle"
      :aria-label="fabVisible ? 'Hide quick actions' : 'Show quick actions'"
      @click="toggleFabVisibility"
      :title="fabVisible ? 'Hide quick actions' : 'Show quick actions'"
    >
      <span v-if="fabVisible">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/></svg>
      </span>
      <span v-else>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.77 21.77 0 0 1 5.06-6.06M1 1l22 22" stroke="currentColor" stroke-width="2"/></svg>
      </span>
    </button>

    <!-- FAB and Actions -->
    <transition name="fab-fade">
      <div v-if="fabVisible" class="fab-container">
        <!-- Main FAB Button -->
        <button
          @click="toggleFab"
          class="fab-main"
          :class="{ 'fab-open': isOpen }"
          :aria-label="isOpen ? 'Close menu' : 'Open menu'"
        >
          <svg v-if="!isOpen" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>

        <!-- FAB Actions -->
        <div class="fab-actions" :class="{ 'fab-actions-open': isOpen }">
          <router-link
            to="/contact"
            class="fab-action"
            :class="{ 'fab-action-visible': isOpen }"
            @click="closeFab"
            :style="{ '--delay': '0ms' }"
          >
            <div class="fab-action-icon">📞</div>
            <span class="fab-action-label">Contact Us</span>
          </router-link>

          <router-link
            to="/geo-property"
            class="fab-action"
            :class="{ 'fab-action-visible': isOpen }"
            @click="closeFab"
            :style="{ '--delay': '100ms' }"
          >
            <div class="fab-action-icon">🏠</div>
            <span class="fab-action-label">Property</span>
          </router-link>

          <router-link
            to="/geo-recycling"
            class="fab-action"
            :class="{ 'fab-action-visible': isOpen }"
            @click="closeFab"
            :style="{ '--delay': '200ms' }"
          >
            <div class="fab-action-icon">♻️</div>
            <span class="fab-action-label">Recycling</span>
          </router-link>

          <router-link
            to="/geo-transport"
            class="fab-action"
            :class="{ 'fab-action-visible': isOpen }"
            @click="closeFab"
            :style="{ '--delay': '300ms' }"
          >
            <div class="fab-action-icon">🚚</div>
            <span class="fab-action-label">Transport</span>
          </router-link>

          <button
            @click="scrollToTop"
            class="fab-action"
            :class="{ 'fab-action-visible': isOpen }"
            :style="{ '--delay': '400ms' }"
          >
            <div class="fab-action-icon">⬆️</div>
            <span class="fab-action-label">Top</span>
          </button>
        </div>

        <!-- Backdrop -->
        <div
          v-if="isOpen"
          @click="closeFab"
          class="fab-backdrop"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isOpen = ref(false)
const fabVisible = ref(true)

// Load FAB visibility from localStorage
onMounted(() => {
  const stored = localStorage.getItem('geo-fab-visible')
  if (stored !== null) {
    fabVisible.value = stored === 'true'
  }
})

const toggleFab = () => {
  isOpen.value = !isOpen.value
}

const closeFab = () => {
  isOpen.value = false
}

const toggleFabVisibility = () => {
  fabVisible.value = !fabVisible.value
  localStorage.setItem('geo-fab-visible', fabVisible.value ? 'true' : 'false')
  if (!fabVisible.value) isOpen.value = false
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  closeFab()
}
</script>

<style scoped>
.fab-toggle {
  position: fixed;
  bottom: 6.5rem;
  right: 2.25rem;
  z-index: 1100;
  background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
  color: #374151;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.2s;
  outline: none;
}
.fab-toggle:hover {
  background: #f3f4f6;
  color: #10b981;
  transform: scale(1.08);
}
.fab-toggle:active {
  background: #d1d5db;
  color: #059669;
  transform: scale(0.95);
}

.fab-fade-enter-active, .fab-fade-leave-active {
  transition: opacity 0.4s cubic-bezier(.4,0,.2,1);
}
.fab-fade-enter-from, .fab-fade-leave-to {
  opacity: 0;
}

.fab-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

.fab-main {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1002;
}

.fab-main:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.fab-main:active {
  transform: scale(0.95);
}

.fab-main.fab-open {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

.fab-main.fab-open:hover {
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
}

.fab-actions {
  position: absolute;
  bottom: 70px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  pointer-events: none;
}
.fab-actions.fab-actions-open {
  pointer-events: auto;
}

.fab-action {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: white;
  border: none;
  border-radius: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateX(20px) scale(0.8);
  pointer-events: auto;
  white-space: nowrap;
}

.fab-action:hover {
  transform: translateX(0) scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  background: #f9fafb;
}

.fab-action-visible {
  opacity: 1;
  transform: translateX(0) scale(1);
  pointer-events: auto;
  transition-delay: var(--delay);
}

.fab-action-icon {
  font-size: 1.25rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fab-action-label {
  font-weight: 600;
}

.fab-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(24, 26, 32, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1001;
  animation: backdropFadeIn 0.3s ease;
}

@keyframes backdropFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Dark mode styles */
:global(.dark) .fab-action {
  background: #23262f;
  color: #f3f4f6;
  border: 1px solid #313442;
}
:global(.dark) .fab-action:hover {
  background: #313442;
}
:global(.dark) .fab-toggle {
  background: linear-gradient(135deg, #23262f 0%, #313442 100%);
  color: #b5b8c5;
}
:global(.dark) .fab-toggle:hover {
  background: #313442;
  color: #10b981;
}
:global(.dark) .fab-toggle:active {
  background: #181a20;
  color: #059669;
}

/* Responsive design */
@media (max-width: 768px) {
  .fab-container {
    bottom: 1rem;
    right: 1rem;
  }
  .fab-toggle {
    bottom: 5.5rem;
    right: 1.25rem;
    width: 40px;
    height: 40px;
  }
  .fab-main {
    width: 48px;
    height: 48px;
  }
  .fab-actions {
    bottom: 60px;
    gap: 0.75rem;
  }
  .fab-action {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }
  .fab-action-label {
    display: none;
  }
  .fab-action-icon {
    font-size: 1.1rem;
  }
}

/* Animation for FAB actions */
.fab-action {
  animation: fabActionSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
@keyframes fabActionSlideIn {
  from {
    opacity: 0;
    transform: translateX(20px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

/* Pulse animation for main FAB */
.fab-main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.3);
  animation: fabPulse 2s infinite;
  z-index: -1;
}
@keyframes fabPulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
.fab-main.fab-open::before {
  animation: none;
}
</style>
