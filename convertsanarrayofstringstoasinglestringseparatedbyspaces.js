// converts an array of strings to a single string separated by spaces.

function converts(arr){
    return arr.join(' ');
}
console.log(converts(["a","r","r"]))



function converts(arr){
    let result="";
    for(let i = 0; i < arr.length; i++){
        result += arr[i]
         if(i<arr.length-1){
        result += " "
    }
    }
   return result;
}
console.log(converts(["a","r","r"]))

// Array.prototype.join() method joins all elements of an array into a single string.