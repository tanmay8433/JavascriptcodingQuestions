
//  Reverse a String

let str="tanmay"
// let newstr=str.split("").reverse().join("")

// for(let i=str.length-1;i>=0;i--){
//   newstr+=str[i]
// }
const newstr=(str)=>[...str].reverse().join("")

console.log(newstr("hello"))

// Check Palindrome

function checkpalindrome(str){
  return str===str.split("").reverse().join("")
  // return str===[...str].reverse().join("")
}
console.log(checkpalindrome("madam"))


// Count Vowels


let vowels = "aeiou";

function checkvowels(str) {
  // Fixed the closing bracket to a parenthesis
  // return (str.match(/[aeiou]/gi) || []).length; 
  return str.toLowerCase().split("").filter(char=>vowels.includes(char)).length

    // let count=0;
  // for(let i=0;i<=str.length-1;i++){
  //   if(vowels.includes(str[i])){
  //     count++
  //   }
  // }
  // return count;
}

console.log(checkvowels("hello world")); // Output: 3


// Capitalize First Letter


function capitalizeFirstLetter(str){

// return str.charAt(0).toUpperCase()+str.slice(1)
  let newstr=str.split(" ")

  for(i=0; i < newstr.length; i++){
    newstr[i] = newstr[i].charAt(0).toUpperCase()+newstr[i].slice(1)
  }
return newstr.join(" ")
}
console.log(capitalizeFirstLetter("my"))


// Remove Duplicates from String


function removeduplicates(str){
  return [...new Set(str)].join("")
  // let newstr=[]
  // for(let i=0;i<str.length-1;i++){
  //   if(!newstr.includes(str[i])){
  //     newstr.push(str[i])
  //   }
  // }
  // return newstr.join("")
}

console.log(removeduplicates("tanmayayt"))


// Longest Word
function findlongestword(str){
  // let newstr=str.split(" ")
  // let longest=newstr[0];
  // for(let i=0; i < newstr.length; i++){
  //   if(newstr[i].length > longest.length){
  //     longest=newstr[i]
  //   }
  // }
  // return longest
  return str.split(' ').reduce((longest, word) => 
  word.length > longest.length ? word : longest, '');
}
console.log(findlongestword("my name is tanmay"))


// Check Anagram

function checkanagrams(str1,str2){
  // const normalize=(str)=>str.toLowerCase().split("").sort().join("")
  // return normalize(str1)===normalize(str2)

  if(str1.length!=str2.length){
    return false;
  }
  let countstr1={}
  let countstr2={}
  for(let i=0;i<str1.length;i++){
    countstr1[str1[i]]=(countstr1[str1[i]] || 0) + 1;
  }
   for(let i=0;i<str2.length;i++){
    countstr2[str2[i]]=(countstr2[str2[i]] || 0) + 1;
  }
           for(let char in countstr1){
             if(countstr1[char]!==countstr2[char]){
               return false;
             }
           }
  return true;
}
console.log(checkanagrams("listen", "silent"))