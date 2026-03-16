// Given an array of numbers and a target value, return the indices of two numbers that add up to the target.


// Input:
// nums = [2,7,11,15]
// target = 9

// Output:
// [0,1]
// Optimized Solution (O(n)) Big O notation
function addSum(arr,target){
    let map={};
    for(let i=0;i<=arr.length;i++){
        let complement=target-arr[i]
        if(map[complement]!==undefined){
            return [map[complement],i]
        }
        map[arr[i]]=i;
    }
}
console.log(addSum([2,7,19,17],9))