let content = document.querySelector('#container');

//How to create a promises in js
let fakeApiData = async () => {
    //return the new-promises
    return new Promise(async (resolve, reject) => {
        try {
            let apis = await axios.get('https://randomuser.me/api/')
            if (apis && apis.data) {
                resolve(apis.data);
            } else {
                reject("data not found");
            }    
        } catch(er){
            reject("error while fetching...");
            console.log(er);
            }
        }
    )
}
fakeApiData().then(msg => {
    let resp = msg.results[0];
    content.innerHTML = `
      <h3>${resp.name.first} ${resp.name.last}</h3>
    `;

}).catch((er) => {
    content.innerHTML = er;
});



