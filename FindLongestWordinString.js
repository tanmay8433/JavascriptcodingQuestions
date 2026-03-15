// Find Longest Word in String

function findlongest(str){
    let newstr=str.split(" ")
    console.log(newstr)
    let longest="";
    
    for( let word of newstr){
        if(word.length>longest.length){
            longest=word
        }
      
    }
      return longest;
}

console.log(findlongest("my name is tanmay agarwal"))