// Union of Two Arrays


function findUnion(arr,arrsecond){
// merges two arrays then removes duplicates
    // and returns the output as a new array.
    return [...new Set([...arr,...arrsecond])]
}

console.log(findUnion([1,23,3],[2,23,3,4,5,6]))