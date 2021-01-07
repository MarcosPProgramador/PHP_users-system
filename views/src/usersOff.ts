interface Users {
    name: string
    lastaction: string
}

setUser()
function setUser() {
    $(document).on('visibilitychange', (e) => {
        if (!document.hidden) {
            requestAjaxUsersOff()
            requestAjaxUsersOn()
        }
    })
    $(document).on('keypress', (e) => {
        if (e.key == 'Enter') {
            requestAjaxUsersOff()
            requestAjaxUsersOn()
        }
    })
}

requestAjaxUsersOff()
function requestAjaxUsersOff() {
    $('.users__userof').remove()
    $.ajax({
        type: 'POST',
        url: `${path}ajax/usersAjax.php`,
        dataType: 'json',
        success: function () {
            getUserOff()
        },
    })
}
function getUserOff() {
    getContext<Users>(usersOffApi, (datas) => {
        const date = new Date()

        $('.users__offline span.count').text(datas.length)

        $.map(datas, (user, key) => {
            const split = user.lastaction.split(' ')
            const year = Number(split[0].split('-')[0])
            const month = Number(split[0].split('-')[1])
            const day = Number(split[0].split('-')[2])
            const minute = Number(split[1].split(':')[1])
            const hour = Number(split[1].split(':')[0])

            function singularOrPlural(num: number, date: string[]) {
                if (num == 1) return `${num} ${date[0]} atrás`
                return `${num} ${date[1]} atrás`
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
                for (const key in offtime) {
                    if (offtime[key])
                        return `${singularOrPlural(offtime[key], dates[key])}`
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
