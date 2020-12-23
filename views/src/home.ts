interface userOn {
  id: number;
  firstname: string;
  ip: string;
  token: string;
  lastAction: string;
}
async function getAPI(api: string) {
  try {
    const response = await fetch(api);
    const datas = <[userOn]>await response.json();

    show(datas);
  } catch (error) {
    console.error(error);
  }
}
getAPI(
  "http://localhost/projetos/linguagens/PHP_visitor-accountant/api/usersOnlineApi.php"
);

function show(datas: [userOn]) {
  datas.map(data => {
      console.log(data.firstname)
  })
}
