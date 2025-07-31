<template>
  <button
    @click="toggleTheme"
    class="theme-toggle"
    :class="{ 'dark': isDark }"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <div class="toggle-track">
      <div class="toggle-thumb">
        <svg v-if="!isDark" class="sun-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <svg v-else class="moon-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

const toggleTheme = () => {
  themeStore.toggleTheme()
}
</script>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.theme-toggle:hover {
  background: rgba(16, 185, 129, 0.1);
  transform: scale(1.05);
}

.theme-toggle:active {
  transform: scale(0.95);
}

.toggle-track {
  width: 48px;
  height: 24px;
  background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
  border-radius: 12px;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
}

.dark .toggle-track {
  background-color: black;
}

.toggle-thumb {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #f59e0b;
}

.dark .toggle-thumb {
  left: calc(100% - 22px);
  background: #1f2937;
  color: #fbbf24;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.sun-icon, .moon-icon {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sun-icon {
  opacity: 1;
  transform: rotate(0deg);
}

.dark .sun-icon {
  opacity: 0;
  transform: rotate(90deg);
}

.moon-icon {
  opacity: 0;
  transform: rotate(-90deg);
}

.dark .moon-icon {
  opacity: 1;
  transform: rotate(0deg);
}

/* Ripple effect */
.theme-toggle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(16, 185, 129, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
}

.theme-toggle:active::before {
  width: 100%;
  height: 100%;
  transition: 0s;
}

/* Dark mode styles for the toggle itself */
:global(.dark) .theme-toggle {
  color: #f3f4f6;
}

:global(.dark) .theme-toggle:hover {
  background: rgba(16, 185, 129, 0.2);
}

@media (max-width: 768px) {
  .toggle-track {
    width: 44px;
    height: 22px;
  }

  .toggle-thumb {
    width: 18px;
    height: 18px;
  }

  .dark .toggle-thumb {
    left: calc(100% - 20px);
  }
}
</style>
