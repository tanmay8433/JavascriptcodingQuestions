const memorize=(fn)=>{
    const cache=new Map();
    return (...args)=>{
    const key=JSON.stringify(args)
    if(cache.has(key)){
        return cache.get(key)
    }
    const result=fn(...args)
    cache.set(key,result)
    return result;
    };
};

const fib = memorize((no)=>{
    if(no<=1) return no;
    return fib(no - 1) + fib(no - 2)
})

console.log(fib(20))// 6765