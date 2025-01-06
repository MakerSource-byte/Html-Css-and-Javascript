// Function that Returns a Promise. Not really important
const promiseExmaple = (condition) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (condition){
                resolve("Condition Met")
            }else{
                reject("Condition Not Met")
            }
        }, 1000)
    })
}

// uses 'async' function instead of having to return a promise
async function checkPromise() {
    try{
        // Waits for function, 'promiseExample', to resolve
        let resolvedValue = await promiseExmaple(true);
        // Sets variable to resolved value of 'promiseExample(true)'
        console.log("Resolved value of 'promiseExample': " + resolvedValue);
    } catch(error){
        console.log(error);
    }
}

checkPromise();