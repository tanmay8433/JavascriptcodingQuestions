// Implement Promise.all: Write a function that resolves when all input promises resolve, or rejects if any fail.
// To implement a function with the same behavior as Promise.all(), you must ensure it resolves only when every input promise fulfills, 
// maintains the original order of the results, and rejects immediately if any single promise fails.

// Fail-Fast Behavior: The returned promise must reject as soon as the first rejection occurs,
//  without waiting for the others to settle.

// Order Preservation: Results must be stored in an array at the exact index corresponding to their input promise, 
// even if they resolve out of order (e.g., if the second promise finishes before the first).

// Input Flexibility: Use Promise.resolve() on each element to correctly handle "thenable" objects or static
//  values that are not native promises.

// Empty Iterables: If passed an empty array, it must return a promise that resolves immediately to an empty array.


// handle concurrent asynchronous operations.
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const result = [];
        let completeCount = 0;

        // handle empty input immediately
        if (promises.length === 0) {
            resolve(result)
            return;
        }

        promises.forEach((promise, index) => {
            // Use Promise.resolve() to handle non-promise values (like numbers or strings
            Promise.resolve(promise)
                .then((value) => {
                    // Store the result at the same index as the input promise
                    result[index] = value;
                    completeCount++;


                    if (completeCount === promise.length) {
                        resolve(result);
                    }
                })
                .catch((error) => {
                    reject(error)
                });

        });
    });
}