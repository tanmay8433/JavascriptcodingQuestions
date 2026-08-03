// Execute Async Functions Sequentially: Ensure a list of asynchronous tasks runs one after another
//  rather than all at once in javascript

// To execute a list of asynchronous tasks sequentially in JavaScript, you must await each task individually within
//  a loop or chain them manually to ensure the next task does not start until the previous one resolves. 


// Using for...of Loop
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