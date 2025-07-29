<template>
  <div class="contact-wizard">
    <div class="wizard-header">
      <h3>Contact Us</h3>
      <p>Let's get started with your inquiry</p>

      <!-- Progress Bar -->
      <div class="progress-container">
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
          ></div>
        </div>
        <div class="progress-text">
          Step {{ currentStep }} of {{ totalSteps }}
        </div>
      </div>
    </div>

    <div class="wizard-content">
      <!-- Step 1: Basic Information -->
      <div v-if="currentStep === 1" class="wizard-step" :class="{ 'step-active': currentStep === 1 }">
        <h4>Basic Information</h4>
        <p>Tell us about yourself</p>

        <div class="form-grid">
          <div class="form-group">
            <label for="firstName">First Name *</label>
            <input
              id="firstName"
              v-model="form.firstName"
              type="text"
              required
              class="form-input"
              :class="{ 'error': errors.firstName }"
              @blur="validateField('firstName')"
            />
            <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
          </div>

          <div class="form-group">
            <label for="lastName">Last Name *</label>
            <input
              id="lastName"
              v-model="form.lastName"
              type="text"
              required
              class="form-input"
              :class="{ 'error': errors.lastName }"
              @blur="validateField('lastName')"
            />
            <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
          </div>

          <div class="form-group full-width">
            <label for="email">Email Address *</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="form-input"
              :class="{ 'error': errors.email }"
              @blur="validateField('email')"
            />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>

          <div class="form-group full-width">
            <label for="phone">Phone Number</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              class="form-input"
              :class="{ 'error': errors.phone }"
              @blur="validateField('phone')"
            />
            <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
          </div>
        </div>
      </div>

      <!-- Step 2: Company Information -->
      <div v-if="currentStep === 2" class="wizard-step" :class="{ 'step-active': currentStep === 2 }">
        <h4>Company Information</h4>
        <p>Tell us about your organization</p>

        <div class="form-grid">
          <div class="form-group full-width">
            <label for="company">Company Name</label>
            <input
              id="company"
              v-model="form.company"
              type="text"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="industry">Industry</label>
            <select id="industry" v-model="form.industry" class="form-input">
              <option value="">Select Industry</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="education">Education</option>
              <option value="finance">Finance</option>
              <option value="real-estate">Real Estate</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="companySize">Company Size</label>
            <select id="companySize" v-model="form.companySize" class="form-input">
              <option value="">Select Size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-1000">201-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Step 3: Service Selection -->
      <div v-if="currentStep === 3" class="wizard-step" :class="{ 'step-active': currentStep === 3 }">
        <h4>Service Selection</h4>
        <p>What services are you interested in?</p>

        <div class="service-selection">
          <div
            v-for="service in services"
            :key="service.id"
            class="service-option"
            :class="{ 'selected': form.selectedServices.includes(service.id) }"
            @click="toggleService(service.id)"
          >
            <div class="service-icon">{{ service.icon }}</div>
            <div class="service-info">
              <h5>{{ service.name }}</h5>
              <p>{{ service.description }}</p>
            </div>
            <div class="service-checkbox">
              <div class="checkbox" :class="{ 'checked': form.selectedServices.includes(service.id) }">
                <svg v-if="form.selectedServices.includes(service.id)" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 4: Project Details -->
      <div v-if="currentStep === 4" class="wizard-step" :class="{ 'step-active': currentStep === 4 }">
        <h4>Project Details</h4>
        <p>Tell us more about your project</p>

        <div class="form-grid">
          <div class="form-group full-width">
            <label for="projectType">Project Type</label>
            <select id="projectType" v-model="form.projectType" class="form-input">
              <option value="">Select Project Type</option>
              <option value="new-implementation">New Implementation</option>
              <option value="upgrade">Upgrade/Expansion</option>
              <option value="consultation">Consultation</option>
              <option value="maintenance">Maintenance</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group full-width">
            <label for="timeline">Timeline</label>
            <select id="timeline" v-model="form.timeline" class="form-input">
              <option value="">Select Timeline</option>
              <option value="immediate">Immediate (1-2 weeks)</option>
              <option value="short-term">Short Term (1-3 months)</option>
              <option value="medium-term">Medium Term (3-6 months)</option>
              <option value="long-term">Long Term (6+ months)</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>

          <div class="form-group full-width">
            <label for="budget">Budget Range</label>
            <select id="budget" v-model="form.budget" class="form-input">
              <option value="">Select Budget Range</option>
              <option value="under-10k">Under $10,000</option>
              <option value="10k-50k">$10,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k-500k">$100,000 - $500,000</option>
              <option value="500k+">$500,000+</option>
              <option value="discuss">Let's Discuss</option>
            </select>
          </div>

          <div class="form-group full-width">
            <label for="message">Project Description *</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              required
              class="form-input"
              :class="{ 'error': errors.message }"
              @blur="validateField('message')"
              placeholder="Please describe your project requirements, goals, and any specific needs..."
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>
        </div>
      </div>

      <!-- Step 5: Review & Submit -->
      <div v-if="currentStep === 5" class="wizard-step" :class="{ 'step-active': currentStep === 5 }">
        <h4>Review & Submit</h4>
        <p>Please review your information before submitting</p>

        <div class="review-section">
          <div class="review-group">
            <h5>Personal Information</h5>
            <div class="review-item">
              <span class="review-label">Name:</span>
              <span class="review-value">{{ form.firstName }} {{ form.lastName }}</span>
            </div>
            <div class="review-item">
              <span class="review-label">Email:</span>
              <span class="review-value">{{ form.email }}</span>
            </div>
            <div class="review-item" v-if="form.phone">
              <span class="review-label">Phone:</span>
              <span class="review-value">{{ form.phone }}</span>
            </div>
          </div>

          <div class="review-group" v-if="form.company">
            <h5>Company Information</h5>
            <div class="review-item">
              <span class="review-label">Company:</span>
              <span class="review-value">{{ form.company }}</span>
            </div>
            <div class="review-item" v-if="form.industry">
              <span class="review-label">Industry:</span>
              <span class="review-value">{{ getDisplayValue('industry', form.industry) }}</span>
            </div>
            <div class="review-item" v-if="form.companySize">
              <span class="review-label">Size:</span>
              <span class="review-value">{{ form.companySize }}</span>
            </div>
          </div>

          <div class="review-group">
            <h5>Services & Project</h5>
            <div class="review-item">
              <span class="review-label">Services:</span>
              <span class="review-value">{{ getSelectedServicesText() }}</span>
            </div>
            <div class="review-item" v-if="form.projectType">
              <span class="review-label">Project Type:</span>
              <span class="review-value">{{ getDisplayValue('projectType', form.projectType) }}</span>
            </div>
            <div class="review-item" v-if="form.timeline">
              <span class="review-label">Timeline:</span>
              <span class="review-value">{{ getDisplayValue('timeline', form.timeline) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="wizard-navigation">
      <button
        v-if="currentStep > 1"
        @click="previousStep"
        class="nav-btn prev-btn"
        type="button"
      >
        ← Previous
      </button>

      <button
        v-if="currentStep < totalSteps"
        @click="nextStep"
        class="nav-btn next-btn"
        type="button"
        :disabled="!canProceed"
      >
        Next →
      </button>

      <button
        v-if="currentStep === totalSteps"
        @click="submitForm"
        class="nav-btn submit-btn"
        type="button"
        :disabled="isSubmitting"
      >
        <span v-if="!isSubmitting">Submit Inquiry</span>
        <span v-else class="loading-text">Submitting...</span>
        <div v-if="isSubmitting" class="loading-spinner"></div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  industry: string
  companySize: string
  selectedServices: string[]
  projectType: string
  timeline: string
  budget: string
  message: string
}

interface Service {
  id: string
  name: string
  description: string
  icon: string
}

const currentStep = ref(1)
const totalSteps = 5
const isSubmitting = ref(false)

const form = ref<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  industry: '',
  companySize: '',
  selectedServices: [],
  projectType: '',
  timeline: '',
  budget: '',
  message: ''
})

const errors = ref<Record<string, string>>({})

const services: Service[] = [
  {
    id: 'property',
    name: 'Geo Property',
    description: 'Property management and sustainable development',
    icon: '🏠'
  },
  {
    id: 'recycling',
    name: 'Geo Recycling',
    description: 'Waste management and recycling solutions',
    icon: '♻️'
  },
  {
    id: 'transport',
    name: 'Geo Transport',
    description: 'Sustainable transportation and logistics',
    icon: '🚚'
  }
]

const canProceed = computed(() => {
  switch (currentStep.value) {
    case 1:
      return form.value.firstName && form.value.lastName && form.value.email && !hasErrors(['firstName', 'lastName', 'email'])
    case 2:
      return true // Company info is optional
    case 3:
      return form.value.selectedServices.length > 0
    case 4:
      return form.value.message && !hasErrors(['message'])
    default:
      return true
  }
})

const hasErrors = (fields: string[]) => {
  return fields.some(field => errors.value[field as keyof FormData])
}

const validateField = (field: keyof FormData) => {
  errors.value[field] = ''

  switch (field) {
    case 'firstName':
      if (!form.value.firstName.trim()) {
        errors.value.firstName = 'First name is required'
      }
      break
    case 'lastName':
      if (!form.value.lastName.trim()) {
        errors.value.lastName = 'Last name is required'
      }
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!form.value.email) {
        errors.value.email = 'Email is required'
      } else if (!emailRegex.test(form.value.email)) {
        errors.value.email = 'Please enter a valid email address'
      }
      break
    case 'phone':
      if (form.value.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(form.value.phone.replace(/\s/g, ''))) {
        errors.value.phone = 'Please enter a valid phone number'
      }
      break
    case 'message':
      if (!form.value.message.trim()) {
        errors.value.message = 'Project description is required'
      } else if (form.value.message.length < 20) {
        errors.value.message = 'Please provide more details (at least 20 characters)'
      }
      break
  }
}

const nextStep = () => {
  if (canProceed.value) {
    currentStep.value++
  }
}

const previousStep = () => {
  currentStep.value--
}

const toggleService = (serviceId: string) => {
  const index = form.value.selectedServices.indexOf(serviceId)
  if (index > -1) {
    form.value.selectedServices.splice(index, 1)
  } else {
    form.value.selectedServices.push(serviceId)
  }
}

const getDisplayValue = (field: string, value: string) => {
  const displayValues: Record<string, Record<string, string>> = {
    industry: {
      'technology': 'Technology',
      'healthcare': 'Healthcare',
      'manufacturing': 'Manufacturing',
      'retail': 'Retail',
      'education': 'Education',
      'finance': 'Finance',
      'real-estate': 'Real Estate',
      'other': 'Other'
    },
    projectType: {
      'new-implementation': 'New Implementation',
      'upgrade': 'Upgrade/Expansion',
      'consultation': 'Consultation',
      'maintenance': 'Maintenance',
      'other': 'Other'
    },
    timeline: {
      'immediate': 'Immediate (1-2 weeks)',
      'short-term': 'Short Term (1-3 months)',
      'medium-term': 'Medium Term (3-6 months)',
      'long-term': 'Long Term (6+ months)',
      'flexible': 'Flexible'
    }
  }

  return displayValues[field]?.[value] || value
}

const getSelectedServicesText = () => {
  return form.value.selectedServices
    .map(id => services.find(s => s.id === id)?.name)
    .filter(Boolean)
    .join(', ')
}

const submitForm = async () => {
  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    companySize: '',
    selectedServices: [],
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  }

  currentStep.value = 1
  isSubmitting.value = false

  // Show success message (you can implement a toast notification here)
  alert('Thank you! Your inquiry has been submitted successfully. We\'ll get back to you within 24 hours.')
}

onMounted(() => {
  // Pre-fill form if URL has service parameter
  const urlParams = new URLSearchParams(window.location.search)
  const service = urlParams.get('service')
  if (service && services.some(s => s.id === service)) {
    form.value.selectedServices = [service]
  }
})
</script>

<style scoped>
.contact-wizard {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(16, 185, 129, 0.1);
}

.wizard-header {
  text-align: center;
  margin-bottom: 2rem;
}

.wizard-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.wizard-header p {
  color: #6b7280;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.progress-container {
  max-width: 400px;
  margin: 0 auto;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  border-radius: 4px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.progress-text {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.wizard-content {
  margin-bottom: 2rem;
}

.wizard-step {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.wizard-step.step-active {
  opacity: 1;
  transform: translateX(0);
}

.wizard-step h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.wizard-step p {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.form-input {
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.form-input:focus {
  outline: none;
  border-color: #10B981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.form-input.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.service-selection {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-option {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
}

.service-option:hover {
  border-color: #10B981;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.1);
}

.service-option.selected {
  border-color: #10B981;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
}

.service-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.service-info {
  flex: 1;
}

.service-info h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
}

.service-info p {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.service-checkbox {
  margin-left: 1rem;
}

.checkbox {
  width: 24px;
  height: 24px;
  border: 2px solid #d1d5db;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: white;
}

.checkbox.checked {
  background: #10B981;
  border-color: #10B981;
  color: white;
}

.review-section {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.review-group {
  margin-bottom: 1.5rem;
}

.review-group:last-child {
  margin-bottom: 0;
}

.review-group h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.review-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0;
}

.review-label {
  font-weight: 600;
  color: #374151;
  min-width: 120px;
}

.review-value {
  color: #6b7280;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
}

.wizard-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.nav-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  position: relative;
  overflow: hidden;
}

.prev-btn {
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
}

.prev-btn:hover {
  background: #e5e7eb;
  transform: translateY(-2px);
}

.next-btn, .submit-btn {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.next-btn:hover:not(:disabled),
.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.nav-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

.loading-spinner {
  width: 16px;
  height: 16px;
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

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .wizard-navigation {
    flex-direction: column;
  }

  .nav-btn {
    width: 100%;
  }

  .review-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .review-value {
    text-align: left;
    margin-left: 0;
    margin-top: 0.25rem;
  }
}

/* Dark mode styles */
:global(.dark) .contact-wizard {
  background: #1f2937;
  border-color: #374151;
}

:global(.dark) .wizard-header h3,
:global(.dark) .wizard-step h4 {
  color: #f9fafb;
}

:global(.dark) .form-input {
  background: #374151;
  border-color: #4b5563;
  color: #f9fafb;
}

:global(.dark) .service-option {
  background: #374151;
  border-color: #4b5563;
}

:global(.dark) .service-option.selected {
  background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  border-color: #10B981;
}

:global(.dark) .review-section {
  background: #374151;
  border-color: #4b5563;
}

:global(.dark) .review-group h5 {
  color: #f9fafb;
  border-color: #4b5563;
}

:global(.dark) .prev-btn {
  background: #374151;
  border-color: #4b5563;
  color: #f9fafb;
}

:global(.dark) .prev-btn:hover {
  background: #4b5563;
}
</style>
