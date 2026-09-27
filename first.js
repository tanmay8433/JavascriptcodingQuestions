// write a fun findlongestWord that takes a string as input and return the longest word in the string . if there are multiple longest word,retun the first name encountered.

const findlongestWord=(str)=>{
if(str.trim().length===0){
  return false;
}
let strArr=str.split(" ")
// words=strArr.sort((a,b)=>a.length-b.length)
// return words.at(-1)
// words=strArr.sort((a,b)=>b.length-a.length)
// return words[0]
return strArr.reduce((accum,curWord)=>(curWord.length>accum.length?curWord:accum),"")
}

console.log(findlongestWord("my name is agarwal tanmay live in kotdwara"))