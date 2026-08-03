function isPrime(no){
    if(no<=1){
        return false;
    }
    for(let i=2;i<no;i++){
        if(no%i===0){
            return false;
        }
    }
    return true;
}


console.log(isPrime(7));    
// prime no 
//  In other words, it is only divisible by 1 and itself (e.g., 2, 3, 5, 7, 11...

function isPrimeUltra(no) {
    if (no <= 1) return false;
    if (no <= 3) return true; // 2 and 3 are prime

    // Instantly filter out all even numbers and multiples of 3
    if (no % 2 === 0 || no % 3 === 0) return false;

    // Check factors up to the square root, jumping by 6 each time
    for (let i = 5; i * i <= no; i += 6) {
        if (no % i === 0 || no % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrimeUltra(7));   // true
console.log(isPrimeUltra(121)); // false (divisible by 11)
// The 6k ± 1 Primality Test
// We can instantly rule out all even numbers and numbers divisible by 3 at the very top. Then, we start our loop at 5 and jump by 6 on every iteration, checking two potential factors at once.