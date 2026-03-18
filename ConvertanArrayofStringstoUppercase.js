// Convert an Array of Strings to Uppercase


function convertoUppercase(arr){
    // return arr.map((item)=>{
    //   return item.toUpperCase()
    // })
    
    let newarr=[];
    for(let i=0;i<arr.length;i++){
        newarr[i]=arr[i].toUpperCase()
    }
    return newarr;
    
    
    
}

console.log(convertoUppercase(["a","r","r","t"]))

// function takes an array of strings as input. It creates a new array and converts each string to uppercase using a loop. The uppercase strings are stored in the new array, which is returned.