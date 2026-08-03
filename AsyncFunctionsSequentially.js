// Execute Async Functions Sequentially: Ensure a list of asynchronous tasks runs one after another
//  rather than all at once in javascript

// To execute a list of asynchronous tasks sequentially in JavaScript, you must await each task individually within
//  a loop or chain them manually to ensure the next task does not start until the previous one resolves. 
const task=[
    ()=>fetch('apiurl/step1'),
    ()=>fetch('apiurl/step2'),
    ()=>fetch('apiurl/step2'),
];
async function runtaskSequentially(taskArray){
    for(const task of taskArray){
        const result=await task();
        console.log(result)
    }
    console.log("all tasks finished in order")
}
runtaskSequentially(task)


// using Manual Chaining
// If you have a fixed number of tasks, you can simply call them one by one with await in an async function
async function  executeOrder() {
   const res1=await taskOne(); 
    const res2=await tasktwo(); 
     const res3=await taskthree(); 
}


// Using for...of Loop
// The primary difference is that for...in iterates over the keys (property names) of an object, while for...of iterates over the values of an iterable collection
// Behavior with ArraysWhen used on an array, for...in logs the string indices, whereas for...of logs the actual data elements.javascriptconst fruits = ['apple', 'banana', 'orange'];

// // for...in logs indices (as strings)
// for (const index in fruits) {
//   console.log(index); // "0", "1", "2"
// }

// // for...of logs values
// for (const value of fruits) {
//   console.log(value); // "apple", "banana", "orange"
// }

// Behavior with ObjectsPlain JavaScript objects are enumerable but not iterable. This means for...in works out of the box, but for...of will throw a TypeError.javascriptconst user = { name: 'Alice', age: 25 };

// // for...in works perfectly
// for (const key in user) {
//   console.log(key); // "name", "age"
//   console.log(user[key]); // "Alice", 25
// }

// // for...of fails
// for (const value of user) {
//   // TypeError: user is not iterable
// }
// Note: To use for...of on an object, you must extract its data first using methods like Object.values(user) or Object.entries(user) Object.keys(user)