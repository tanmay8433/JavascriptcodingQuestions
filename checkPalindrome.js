// Check Palindrome
// A palindrome is a word, phrase, number, or sequence of characters that reads the same backward as forward
function checkPalindrome(str){
    const newstr=str.split("").reverse().join("")
    return newstr===str;
}

console.log(checkPalindrome("madam"));


// The Two-Pointer Approach (Most Optimized)
function isPalindromeTwoPointer(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        // If characters at current pointers don't match, it's not a palindrome
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true; // Loop finished without mismatches
}

console.log(isPalindromeTwoPointer("madam")); // true
console.log(isPalindromeTwoPointer("hello")); // false