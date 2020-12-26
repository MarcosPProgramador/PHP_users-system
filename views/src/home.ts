interface userOnOff {
  id: number;
  name: string;
  email: string;
  token: string;
  ip: string;
  currentTime: string;
}
interface ApiRest {
  status: string;
  body: string;
  datas: [userOnOff];
}

async function getUsers(api: string) {
  try {
    const response = await fetch(api);
    const ApiRestDatas = <ApiRest>await response.json();

    if (ApiRestDatas.status == "error") throw ApiRestDatas.datas;

    show(ApiRestDatas);
  } catch (error) {
    console.error(`[Error]: ${error}`);
  }
}

getUsers(
  "http://localhost/projetos/linguagens/PHP_visitor-accountant/api/usersOnlineApi.php"
);
getUsers(
  "http://localhost/projetos/linguagens/PHP_visitor-accountant/api/usersOfflineApi.php"
);
function successOn(datas: [userOnOff]) {
  datas.map((user, i) => {
    _(".users")
      .child({
        Index: i,
        Element: "div",
        Class: "users-on",
      })
      .child({
        Element: "div",
        Class: "users-on__user",
        Parent: "div.users-on",
      })
      .child({
        Element: "div",
        Class: "users-on__email-name",
        Parent: "div.users-on__user",
      })
      .child({
        Element: "div",
        Class: "users-on__name",
        Parent: "div.users-on__email-name",
        Content: user.name,
      })
      .child({
        Element: "div",
        Class: "users-on__email",
        Parent: "div.users-on__email-name",
        Content: user.email,
      });
  });
}
function successOff(datas: [userOnOff]) {
  datas.map((user, i) => {
    _(".users")
      .child({
        Index: i,
        Element: "div",
        Class: "users-off",
      })
      .child({
        Element: "div",
        Class: "users-off__user",
        Parent: "div.users-off",
      })
      .child({
        Element: "div",
        Class: "users-off__email-name",
        Parent: "div.users-off__user",
      })
      .child({
        Element: "div",
        Class: "users-off__name",
        Parent: "div.users-off__email-name",
        Content: user.name,
      })
      .child({
        Element: "div",
        Class: "users-off__email",
        Parent: "div.users-off__email-name",
        Content: user.email,
      });
  });
}

function show(ApiRestDatas: ApiRest) {
  switch (ApiRestDatas.body) {
    case "users-on":
      successOn(ApiRestDatas.datas);
      break;
    case "users-off":
      successOff(ApiRestDatas.datas);
      break;
  }
}
// let count = 0;
//     let timeout = 1000;
//     function periodical() {
//       count++;
//       const dateTimeDB = nDataTime(user.currentTime);
//       const date = new Date();
//       const dateTime = [
//         date.getFullYear(),
//         date.getMonth() + 1,
//         date.getDate(),
//         date.getHours(),
//         date.getMinutes(),
//         date.getSeconds(),
//       ];
//       function _DateTime() {
//         const arr = [];
//         for (const key in dateTime) {
//           if (dateTime[key] <= 9) arr.push(`0${dateTime[key]}`);
//           else arr.push(`${dateTime[key]}`);
//         }
//         return arr;
//       }
//       function nDataTime(currentTime: string) {
//         const lastAction = currentTime.replace(/[-]/g, "/");
//         const last_action = lastAction.split(" ");
//         const dateApiArr = last_action[0].split("/");
//         const timeApiArr = last_action[1].split(":");

//         return [...dateApiArr, ...timeApiArr];
//       }
//       function _concat() {
//         const dateTimeSigular = [
//           "ano",
//           "mês",
//           "dia",
//           "hora",
//           "minuto",
//           "segundo",
//         ];
//         const dateTimePlural = [
//           "anos",
//           "meses",
//           "dias",
//           "horas",
//           "minutos",
//           "segundos",
//         ];
//         const arr = [];
//         const dateTimeCurrent = _DateTime();
//         for (const key in dateTimeSigular) {
//           console.log(Number(dateTimeCurrent[key]) - Number(dateTimeDB[key]));

//           if (dateTime[key] === 1) {
//             arr.push(`${dateTimeCurrent[key]} ${dateTimeSigular[key]}`);
//           } else arr.push(`${dateTimeCurrent[key]} ${dateTimePlural[key]}`);
//         }
//         return arr;
//       }
//       if (count == 60) timeout = 60000;

//       console.log(timeout);
//       setTimeout(periodical, timeout);
//     }
//     periodical()
