// https://jsonplaceholder.typicode.com/users
let apiURL = "https://jsonplaceholder.typicode.com/users";
let values = document.querySelector('#container');

// Callback

    const usingCallBackFetchTheAPI = async (resolve, rejected) => {
        const apis = await fetch(apiURL)        
        .then(result => result.json())
        .then(finalValues => 
            values.innerHTML += `<p>${finalValues.data?.name}</p>`
        )
        .catch(
            rejected("error while get's the error")
        )
}
usingCallBackFetchTheAPI();

// Axios
// Promise




