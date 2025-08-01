// Es-5 fn()

//In the promise dont used the async stuffs

// function dataFetch(url) {
//     const apisFetchFromThPlaceHolder = new Promise(function(resolve , rejected){
//         let apiVlu = fetch(url)
//         .then(result => result.json())
//         .then(data=>resolve(data))
//         .catch(err => rejected(err))
//     })
//     // always return the promise
//     return apisFetchFromThPlaceHolder;
// }

// dataFetch('https://jsonplaceholder.typicode.com/posts').then(sagar=>{
//     console.log(sagar);
// })

// Es-6 function ()

const dataFetch = (url) => {
    let apis = new Promise((resolve , reject)=>{
        let datas = fetch(url).then(val=>val.json()).then(res=>resolve(res)).catch(er=>reject(er));
    })
    return apis;
};

dataFetch('https://jsonplaceholder.typicode.com/users').then(function(data){
    console.log(data);
    
})