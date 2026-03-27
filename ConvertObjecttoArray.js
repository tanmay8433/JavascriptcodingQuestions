
// Convert Object to Array
const objnew={
    name:"tanamay",
    age:24,
    surname:"agarwal"
}

const newarr=Object.entries(objnew)
console.log(newarr)

// Create an array of key-value pair arrays from a given object

// function objectToPairs(obj) {
//   let result = [];

//   for (let key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       result.push([key, obj[key]]);
//     }
//   }

//   return result;
// }

// console.log(objectToPairs({ name: "Aman", age: 22 }));