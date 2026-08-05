// Debounce Function--used for resize event,search input
// Debouncing is a performance optimization technique in JavaScript
// If the event fires repeatedly, the timer resets every single time, delaying execution until the user stops interacting.

function debounce(fn,delay){
    let timer;
    return function (...args){
        cleartimeout(timer)
        timer=settimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}


