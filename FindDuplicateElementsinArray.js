// Find Duplicate Elements in Array
function findDuplicate(arr){
    let removeduplicate=[];
    arr.forEach((item,index)=>
    {
        if(arr.indexOf(item)!==index && !removeduplicate.includes(item)){
            removeduplicate.push(item)
        }
    })
    return removeduplicate;
}
console.log(findDuplicate([1,23,6,9,85,6,9]))


// 2approach using filter method
function findDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}

console.log(findDuplicates([1,2,3,2,4,1]));