interface userOnOff {
    id: number
    name: string
    email: string
    token: string
    ip: string
    currentTime: string
    online: string
}
interface ApiRest {
    status: string
    body: string
    datas: [userOnOff]
}

async function getUsers(api: string) {
    try {
        const response = await fetch(api)
        const ApiRestDatas = <ApiRest>await response.json()

        if (ApiRestDatas.status == 'error') throw ApiRestDatas.datas

        success(ApiRestDatas)
    } catch (error) {
        return
    }
}

getUsers(
    'http://localhost/projetos/linguagens/PHP_visitor-accountant/api/usersOnOffApi.php'
)

function success({ datas }: ApiRest) {
    console.log(datas)
    datas.map((user, key) => {
        const off = <HTMLElement>document.querySelector('.users__user-off')
        const on = <HTMLElement>document.querySelector('.users__user-on')
        if (!Number(user.online)) {
            off.innerHTML += `
            <div class="users__user">
                <div class="users__user-image"></div>
                <div class="users__user-name">${user.name}</div>
            </div>  
            `
            _('').Child({
                Index: key,
                Element: 'div',
                Class: 'users__user',
                Parent: 'saa',
            })
        } else {
            on.innerHTML += `
            <div class="users__user">
                <div class="users__user-image"></div>
                <div class="users__user-name">${user.name}</div>
            </div>
            `
        }
    })
}
comments()
function comments() {
    $('#send').on('click', function (e) {
        const textComment = $('#text-comment').val()
        $.ajax({
            type: 'POST',
            url:
                'http://localhost/projetos/linguagens/PHP_visitor-accountant/api/setCommentsApi.php',
            data: { comment: textComment },
            dataType: 'json',
            success: function (res) {
                $('.getcomments_comment').append('')
                getComments()
            },
        })
    })
    function getComments() {
        const getcomments_comment = <HTMLElement>(
            document.querySelector('.getcomments_comment')
        )
        getcomments_comment.innerHTML = ''
        $.ajax({
            type: 'GET',
            url:
                'http://localhost/projetos/linguagens/PHP_visitor-accountant/api/getCommentsApi.php',
            dataType: 'json',
            success: function ({ datas }) {
                $.map(datas, (comment) => {
                    getcomments_comment.innerHTML += `<div>${comment.comment}</div>`
                })
            },
        })
    }
    getComments()
}
