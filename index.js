class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = "active"

    this.handleClick = this.handleClick.bind(this)
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
    })
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass)
    this.mobileMenu.classList.toggle(this.activeClass)
    this.animateLinks()
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick)
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent()
    }
    return this
  }
}

const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li")
mobileNavbar.init()


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      })

      const navList = document.querySelector(".nav-list")
      if (navList.classList.contains("active")) {
        document.querySelector(".mobile-menu").click()
      }
    }
  })
})


document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)"
    this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
    this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
  })
})
