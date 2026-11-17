// chunk array using Standard for Loop with .slice()
let arr=[1,2,3,4,5]
let size=2;

function chunkarray(arr,target){
    if(target <= 0) return [];
let chunk=[]
for(let i=0;i<arr.length;i += size){
    chunk.push(arr.slice(i,i+size))

}
return chunk

}

console.log(chunkarray(arr,size))

// filter out the falsy value
let arr=[1,0,null,"",3,undefined]
const newarr=arr.filter(Boolean)
function removeFalsy(arr){
    if(!Array.isArray(arr)){
        `exptected value is arr`
    }
    const result=[];
    for(let item of arr){
        if(item){
            result.push(item)
        }
    }
    return result;
}
console.log(removeFalsy(arr),newarr)

// frequce count of element
function countFrequency(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array");
  }

  const freqMap = new Map();

  for (const item of arr) {
    freqMap.set(item, (freqMap.get(item) || 0) + 1);
  }

  return freqMap;
}

const arr = ["a", "b", "c", "d", "a", "c", "b", "a"];
console.log(countFrequency(arr));
// Output: Map(4) { 'a' => 3, 'b' => 2, 'c' => 2, 'd' => 1 }

// remove false value without allocate the newarr

function removefalsy(arr){
    let index=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]){
            arr[index++]=arr[i]
        }
    }
    arr.length=index;
    return arr
}
console.log(removefalsy(arr))


// group Array item by property
const user=[
   { name:"tanmay",city:"kotdwar"},
   { name:"tanmayag",city:"delhi"},
   { name:"tanmayagarwal",city:"kotdwar"},
]

// const groupbyproperty=Object.groupBy(user,(item)=>item.city)
// console.log(groupbyproperty)
function groupbyproperty(arr,key){
   if(!Array.isArray(arr))
{
    return `first argument expected arr`
}
const grouped={}
for(const item of arr){
    const groupkey=item?.[key]

if(!grouped[groupkey]){
    grouped[groupkey]=[]
}
   grouped[groupkey].push(item)

}
return grouped

}
console.log(groupbyproperty(user,"city"))

// convert map to object
const userMap = new Map([
  ['name', 'Aarav'],
  ['role', 'Frontend Engineer'],
  ['experience', 4]
]);

const object=Object.fromEntries(userMap)  // in built method 
console.log(object)

const obj={}
for(let [key,value] of userMap){          // for of loop
    obj[key]=value
}
console.log(obj)

// using reduce method
const newObj=Array.from(userMap).reduce((acc,[key,value])=>{
acc[key]=value;
return acc
},{})
console.log(newObj)
// convert number to array of digits 
// const digitstonumber =(digits)=>{
//     return Array.from(String(Math.abs(digits)),Number)  // built in method
// }

function digitstonumber(digits){
    if(!Number.isInteger(digits)){
        return `expected an isInteger`
    }
    if(digits===0) return;

    const digitsarr=[]

    let n = Math.abs(digits) // handle the nagetive no

    while(n > 0){
    digitsarr.push(n % 10)
    n=Math.floor(n / 10)
    }
    return digitsarr.reverse()  // used the unshift inside the loop 
}
console.log(digitstonumber(112345))

// find the longest word into the string
let str="my name is tanmay"
let arr=str.split(" ")
let longest=""
for(let i=0;i<arr.length;i++){
  if(arr[i].length>longest.length){
    longest=arr[i]
  }
}
  console.log(longest)

let str = "my name is tanmay";
let longest = str.split(" ").reduce((a, b) => a.length > b.length ? a : b, "");
console.log(longest); // Output: "tanmay"

// find the  first non repeted character  or // find the first unique character in a string 


let str="tanmay"
let newstr={};
let firstnonrepetedchar=""
for(let i = 0; i < str.length; i++){
  newstr[str[i]]=(newstr[str[i]] || 0 ) + 1;
}

for(let char of str){
  if(newstr[char] === 1){
    firstnonrepetedchar = char
    break;
  }
}
console.log(firstnonrepetedchar)

let str = "tanmay";
let firstNonRepeated = "";

for (let i = 0; i < str.length; i++) {
  let char = str[i];
  if (str.indexOf(char) === str.lastIndexOf(char)) {
    firstNonRepeated = char;
    break; // Stop the loop as soon as we find the FIRST one
  }
}
console.log(firstNonRepeated); // Output: "t"
•	str.indexOf(char) searches the string from the beginning (left to right) and returns the index of the first time that character appears.
•	str.lastIndexOf(char) searches the string from the end (right to left) and returns the index of the last time that character appears.

•	// find the missing no of any sequence 
•	let arr=[1,2,3,4,5,6,8,9,10]
•	let n=arr[arr.length-1]
•	let expectedsum=(n*(n+1))/2
•	let actualsum=0;
•	for(let i=0;i<arr.length;i++){
•	  actualsum+=arr[i]
•	}
•	let missno=expectedsum-actualsum;
•	console.log(missno)

•	// split the array into the chunks
•	
•	let arr=[1,2,3,4,5,6,7]
•	let size=3;
•	//output=[[1,2,3],[4,5,6],[7]]
•	
•	function splitintoChunks(arr,size){
•	  let newarr=[]
•	  for(let i=0; i < arr.length; i+=size){
•	    let chunks=arr.slice(i,i+size)
•	    newarr.push(chunks)
•	  }
•	  return newarr
•	}
•	console.log(splitintoChunks(arr,size))

•	// remove the duplicates
•	let arr=[1,2,2,1,3,6,5]
•	let newarr=[]
•	for(let i=0; i<arr.length;i++){
•	  if(!newarr.includes(arr[i])){
•	    newarr.push(arr[i])
•	  }
•	  
•	}
•	console.log(newarr)

•	// find the longest string into the array
•	let arr=["tanmay","agarwal","my","technology","umesh"]
•	
•	let longest=""
•	
•	for(let i=0;i<arr.length;i++){
•	  if(arr[i].length > longest.length){
•	    longest=arr[i]
•	  }
•	}
•	console.log(longest)


// reverse the word into the sentence

let str="my name is tanmay"
let newstr=str.split(" ")
let updatestr=[]
for(let i=newstr.length-1;i>=0;i--){
  updatestr.push(newstr[i])
}
console.log(updatestr.join(" "))

// or 

let newstrr=str.split(" ").reverse().join(" ")
console.log(newstrr)


// 1. The NaN behavior
console.log(NaN === NaN);          // false (JavaScript flaw)
console.log(Object.is(NaN, NaN));  // true  (Correctly identifies them as the same)

// 2. The Zero behavior
console.log(-0 === +0);            // true  (Flaw: treats them as identical)
console.log(Object.is(-0, +0));    // false (Correctly identifies signed difference)

// find the first non-repeating character 
let str="aabbcde"
let strOutput="c"
// solution using frequency method || without frequency 

function findFirstnonRepeatingchar(str){
  let obj={}
  for(let char of str){
    obj[char] = (obj[char] || 0 ) + 1
  }
  for(let key in obj){
     if(obj[key]==1){
      return key
    }
  }  
return null; // 
}
console.log(findFirstnonRepeatingchar(str))

built-in string methods indexOf() and lastIndexOf().
  for(let char of str){
if(str.indexOf(char)===str.lastIndexOf(char)){
  return char
}

indexOf() returns the index of the first occurrence of a specified value, 
while lastIndexOf() returns the index of the last occurrence.
Search Direction	Left-to-right (from index 0 forward)	Right-to-left (from the end backward)
Matching Behavior	Finds the first match	Finds the last match


// remove the duplicate from an array
let inputarr=[1,1,2,3,4,4,5]
let outputarr=[1,2,3,4,5]

// solution using set method or without set method
function removeDuplicates(arr){
  // return [...new Set(arr)] // using set method

  let result=[]
  for(let i=0; i < arr.length; i++){
    if(!result.includes(arr[i])){
      result.push(arr[i])
    }
  }
  return result;
}
console.log(removeDuplicates(inputarr))

// valid parantheses 
let badInput = "{[(])}";
let goodInput = "{[()]}";

function isValidParentheses(str) {
    let stack = [];
    
    // Map closing brackets to their matching opening brackets
    let bracketsMap = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    for (let char of str) {
        // If it's a closing bracket
        if (bracketsMap[char] !== undefined) {
            // Pop the top element from stack (Last In, First Out)
            let lastOpened = stack.pop();
            
            // Check if the popped bracket matches the required opening bracket
            if (lastOpened !== bracketsMap[char]) {
                return false; // Mismatch found
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is completely empty, all brackets matched perfectly
    return stack.length === 0;
}

console.log(isValidParentheses(badInput));  // Output: false
console.log(isValidParentheses(goodInput)); // Output: true
// without stack check the validparantheses
function isValidParenthesesWithoutStack(str) {
    let originalLength;
    
    // Keep looping as long as we are actively finding and removing valid pairs
    do {
        originalLength = str.length;
        
        // Replace adjacent matching pairs with an empty string
        str = str.replace("()", "")
                 .replace("[]", "")
                 .replace("{}", "");
                 
    } while (str.length < originalLength); // If length didn't change, no pairs were left to remove

    // If the string is completely empty, it was valid
    return str.length === 0;
}
// find the largest and smallest no in the list

let inputarr=[10,5,20,8,15]
// output smallest=5; largest=20;

function findsmallAndlargest(arr){
  // let smallest = Math.min(...arr); // using built in method
  // let largest = Math.max(...arr);  // using built in method
  // console.log(smallest,largest)

  // let result=arr.sort((a,b)=>a-b)
  // let smallest=result.at(0)
  // let largest=result.at(-1)
  
 let smallest=arr[0]
  let largest=arr[0]
  for(let i=1; i < arr.length; i++){
    if(arr[i] < smallest){
      smallest = arr[i]
    }
    if(arr[i] > largest){
      largest = arr[i]
    }
  }
  return `largest=${largest} and smallest=${smallest}`
}
console.log(findsmallAndlargest(inputarr))


// find the maximum subarray sum (Kadane's algo)
let inputarr=[-2, 1, -3, 4, -1, 2, 1, -5, 4];
// output=6;

// Kadane's Algorithm tracks the maximum sum ending at the current position, updating the overall global maximum whenever a better subarray is found.


  function maximumSum(arr){
    if(arr.length === 0) return 0;

    let currentsum = arr[0];
    let maxsum = arr[0];

    for(let i=1; i < arr.length; i++){
      currentsum = Math.max(arr[i], currentsum + arr[i])
      
      maxsum = Math.max(maxsum, currentsum)
    }
    return maxsum;
  }
console.log(maximumSum(inputarr))

// product of array except self / without division operator used 
let input=[1,2,3,4]
// output=[24,12,8,6]
// Prefix and Suffix pattern
// By calculating the product of all elements to the left (prefix) and all elements to the right (suffix) of each index, we completely avoid using the division operator.


function productallElement(arr){
  let length = arr.length
  let result = new Array(length).fill(1)

  let prefix=1;

  for(let i=0; i < arr.length; i++){
    result[i]=prefix
    prefix *= arr[i]
  }
  
    let suffix=1;
  for(let i=arr.length-1; i >= 0; i--){
    result[i] *= suffix
    suffix *= arr[i]
  }
  return result;
}
console.log(productallElement(input))

// find the second largest no in the list or arr
let arr=[10,5,20,8,15]
let output=15;
function findSecondLargest(arr){
  let largest=-Infinity
  let secondlargest=-Infinity

  for(let i=0; i < arr.length ;i++){
    if(arr[i]>largest){
      secondlargest=largest
      largest=arr[i]
    }
  else if(arr[i] > secondlargest && arr[i] !== largest){
     secondlargest=arr[i]
    }
  }
  return secondlargest;
  
}
console.log(findSecondLargest(arr))


// majority Element( Boyer-Moore Voting Algorithm.)
let arr=[2,2,1,1,1,2,2]
// output=2;
// This algorithm works by maintaining a single candidate element and a counter. Because the majority element appears more than n / 2 times, it will always survive the cancellation phases of the loop.

function majorityele(arr){
  let candidate=null
  let count=0;
  for(let no of arr){
    if(count === 0){
      candidate = no
    }
 
    count += (count === candidate) ? 1 : -1      
    
  }
  return candidate;
}
console.log(majorityele(arr))

// marge intervals
let input=[[1,3],[2,6],[8,10],[9,12]]
// let output=[[1,6],[8,12]


function margeIntevals(arr){
  if(arr.length <= 1) return arr;
   // Step 1: Sort the intervals based on their start times
  arr.sort((a,b)=>a[0]-b[0])
  const marged=[arr[0]]

  for(let i=1; i < arr.length; i++){
    let current=arr[i]
    let lastmarged=marged[marged.length - 1]
 // Step 2: If current interval overlaps with the last merged interval
    if(current[0] <= lastmarged[1]){
         // Merge them by updating the end time to the maximum value
      lastmarged[1]=Math.max(lastmarged[1],current[1])
    }
    else{
       // No overlap, simply push the current interval as a new entry
      marged.push(current)
    }
  }
  return marged
}
console.log(margeIntevals(input))


// check two string are anagrams
let str1="listen"
let str2="slient"

// another string that contains the exact same characters with the exact same frequencies, but in a different order. 
function anagramsCheck(str1,str2){
  if(str1.length!==str2.length) return false;

  let objstr1={}
  for(let char of str1){
    objstr1[char]=( objstr1[char] || 0) + 1;
  }
    let objstr2={}
  for(let char of str2){
    objstr2[char]=( objstr2[char] || 0) + 1;
  }

  for(let key in objstr1){
    if(objstr1[key]!=objstr2[key]){
     return false 
    }
  }
  return true

}
•	console.log(anagramsCheck(str1,str2))  // Time Complexity: O(n) (Changes based on string length)   Space Complexity: O(1) (Stays fixed based on the alphabet limit)

Quick Alternative: The Sorting Method
return str1.split('').sort().join('') === str2.split('').sort().join('');
// Step 2: Decrement counts using the second string
for (let char of str2) {
    // If the character doesn't exist or its count drops below 0, they aren't anagrams
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

// find the comman element in two list or arr
let firstinput = [1,2,3,4,5]
let secondinput=[3,4,5,6,7]
// output=[3,4,5]


function commonFound(arr1,arr2){
  // set method
 // let set1=new Set(arr1)
 //  return arr2.filter((item)=>set1.has(item))
  
// using loop and frequently
  let obj={}
  let result=[]
  for(let item of arr1){
    obj[item] = (obj[item] || 0) + 1
  }
  for(let item of arr2){
    if(obj[item]){
      result.push(item)
    }
  }
  return result;
}
console.log(commonFound(firstinput,secondinput))

// check the stirng is palindrome

function palindrome(str){
  // return str === str.split("").reverse().join("")
// let newstr=""
//   for(let i=str.length-1; i>=0;i--){
//     newstr +=str[i]
//   }
//   return newstr === str

  // below is standard and experience person solution
  let left=0;
  let right=str.length-1
  while(left < right){
    if(str[left] !== str[right]){
      return false;
    }
    left++
    right--;
  }
  return true;
}
console.log(palindrome("madam"))

// find duplicates ele in the list or arr
let inputarr=[1,2,3,2,4,5,1,3]
// let duplicate=[]
// let result=[]
// for(let i=0;i<inputarr.length;i++){
//   if(duplicate.includes(inputarr[i])){
//     result.push(inputarr[i])
//   }
//   else{
//     duplicate.push(inputarr[i])
//   }

  // replace duplicate array to set because set is optimal solution
  let set=new Set()
    let result=[]
for(let i=0;i<inputarr.length;i++){
  if(set.has(inputarr[i])){
    result.push(inputarr[i])
  }
  else{
    set.add(inputarr[i])
  }

}
console.log(result)

// find most frequent ele in the arr or // find the maximum occuring character in a string

let inputarr=[1,2,3,2,4,2,5,3]
// output=2
function mostfrequenteleFound(arr){
  let obj={}
for(let item of inputarr){
  obj[item]= (obj[item] || 0 ) + 1
}
let mostfrequentele=null;
let maxcount=0;
for(let key in obj){
  if(obj[key] > maxcount){
    maxcount=obj[key]
    mostfrequentele=key
  }
}
  return mostfrequentele;
}
console.log(mostfrequenteleFound(inputarr)

// move all zero to end of the list 

let arr=[0,1,0,3,12]

// two pointer approach 

function moveallzerotoEnd(arr){
  let pointer=0;
  for(let i=0; i < arr.length; i++){
    if(arr[i]!==0){
      let temp=arr[i]
      arr[i]=arr[pointer]
      arr[pointer]=temp
    pointer++
    }
  }
  return arr
}
console.log(moveallzerotoEnd(arr))

// find the first missing positive number 
let arr=[3,4,-1,1]  // output=2

function findfirstmissingPositive(arr){
  const newset=new Set(arr)
  let missing=1;
  while(newset.has(missing)){
    missing++
  }
  return missing;
}
console.log(findfirstmissingPositive(arr))

// find the pair with a given sum 

let arr=[2,7,11,15]
let target=9 // output [2,7]


function findPair(arr,target){
 let currentmap=new Map()

  for(let i=0;i<arr.length;i++){
    let currentele=arr[i]
    let complement=target-currentele;
    if(currentmap.has(complement)){
      return [complement,currentele]
    }
    currentmap.set(currentele,i)
  }
  return []
}
console.log(findPair(arr,target))


// count the even and odd no in the array 

let arr=[10,15,20,25,30]

function countEvenandOdd(arr){
  let even=0;
  let odd=0;

  for(const num of arr){
    if(num % 2 === 0){
      even++
    }
    else{
      odd++
    }
  }
  return {even,odd}

  // built in method reduce
  // return arr.reduce((acc,num)=>{
  //   if(num % 2 === 0){
  //     acc.even++
  //   }
  //   else{
  //     acc.odd++
  //   }
  //   return acc;
  // },{even:0,odd:0})
}
console.log(countEvenandOdd(arr))

// merge the two object without overwriting the obj keys

// Verification
const objA = { name: "Alice", role: "Dev" };
const objB = { age: 28, role: "Lead" };

// function margeobjects(objA,objB){
//   return {...objA,...objB}
// }
// console.log(margeobjects(objA,objB)) //{ name: 'Alice', role: 'Lead', age: 28 }

// 2nd approach
function margetwoobjectwithoverwriting(obj1,obj2){
  let result={...obj1}

  for(let key in obj2)
  {
    if(obj2.hasOwnProperty(key))
      if(obj1.hasOwnProperty(key)){

        result[key]=Array.isArray(result[key])
          ? [...result[key],obj2[key]]
          :  [result[key],obj2[key]]
      }
    else{
       result[key]=obj2[key]
    }
  }
return result;
}
console.log(margetwoobjectwithoverwriting(objA,objB))

// compare to object
const objA = { name: "Alice", role: "Dev" };
const objB = { name: "Alice", role: "Dev" };
function comparetoobject(obj1,obj2){
  if(obj1 === obj2) return true;

  if(typeof obj1 !=='object' || obj1 === null || typeof obj2 !=='object' || obj2 === null){
    return false;
  }
  const keys1=Object.keys(obj1)
  const keys2=Object.keys(obj2)
  
if(keys1.length !== keys2.length) return false;
  
  for(let key of keys1){
    if(!obj2.hasOwnProperty(key) || !comparetoobject(obj1[key],obj2[key])){
      return false;
    }
  }
  return true;
}

//find the missing number in as list 
let arr=[1,2,3,5] // output =4
let totalnumber=5

  function findmissing(arr,n){
    // let n=arr.length + 1  // if we not given a totalnumber then we used the length

    let expectedsum=(n * ( n + 1))/2
    let actualsum=arr.reduce((acc,item)=>acc+item,0)

    return expectedsum - actualsum
  }
console.log(findmissing(arr,totalnumber))

// deep nested object clone 
const originalObj = {
    name: "Alice",
    details: {
        role: "Dev",
        skills: ["JS", "Node"],
        joined: new Date("2026-01-15")
    }
};

// const newobj=structuredClone(originalObj) // built in method
// newobj.details.role="eng"
// console.log(newobj.details.role)  // not change the originalobj nested porperty 


function deepclone(obj){
if(obj === null || typeof obj !== "object") return obj;
  if(Array.isArray(obj)){
    return obj.map((item)=>deepclone(item))
  }
 const cloneobj={}
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      cloneobj[key]=deepclone(obj[key])
    }
  }
  return cloneobj;
}
const newobj=deepclone(originalObj)
newobj.details.role="eng"
console.log(newobj)
console.log(originalObj,"originalObj")

// find the common or intersection ele in the two array 
let firstArr=[3,5,8,9]
let secondArr=[1,2,3,4,5]

function findIntersection(arr1,arr2){
  // const newset=new Set(arr1)
  // return arr2.filter((item)=>newset.has(item))

let result=[]
let resultindex=0;
  for(let i=0; i < arr1.length; i++){
    let currentele=arr1[i]
    for(let j=0; j < arr2.length;j++){
      if(arr2[j] === currentele){

        let duplicate=false;
        for(let k=0;k<resultindex;k++){
          if(result[k] === currentele){
            duplicate=true;
            break;
          }
        }
        if(!duplicate){
          result[resultindex]=currentele
          resultindex++
        }
        break;
      }
    }
    
  }
return result;  
}
console.log(findIntersection(firstArr,secondArr)) [3,5]

// find the common or intersection ele in the three array 

let firstArr=[1,3,5,8,9]
let secondArr=[1,2,3,4,5]
let ThreeArr=[1,2,3,4,5]
function findIntersection(...arrays){
  if(arrays.length===0) return []

  return arrays.reduce((acc,currentarr)=>{
    const newset=new Set(currentarr)
    return acc.filter((item)=>newset.has(item))
  })
  
}
console.log(findIntersection(firstArr,secondArr,ThreeArr))

const intersection = arr1.filter(item => arr2.includes(item) && arr3.includes(item));

//find the longest common prefix  using the reduce method 
let arr=["flower","flow","flight"]

function findlongestprefix(arr){
  if(!arr || arr.length === 0) return ""

return arr.reduce((acc,currentitem)=>{
  while(currentitem.indexOf(acc)!==0){
    acc = acc.substring(0, acc.length - 1)
    if(acc === "") break;
  }
  return acc ;
})
  
}
console.log(findlongestprefix(arr))

//find the longest common prefix using for loop 
let arr=["flower","flow","flight"]

function findlongestprefix(arr){
  if(!arr || arr.length === 0) return ""
let prefix=arr[0]
for(let i=1; i < arr.length; i++){
    while(arr[i].indexOf(prefix)!== 0){
    prefix = prefix.substring(0, prefix.length - 1)
    if(prefix === "") return "";
  }
}

  return  prefix;

  
}
console.log(findlongestprefix(arr))

// find the missing character in the string	

let str="abdef"

function findthemisschar(str){
  if(!str || str < 2) return null;

  for(let i=0;i<=str.length-1;i++){
    const currentchar=str.charCodeAt(i)
    const nextcurrentchar=str.charCodeAt(i+1)

    if(nextcurrentchar-currentchar > 1){
      return String.fromCharCode(currentchar+1)
    }
  }
  return null
}
console.log(findthemisschar(str))

let arr =;
// rotation of array by one position 


let arr=[1,2,3,4,5] //output=[5,1,2,3,4]

// const lastele=arr.pop()
// arr.unshift(lastele)
// console.log(arr)

function rotateArrayByOneManual(array) {
    // Edge case: empty arrays or arrays with 1 element don't need rotation
    if (!array || array.length <= 1) return array;

    // 1. Save the very last element before it gets overwritten
    let lastElement = array[array.length - 1];

    // 2. Loop backwards, shifting elements to the right
    // Start at the second-to-last index and move down to 0
    for (let i = array.length - 2; i >= 0; i--) {
        array[i + 1] = array[i];
    }

    // 3. Place the saved last element at the beginning of the array
    array[0] = lastElement;

    return array;
}

console.log(rotateArrayByOneManual(arr)); // Output: [5, 1, 2, 3, 4]

// group objects by age 

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
  { name: "Edward", age: 35 }
];

function groubyAge(arr){
  if(!arr || !Array.isArray(arr)) return {}
  // return arr.reduce((acc,currentobj)=>{
  //   let age=currentobj.age
  //   if(!acc[age]){
  //     acc[age]=[]
  //   }

  //   acc[age].push(currentobj);
  //   return acc
  // },{})
let result={}
  for(let i=0;i<arr.length;i++){
    let currentobj=arr[i]
    let age=currentobj.age
    if(!result[age]){
      result[age]=[]
    }
    let targetArray=result[age];   
    targetArray[targetArray.length]=currentobj
  }
  return result;
}


// const groupByage=Object.groupBy(people,(person) => person.age)
// console.log(groupByage)
console.log(groubyAge(people))

//remove the duplicate object inside the array 

const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 1, name: 'Apple' } // Duplicate
];


// const newmap=[...new Map(items.map((item)=>[item.id,item])).values()]
// console.log(newmap)


function removeDuplicateintotheobj(arr){
  let result=[]
  let seenobj={} // hash map mannul

  for(let i=0;i<arr.length;i++){
    let item=arr[i]
    let key=item.id
    if(!seenobj[key]){
      seenobj[key]=true;
    result[result.length]=item
  }
    }
  return result;
}
console.log(removeDuplicateintotheobj(items))



// marge two array with concat
let arr1=[1,2,3]
let  arr2=[4,5,6]

console.log(arr1.concat(arr2)) // cacat method
console.log([...arr1,...arr2])  // spread operator 

// without built in method
function margedarr(arr1,arr2){
  let marged=[]
  let index=0;
  for(let i=0;i<arr1.length;i++){
    marged[index]=arr1[i]
    index++;
  }
  for(let i=0;i<arr2.length;i++){
    marged[index]=arr2[i]
    index++;
  }
  return marged;
}

console.log(margedarr(arr1,arr2))

// check the arr is sorted or not ?
let arr=[10,20,30,40,50]

function sortedcheck(arr){
  if(!arr||arr.length<=1) return true;


  for(let i=0; i < arr.length;i++){
    if(arr[i]>arr[i+1]){
      return false
    } 
  }
  return true;
}
const isSorted = arr.every((val, i) => i === 0 || arr[i - 1] <= val);
console.log(sortedcheck(arr),isSorted)


// check the arr order is sorted or not ?  Dual-Order Support (Ascending & Descending)
// let arr=[10,20,30,40,50]
let arr=[1000,800,500,400,50]
function sortedordercheck(arr){
  if(!arr||arr.length <= 1) return true;

let asc=true;
let desc=true;

  for(let i=0; i < arr.length-1; i++){
    if(arr[i] > arr[i+1])  asc = false;
    if(arr[i] < arr[i+1])  desc = false;

    if(!desc && !asc) return false;
  }
  return true;
}

console.log(sortedordercheck(arr))


Bubble Sort is a simple sorting algorithm that repeatedly steps through a list, compares adjacent elements, and swaps them if they are in the wrong order
// bubble sort (without built in method)

let arr=[5,2,8,1,3]

function bubbleSort(arr){
  for(let i=0; i < arr.length-1; i++){
    let swap=false;
    for(let j=0; j < arr.length-1-i; j++){
     
      if(arr[j] > arr[j+1]){
         let temp=arr[j];
        arr[j]=arr[j+1]
        arr[j+1]=temp
        swap=true;
      }
    }
    if(!swap){
      break;
    }
  }
  return arr;
}
console.log(bubbleSort(arr))


// Binary Search is an efficient search algorithm that finds the position of a target value within a sorted list by repeatedly dividing the search interval in half
// binary search without indexof Method
let arr=[10,20,30,40,50,60,70]
let target=50;

function binarySearch(arr,target){
  let left=0;
  let right=arr.length-1;
  while(left <= right){
    let mid= Math.floor(left+right)/2
    if(arr[mid] === target){
      return mid;
    }
    else if (arr[mid]<target ){
      left=mid+1
    }
    else{
      right=mid-1
    }
  }
  return -1
}
console.log(binarySearch(arr,target))


//normal search
// function search(arr,target){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]===target){
//       return i
//     }
//   }
//   return -1
// }
// console.log(search(arr,target))

// count the vowels in the string 
let str="Javascript"

function countVowels(str){
  let vowel="aeiouAEIOU"
  let count=0;
  for(let i=0;i<str.length;i++){
    if(vowel.includes(str[i])){
      count++
    }
  }
  return count
}
console.log(countVowels(str))

// find the factorial of the number 
let number = 5;

function factorial(number){
  if(number <= 1) return 1;
return number * factorial(number-1)
}
console.log(factorial(number))

// check the no is prime or not 
function numbercheck(no){
if(no <= 1) return false;
for(let i=2;i<=no;i++){
  if(no % i === 0){
    return false
  }
}
  
  return true;
  
}
console.log(numbercheck(9))

find the maximum occurring character
function maxChar(str) {
  const counts = {};
  let maxCount = 0;
  let maxCharacter = '';

  for (let char of str) {
    // Increase count for this character
    counts[char] = (counts[char] || 0) + 1;

    // Update max if this character now has the highest count
    if (counts[char] > maxCount) {
      maxCount = counts[char];
      maxCharacter = char;
    }
  }

  return maxCharacter;
}

console.log(maxChar("javascript")); // Output: "a"
console.log(maxChar("banana"));     // Output: "a"

// find the largest number in the array 
Math.max also work for this problem
function largestno(arr){
  let largest=arr[0]
  for(let i=1;i<arr.length;i++){
    if(arr[i] > largest){
      largest=arr[i]
    }
  }
  return largest
}
console.log(largestno([1,5,8,9,19]))


//find the minimum number in array without math.min
// check if all number in array positive or not ?

  let arr=[10,-2,6,1,5,8]

function findmin(arr){
 let min = arr[0];
  let positive = true;
  for(let i=1;i < arr.length; i++){
    if(arr[i] < min ){
      min=arr[i]
    }
    else if(arr[i]<=0){
      positive=false
    }
  }
  return {min ,positive}
}
console.log(findmin(arr))

function findmin(arr){
  if(!arr.length) return {min:null,positive:false}
let min=arr.reduce((acc,curr)=>curr < acc ? curr:acc,arr[0] )
  return {
    min,
    allpositive:min > 0
  }
}
console.log(findmin(arr))

//check if array contains a value

let input=[10,20,30]
let value=20;

function checkValue(input,value){
  return Array.isArray(input) && input.includes(value)
  // if(!Array.isArray(input)) return false;
  // for(let i=0;i<input.length;i++){
  //   if(input[i] === value || Number.isNaN(input[i]) && Number.isNaN(value)){
  //     return true;
  //   }
  // }
  // return false;
}
console.log(checkValue(input,value))

// check if object is empty or not ?
let obj={
  "key":"apple"
}// 
console.log(Object.keys(obj).length===0)

function isEmptyobject(obj){
  if(!obj || Array.isArray(obj) || typeof(obj)!=='object'){
    return false
  }
  return Object.keys(obj).length===0
}
console.log(isEmptyobject(obj))

let arr = [1, [2, [3, 4]]]; // convert a array into single level of arr


function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      // 1. Pass arr[i] into the recursive call
      // 2. Spread (...) its returned array into result
      result.push(...flattenArray(arr[i]));
    }
  }

  // 3. Return the accumulated array
  return result;
}

console.log(flattenArray(arr)); 
// Output: [1, 2, 3, 4]
convert a array into single level of arr
function flattenWithDepth(arr, depth = Infinity) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      result.push(...flattenWithDepth(arr[i], depth - 1));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flattenWithDepth([1, [2, [3, 4]]], 1)); // [1, 2, [3, 4]]
console.log(flattenWithDepth([1, [2, [3, 4]]]));    // [1, 2, 3, 4]

// remove the element In-place

const arr=[1,2,3,4]
const remove=3

  const index=arr.indexOf(remove)
  if(index !==-1){
 arr.splice(index,1)
  }

console.log(arr)
function removeele(arr,remove){
  let k=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i] !== remove){
      arr[k]=arr[i]
      k++
    }
  }
  arr.length=k
  return arr
}
console.log(removeele(arr,remove))

// capitalizing the first letter of every word

let str="my name is tanmay"

function capitalizingFirstletter(str){
  return str.split(" ").map((item)=>item.charAt(0).toUpperCase()+item.slice(1)).join(" ")
}
console.log(capitalizingFirstletter(str))

// capitalizing the first letter of every word basis on the below string

let str="mY nAme is tAnmay"

function capitalizingFirstletter(str){
  return str.split(" ").map((item)=>item.charAt(0).toUpperCase()+item.slice(1).toLowerCase()).join(" ")
}
console.log(capitalizingFirstletter(str))
								
// union of two arrays
let arr=[1,2] 
let arr1=[2,3]

// const union=[...new Set([...arr,...arr1])]
// console.log(union)



function union(arr,arr1){
  let seen={}
  let result=[]
  for(let item of [...arr,...arr1])
  {
    if(!seen[item]){
      seen[item]=true;
      result.push(item)
    }
  }
  return result
}


To find the exact time and space complexity of your code, you use a process called Static Code Analysis.
Part 1: How to Find Time Complexity (Counting Steps)
Time complexity is determined by tracking how many times the CPU executes a step as the input size (\(n\)) grows.
Rule 1: Look for Loops
•	Single Loop: A loop running from \(0\) to \(n\) takes \(O(n)\) (Linear).
•	Nested Loops: A loop inside another loop (both running up to \(n\)) takes \(n \times n =\) \(O(n^2)\) (Quadratic).
•	No Loops: Straight-line code with simple calculations takes \(O(1)\) (Constant).
Rule 2: Look at Built-in Methods
Many built-in JavaScript methods hide loops inside them:
•	arr.includes(), arr.indexOf(), str.replace() \(\rightarrow \) \(O(n)\) (they scan the data).
•	arr.sort() \(\rightarrow \) \(O(n \log n)\) (standard sorting performance).
Rule 3: Keep Only the Fastest Growing Term
If your code has multiple steps, you add them together and drop the constants and smaller terms.
•	Example: A loop of \(O(n)\) followed by a nested loop of \(O(n^2)\) is written as \(O(n + n^2)\). You drop the smaller \(n\), leaving \(O(n^2)\).
________________________________________
Part 2: How to Find Space Complexity (Counting Memory)
Space complexity is determined by tracking the extra memory structures you create to solve the problem. Note: In interviews, the memory taken up by the initial input parameters does not count toward your auxiliary space complexity.
Rule 1: Check Variable Allocations
•	Primitive Variables: Storing single numbers, booleans, or pointers takes \(O(1)\) (Constant Space).
•	New Arrays/Strings: If you create a new array that copies elements from the input, it takes \(O(n)\) (Linear Space).
Rule 2: Check Object/Map Scaling
•	If you create an object/hash map, look at its maximum size limit.
•	If its size matches the input size (\(n\)), it is \(O(n)\).
•	If its size hits a fixed maximum structural ceiling (like 26 letters in the alphabet or 7 days of the week), it is \(O(1)\).
________________________________________

