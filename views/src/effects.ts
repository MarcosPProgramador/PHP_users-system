class Effects {
    constructor() {
        this.checkUserOn()
        this.animateNav()
    }
    private checkUserOn() {
        const userOn = new UsersOn()
        const userOff = new UsersOff()
        $(document).on('visibilitychange', function (e) {
            if (!document.hidden) {
                userOff.userOffPostRequest()
                userOn.usersOnGetRequest()
            }
        })
        $(document).on('keypress', function (e) {
            if (e.key == 'Enter') {
                userOff.userOffPostRequest()
                userOn.usersOnGetRequest()
            }
        })
    }
    private animateNav() {
        const buttonBurgerNavbar = $('#burger')
        const navbar = $('#navbar')
        buttonBurgerNavbar.on('click', function () {
            buttonBurgerNavbar.toggleClass('active')
            navbar.toggleClass('active')
        })
    }
}

new Effects()
