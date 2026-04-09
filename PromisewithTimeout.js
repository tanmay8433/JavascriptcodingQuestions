// Promise with Timeout: Create a wrapper that rejects a promise if it doesn't resolve within a specified time. 

// create a promise timeout wrapper by using the Promise.race() method. This static method takes an array of promises
//  and returns a new promise  that resolves or rejects as soon as the first promise in the array settles.


// The most efficient way to implement this is to race your 
// original promise against a second promise that automatically rejects after a specified time.

function withTimeout(promise,ms){
    let timeoutId;
// Create a promise that rejects after 'ms' milliseconds
    const timeoutPromise=new Promise((_,reject)=>{
        timeoutId=setTimeout(()=>{
            reject(new Error('operation time out'))
        },ms);
    });
// Race the two promises
 return Promise.race([promise,timeoutPromise])
.finally(()=>{
    clearTimeout(timeoutId)
});
}


async function fetchData() {
    try{
 const data= await withTimeout(fetch("apiurl"),5000)
 console.log(data,"success")
    }
    catch(error){
 console.error(error.message)
    }
}