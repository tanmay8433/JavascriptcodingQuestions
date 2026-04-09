// Currying is a functional programming technique in JavaScript that transforms a function with multiple arguments
//  into a sequence of nested functions, each accepting a single argument. 
// Instead of calling f(a, b, c), currying allows you to call it as f(a)(b)(c)

// Manual Currying: You can manually nest functions using closures.
//  Each outer function takes one argument and returns a new inner function for the next.
const sum=(a)=>(b)=>(c)=>a+b+c;
console.log(sum(5)(2)(1))


// Common Use Cases
// Event Handling: Creating pre-configured event listeners for specific items in a list.
// API Calls: Pre-filling standard parameters like a database connection or a base URL before adding specific endpoints or IDs.