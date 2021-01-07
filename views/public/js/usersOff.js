"use strict";
setUser();
function setUser() {
    $(document).on('visibilitychange', function (e) {
        if (!document.hidden) {
            requestAjaxUsersOff();
            requestAjaxUsersOn();
        }
    });
    $(document).on('keypress', function (e) {
        if (e.key == 'Enter') {
            requestAjaxUsersOff();
            requestAjaxUsersOn();
        }
    });
}
requestAjaxUsersOff();
function requestAjaxUsersOff() {
    $('.users__userof').remove();
    $.ajax({
        type: 'POST',
        url: path + "ajax/usersAjax.php",
        dataType: 'json',
        success: function () {
            getUserOff();
        },
    });
}
function getUserOff() {
    getContext(usersOffApi, function (datas) {
        var date = new Date();
        $('.users__offline span.count').text(datas.length);
        $.map(datas, function (user, key) {
            var split = user.lastaction.split(' ');
            var year = Number(split[0].split('-')[0]);
            var month = Number(split[0].split('-')[1]);
            var day = Number(split[0].split('-')[2]);
            var minute = Number(split[1].split(':')[1]);
            var hour = Number(split[1].split(':')[0]);
            function singularOrPlural(num, date) {
                if (num == 1)
                    return num + " " + date[0] + " atr\u00E1s";
                return num + " " + date[1] + " atr\u00E1s";
            }
            var offtime = [
                date.getFullYear() - year,
                date.getMonth() + 1 - month,
                date.getDate() - day,
                date.getHours() - hour,
                date.getMinutes() - minute,
            ];
            var dates = [
                ['ano', 'anos'],
                ['mês', 'meses'],
                ['dia', 'dias'],
                ['hora', 'horas'],
                ['minuto', 'minutos'],
            ];
            function userOffDateTime() {
                for (var key_1 in offtime) {
                    if (offtime[key_1])
                        return "" + singularOrPlural(offtime[key_1], dates[key_1]);
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
            });
        });
    });
}
