// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  lucide.createIcons()

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Initialize particle background
  initParticleBackground()

  // Initialize glitch text effect
  initGlitchText()

  // Initialize tech tree tabs
  initTechTree()

  // Initialize scroll effects
  initScrollEffects()
})

// Particle Background
function initParticleBackground() {
  const canvas = document.getElementById("particle-canvas")
  if (!canvas) return

  const ctx = canvas.getContext("2d")

  // Set canvas dimensions
  const setCanvasDimensions = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  setCanvasDimensions()
  window.addEventListener("resize", setCanvasDimensions)

  // Particle class
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 3 + 0.5
      this.speedX = (Math.random() - 0.5) * 0.5
      this.speedY = (Math.random() - 0.5) * 0.5
      this.color = "#8a2be2" // Primary color
      this.alpha = Math.random() * 0.5 + 0.1
    }

    update() {
      this.x += this.speedX
      this.y += this.speedY

      // Wrap around edges
      if (this.x < 0) this.x = canvas.width
      if (this.x > canvas.width) this.x = 0
      if (this.y < 0) this.y = canvas.height
      if (this.y > canvas.height) this.y = 0
    }

    draw() {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.globalAlpha = this.alpha
      ctx.fill()
    }
  }

  // Create particles
  const particleCount = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 10000))
  const particles = []

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }

  // Animation loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update and draw particles
    particles.forEach((particle) => {
      particle.update()
      particle.draw()
    })

    // Draw connections
    ctx.globalAlpha = 0.05
    ctx.strokeStyle = "#8a2be2"
    ctx.lineWidth = 0.5

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }

    requestAnimationFrame(animate)
  }

  animate()
}

// Glitch Text Effect
function initGlitchText() {
  const glitchText = document.querySelector(".glitch-text")
  if (!glitchText) return

  // Set data-text attribute
  const text = glitchText.textContent
  glitchText.setAttribute("data-text", text)

  // Initial glitch
  setTimeout(() => {
    glitchText.classList.add("active")
    setTimeout(() => glitchText.classList.remove("active"), 200)
  }, 1000)

  // Periodic glitching
  setInterval(() => {
    glitchText.classList.add("active")
    setTimeout(() => glitchText.classList.remove("active"), 200)
  }, 3000)
}

// Tech Tree Tabs
function initTechTree() {
  const techCategories = document.querySelectorAll(".tech-category")
  const techGroups = document.querySelectorAll(".tech-group")

  techCategories.forEach((category) => {
    category.addEventListener("click", () => {
      const categoryId = category.getAttribute("data-category")

      // Update active category
      techCategories.forEach((cat) => cat.classList.remove("active"))
      category.classList.add("active")

      // Update active tech group
      techGroups.forEach((group) => {
        if (group.getAttribute("data-group") === categoryId) {
          group.classList.add("active")
        } else {
          group.classList.remove("active")
        }
      })
    })
  })
}

// Scroll Effects
function initScrollEffects() {
  const nav = document.getElementById("main-nav")

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled")
    } else {
      nav.classList.remove("scrolled")
    }
  })

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: "smooth",
        })
      }
    })
  })

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll(".project-card, .stat-card, .tech-card, .experience-card")

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight
    const revealPoint = 150

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < windowHeight - revealPoint) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial styles
  revealElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  })

  // Run on load and scroll
  window.addEventListener("load", revealOnScroll)
  window.addEventListener("scroll", revealOnScroll)
}

// Declare lucide variable (assuming it's a global object provided by a library)
const lucide = window.lucide || {}
