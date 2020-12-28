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
                    Class: `users__user-on-off`,
                    Parent: '.users__user',
                })
                .child({
                    Element: 'div',
                    Class: `users__user-image`,
                    Parent: '.users__user-on-off',
                })
                .child({
                    Element: 'div',
                    Class: `users__user-name`,
                    Parent: '.users__user-on-off',
                    Content: user.name,
                })
        } else {
            _('.users__user-on')
                .child({
                    Index: key,
                    Element: 'div',
                    Class: `users__user`,
                })
                .child({
                    Element: 'div',
                    Class: `users__user-on-off`,
                    Parent: '.users__user',
                })
                .child({
                    Element: 'div',
                    Class: `users__user-image`,
                    Parent: '.users__user-on-off',
                })
                .child({
                    Element: 'div',
                    Class: `users__user-name`,
                    Parent: '.users__user-on-off',
                    Content: user.name,
                })
        }
    })
}
