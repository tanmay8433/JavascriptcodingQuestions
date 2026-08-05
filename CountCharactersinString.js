//Count Characters in String
function countChar(str){
    let countObj={}
    for(let word of str){
        countObj[word]=(countObj[word]||0)+1;
    }
    return countObj;

    //     return str.split("").reduce((acc,char)=>{
    //    acc[char]=(acc[char] || 0) + 1 
    //    return acc;
    // },{})
}

console.log(countChar("hello"))