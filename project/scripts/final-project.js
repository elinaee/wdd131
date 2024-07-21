const burger = document.querySelector('#burgerMenu')
const closeButton = document.querySelector('#closeButton')
const nav = document.querySelector('#menu')

burger.addEventListener('click', () => {
    nav.classList.toggle('open')
    closeButton.classList.toggle('show')
})

closeButton.addEventListener('click', () => {
    nav.classList.toggle('open')
    closeButton.classList.toggle('show')
})





function calculateWindChill(Ta, V) {
    return 13.12 + (0.6215 * Ta) - (11.37 * Math.pow(V, 0.16)) + (0.3965 * Ta * Math.pow(V, 0.16));
}