function sumAll(arr){
    return arr.reduce((item,current)=>item+current,0)
}

// Write a function sumAll(arr) that takes an input array of numbers and returns their sum using the reduce method.
console.log(sumAll([1,2,3]))