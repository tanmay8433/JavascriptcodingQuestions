// Implement Memoization


function memorization(fn){
    
    let cache={};
    
    return function (...args){
        const key=Json.stringify()
        if(cache[key]){
             return cache[key]
        }
        const result=fn(...args)
        cache[key]=result
    return result;
    }
}