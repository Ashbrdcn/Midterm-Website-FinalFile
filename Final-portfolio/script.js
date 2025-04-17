// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize preloader
    initPreloader()
  
    // Initialize particles background
    initParticles()
  
    // Initialize custom cursor
    initCustomCursor()
  
    // Initialize scroll animations
    initScrollAnimations()
  
    // Initialize navigation
    initNavigation()
  
    // Initialize testimonials slider
    initTestimonialsSlider()
  
    // Initialize project filters
    initProjectFilters()
  
    // Initialize contact form
    initContactForm()
  
    // Initialize stats counter
    initStatsCounter()
  
    // Initialize tabs
    initTabs()
  
    // Set current year in footer
    document.getElementById("current-year").textContent = new Date().getFullYear()
  })
  
  // Preloader
  function initPreloader() {
    const preloader = document.querySelector(".preloader")
    const preloaderProgress = document.querySelector(".preloader-progress")
    const preloaderPercentage = document.querySelector(".preloader-percentage")
  
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 1
      if (progress > 100) progress = 100
  
      preloaderProgress.style.width = `${progress}%`
      preloaderPercentage.textContent = `${progress}%`
  
      if (progress === 100) {
        clearInterval(interval)
        setTimeout(() => {
          preloader.classList.add("hidden")
          // Start animations after preloader is hidden
          startInitialAnimations()
        }, 500)
      }
    }, 150)
  }
  
  // Start initial animations after preloader
  function startInitialAnimations() {
    // Animate hero section elements
    document.querySelectorAll(".hero-section .reveal-element").forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("active")
      }, index * 200)
    })
  
    // Start skill bars animation if in viewport
    animateSkillBars()
  }
  
  // Particles background
  function initParticles() {
    // Check if particlesJS is defined before using it
    if (typeof particlesJS !== "undefined") {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#8a2be2",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#8a2be2",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      })
    }
  }
  
  // Custom cursor
  function initCustomCursor() {
    const cursor = document.querySelector(".custom-cursor")
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    })
  
    document.addEventListener("mousedown", () => {
      cursor.classList.add("active")
    })
  
    document.addEventListener("mouseup", () => {
      cursor.classList.remove("active")
    })
  
    // Add special cursor effect for links and buttons
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("link")
      })
  
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("link")
      })
    })
  
    // Hide cursor when leaving window
    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0"
    })
  
    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1"
    })
  }
  
  // Scroll animations
  function initScrollAnimations() {
    const revealElements = document.querySelectorAll(".reveal-element")
  
    function checkReveal() {
      const windowHeight = window.innerHeight
      const revealPoint = 150
  
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
  
        if (elementTop < windowHeight - revealPoint) {
          const delay = element.getAttribute("data-delay") || 0
          setTimeout(() => {
            element.classList.add("active")
          }, delay)
        }
      })
  
      // Animate skill bars when in viewport
      animateSkillBars()
    }
  
    // Initial check
    checkReveal()
  
    // Check on scroll
    window.addEventListener("scroll", checkReveal)
  }
  
  // Animate skill bars
  function animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-progress")
  
    skillBars.forEach((bar) => {
      const windowHeight = window.innerHeight
      const elementTop = bar.getBoundingClientRect().top
      const progress = bar.getAttribute("data-progress") || 0
  
      if (elementTop < windowHeight) {
        bar.style.width = `${progress}%`
      }
    })
  }
  
  // Navigation functionality
  function initNavigation() {
    const header = document.getElementById("header")
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
    const mobileMenu = document.querySelector(".mobile-menu")
    const navLinks = document.querySelectorAll(".nav-link")
    const themeToggle = document.getElementById("theme-toggle")
    const mobileThemeToggle = document.getElementById("mobile-theme-toggle")
  
    // Change header background on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header.style.backgroundColor = "rgba(13, 13, 13, 0.9)"
        header.style.backdropFilter = "blur(10px)"
        header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)"
      } else {
        header.style.backgroundColor = "transparent"
        header.style.backdropFilter = "none"
        header.style.boxShadow = "none"
      }
    })
  
    // Toggle mobile menu
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
      if (mobileMenu.classList.contains("active")) {
        mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>'
      } else {
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>'
      }
    })
  
    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (mobileMenu.classList.contains("active") && !mobileMenu.contains(e.target) && e.target !== mobileMenuToggle) {
        mobileMenu.classList.remove("active")
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>'
      }
    })
  
    // Close mobile menu when clicking a nav link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
        mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>'
      })
    })
  
    // Active nav link on scroll
    function setActiveNavLink() {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")
  
        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active")
            }
          })
        }
      })
  
      // Set home as active if at the top
      if (scrollPosition < 100) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === "#" || link.getAttribute("href") === "#home") {
            link.classList.add("active")
          }
        })
      }
    }
  
    window.addEventListener("scroll", setActiveNavLink)
    setActiveNavLink()
  
    // Theme toggle
    function toggleTheme() {
      if (document.documentElement.classList.contains("light-theme")) {
        document.documentElement.classList.remove("light-theme")
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'
        mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>'
      } else {
        document.documentElement.classList.add("light-theme")
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
        mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i>'
      }
    }
  
    themeToggle.addEventListener("click", toggleTheme)
    mobileThemeToggle.addEventListener("click", toggleTheme)
  }
  
  // Testimonials slider
  function initTestimonialsSlider() {
    const testimonialCards = document.querySelectorAll(".testimonial-card")
    const prevButton = document.querySelector(".testimonial-arrow.prev")
    const nextButton = document.querySelector(".testimonial-arrow.next")
    const dots = document.querySelectorAll(".testimonial-dot")
  
    let currentIndex = 0
  
    function showTestimonial(index) {
      testimonialCards.forEach((card) => card.classList.remove("active"))
      dots.forEach((dot) => dot.classList.remove("active"))
  
      testimonialCards[index].classList.add("active")
      dots[index].classList.add("active")
      currentIndex = index
    }
  
    // Next testimonial
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % testimonialCards.length
      showTestimonial(currentIndex)
    })
  
    // Previous testimonial
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length
      showTestimonial(currentIndex)
    })
  
    // Dot navigation
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showTestimonial(index)
      })
    })
  
    // Auto slide
    let interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonialCards.length
      showTestimonial(currentIndex)
    }, 5000)
  
    // Pause auto slide on hover
    const testimonialSlider = document.querySelector(".testimonials-slider")
    testimonialSlider.addEventListener("mouseenter", () => {
      clearInterval(interval)
    })
  
    testimonialSlider.addEventListener("mouseleave", () => {
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonialCards.length
        showTestimonial(currentIndex)
      }, 5000)
    })
  }
  
  // Project filters
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll(".filter-button")
    const projectCards = document.querySelectorAll(".project-card")
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")
  
        // Filter projects
        const filter = button.getAttribute("data-filter")
  
        projectCards.forEach((card) => {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.display = "block"
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "translateY(0) scale(1)"
            }, 100)
          } else {
            card.style.opacity = "0"
            card.style.transform = "translateY(20px) scale(0.9)"
            setTimeout(() => {
              card.style.display = "none"
            }, 300)
          }
        })
      })
    })
  }
  
  // Contact form
  function initContactForm() {
    const contactForm = document.getElementById("contact-form")
    const submitButton = contactForm.querySelector(".submit-button")
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      // Show loading state
      submitButton.classList.add("loading")
  
      // Simulate form submission
      setTimeout(() => {
        submitButton.classList.remove("loading")
  
        // Show success notification
        showNotification("Success", "Your message has been sent successfully!", "success")
  
        // Reset form
        contactForm.reset()
      }, 2000)
    })
  
    // Add focus effects to form inputs
    const formInputs = contactForm.querySelectorAll("input, textarea")
    formInputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("focused")
      })
  
      input.addEventListener("blur", () => {
        input.parentElement.classList.remove("focused")
      })
    })
  }
  
  // Stats counter
  function initStatsCounter() {
    const statNumbers = document.querySelectorAll(".stat-number")
  
    function animateCounter(el) {
      const target = Number.parseInt(el.getAttribute("data-count"))
      const duration = 2000
      const step = (target / duration) * 10
      let current = 0
  
      const timer = setInterval(() => {
        current += step
        if (current > target) {
          current = target
          clearInterval(timer)
        }
        el.textContent = Math.floor(current)
      }, 10)
    }
  
    function checkCounters() {
      statNumbers.forEach((stat) => {
        const windowHeight = window.innerHeight
        const elementTop = stat.getBoundingClientRect().top
  
        if (elementTop < windowHeight && !stat.classList.contains("counted")) {
          animateCounter(stat)
          stat.classList.add("counted")
        }
      })
    }
  
    window.addEventListener("scroll", checkCounters)
    checkCounters()
  }
  
  // Tabs
  function initTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn")
    const tabPanes = document.querySelectorAll(".tab-pane")
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Update active button
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")
  
        // Show active tab
        const tabId = button.getAttribute("data-tab")
        tabPanes.forEach((pane) => {
          pane.classList.remove("active")
          if (pane.id === tabId) {
            pane.classList.add("active")
          }
        })
      })
    })
  }
  
  // Notification system
  function showNotification(title, message, type = "info") {
    const notificationContainer = document.querySelector(".notification-container")
  
    // Create notification element
    const notification = document.createElement("div")
    notification.className = "notification"
  
    // Set icon based on type
    let icon = "info-circle"
    if (type === "success") icon = "check-circle"
    if (type === "error") icon = "exclamation-circle"
    if (type === "warning") icon = "exclamation-triangle"
  
    notification.innerHTML = `
          <div class="notification-icon">
              <i class="fas fa-${icon}"></i>
          </div>
          <div class="notification-content">
              <div class="notification-title">${title}</div>
              <div class="notification-message">${message}</div>
          </div>
          <div class="notification-close">
              <i class="fas fa-times"></i>
          </div>
      `
  
    // Add to container
    notificationContainer.appendChild(notification)
  
    // Show notification with animation
    setTimeout(() => {
      notification.classList.add("show")
    }, 10)
  
    // Close notification on click
    const closeButton = notification.querySelector(".notification-close")
    closeButton.addEventListener("click", () => {
      notification.classList.remove("show")
      setTimeout(() => {
        notification.remove()
      }, 300)
    })
  
    // Auto close after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.classList.remove("show")
        setTimeout(() => {
          if (notification.parentNode) {
            notification.remove()
          }
        }, 300)
      }
    }, 5000)
  }
  