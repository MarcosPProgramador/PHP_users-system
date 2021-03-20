class UsersOn {
    constructor() {
        this.usersOnGetRequest()
    }
    public usersOnGetRequest() {
        $('.users__usero').remove()

        app.post('/api/users-on', () => {
            $('.loading').remove()
            this.getUserOn()
        })
    }

    private getUserOn() {
        app.get('/api/users-on', (users: Users[]) => {
            if (!users) return

            $('.users__online span.count').text(users.length)

            $.map(users, (user, key) => {
                _('.users__user-on')
                    .Child({
                        Index: key,
                        Element: 'div',
                        Class: '.users__usero',
                    })
                    .Child({
                        Element: 'div',
                        Class: '.users__user-image',
                        Parent: '.users__usero',
                    })
                    .Child({
                        Element: 'div',
                        Class: '.users__user-name',
                        Content: user.name,
                        Parent: '.users__usero',
                    })
            })
        })
    }
}
new UsersOn()
