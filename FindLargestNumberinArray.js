// Find Largest Number in Array
function findlargestno(arr){
    const newlargestno=Math.max(...arr);
    return newlargestno;
}

console.log(findlargestno([5,8,9,6,5,2]))