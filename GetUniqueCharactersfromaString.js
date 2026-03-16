// Get Unique Characters from a String in JavaScript?



function uniqueChar(str){
    let uniquestr=[];
    for(let i=0;i<=str.length;i++){
        if(!uniquestr.includes(str[i])){
            uniquestr.push(str[i])
        }
    }
    return uniquestr.join("")
}
console.log(uniqueChar("geeksforgeeks"))