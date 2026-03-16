let Input=
[
 {name:"A", age:20},
 {name:"B", age:21},
 {name:"A", age:20}
]


function removeDuplicaties(arr){
    let map= new Map();
    
    arr.forEach((obj)=>{
        map.set(obj.name,obj)
    })
    return [...map.values()]
}

console.log(removeDuplicaties(Input))



// Map is a built-in object used to store key–value pairs,
//  similar to objects but with some advantages. Let’s break down Map, map.set(), and map.values() clearly.

// set() is used to add or update a key-value pair.

// map.values()

// values() returns all values from the map.

// map.keys()

// Returns all keys.

// console.log([...map.keys()]);

// Output:

// [1,2,3]
// map.entries()

// Returns key-value pairs.

// console.log([...map.entries()]);

// Output:

// [
//  [1,"Apple"],
//  [2,"Banana"],
//  [3,"Mango"]
// ]