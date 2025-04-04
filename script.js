// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Navigation menu toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      hamburger.classList.toggle("active")
    })
  
    // Close menu when clicking on a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active")
        hamburger.classList.remove("active")
      })
    })
  
    // Header scroll effect
    const header = document.querySelector("header")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Back to top button
    const backToTopBtn = document.getElementById("backToTop")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show")
      } else {
        backToTopBtn.classList.remove("show")
      }
    })
  
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  
    // Project filtering
    const filterBtns = document.querySelectorAll(".filter-btn")
    const projectCards = document.querySelectorAll(".project-card")
  
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"))
        // Add active class to clicked button
        this.classList.add("active")
  
        const filter = this.getAttribute("data-filter")
  
        projectCards.forEach((card) => {
          if (filter === "all") {
            card.style.display = "block"
          } else if (card.getAttribute("data-category") === filter) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      })
    })
  
    // Skill progress animation
    const skillBars = document.querySelectorAll(".skill-progress")
  
    // Function to check if an element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  
    // Function to animate skill bars when in viewport
    function animateSkillBars() {
      skillBars.forEach((bar) => {
        if (isInViewport(bar)) {
          const width = bar.style.width
          bar.style.width = "0"
          setTimeout(() => {
            bar.style.width = width
          }, 100)
        }
      })
    }
  
    // Initial check on page load
    animateSkillBars()
  
    // Check on scroll
    window.addEventListener("scroll", animateSkillBars)
  
    // Form submission
    const contactForm = document.getElementById("contactForm")
    const formStatus = document.getElementById("formStatus")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form data
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Simple validation
        if (!name || !email || !subject || !message) {
          formStatus.textContent = "Please fill in all fields."
          formStatus.className = "form-status error"
          return
        }
  
        // Simulate form submission (in a real application, you would send this data to a server)
        formStatus.textContent = "Sending..."
        formStatus.className = "form-status"
  
        // Simulate a delay for the form submission
        setTimeout(() => {
          formStatus.textContent = "Your message has been sent successfully!"
          formStatus.className = "form-status success"
          contactForm.reset()
        }, 1500)
      })
    }
  
    // Add active class to navigation links based on scroll position
    const sections = document.querySelectorAll("section")
    const navItems = document.querySelectorAll(".nav-links a")
  
    window.addEventListener("scroll", () => {
      let current = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })
  
      navItems.forEach((item) => {
        item.classList.remove("active")
        if (item.getAttribute("href") === #${current}) {
          item.classList.add("active")
        }
      })
    })
  })  