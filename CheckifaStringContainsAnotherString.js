// Check if a String Contains Another String
function checksubstrig(str,substring){
    return str.indexOf(substring)!==-1;
}

console.log(checksubstrig("geekforgeeks","for"))
// The indexOf() method returns the position of the first occurrence of a value in a string. The indexOf() method returns -1 if the value is not found

// The Standard Manual Approach (Sliding Window Loop)
function checkSubstringManual(str, substring) {
    // An empty substring is always considered part of any string
    if (substring.length === 0) return true; 

    // The outer loop only needs to run up to the point where the remaining 
    // characters are at least as long as the substring itself.
    for (let i = 0; i <= str.length - substring.length; i++) {
        let matchFound = true;

        // The inner loop verifies if the substring matches starting at position 'i'
        for (let j = 0; j < substring.length; j++) {
            if (str[i + j] !== substring[j]) {
                matchFound = false;
                break; // Mismatch found, stop checking this position
            }
        }

        // If the inner loop finished without a single mismatch
        if (matchFound) {
            return true;
        }
    }

    return false;
}

console.log(checkSubstringManual("geekforgeeks", "for")); // Output: true
console.log(checkSubstringManual("geekforgeeks", "code")); // Output: false