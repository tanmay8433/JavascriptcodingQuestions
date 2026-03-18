// reverse the array

function reversearr(arr){
    // return arr.reverse()
    
    let newarr=[];
    for(let i=arr.length-1;i>=0;i--){
        newarr.push(arr[i])
    }
    return newarr;
}


console.log(reversearr([1,2,3,4]))

