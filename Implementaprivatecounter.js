// How would you create a private variable using a JavaScript function? Show a function that returns a function or object with methods.


function createCounter(){
    let count=0;
    return {
        increment:function(){
            count++;
            console.log(count,"count")
        },
        getvalue:function(){
            return count;
        }
    }
}


const callCounter=createCounter()
callCounter.increment()
console.log(callCounter.getvalue())