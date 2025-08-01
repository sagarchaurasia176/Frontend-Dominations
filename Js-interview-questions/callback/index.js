// the function is waiting for the fn as argument
let container = document.getElementById("parent");

async function dataFetach(url, clbk) {
  let res = await fetch(url)
    .then((datas) => datas.json())
    .then((values) => clbk(values))
    .catch((er) => console.error("error while fetching the api's", er));
    console.log(res);

}


dataFetach("https://jsonplaceholder.typicode.com/users", function (res) {
  res.forEach((results) => {
    container.innerHTML += `<p>${results.name}</p>`;
  });
});
