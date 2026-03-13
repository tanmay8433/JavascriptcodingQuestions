// Deep Clone Object


function deepClone(obj){
    return JSON.parse(JSON.stringify(obj))
}
// JSON.stringify()

// Purpose: Convert a JavaScript object → JSON string

// Use it when you want to send data to a server, store in localStorage, or log structured data.

Example
const user = {
  name: "Rahul",
  age: 25
};

const jsonString = JSON.stringify(user);

console.log(jsonString);

// Output

// {"name":"Rahul","age":25}

function deepClone(obj){
    if(obj===null || typeof(obj)!=='object') return obj;


    let copy=Array.isArray(obj)?[]:{};

    for(let key of obj){
        copy[key]=deepClone(obj[key])
    }
    return copy;
}

// JSON.parse()

// Purpose: Convert a JSON string → JavaScript object

// Use it when you receive JSON data from API or storage.

// Example
const jsonStringg = '{"name":"Rahul","age":25}';

const userr = JSON.parse(jsonStringg);

console.log(userr.name);

// Output

// Rahul