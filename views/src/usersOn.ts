requestAjaxUsersOn()
function requestAjaxUsersOn() {
    $('.users__usero').remove()
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
            getUserOn()
        },
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
