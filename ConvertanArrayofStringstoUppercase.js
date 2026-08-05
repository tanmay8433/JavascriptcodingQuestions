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


// map() method creates a new array populated with the results of calling a provided callback function on every single element in the original array


// map((element, index, array) 
// element: The current item being processed.
// index (Optional): The current index position of the item.
// array (Optional): The source array map was called on

