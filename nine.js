// write a fun called calculateAverage that takes an array of numbers  as input and returns the average of those numbers.


function calculateAverage(arr){
let total=arr.reduce((acc,curr)=>acc+curr,0)
return total / arr.length;
}
console.log(calculateAverage([5,100,2,8]))