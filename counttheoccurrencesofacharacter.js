// count the occurrences of a character


function findOccurrences(str,char){
    // return string.split(char).length-1;

  let count=0;
 for(let i=0;i<str.length;i++){
if(str[i]==char){
    count++
}
 }
 return count;
}


console.log(findOccurrences('GeeksForGeeks', 'G'));