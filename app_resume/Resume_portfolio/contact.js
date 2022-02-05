const toggleButton = document.createElementByClassName('toggle-button')[0]
const navbarLinks = document.createElementByClassName('navbar-link')[0]

toggleButton.addEventListener('click',() =>{
    navbarLinks.classList.toggle('active')
})