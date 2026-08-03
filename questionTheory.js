
// Question 1:Hoisting: Describe how variable (var) and function declarations are moved to the top of their scope, and why let and const exist in a Temporal Dead Zone in javascript



// Hoisting is a JavaScript mechanism where variable and function declarations are processed during the memory creation phase before the code is executed.
//  This makes it appear as if declarations are "moved" to the top of their respective scopes (global, function, or block). 

// How Declarations are Hoisted
// Function Declarations: These are fully hoisted, meaning both the function's name and its entire body are available in memory before any code runs. This allows you to call a function before it appears in your source code.
// var Variables: Only the declaration is hoisted, not the initialization. The JavaScript engine allocates memory for the variable and automatically initializes it with a value of undefined. If you access a var variable before its assignment line, it returns undefined instead of an error.
// Function Expressions: If a function is assigned to a var variable, only the variable name is hoisted as undefined. Trying to call it before the assignment will throw a TypeError because it is not yet a function. 

// The Temporal Dead Zone (TDZ) for let and const 
// While variables declared with let and const are technically hoisted (the engine is "aware" of them), they behave differently to prevent common bugs associated with var. 

// Definition: The TDZ is the period between the start of a block and the moment the variable is explicitly declared and initialized in the code.
// Behavior: Unlike var, let and const variables are not initialized with undefined during the hoisting phase; they remain "uninitialized".
// Access Restriction: Any attempt to access a variable while it is in the TDZ will throw a ReferenceError.
// Purpose: The TDZ exists as a "safety net" to force better coding practices by ensuring variables are never used before they are properly declared and assigned. This makes code more predictable and easier to debug



// Question 2: "this" Keyword: Explain how the value of this changes based on invocation context (Global, Method, Constructor, or via call, apply, and bind).
// In JavaScript, the value of the this keyword is dynamic and determined at runtime based on the invocation context—how a function is called—rather than where it is defined. 

// 1. Global Context
// When used outside of any function, this refers to the global object. 

// Browsers: It refers to the window object.
// Standalone Functions: If a regular function is called directly (e.g., func()), this refers to the global object in non-strict mode.
// Strict Mode: In strict mode ('use strict'), this inside a function will be undefined. 

// 2. Method Invocation
// When a function is called as a method of an object (e.g., obj.method()), this refers to the object that owns the method. 

// Implicit Binding: The object immediately before the dot in the call is what this will point to.
// Lost Context: If you assign a method to a variable and call it as a regular function, this may revert to the global object or undefined. 

// 3. Constructor Invocation 
// When a function is invoked with the new keyword, it acts as a constructor. In this context, this refers to the newly created object instance. 

// The new keyword creates an empty object, links it to the function’s prototype, and binds this to that specific object for the duration of the constructor execution. 

// 4. Explicit Binding (call, apply, bind)
// JavaScript provides built-in methods to explicitly set the value of this: 

// Function.prototype.call(): Invokes the function immediately, allowing you to pass the this context as the first argument, followed by individual arguments.
// Function.prototype.apply(): Similar to call(), it invokes the function immediately but accepts additional arguments as an array.
// Function.prototype.bind(): Returns a new function with this permanently set to the provided value, which can be executed later.

// Question 3: Prototypal Inheritance: Explain how objects inherit properties from other objects via the prototype chain in javascript
// Prototypal inheritance is the mechanism in JavaScript where objects directly inherit properties and methods from other objects.
//  Unlike class-based languages like Java or C++, JavaScript uses an "invisible link" called a prototype to share functionality across objects.

// How the Prototype Chain Works
// When you attempt to access a property or method on an object, the JavaScript engine follows a specific lookup process known as the prototype chain: 

// Direct Search: JavaScript first checks if the property exists directly on the object itself (an "own property").
// Prototype Lookup: If not found, it looks at the object's hidden internal prototype (often denoted as [[Prototype]] or accessed via __proto__).
// Traversal: If still not found, it searches the prototype's prototype, continuing up the chain.
// End of Chain: The chain terminates when it reaches Object.prototype, whose prototype is null. If the property is not found by then, it returns undefined


// Ways to Establish Inheritance
// Object Literals: Standard literals implicitly inherit from Object.prototype. You can use the standard { __proto__: parentObject } syntax to set a custom prototype during creation.
// Constructor Functions: When used with the new keyword, the resulting object's prototype is automatically set to the function's prototype property.
// Object.create(): Creates a new object and allows you to specify exactly which object should serve as its prototype.
// ES6 Classes: Modern class and extends keywords are "syntactic sugar" over the underlying prototypal mechanism; they simplify the syntax but use the same prototype chain under the hood



// Question 4:The Event Loop: Describe how the Call Stack, Web APIs, Task Queue, and Microtask Queue interact to manage asynchronous code.
// The Event Loop is a mechanism that allows JavaScript to perform non-blocking, asynchronous operations despite being single-threaded. It coordinates several components to manage the execution order of code:


// Key Differences in Priority
// Feature 	Microtask Queue	                                   Task (Macrotask) Queue
// Examples	Promises, queueMicrotask, MutationObserver	       setTimeout, setInterval, DOM events
// Priority	High; executes before the next macrotask	       Low; waits for the call stack and microtasks
// Batching	All pending microtasks are cleared in one go	   Only one task is processed per event loop tick


// Core Components
// Call Stack: A LIFO (Last-In, First-Out) data structure that tracks currently executing functions. JavaScript processes only one function at a time here.
// Web APIs: Functionality provided by the browser (or Node.js) like setTimeout, fetch, and DOM events. They handle time-consuming tasks in the background, away from the main thread.
// Microtask Queue: A high-priority queue for callbacks from Promises (.then, .catch, .finally), MutationObserver, and queueMicrotask().
// Task Queue (Macrotask Queue): A lower-priority queue for callbacks from Web APIs (e.g., setTimeout, setInterval) and user events


// The Interaction Process
// The Event Loop acts as a continuous "manager" that follows a specific cycle: 

// Execute Synchronous Code: All synchronous tasks are pushed to and popped from the Call Stack first.
// Offload Async Tasks: When an asynchronous function (like setTimeout) is called, it is handed to Web APIs. The Call Stack continues with the next line immediately.
// Queue Callbacks: Once a background task finishes (e.g., a timer ends or a promise resolves), its callback is placed in the Microtask Queue (for Promises) or the Task Queue (for timers/events).
// Drain Microtasks: As soon as the Call Stack is empty, the Event Loop checks the Microtask Queue and executes all tasks in it before moving forward.
// Run One Macrotask: Only after the Microtask Queue is completely empty, the Event Loop takes exactly one task from the Task Queue and pushes it to the Call Stack.
// Repeat: The cycle repeats, checking for new microtasks after every single macrotask




