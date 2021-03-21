interface IUsers {
  firstname: string
  lastname: string
  user_image: string
  created_at: string
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
        const split = user.created_at.split(' ')
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
              return '' + singularOrPlural(offtime[key_1], dates[key_1])
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
            Parent: '.users__user-off .users__userof',
          })
          .Child({
            Element: 'img',
            Attr: [
              {
                name: 'src',
                value: `${app.baseUrl}/uploads/${user.user_image}`,
              },
            ],
            Class: '.users__user-img',
            Parent: '.users__user-off .users__user-image',
          })
          .Child({
            Element: 'div',
            Class: '.users__user-namecreated_at',
            Parent: '.users__user-off .users__userof',
          })
          .Child({
            Element: 'div',
            Class: '.users__user-name',
            Content: `${user.firstname} ${user.lastname}`,
            Parent: '.users__user-off .users__user-namecreated_at',
          })
          .Child({
            Element: 'div',
            Class: '.users__user-created_at',
            Content: userOffDateTime(),
            Parent: '.users__user-off .users__user-namecreated_at',
          })
      })
    })
  }
}
const usersOff = new UsersOff()

usersOff.userOffPostRequest()
