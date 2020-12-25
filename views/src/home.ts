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
    const date = last_action[0];
    const time = last_action[1];
    $(".users-on")
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
        Content: date,
      })
      .child({
        Index: i,
        Element: "span",
        Class: "users-on__time",
        Parent: "div.users-on__datetime",
        Content: time,
      });
  });
}
