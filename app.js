const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })
    // SELECTING THE NAV OBJECT THE INDEX IS 0 //