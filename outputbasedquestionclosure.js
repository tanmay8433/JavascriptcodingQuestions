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