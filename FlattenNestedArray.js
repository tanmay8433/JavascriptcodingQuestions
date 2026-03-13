// Flatten Nested Array

function flattenarr(arr){
    const newarr=arr.flat(Infinity)
    return newarr;
}

console.log(flattenarr([[1,2,[3,4],[5,8]]]))



// second approach flatten array
function flattenarry(arr){
 return   arr.reduce((acc,value)=>
Array.isArray(value)?acc.concat(flattenarry(value)):acc.concat(value)
    ,[])
}

console.log(flattenarry([,12,3,65,8,[2,5,6],[5]]))
