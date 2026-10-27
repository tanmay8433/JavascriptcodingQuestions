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


// find the longest common prefix
// Problem: Given an array of strings, return the longest prefix shared by all of them (e.g. ["flower","flow","flight"] → "fl").
// 1. Vertical scanning
function findlongestcommonprefix(arr){
  if(!arr.length) return "";
for(let i=0; i < arr[0].length; i++){
  let ch= arr[0][i]
  for(let j=1; j < arr.length; j++){
    if(i === arr[j].length || arr[j][i] != ch){
      return arr[0].slice(0,i)
    }
  }
}
return arr[0]
}

console.log(findlongestcommonprefix(["flower","flow","flight"]))




  // conver a string to title 
const str="i learn jaVAscripT"

function covertTitlecase(str){
  return str.toLowerCase().split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
}
console.log(covertTitlecase(str))


// check if a string in a valid shuffle of two string
// Two pointers (works only when characters are distinct) Walk through result one character at a time. Each character must come from the next unused character of str1 or the next unused character of str2. If it matches neither, it’s not a valid shuffle.
let s1 = "abc"
let s2 = "def"
let result = "adbecf" 
function checkShuffle(str1,str2,result){
  if(str1.length + str2.length !== result.length) return   false;
    let i=0 , j=0;
  for (let k=0; k < result.length;k++){
    if(i < str1.length && result[k] === str1[i]){
      i++;
    }
    else if (j < str2.length && result[k] === str2[j]){
      j++;
    }
    else
    {
      return false;
    }
  }
  return true;
}
console.log(checkShuffle(s1,s2,result))


// remove the all white spaces from a string

let str=" tanmay agarwal"
function removewhitespace(str){
  // return str.split(" ").join(" ")
  let result=""
  for(let i=0;i < str.length; i++){
    if(str[i] !== ' '){
      result+=str[i]
    }
  }
  return result;
}
console.log(removewhitespace(str))



// check if a string is a rotation of another string
// Concatenation trick (best answer)
function checkrotation(str1,str2){
  if(str1.length !== str2.length) return false;

return (str1 + str1).includes(str2)

  
}

console.log(checkrotation("waterbottle", "erbottlewat")) // true 
// "waterbottle" + "waterbottle" = "waterbottlewaterbottle"
// Look inside it: "wat erbottlewat erbottle". That’s s2.



// find the most frequent character into the string
// Frequency map with an object (most common answer)

function findFrequent(str){
let obj={}
  let count=0;
  let charr=""

  for(let char of str){
    obj[char]=(obj[char]||0) +1
if(obj[char] > count){
  count=obj[char]
  charr=char
}
  }
  return charr
  
} 

console.log(findFrequent("hello world"))


// find the all substring into a given string

let str="tanmay"

function findallSubstring(str){
  let result=[]


  for(let i=0; i < str.length;i++){
    for(let j=i+1;j <=str.length ; j++){
      result.push(str.slice(i,j))
    }
  }
  return result
}

console.log(findallSubstring(str))