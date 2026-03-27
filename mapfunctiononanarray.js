// map function on an array
// How would you get a new array from an original array with all elements doubled?
function useMap(arr){
   return  arr.map((itemm,index)=>{
        return itemm*2
    })
}

console.log(useMap([1,2,3]))