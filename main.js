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
  items.forEach(item => {
    item.addEventListener('click', () => {
      nav.classList.remove('burger-menu-active')
      burger.classList.remove('burger-close-active')
      overlay.classList.remove('overlay-active')
    })
  })
}
navClose()

console.log('Welcome ^-^')
console.log('студент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages +10 \n вёрстка валидная +10 \n вёрстка семантическая +20 \n В коде странице присутствуют и используются по назначению следующие элементы: \n Под "используются по назначению" имеется в виду, что у элементов есть какое-то содержание, соответствующее типу элемента, а не добавлены пустые теги для получения баллов. Правильность использования элементов не проверяется и на балл не влияет. \n header, main, footer +5 \n элемент nav +5 \n только один заголовок h1 +5 \n заголовки h2 +5 \n в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс +10 \n Если ссылка в футере ведёт на курс stage0, это не ошибка.\n для оформления СV используются css-стили +10 \n при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10 \n на странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt +10 \n навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a +10 \n Также допускается использование нумерованого списка ol > li или ol > li > a \n Содержание CV +30 \n CV содержит: \n краткую информацию о себе +5 \n контакты для связи +5 \n перечень навыков +5 \n пример кода. Код добавляется при помощи символов и тегов, а не картинкой +5 \n перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения +5 \n информацию об образовании и уровне английского +5 \n CV выполнено на английском языке +10')