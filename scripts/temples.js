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


// Date and time for the footer
document.addEventListener('DOMContentLoaded', (event) => {
    const lastModified = document.lastModified;
    document.getElementById("date-time").textContent = lastModified;
});
