  function convertArrayToObject(arr) {
    return arr.reduce((accumulator, currentItem) => {
      const key = currentItem.id;
      const value = currentItem.value;
      accumulator[key] = value;
      return accumulator;
    }, {}); // The `{}` is the initial value of the accumulator.
  }


  // Example usage:
  const data = [
    { id: 'a', value: 1 },
    { id: 'b', value: 2 },
    { id: 'c', value: 3 }
  ];
  const singleObject = convertArrayToObject(data);
  console.log(singleObject); // Expected output: { a: 1, b: 2, c: 3 }

  function convertArrayToObject(arr) {
  const accumulator = {}; // 1. Create the empty object
  
  for (const currentItem of arr) {
    const key = currentItem.id;
    const value = currentItem.value;
    accumulator[key] = value; // 2. Assign key-value pairs
  }
  
  return accumulator; // 3. Return the populated object
}

// const result = array.reduce((accumulator, currentValue, currentIndex, array) => {
  // Return the updated accumulator
// }, initialValue);


// .reduce() method in JavaScript executes a user-provided "reducer" callback function on each element of an array to process and combine them into a single output value.

// It reduces an entire array down to a single value (like a number, a string, an object, or a new array)

// accumulator: The accumulated value returned from the previous loop iteration.
// currentValue: The current element being processed.
// initialValue (Highly Recommended): The value to use as the first argument to the first call of the callback