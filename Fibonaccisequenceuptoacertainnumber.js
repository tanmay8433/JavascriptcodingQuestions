// Fibonacci sequence up to a certain number


function fibonacciUpTo(num) {
  let first = 0;
  let second = 1;

  while (first <= num) {
    console.log(first);
    let next = first + second;
    first = second;
    second = next;
  }
}

fibonacciUpTo(20);


// function fibonacciUpTo(limit, a = 0, b = 1) {
//   if (a > limit) return;

//   console.log(a);
//   fibonacciUpTo(limit, b, a + b);
// }

// fibonacciUpTo(20);