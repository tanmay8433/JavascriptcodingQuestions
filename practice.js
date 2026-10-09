
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




// Two Sum Problem

function findTwosum(arr,target){
  const map=new Map();
  for(let i=0;i< arr.length;i++){
    let complement=target-arr[i]
    if(map.has(complement)){
      return [map.get(complement),i]
    }
    else{
      map.set(arr[i],i)
    }
  }
}
console.log(findTwosum([2,7,19,5],9))

function findTwosum(arr,target){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]==target){
        return [i,j]
      }
    }
  }
  return []
}
console.log(findTwosum([2,7,19,5],9))


// Move Zeros to End
let arr=[0,1,25,0,12]

const movezero=arr=>{
  const nonzero=arr.filter(value=>value !==0);
  const zerovalue=arr.filter(value=>value ==0);
  return [...nonzero,...zerovalue]
  
}

console.log(movezero(arr))



// let arr=[0,1,25,0,12]

const movezeroo=arr=>{
let position=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
      arr[position]=arr[i]
      position++
    }
  }
  while(position<arr.length){
        arr[position]=0;
      position++
  }
  return arr
}

console.log(movezeroo(arr))


// Find Intersection

let arr1=[1,2,3]
let arr2=[0,1,2,4]

const findintersection = (arr1,arr2)=>{
  return [... new Set(arr1)].filter((value)=>arr2.includes(value))
}

console.log(findintersection(arr1,arr2))




const findintersectionn = (arr1,arr2)=>{
let result=[]
  for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
      if(arr1[i]===arr2[j] && !result.includes(arr1[i])){
        result.push(arr1[i])
      }
    }
  }
  return result;
}

console.log(findintersectionn(arr1,arr2))



// Fibonacci Sequence

const findfibonacci=n=>{
  if(n<=1) return n;
  let a=0;let b=1;
  for(let i=2;i<=n;i++){
    [a,b]=[b,a+b]
  }
  return b;
}
console.log(findfibonacci(7))


const findfibonaccii=n=>{
  if(n<=1) return n;
return findfibonacci(n-1) + findfibonacci(n-2)
}
console.log(findfibonaccii(7))




 // Check Prime Number
let number=17;
function findprimeno(no){
  if(no<=1) return false;
  for(let i=2;i<=Math.sqrt(no);i++){
    if(no % i === 0){
      return false;
    }
  }
  return true;
}
console.log(findprimeno(number))





 // Check Prime Number
// let number=17;
function findprimeno(no){
  if(no<=1) return false;
  // for(let i=2;i<=Math.sqrt(no);i++){
     for(let i=2;i<no;i++){
    if(no % i === 0){
      return false;
    }
  }
  return true;
}
console.log(findprimeno(number))


// Factorial

function findFactorial(no){
  // return no<=1 ? 1:no * findFactorial(no-1);
let result=1;
  for(let i=2;i<=no;i++){
    result *=i;
  }
  return result;
}


console.log(findFactorial(5))



Reverse Number
function reverseno(no){
 let reverse=parseFloat(String(Math.abs(no)).split("").reverse().join(""))
  return no < 0 ? -reverse : reverse;
}

console.log(reverseno(741111))




// Count Digits


function countDigits(no){
  return no.toString().split("").length
  // return String(Math.abs(no)).length;
}
console.log(countDigits(12544))




// Deep Clone Object


function deepClone(obj){
  // return JSON.parse(JSON.stringify(obj))
  return structuredClone(obj)
}
console.log(deepClone({a: 1, b: {c: 2}}))
// • structuredClone() is a built-in browser and Node.js feature.
// • It looks at the object, dives deep into all nested layers (like your inner object {c: 2}), and creates a completely brand-new copy in memory.
// • If you modify the clone, the original object remains perfectly safe and untouched.
// 1. JSON.stringify(obj) → Turns the entire object structure into a simple string of text.
// 2. JSON.parse(...) → Reads that text string and builds a fresh new object from scratch



// marge objects


function margeObj(obj1,obj2){
  // return {...obj1,...obj2}
// return Object.assign({}, obj1, obj2);
  let result={...obj1}
  for( let key in obj2){
    if(typeof(obj2[key])==='object' && !Array.isArray(obj2[key])){
      result[key]=margeObj(result[key] || {},obj2[key])
    }
    else{
      result[key]=obj2[key]
    }
  }
  return result;
}
console.log(margeObj({a: 1}, {b: 2}))