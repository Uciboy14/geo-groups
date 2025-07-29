import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  // Initialize theme from localStorage only
  const initTheme = () => {
    const savedTheme = localStorage.getItem('geo-groups-theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // Default to light mode
      isDark.value = false
    }
    applyTheme()
  }

  // Toggle theme
  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme()
  }

  // Apply theme to document
  const applyTheme = () => {
    const root = document.documentElement
    if (isDark.value) {
      root.classList.add('dark')
      localStorage.setItem('geo-groups-theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('geo-groups-theme', 'light')
    }
  }

  return {
    isDark,
    initTheme,
    toggleTheme,
    applyTheme,
  }
})
