// Reverse a String
function reversestr(str){
    // return str.split("").reverse().join("")
    
    
    // second logic
    
    let newstr=""
    for(let i=str.length-1;i>=0;i--){
        newstr+=str[i]
    }
    return newstr;
}
console.log(reversestr("agarwal"))