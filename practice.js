
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




// Remove Duplicates from Array

let arr=[0,1,2,3,0,1,2]
console.log([...new Set(arr)])


function removeDuplicates(arr){
  let newarr=[]
  for(let i=0;i<arr.length;i++){
    if(!newarr.includes(arr[i])){
     newarr.push(arr[i])
    }
  }
  return newarr;
}
console.log(removeDuplicates(arr))




// Find Maximum Number

// let arr=[0,1,2,5,5,7];
let arrnew=arr=>Math.max(...arr)
console.log(arrnew(arr))


 function Findmax(arr)
 {
   let max=arr[0]
   for(let i=1;i<arr.length;i++){
     if(arr[i]>max){
       max=arr[i]
     }
   }
   return max
 }
console.log(Findmax(arr))


// Sum of Array

// let arr=[0,1,2,3,6]
let sum=0
for(let i=0;i<arr.length;i++){
  sum+=arr[i]
}


let summ=arr.reduce((value,acc)=>value+acc,0)
console.log(summ)



// Flatten Array


// let arr=[0,1,2,[3,[5,6],4]]

console.log(arr.flat(Infinity))

let newar=arr=>arr.reduce((acc,value)=>Array.isArray(value)?acc.concat(newar(value)):acc.concat(value),[])

console.log(newar(arr))

function flattenarray(arr){
  let newarr=[]
  for(let i=0;i<arr.length;i++){
    if(!Array.isArray(arr[i])){
      newarr.push(arr[i])
    }
    else{
        newarr = newarr.concat(flattenarray(arr[i]));
    }
  }
  return newarr;
}
console.log(flattenarray(arr))


// Chunk Array

// let arr=[0,1,2,5,8,2]
let size=2;

function chunkarr(arr,size){
  let newarr=[]

  for(let i=0;i<arr.length;i+=size){
    newarr.push(arr.slice(i,i+size))
  }
  return newarr;
}
console.log(chunkarr(arr,size))



// Find Missing Number

// let arr=[0,1,2,4]


let expectedsum=(arr.length * (arr.length + 1))/2;
let actualsum=arr.reduce((a,b)=>a+b,0)
let misno=expectedsum - actualsum
console.log(misno)
