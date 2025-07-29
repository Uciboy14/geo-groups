<template>
  <div class="recycling-calculator">
    <div class="calculator-header">
      <h3>🌱 Recycling Impact Calculator</h3>
      <p>See how your recycling efforts make a difference</p>
    </div>

    <div class="calculator-content">
      <!-- Input Section -->
      <div class="input-section">
        <div class="waste-inputs">
          <div class="input-group" v-for="(item, index) in wasteItems" :key="index">
            <label :for="`waste-${index}`">{{ item.name }}</label>
            <div class="input-wrapper">
              <input
                :id="`waste-${index}`"
                v-model.number="item.amount"
                type="number"
                min="0"
                step="0.1"
                class="waste-input"
                @input="calculateImpact"
                @focus="animateInput"
              />
              <span class="unit">{{ item.unit }}</span>
            </div>
          </div>
        </div>

        <button @click="calculateImpact" class="calculate-btn" :class="{ 'calculating': isCalculating }">
          <span v-if="!isCalculating">Calculate Impact</span>
          <span v-else class="loading-text">Calculating...</span>
          <div v-if="isCalculating" class="loading-spinner"></div>
        </button>
      </div>

      <!-- Results Section -->
      <div class="results-section" v-if="showResults" :class="{ 'results-visible': showResults }">
        <h4>Your Environmental Impact</h4>

        <div class="impact-grid">
          <div class="impact-card" v-for="(impact, index) in impactResults" :key="index">
            <div class="impact-icon">{{ impact.icon }}</div>
            <div class="impact-value">{{ impact.value }}</div>
            <div class="impact-label">{{ impact.label }}</div>
            <div class="impact-description">{{ impact.description }}</div>
          </div>
        </div>

        <div class="savings-summary">
          <div class="savings-item">
            <span class="savings-label">CO₂ Saved:</span>
            <span class="savings-value">{{ co2Saved }} kg</span>
          </div>
          <div class="savings-item">
            <span class="savings-label">Trees Equivalent:</span>
            <span class="savings-value">{{ treesEquivalent }} trees</span>
          </div>
          <div class="savings-item">
            <span class="savings-label">Energy Saved:</span>
            <span class="savings-value">{{ energySaved }} kWh</span>
          </div>
        </div>

        <div class="action-buttons">
          <button @click="resetCalculator" class="reset-btn">Reset Calculator</button>
          <button @click="schedulePickup" class="schedule-btn">Schedule Pickup</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface WasteItem {
  name: string
  amount: number
  unit: string
  co2PerUnit: number
  energyPerUnit: number
}

interface ImpactResult {
  icon: string
  value: string
  label: string
  description: string
}

const wasteItems = ref<WasteItem[]>([
  { name: 'Paper & Cardboard', amount: 0, unit: 'kg', co2PerUnit: 0.85, energyPerUnit: 4.5 },
  { name: 'Plastic Bottles', amount: 0, unit: 'kg', co2PerUnit: 2.1, energyPerUnit: 6.8 },
  { name: 'Glass Containers', amount: 0, unit: 'kg', co2PerUnit: 0.3, energyPerUnit: 2.1 },
  { name: 'Aluminum Cans', amount: 0, unit: 'kg', co2PerUnit: 8.1, energyPerUnit: 14.0 },
  { name: 'Steel Cans', amount: 0, unit: 'kg', co2PerUnit: 1.5, energyPerUnit: 2.8 },
  { name: 'Organic Waste', amount: 0, unit: 'kg', co2PerUnit: 0.5, energyPerUnit: 1.2 }
])

const isCalculating = ref(false)
const showResults = ref(false)

const totalWaste = computed(() => {
  return wasteItems.value.reduce((sum, item) => sum + (item.amount || 0), 0)
})

const co2Saved = computed(() => {
  return wasteItems.value.reduce((sum, item) => {
    return sum + ((item.amount || 0) * item.co2PerUnit)
  }, 0)
})

const energySaved = computed(() => {
  return wasteItems.value.reduce((sum, item) => {
    return sum + ((item.amount || 0) * item.energyPerUnit)
  }, 0)
})

const treesEquivalent = computed(() => {
  // 1 tree absorbs about 22kg of CO2 per year
  return Math.round(co2Saved.value / 22)
})

const impactResults = computed<ImpactResult[]>(() => [
  {
    icon: '🌳',
    value: treesEquivalent.value.toString(),
    label: 'Trees Saved',
    description: 'Equivalent trees that would absorb this CO₂'
  },
  {
    icon: '⚡',
    value: Math.round(energySaved.value).toString(),
    label: 'kWh Saved',
    description: 'Energy saved through recycling'
  },
  {
    icon: '🚗',
    value: Math.round(co2Saved.value / 0.4).toString(),
    label: 'Car Miles',
    description: 'Equivalent car miles avoided'
  },
  {
    icon: '🏠',
    value: Math.round(energySaved.value / 30).toString(),
    label: 'Home Days',
    description: 'Days of home energy saved'
  }
])

const calculateImpact = async () => {
  if (totalWaste.value === 0) return

  isCalculating.value = true
  showResults.value = false

  // Simulate calculation delay
  await new Promise(resolve => setTimeout(resolve, 1500))

  isCalculating.value = false
  showResults.value = true
}

const resetCalculator = () => {
  wasteItems.value.forEach(item => item.amount = 0)
  showResults.value = false
}

const schedulePickup = () => {
  // Navigate to contact form with pre-filled recycling service
  window.location.href = '/contact?service=recycling'
}

const animateInput = (event: Event) => {
  const target = event.target as HTMLElement
  target.classList.add('input-focused')
  setTimeout(() => target.classList.remove('input-focused'), 300)
}
</script>

<style scoped>
.recycling-calculator {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(16, 185, 129, 0.1);
}

.calculator-header {
  text-align: center;
  margin-bottom: 2rem;
}

.calculator-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.calculator-header p {
  color: #6b7280;
  font-size: 1rem;
}

.input-section {
  margin-bottom: 2rem;
}

.waste-inputs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  flex-direction: column;
}

.input-group label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.waste-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.waste-input:focus {
  outline: none;
  border-color: #10B981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  transform: translateY(-1px);
}

.waste-input.input-focused {
  animation: inputPulse 0.3s ease;
}

@keyframes inputPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}

.unit {
  position: absolute;
  right: 0.75rem;
  color: #6b7280;
  font-size: 0.875rem;
  pointer-events: none;
}

.calculate-btn {
  width: 100%;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  position: relative;
  overflow: hidden;
}

.calculate-btn:hover:not(.calculating) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.calculate-btn.calculating {
  cursor: not-allowed;
  opacity: 0.8;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

@keyframes spin {
  0% { transform: translateY(-50%) rotate(0deg); }
  100% { transform: translateY(-50%) rotate(360deg); }
}

.results-section {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.results-section.results-visible {
  opacity: 1;
  transform: translateY(0);
}

.results-section h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  text-align: center;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.impact-card {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  padding: 1.5rem;
  border-radius: 0.75rem;
  text-align: center;
  border: 1px solid rgba(16, 185, 129, 0.1);
  transition: all 0.3s ease;
  animation: cardSlideIn 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

.impact-card:nth-child(1) { animation-delay: 0.1s; }
.impact-card:nth-child(2) { animation-delay: 0.2s; }
.impact-card:nth-child(3) { animation-delay: 0.3s; }
.impact-card:nth-child(4) { animation-delay: 0.4s; }

@keyframes cardSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.impact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.15);
}

.impact-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.impact-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #10B981;
  margin-bottom: 0.25rem;
}

.impact-label {
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.impact-description {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.4;
}

.savings-summary {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #e5e7eb;
}

.savings-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.savings-item:last-child {
  border-bottom: none;
}

.savings-label {
  font-weight: 600;
  color: #374151;
}

.savings-value {
  font-weight: 700;
  color: #10B981;
  font-size: 1.1rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.reset-btn, .schedule-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.reset-btn {
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
}

.reset-btn:hover {
  background: #e5e7eb;
  transform: translateY(-2px);
}

.schedule-btn {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.schedule-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

@media (max-width: 768px) {
  .waste-inputs {
    grid-template-columns: 1fr;
  }

  .impact-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .action-buttons {
    flex-direction: column;
  }

  .reset-btn, .schedule-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .impact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
