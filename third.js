// write a fun called countChar that takes two parameters : a string and a characters to count .  the function should return the number of times the specified appers in the string .
// count occurrences of character
function countChar( str,char){
// str=str.toLowerCase()
// char=char.toLowerCase()
// totalCount=str.split("").reduce((acc,currele)=>{
//   if(currele===char){
//     acc++
//   }
//   return acc;
// },0)
// return totalCount;
 return str.toLowerCase().split(char.toLowerCase()).length - 1;
}


console.log(countChar("MissIssippi","I")); //4 output