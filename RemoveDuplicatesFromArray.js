// Remove Duplicates From Array
function removeDulicates(arr){
   return [...new Set(arr)]
}

console.log(removeDulicates([1,2,65,89,65,4]))