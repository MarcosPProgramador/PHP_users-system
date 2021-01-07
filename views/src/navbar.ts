const buttonBurgerNavbar = $('#burger')
const navbar = $('#navbar')
buttonBurgerNavbar.on('click', () => {
    buttonBurgerNavbar.toggleClass('active')
    navbar.toggleClass('active')
})
