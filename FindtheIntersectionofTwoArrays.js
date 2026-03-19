// Find the Intersection of Two Arrays in JavaScript?
// In the given code set is used to store a unique values from arr2 then filter checks each element in arr1 to see if it 
// is also exist in the set and keeping only those that matches. The output is an array of common elements from both arr1 and arr2.

function findIntersection(arr1,arr2){
    let newarr=new Set(arr2)
    return arr1.filter(item=>newarr.has(item))
    
}


console.log(findIntersection([5, 6, 7], [6, 7,8 ]))