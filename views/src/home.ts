interface Users {
    name: string
    lastaction: string
}
interface Comments {
    name: string
    comment: string
    lastaction: string
}

const path = 'http://localhost/projetos/linguagens/PHP_user-system/',
    commentsApi = `${path}api/commentsApi.php`,
    usersOnApi = `${path}api/usersOnApi.php`,
    usersOffApi = `${path}api/usersOffApi.php`
setComments()
function setComments() {
    $(document).on('keypress', function (e) {
        if (e.key == 'Enter') requestAjaxComments()
    })
    $('#send').on('click', function (e) {
        requestAjaxComments()
    })
}
getComments()
function getComments() {
    getContext<Comments>(commentsApi, (datas) => {
        $.map(datas, (data: Comments, key: number) => {
            const lastaction = data.lastaction.replace(/[-]/g, '/')
            const [date, time] = lastaction.split(' ')
            _('.getcomments__container')
                .Child({
                    Index: key,
                    Element: 'div',
                    Class: 'getcomments__user',
                })
                .Child({
                    Element: 'div',
                    Class: 'getcomments__top',
                    Parent: 'getcomments__user',
                })
                .Child({
                    Element: 'div',
                    Class: 'getcomments__image',
                    Parent: 'getcomments__top',
                })
                .Child({
                    Element: 'div',
                    Class: 'getcomments__name',
                    Parent: 'getcomments__top',
                    Content: data.name,
                })
                .Child({
                    Element: 'div',
                    Class: 'getcomments__datetime',
                    Parent: 'getcomments__top',
                })
                .Child({
                    Element: 'div',
                    Class: 'getcomments__date',
                    Parent: 'getcomments__datetime',
                    Content: date,
                })
                .Child({
                    Element: 'div',
                    Class: 'getcomments__time',
                    Parent: 'getcomments__datetime',
                    Content: time,
                })
                .Child({
                    Element: 'div',
                    Class: 'getcomments__bottom',
                    Parent: 'getcomments__user',
                })
                .Child({
                    Element: 'div',
                    Class: 'getcomments__comment',
                    Parent: 'getcomments__bottom',
                    Content: data.comment,
                })
        })
        $('.getcomments').scrollTop($('.getcomments')[0].scrollHeight)
    })
}

setUser()
function setUser() {
    $(document).on('visibilitychange', (e) => {
        if (!document.hidden) {
            requestAjaxUsersOff()
            requestAjaxUsersOn()
        }
    })
}

requestAjaxComments()
function requestAjaxComments() {
    const textComment = $('#text-comment').val()
    $.ajax({
        type: 'POST',
        url: `${path}ajax/commentsAjax.php`,
        data: { comment: textComment },
        dataType: 'json',
        success: function () {
            $('#text-comment').val('')
            $('.getcomments__user').remove()
            getComments()
        },
    })
}
requestAjaxUsersOff()
function requestAjaxUsersOff() {
    $.ajax({
        type: 'POST',
        url: `${path}ajax/usersAjax.php`,
        dataType: 'json',
        success: function () {
            $('.users__userof').remove()
            getUserOff()
        },
    })
}
requestAjaxUsersOn()
function requestAjaxUsersOn() {
    $.ajax({
        type: 'POST',
        url: `${path}ajax/usersAjax.php`,
        dataType: 'json',
        beforeSend: function () {
            _('.users')
                .Child({
                    Element: 'div',
                    Class: 'loading',
                })
                .Child({
                    Element: 'div',
                    Class: 'loading-svg',
                    Parent: 'loading',
                })
        },
        success: function () {
            $('.loading').remove()
            $('.users__usero').remove()
            getUserOn()
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
function getUserOn() {
    getContext<Users>(usersOnApi, (datas) => {
        $('.users__online span.count').text(datas.length)

        $.map(datas, (user, key) => {
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
