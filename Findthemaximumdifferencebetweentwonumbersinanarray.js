// Find the maximum difference between two numbers in an array

function findmaximumdiff(arr){
    let maxdiff=0;
    let min =arr[0];
    for(let i=0;i<arr.length;i++){
        let diff=arr[i]-min;
         maxdiff=Math.max(maxdiff,diff)
        min=Math.min(min,arr[i])

    }
    return maxdiff;
}
console.log(findmaximumdiff(1,2,90,10,110))