<template>
  <div class="loader-wrapper">
    <div class="loader-container">
      <div class="loader-spinner">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
      </div>
      <div class="loader-text">
        <span class="loading-text">Loading</span>
        <span class="loading-dots">
          <span class="dot">.</span>
          <span class="dot">.</span>
          <span class="dot">.</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease-out;
}

.loader-container {
  text-align: center;
}

.loader-spinner {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
}

.spinner-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-top: 4px solid #10b981;
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
}

.spinner-ring:nth-child(1) {
  animation-delay: 0s;
}

.spinner-ring:nth-child(2) {
  width: 60px;
  height: 60px;
  top: 10px;
  left: 10px;
  border-top-color: #34d399;
  animation-delay: 0.2s;
}

.spinner-ring:nth-child(3) {
  width: 40px;
  height: 40px;
  top: 20px;
  left: 20px;
  border-top-color: #6ee7b7;
  animation-delay: 0.4s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader-text {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
}

.loading-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  color: #1f2937;
  letter-spacing: 0.025em;
}

.loading-dots {
  display: flex;
  gap: 0.125rem;
}

.dot {
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981;
  animation: dotPulse 1.4s infinite;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes dotPulse {
  0%, 60%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  30% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Dark mode support */
.dark .loader-wrapper {
  background: linear-gradient(135deg, #000000 0%, #0f172a 100%);
}

.dark .loading-text {
  color: #f9fafb;
}

.dark .dot {
  color: #34d399;
}

/* Responsive design */
@media (max-width: 768px) {
  .loader-spinner {
    width: 60px;
    height: 60px;
  }

  .spinner-ring:nth-child(2) {
    width: 45px;
    height: 45px;
    top: 7.5px;
    left: 7.5px;
  }

  .spinner-ring:nth-child(3) {
    width: 30px;
    height: 30px;
    top: 15px;
    left: 15px;
  }

  .loading-text {
    font-size: 1rem;
  }
}
</style>
