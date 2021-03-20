interface IUsers {
    name: string
    lastaction: string
}
class UsersOff {
    public userOffPostRequest() {
        $('.users__userof').remove()
        app.post('/api/users/offline', () => {
            this.usersOffGetRequest()
        })
    }
    private usersOffGetRequest() {
        app.get('/api/users/offline', function (users: IUsers[]) {
            if (!users) return

            const date = new Date()

            $('.users__offline span.count').text(users.length)

            $.map(users, (user, key) => {
                const split = user.lastaction.split(' ')
                const year = Number(split[0].split('-')[0])
                const month = Number(split[0].split('-')[1])
                const day = Number(split[0].split('-')[2])
                const minute = Number(split[1].split(':')[1])
                const hour = Number(split[1].split(':')[0])
                function singularOrPlural(num: number, date: any[]) {
                    if (num == 1) return num + ' ' + date[0] + ' atr\u00E1s'
                    return num + ' ' + date[1] + ' atr\u00E1s'
                }
                const offtime = [
                    date.getFullYear() - year,
                    date.getMonth() + 1 - month,
                    date.getDate() - day,
                    date.getHours() - hour,
                    date.getMinutes() - minute,
                ]
                const dates = [
                    ['ano', 'anos'],
                    ['mês', 'meses'],
                    ['dia', 'dias'],
                    ['hora', 'horas'],
                    ['minuto', 'minutos'],
                ]
                function userOffDateTime() {
                    for (const key_1 in offtime) {
                        if (offtime[key_1])
                            return (
                                '' +
                                singularOrPlural(offtime[key_1], dates[key_1])
                            )
                    }
                }
                _('.users__user-off')
                    .Child({
                        Index: key,
                        Element: 'div',
                        Class: '.users__userof',
                    })
                    .Child({
                        Element: 'div',
                        Class: '.users__user-image',
                        Parent: '.users__userof',
                    })
                    .Child({
                        Element: 'div',
                        Class: '.users__user-namelastaction',
                        Parent: '.users__userof',
                    })
                    .Child({
                        Element: 'div',
                        Class: '.users__user-name',
                        Content: user.name,
                        Parent: '.users__user-namelastaction',
                    })
                    .Child({
                        Element: 'div',
                        Class: '.users__user-lastaction',
                        Content: userOffDateTime(),
                        Parent: '.users__user-namelastaction',
                    })
            })
        })
    }
}
const usersOff = new UsersOff()

usersOff.userOffPostRequest()
