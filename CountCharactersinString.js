//Count Characters in String


function countChar(str){
    let countObj={}
    for(let word of str){
        countObj[word]=(countObj[word]||0)+1;
    }
    return countObj;
}

console.log(countChar("hello"))