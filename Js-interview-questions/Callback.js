let contents = document.querySelector("#container");

//how to used the callback stuff
const Data = async (apis, callback )=> {
  let apisFetched = await fetch(apis)
    .then(res => res.json())
    .then(val => {
      //iteartes to the array
      val.forEach(user => {
        contents.innerHTML += `
           <span>${user.name}</span><br>
                    <span>${user.email}</span><br>
                    <span>${user.phone}</span><br><br>
        `;
      });
      //callback();
      callback();
    })
    .catch((er) => {
      console.error(er);
    });
};

Data("https://jsonplaceholder.typicode.com/users", function () {
  alert("data display to the website");
});
