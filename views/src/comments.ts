interface Comments {
    name: string
    comment: string
    lastaction: string
}

setComments()
function setComments() {
    const isEmpty = () => {
        const textareaValue = (<HTMLTextAreaElement>(
            document.getElementById('text-comment')
        )).value
        return textareaValue.trim()
    }

    $(document).on('keypress', function (e) {
        if (e.key == 'Enter' && isEmpty()) requestAjaxComments()
        else return
    })
    $('#send').on('click', function (e) {
        if (isEmpty()) requestAjaxComments()
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
        $('.getcomments').scrollTop(Number($('.getcomments')[0].scrollHeight))
    })
}

requestAjaxComments()
function requestAjaxComments() {
    $('.getcomments__user').remove()
    const textComment = $('#text-comment').val()
    $.ajax({
        type: 'POST',
        url: `${path}ajax/commentsAjax.php`,
        data: { comment: textComment },
        dataType: 'json',
        success: function () {
            $('#text-comment').val('')
            getComments()
        },
    })
}
