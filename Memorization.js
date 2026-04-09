// Memoization is an optimization technique that caches the results of expensive function calls,
//  returning the stored value when the same inputs occur again

// Key Implementation Concepts
// Higher-Order Functions: Memoization is typically implemented as a wrapper function 
// that takes another function as an argument and returns a new "memoized" version.

// Closures: The returned function maintains access to a persistent cache (usually an object or Map)
//  defined in the outer function's scope.

// Unique Keys: For every function call, a unique key must be generated from the input arguments
//  to serve as a lookup in the cache

// React: Use the useMemo hook to cache calculated values or React.memo to cache entire components.

// new Map usually refers to the Map object, a collection used to store key-value pairs where keys can be of any data type
const memoize = (fn) => {
  const cache = new Map(); // Store results in a Map for efficiency
  return (...args) => {
    const key = JSON.stringify(args); // Generate a unique key for the inputs
    
    if (cache.has(key)) {
      console.log('Returning from cache');
      return cache.get(key); // Return the stored result if it exists
    }
    
    const result = fn(...args); // Otherwise, perform the expensive calculation
    cache.set(key, result); // Store it for future use
    return result;
  };
};

// Example usage with a slow recursive Fibonacci function
const fib = memoize((n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});

console.log(fib(40)); // First call: computes normally
console.log(fib(40));


// Build an Accordion: Create a simple UI component where clicking a header toggles the visibility of its content.
// Todo List: A standard task to build a functional app that can add, display, and delete items.
// Event Emitter: Design a class that allows objects to subscribe to and emit custom events