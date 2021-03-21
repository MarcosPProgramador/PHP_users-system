interface IComments {
  full_name: string
  comment: string
  user_image: string
  created_at: string
}
class Comments {
  public setComments() {
    function isEmpty() {
      const textareaValue = (document.getElementById(
        'text-comment'
      ) as HTMLInputElement).value
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
  public commentsGetRequest() {
    app.get('/api/comments', function (comments: IComments[]) {
      $.map(comments, function (comment, key) {
        const created_at = comment.created_at.replace(/[-]/g, '/')
        const _a = created_at.split(' '),
          date = _a[0],
          time = _a[1]
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
            Element: 'img',
            Attr: [
              {
                name: 'src',
                value: comment.user_image
                  ? `${app.baseUrl}/uploads/${comment.user_image}`
                  : `${app.baseUrl}/uploads/default/z.png`,
              },
            ],
            Class: 'getcomments__img',
            Parent: 'getcomments__image',
          })
          .Child({
            Element: 'div',
            Class: 'getcomments__name',
            Parent: 'getcomments__top',
            Content: comment.full_name,
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
          })
          .Child({
            Element: 'p',
            Class: 'getcomments__txt',
            Parent: 'getcomments__comment',
            Content: comment.comment,
          })
      })
      $('.getcomments').scrollTop(Number($('.getcomments')[0].scrollHeight))
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
const comments = new Comments()
comments.setComments()
comments.commentsGetRequest()
