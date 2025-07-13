function HowToUsedPromise(){
    return new Promise((res , rej)=>{
        let results = axios.get('https://jsonplaceholder.typicode.com/users');
        if(results){
            console.log(res("hey api fetched"));
        }else{
            console.log(rej());        
        }
    })
}



