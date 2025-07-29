<template>
  <div class="particle-container" ref="containerRef" @mousemove="handleMouseMove">
    <canvas ref="canvasRef" class="particle-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
  maxLife: number
}

const canvasRef = ref<HTMLCanvasElement>()
const containerRef = ref<HTMLDivElement>()
let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D
let animationId: number
let particles: Particle[] = []
let mouseX = 0
let mouseY = 0
let containerWidth = 0
let containerHeight = 0

const colors = [
  '#10B981', // Green
  '#3B82F6', // Blue
  '#8B5CF6', // Purple
  '#F59E0B', // Amber
  '#EF4444'  // Red
]

const createParticle = (x: number, y: number, isMouse = false): Particle => {
  const size = isMouse ? Math.random() * 8 + 4 : Math.random() * 4 + 2
  const speed = isMouse ? Math.random() * 3 + 2 : Math.random() * 2 + 0.5
  const angle = Math.random() * Math.PI * 2

  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    size,
    opacity: Math.random() * 0.8 + 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
    life: 1,
    maxLife: Math.random() * 100 + 50
  }
}

const initParticles = () => {
  particles = []
  for (let i = 0; i < 50; i++) {
    particles.push(createParticle(
      Math.random() * containerWidth,
      Math.random() * containerHeight
    ))
  }
}

const handleMouseMove = (event: MouseEvent) => {
  const rect = canvas.getBoundingClientRect()
  mouseX = event.clientX - rect.left
  mouseY = event.clientY - rect.top

  // Create particles at mouse position
  if (Math.random() < 0.3) {
    particles.push(createParticle(mouseX, mouseY, true))
  }
}

const updateParticles = () => {
  particles.forEach((particle, index) => {
    // Update position
    particle.x += particle.vx
    particle.y += particle.vy

    // Add some gravity
    particle.vy += 0.02

    // Bounce off edges
    if (particle.x <= 0 || particle.x >= containerWidth) {
      particle.vx *= -0.8
    }
    if (particle.y <= 0 || particle.y >= containerHeight) {
      particle.vy *= -0.8
    }

    // Keep particles in bounds
    particle.x = Math.max(0, Math.min(containerWidth, particle.x))
    particle.y = Math.max(0, Math.min(containerHeight, particle.y))

    // Update life
    particle.life += 1

    // Remove old particles
    if (particle.life > particle.maxLife) {
      particles.splice(index, 1)
      // Add new particle to maintain count
      particles.push(createParticle(
        Math.random() * containerWidth,
        Math.random() * containerHeight
      ))
    }

    // Mouse interaction
    const dx = mouseX - particle.x
    const dy = mouseY - particle.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance < 100) {
      const force = (100 - distance) / 100
      particle.vx += (dx / distance) * force * 0.1
      particle.vy += (dy / distance) * force * 0.1
    }
  })
}

const drawParticles = () => {
  ctx.clearRect(0, 0, containerWidth, containerHeight)

  particles.forEach(particle => {
    const alpha = particle.opacity * (1 - particle.life / particle.maxLife)

    ctx.save()
    ctx.globalAlpha = alpha
    ctx.fillStyle = particle.color

    // Create gradient for particles
    const gradient = ctx.createRadialGradient(
      particle.x, particle.y, 0,
      particle.x, particle.y, particle.size
    )
    gradient.addColorStop(0, particle.color)
    gradient.addColorStop(1, 'transparent')

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fill()

    ctx.restore()
  })

  // Draw connections between nearby particles
  ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)'
  ctx.lineWidth = 1

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 100) {
        const alpha = (100 - distance) / 100 * 0.3
        ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }
}

const animate = () => {
  updateParticles()
  drawParticles()
  animationId = requestAnimationFrame(animate)
}

const resizeCanvas = () => {
  if (!canvas || !containerRef.value) return

  containerWidth = containerRef.value.offsetWidth
  containerHeight = containerRef.value.offsetHeight

  canvas.width = containerWidth
  canvas.height = containerHeight

  // Reinitialize particles after resize
  initParticles()
}

onMounted(() => {
  if (!canvasRef.value || !containerRef.value) return

  canvas = canvasRef.value
  ctx = canvas.getContext('2d')!

  resizeCanvas()
  initParticles()
  animate()

  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<style scoped>
.particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.particle-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

/* Dark mode adjustments */
:global(.dark) .particle-container {
  opacity: 0.3;
}
</style>
