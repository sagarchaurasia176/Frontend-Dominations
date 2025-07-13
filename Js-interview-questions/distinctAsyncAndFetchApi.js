// let fakeDtl = async() =>{
//     let res = await fetch('https://jsonplaceholder.typicode.com/users')
//     let val = await res.json();
//     console.log(val[0]);
// }
// fakeDtl();

// let fakeUserDetails = async()=>{
//     let res = await fetch('https://jsonplaceholder.typicode.com/users')
//     .then(data => data.json())
//     .then(res => console.log(res[0]))
//     .catch(er=>console.log(er,"error while fetching...")
//     );
// } 
// fakeUserDetails();


// how to used the axios here !
    let fakeUserDtlThroughAxios = async () => {
        let apisFetching = await axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res);
        })
    }
    fakeUserDtlThroughAxios();

