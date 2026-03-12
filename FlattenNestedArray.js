// Flatten Nested Array

function flattenarr(arr){
    const newarr=arr.flat(Infinity)
    return newarr;
}

console.log(flattenarr([[1,2,[3,4],[5,8]]]))
