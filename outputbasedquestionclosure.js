// Output Question (Closure)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Output

// 3
// 3
// 3

// Because var is function scoped.



// Fix with let

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Output

// 0
// 1
// 2


// What will be the output of the following code and why?

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log("Increment:", count);
    },
    decrement() {
      count--;
      console.log("Decrement:", count);
    },
    getCount() {
      return count;
    }
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment();
counter1.increment();
counter2.increment();

console.log(counter1.getCount());
console.log(counter2.getCount());
// output
// Increment: 1
// Increment: 2
// Increment: 1
// 2
// 1


for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}



for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}