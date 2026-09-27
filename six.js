  // write a function to determine whether a given string is a palidrome or not.  
  // A palindrome is a word,phrase,no,or other sequence of  characters that reads  the same forword and backword , ignoring spaces, punctuation,and capitalization.

function checkPalindrome(str){
  let strr=str.toLowerCase().replace(/\W/g,"")
  let newStr=strr.split("").reverse().join("")
  return newStr===strr;

}
  console.log(checkPalindrome("racec arr"))