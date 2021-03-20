interface Comments {
    name: string
    comment: string
    lastaction: string
}
class Comments {
    constructor() {
        this.setComments()
    }

    private setComments() {
        const isEmpty = () => {
            const textareaValue = (<HTMLTextAreaElement>(
                document.getElementById('text-comment')
            )).value
            return textareaValue.trim()
        }

        $(document).on('keypress', (e) => {
            if (e.key == 'Enter' && isEmpty()) this.commentPostRequest()
            else return
        })
        $('#send').on('click', (e) => {
            if (isEmpty()) this.commentPostRequest()
        })
    }
    private commentsGetRequest() {
        app.get('/api/comments', (comments: Comments[]) => {
            $.map(comments, (comment: Comments, key: number) => {
                const lastaction = comment.lastaction.replace(/[-]/g, '/')
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
                        Content: comment.name,
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
                        Content: comment.comment,
                    })
            })
            $('.getcomments').scrollTop(
                Number($('.getcomments')[0].scrollHeight)
            )
        })
    }

    private commentPostRequest() {
        $('.getcomments__user').remove()
        const textComment = $('#text-comment').val()
        app.post(
            '/api/comments',
            () => {
                $('#text-comment').val('')
                this.commentsGetRequest()
            },
            { comment: textComment }
        )
    }
}
