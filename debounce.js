// Debounce Function--used for resize event,search input


function debounce(fn,delay){
    let timer;
    return function (...args){
        cleartimeout(timer)
        timer=settimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}