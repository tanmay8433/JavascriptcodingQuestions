// find the longest palindromic substring into given string
// Input:  "babad"   → Output: "bab"

// Simple Solution: Expand Around Center
// substring() method in JavaScript extracts characters from a string between two specified indices and returns a new string without modifying the original one
// string.substring(startIndex, endIndex)
function longestPalindromicSubstring(str){
  if(str.length < 2) return str;
  let start=0;
  let maxlen=1;
  function expend(left,right){
    while(left >= 0 && right < str.length && str[left] === str[right]){
      left--;
      right++;  
      }
      const len=right-left-1;
    if(len > maxlen){
      maxlen=len;
      start=left+1;
    }
  }
  for(let i=0;i<str.length;i++){
    expend(i,i)
    expend(i,i+1)
  }
  return str.substring(start,start + maxlen)
}
console.log(longestPalindromicSubstring("babad"))

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function longestPalindrome(s) {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const sub = s.slice(i, j);

      if (sub.length > longest.length && isPalindrome(sub)) {
        longest = sub;
      }
    }
  }

  return longest;
}

console.log(longestPalindrome("babad"));



  // find the shortest word in a string

 let str="my name is tanmay agarwal"


function shortestWord(str){
  let strnew=str.split(" ")
  let short=strnew[0]
  for(let i=1; i< strnew.length; i++){
    if(strnew[i].length < short.length){
      short=strnew[i]
    }
  }
  return short
}
console.log(shortestWord(str));



// Remove a given character from a string
// using loop and other approch split+join,filter,replaceAll
function removeChar(str,char){
  let result=""
  for(let i=0; i < str.length;i++){
    if(str[i] !== char){
      result+=str[i]
    }
  }
  return result
}
console.log(removeChar("tanmay agarwal","a"))



// find the number of words in a string
function findnoWordintoString(str){
  return str.split(" ").length
}
console.log(findnoWordintoString("my name is tanmay agarwal"))

function countWords(str) {
  let count = 0;
  let inWord = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && !inWord) {
      count++;
      inWord = true;
    } else if (str[i] === " ") {
      inWord = false;
    }
  }

  return count;
}

console.log(countWords("  my   name is  ")); // 3




// check if a string contains only digits
// other approches every and RegExp
function isOnlyDigits(str){
  if(str.length === 0) return false;
  for(let i=0; i < str.length; i++){
    if(str[i] < "0" || str[i] > "9"){
      return false;
    }
  }
  return true;
}
console.log(isOnlyDigits("12345"));  // true
console.log(isOnlyDigits("123a45")); // false
console.log(isOnlyDigits(""));       // false


// covert a string to character Array

function convertIntoArray(str){
  return str.split("")
  //2nd approach 
   return [...str];
  
    const result = [];
//3nd approach 
  for (let i = 0; i < str.length; i++) {
    result.push(str[i]);
  }
  //4nd approach 
  for (const ch of str) {
    result.push(ch);
  }
}

console.log(convertIntoArray("geeksforgeek"))




// replace space with %20(url encoding)
function replaceSpace(str){
  // return str.split(" ").join("%20")
  // return str.replaceAll(" ","%20")

  let result=""
  for(let i=0; i<str.length;i++){
    if(str[i] === " "){
      result+="%20"
    }
    else{
      result+=str[i]
    }
  }
  return result
}
console.log(replaceSpace("my name is tanmay"))




// covert a sentence into an Acronym
let str="my name is tanmay"


function CovertAcronym(str){
  return str.split(" ").reduce((acc,word)=>acc+(word?word[0].toUpperCase():""),"")
}

console.log(CovertAcronym(str))