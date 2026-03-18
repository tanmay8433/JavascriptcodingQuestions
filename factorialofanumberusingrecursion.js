// factorial of a number using recursion
function findFactorial(no){
    if(no===0 || no===1) return 1;
    return no * findFactorial(no-1);
}
console.log(findFactorial(4));