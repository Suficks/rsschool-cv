const nav = document.querySelector('.nav')
const burger = document.querySelector('.burger')
const burgerClose = document.querySelector('.burger-close-active')
const overlay = document.querySelector('.overlay')
const items = document.querySelectorAll('.nav-item')

function burgerActive() {
  overlay.classList.toggle('overlay-active')
  nav.classList.toggle('burger-menu-active')
  burger.classList.toggle('burger-close-active')
}

burger.addEventListener('click', burgerActive)


function overlayClose() {
  overlay.classList.remove('overlay-active')
  nav.classList.remove('burger-menu-active')
  burger.classList.remove('burger-close-active')
}

overlay.addEventListener('click', overlayClose)

function navClose() {
  items.forEach(function(item) {
    item.addEventListener('click', () => {
      nav.classList.remove('burger-menu-active')
      burger.classList.remove('burger-close-active')
      overlay.classList.remove('overlay-active')
    })
  })
}
navClose()

console.log('Welcome ^-^')