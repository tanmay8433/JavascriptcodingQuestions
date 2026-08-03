// Capitalize the First Letter of Each Word in a Sentence

function capitalizefirstLetter(str){
    let arr = str.split(" ");
    for(let i=0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ')
}
console.log(capitalizefirstLetter("my name is tanmay"))

function capitalizeFirstLetterOptimized(str) {
    let result = "";
    let isWordStart = true; 

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === " ") {
            result += " ";
            isWordStart = true; // Next character will be the start of a word
        } else {
            if (isWordStart) {
                let code = char.charCodeAt(0);
                // Convert lowercase letters (a-z: 97-122) to uppercase by subtracting 32
                if (code >= 97 && code <= 122) {
                    char = String.fromCharCode(code - 32);
                }
                isWordStart = false; // Turn off toggle for the rest of this word
            }
            result += char;
        }
    }
    return result;
}

console.log(capitalizeFirstLetterOptimized("my name is tanmay")); 
// Both charCodeAt() and fromCharCode() are companion methods in JavaScript used to translate text characters back and forth into their underlying numerical computer codes (ASCII / UTF-16 values).
// split() method divides a string into an ordered list of substrings, puts them into an array, and returns the array;
// split(separator, limit);
// for loop repeats a block of code a specific number of times. for (initialisation; condition; afterthought)
// slice() method extracts a portion of an array or a string and returns it as a new object without modifying the original data
// slice(start, end);
// const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// // 1. Extract from index 1 up to index 4 (excluding index 4)
// const subset = colors.slice(1, 4); 
// console.log(subset); // ['green', 'blue', 'yellow']

// // 2. Omit the end parameter to extract until the end
// const fromTwo = colors.slice(2); 
// console.log(fromTwo); // ['blue', 'yellow', 'purple']

// // 3. Clone an entire array by passing no arguments
// const arrayCopy = colors.slice(); 
// console.log(arrayCopy); // ['red', 'green', 'blue', 'yellow', 'purple']
// toUpperCase() method returns the calling string value converted to uppercase.
// the join() method creates and returns a new string by concatenating all elements of an array, separated by a specified separator string  array.join(separator);