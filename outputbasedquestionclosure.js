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


console.log([] == false);

//  Type Coercion
console.log("5" - 3);
console.log("5" + 3);


// Arrow Function this


const obj = {
  name: "Alex",
  greet: () => {
    console.log(this.name);
  }
};

obj.greet();
// Arrow functions do not have their own this.
// Output
// undefined


// this Keyword
const objj = {
  name: "Alex",
  greet: function() {
    console.log(this.name);
  }
};

objj.greet();

// Output

// Alex

// this refers to the object calling the method.




// Event Loop Question
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// Output

// A
// D
// C
// B

// Execution order

// Synchronous → A

// Synchronous → D

// Microtask (Promise) → C

// Macrotask (setTimeout) → B