// Map
// Map is an array function which iterates over each array items and produces a new array.
// It takes a callback function as an argument.
// It applies the callback on each item of the array.
// It return a new array and does not manipulate the original array.
// Callback should receive the array[item] and the array index values as parameters.

// Custom Map:
// Use the prototype property of array to iterate over the array Items.
// Declare a new array.
// Callback function sent as a parameter to the map should return a value
// This value will should be stored in the newly declared result array.
// Return the result array.

Array.prototype.customMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i));
    }
    return result;
}
// multiple by 2
console.log([1, 2, 3, 4, 5].customMap((item,index) => item * 2))

// Filter
// Filter is an array function which iterates over each array items and produces a new array.
// It takes a callback function as an argument.
// It applies the callback on each item of the array and filters out the result if callback evaluates true.
// Return a new array and does not manipulate the original array.
// Callback should receive the array[item] and the array index values as parameters.


// Custom Filter:
// Use the prototype property of array to iterate over the array Items.
// Declare a new array.
// Callback function sent as a parameter to the filter should return a value which should be boolean.
// This value if true would be a part of the resultant array.
// Return the result array.

Array.prototype.customFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            result.push(this[i]);
        }
    }
    return result;
}
// Filter even numbers
console.log([1, 2, 3, 4, 5].customFilter((item,index) => item % 2 === 0))

// Reduce
// Reduce is an array function which again iterates over the array elements.
// As the name suggests reduce reduces the value to something shorted be specifically in the signature of the second param.
// Takes a callback function as the first argument.
// The second argument is an initialiser , Initialiser’s value can be of any datatype. i.e. Primitive or Non-Primitive.
// This will also be the result as on each iteration initialiser gets updated with the new value of callback
// Which means if string is declared as second param the array will be reduced to a string. Incase, an initialiser is an array then an array should be returned.
// Return a accumulator value and should not manipulate the original array.

// Custom Reducer:
// Use the prototype property of array to iterate over the array Items.
// Declare a new accumulator value or you can update the same.
// Callback function sent as a parameter to the filter should return a value which should be boolean.
// Callback should receive the accumulator as the first param and the array item values as the second param.
// On each iteration accumulators gets updated with the callbacks result.
// Accumulators gets incrementally updated on each iteration and the new values becomes the next accumulation value for the next iteration.
// Return accumulator value as the result.

Array.prototype.customReduce = function (callback, accumulator) {

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
}
console.log([1,2,3,4,5].customReduce((acc, curr) => acc + curr, 0));





