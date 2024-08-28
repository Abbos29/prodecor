const btn = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')


btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})