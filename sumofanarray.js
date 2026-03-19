function sum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    // console.log(arr.reduce((a, b) => a + b));
    return sum;
}

console.log(sum([1,2,3]))