// Check Palindrome

function checkPalindrome(str){
    const newstr=str.split("").reverse().join("")
    return newstr===str;
}

console.log(checkPalindrome("madam"));