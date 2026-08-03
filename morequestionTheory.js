// Question 1:deep vs shallow copy:
// explain why a shallow copy only copies top-level references and how to perform a deep clone using JSON.parse(JSON.stringify(obj)) or recursion to handle nested object in js

// In JavaScript, the choice between shallow and deep copying depends on whether your data contains nested structures.
//  A shallow copy only creates a new container at the top level, while a deep copy ensures that every nested layer is independently duplicated

// Why Shallow Copies Only Copy Top-Level References

// A shallow copy (created via Object.assign() or the spread operator ...) 
// duplicates the primitive values of an object but only copies the memory addresses (references) for any nested objects or arrays.

// Shared References: Because the copy contains the same memory address as the original for nested data, both objects "point" to the same underlying data.
// Mutual Mutation: If you modify a nested property in the copied object, the change will also appear in the original because they both share that internal object

// Performing a Deep Clone
// A deep clone creates a fully independent copy where changes to one do not affect the other at any level

// Method 1: The JSON Hack
// // The simplest way to deep clone a plain object is using JSON.stringify() followed by JSON.parse(). 

// How it works: JSON.stringify(obj) converts the entire object tree into a flat string, effectively stripping away all original
//  memory references. JSON.parse(string) then rebuilds a brand-new object from that string.
// Limitations: This method fails if the object contains non-serializable data like functions, undefined, Symbols, Date objects, or circular references.

// Method 2: Custom Recursion
// For complex objects that the JSON method cannot handle, you can write a recursive function. 

// The Logic: The function iterates through each property. If a property is a primitive, it copies it directly.
//  If it is an object or array, the function calls itself (recursion) to clone that nested level until everything has been duplicated into new memory slots. 
let emptyStack = {
  feTools: 'JS, React, NextJS, Tailwindcss, Netlify',
  react: {
    baseConcepts: 'props, states, hooks',
    advancedConcepts: {
      hoc: 'composition of the functions',
      contextApi: 'Sharing the data without prop drilling'
    }
  }
}
function deepCopy(currentObj) {
  let newObj = Array.isArray(currentObj) ? [] : {}; //Step#1
  for (let key in currentObj) { //Step#2
    let property = currentObj[key];
    if (typeof property === "object") {
      newObj[key] = deepCopy(property); //Step#3
    } else {
      newObj[key] = property; //Step#3
    }
  }
  return newObj;
}
let deepClonedObject = deepCopy(emptyStack)

console.log(`${JSON.stringify(deepClonedObject)}`)
/** Output
{"feTools":"JS, React, NextJS, Tailwindcss, Netlify","react":{"baseConcepts":"props, states, hooks","advancedConcepts":{"hoc":"composition of the functions","contextApi":"Sharing the data without prop drilling"}}} */

// Modern Native Alternative: structuredClone()
// In modern environments, use the built-in structuredClone() method. It handles many data types that the JSON method
//  cannot (like Dates and circular references) and is faster than custom recursion


// Question 2:closure:explain how a function "remembers" its lexical scope even after the outer function has finished executing in js

// A closure allows a function to "remember" its lexical scope because of how JavaScript handles memory and internal function properties.

// The Mechanism: How it "Remembers"
// Lexical Scope Determination: JavaScript uses lexical (static) scoping, meaning a function's scope is determined at compile time based on where it is written in the source code.
// The Hidden Property: Every JavaScript function has a hidden internal property (often referred to as [[Environment]]). 
// At the moment a function is created, it stores a reference to the Lexical Environment in which it was defined within this property.
// Reference Preservation: When an outer function returns an inner function, that inner function's [[Environment]] property still points to the outer function’s scope.
// Memory Management: Because the inner function is still reachable (e.g., assigned to a variable) and it holds a reference to the outer scope, 
// the JavaScript engine's garbage collector cannot delete that outer scope from memory.


function createCounter() {
  let count = 0; // Lexical environment of createCounter
  return function() {
    count++; // Inner function "remembers" count via [[Environment]]
    return count;
  };
}
const counter = createCounter(); 
// createCounter() has finished executing, but 'count' stays in memory 
// because 'counter' still holds a reference to it.
console.log(counter()); // 1


// Question 3: Currying :Trasform a function with multiple arguments into a sequence of function that each take a single argument in js
const fn=(a)=>(b)=>(c)=>a+b+c;
console.log(fn(2)(1)(3))

//  Question 4: Debounce vs Throttle:explain the difference and implement a debounce function to limit how often a function executes during rapid events like window resize and typeing in js
// Debouncing and throttling are both techniques used to limit how often a function executes in response to high-frequency events like window resizing, scrolling, or typing.

// Key Differences
// Feature 	Debounce	                                    Throttle
// Execution Timing	Executes after a period of inactivity.	Executes at regular intervals during activity.
// Best For	Actions where only the final result matters (e.g., search input, form validation).	Actions where you need continuous updates at a controlled rate (e.g., scroll position tracking, window resizing).
// Analogy	Like an elevator: it waits for the last person to enter before moving.	Like a water faucet: it lets a drop fall at a fixed rate, no matter how much pressure there is.

// How it Works
// Wrapper: The debounce function returns a new "wrapped" function.
// Reset: Every time the wrapped function is called (e.g., every keystroke), it immediately cancels any existing timer using clearTimeout(timeoutId).
// Delay: It then schedules a new timer.
// Final Execution: If the user stops the activity long enough for the timer to finish, the original function (func) finally runs


function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    // Clear the previous timer if the event fires again before the delay ends
    clearTimeout(timeoutId);

    // Start a new timer
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 1. Window Resize: Only runs 500ms after the user finishes resizing
const handleResize = debounce(() => {
  console.log("Window resized to:", window.innerWidth, "x", window.innerHeight);
}, 500);

window.addEventListener('resize', handleResize);
// 2. Typing/Search: Only triggers 300ms after the user stops typing
const handleSearch = debounce((event) => {
  console.log("Searching for:", event.target.value);
}, 300);

const searchBox = document.getElementById('search-input');
if (searchBox) {
  searchBox.addEventListener('input', handleSearch);
}





































