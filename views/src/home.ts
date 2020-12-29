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
        if (!Number(user.online)) {
            _('.users__user-off')
                .child({
                    Index: key,
                    Element: 'div',
                    Class: `users__user`,
                })
                .child({
                    Element: 'div',
                    Class: `users__user-image`,
                    Parent: '.users__user',
                })
                .child({
                    Element: 'div',
                    Class: `users__user-name`,
                    Parent: '.users__user',
                    Content: user.name,
                })
        }
        if (Number(user.online)) {
            console.log(user.online)
            _('.users__user-on')
                .child({
                    Index: key,
                    Element: 'div',
                    Class: `users__user`,
                })
                .child({
                    Element: 'div',
                    Class: `users__user-image`,
                    Parent: '.users__user',
                })
                .child({
                    Element: 'div',
                    Class: `users__user-name`,
                    Parent: '.users__user',
                    Content: user.name,
                })
        }
    })
}
comments()
function comments() {
    $('#send').on('click', function (e) {
        e.preventDefault()
        const textComment = $('#text-comment').val()

        $.ajax({
            type: 'get',
            url:
                'http://localhost/projetos/linguagens/PHP_visitor-accountant/api/setCommentsApi.php',
            data: { comment: textComment },
            dataType: 'json',
        })
        $.ajax({
            type: 'post',
            url:
                'http://localhost/projetos/linguagens/PHP_visitor-accountant/api/getCommentsApi.php',
            dataType: 'json',
            success: function (res) {
                console.log(res)
            },
        })
    })
}
