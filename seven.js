//write a function findMax that takes an array of numbers as input and return the maximum no in the array.



function findMax(arr){
  // return Math.max(...arr)

// return arr.reduce((max,current)=>(current>max?current:max),arr[0])


let max=arr[0];
for(let i=1;i<arr.length;i++){
  if(arr[i]>max){
    max=arr[i]
  }
}
return max;
}
console.log(findMax([1,5,3,9,10]))