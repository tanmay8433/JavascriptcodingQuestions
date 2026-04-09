// o correctly identify "FizzBuzz," you must check for multiples of both 15 (or 3 and 5) first. 
// If you check for 3 or 5 first, the program will log "Fizz" or "Buzz" and skip the "FizzBuzz" condition for numbers like 15

for(let i=1;i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz")
    }
    else if(i%3===0){
 console.log("Fizz")
    }
    else if(i%5===0){
         console.log("Buzz")
    }
    else{
        console.log(i)
    }
}

// Alternative Approach (String Concatenation) 

for(let i=1;i<=100;i++){
 let output="";
 if(i%3===0) output+="fizz";
 if(i%5===0) output+="buzz";
 console.log(output||i)
}