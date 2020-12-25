interface userOn {
  id: number;
  name: string;
  email: string;
  token: string;
  ip: string;
  currentTime: string;
}
interface ApiRest {
  success: string;
  datas: [userOn];
}

async function getAPI(api: string) {
  try {
    const response = await fetch(api);
    const ApiRestDatas = <ApiRest>await response.json();

    show(ApiRestDatas);
  } catch (error) {
    console.error(error);
  }
}
getAPI(
  "http://localhost/projetos/linguagens/PHP_visitor-accountant/api/usersOnlineApi.php"
);

function show(ApiRestDatas: ApiRest) {
  ApiRestDatas.datas.map((user, i) => {
    const lastAction = user.currentTime.replace(/[-]/g, "/");
    const last_action = lastAction.split(" ");
    const dateApi = last_action[0];
    const timeApi = last_action[1];
    const dateApiArr = dateApi.split("/");
    const timeApiArr = timeApi.split(":");
    const dateTimeDB = [...dateApiArr, ...timeApiArr];

    _(".users-on")
      .child({
        Index: i,
        Element: "div",
        Class: "users-on__user",
      })
      .child({
        Index: i,
        Element: "div",
        Class: "users-on__name",
        Parent: "div.users-on__user",
        Content: user.name,
      })
      .child({
        Index: i,
        Element: "div",
        Class: "users-on__datetime",
        Parent: "div.users-on__user",
      })
      .child({
        Index: i,
        Element: "span",
        Class: "users-on__date",
        Parent: "div.users-on__datetime",
        Content: dateApi,
      })
      .child({
        Index: i,
        Element: "span",
        Class: "users-on__time",
        Parent: "div.users-on__datetime",
        Content: timeApi,
      });
    let count = 0;
    let timeout = 1000;
    periodical();
    function periodical() {
      count++;
      const date = new Date();
      const dateTime = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ];
      const _DateTime = () => {
        const arr = [];
        for (const key in dateTime) {
          if (dateTime[key] <= 9) arr.push(`0${dateTime[key]}`);
          else arr.push(`${dateTime[key]}`);
        }
        return arr;
      };
      const _concat = () => {
        const dateTimeSigular = [
          "ano",
          "mês",
          "dia",
          "hora",
          "minuto",
          "segundo",
        ];
        const dateTimePlural = [
          "anos",
          "meses",
          "dias",
          "horas",
          "minutos",
          "segundos",
        ];
        const arr = [];
        const dateTimeCurrent = _DateTime();
        for (const key in dateTimeSigular) {
          console.log(Number(dateTimeCurrent[key]) - Number(dateTimeDB[key]));

          if (dateTime[key] === 1) {
            arr.push(`${dateTimeCurrent[key]} ${dateTimeSigular[key]}`);
          } else arr.push(`${dateTimeCurrent[key]} ${dateTimePlural[key]}`);
        }
        return arr;
      };
      _concat();
      // console.log(_concat());

      if (count === 60) timeout = 60000;
      // if (count === 120) timeout = 600000;
      // if (count === 180) timeout = 6000000;
      // if (count === 210) timeout = 60000000;
      setTimeout(periodical, timeout);
    }
  });
}
