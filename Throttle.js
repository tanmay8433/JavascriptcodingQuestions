// throttle Function

function throttle(fn,limit){
    let flag=true;
    return function (...args){
        if(!flag) return;
        fn.apply(this,args)
        flag=false;
        setimeout(()=>{
            flag=true;
        },limit)
    };
    }