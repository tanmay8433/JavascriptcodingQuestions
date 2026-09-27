// you are required to implement a function generateHash that generates a hash tag from a given input string.

// where each word is capitalized and concatenated together without space .
// output -#MyNameIsTanmayAgarwal

// if the length of the input string is greater than 280 Characters or if the input string is empty or contains by whitespace , the fun should return false .

const generateHash=(str)=>{
  if(str.length>280||str.trim().length===0){
    return false
  }
  str=str.split(" ");
  str=str.map((curEle)=>
    curEle.replace(curEle[0],curEle[0].toUpperCase())
  // curEle.charAt(0).toUpperCase()+curEle.slice(1)
)

str=`#${str.join("")}`
return str;
// return str.reduce((acc,curr)=>acc+curr[0].toUpperCase()+curr.slice(1),"#")
}
console.log(generateHash("my name is tanmay agarwal"))