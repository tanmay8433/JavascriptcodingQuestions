// Find First Non-Repeating Character
function findfirstnonrepeatedchar(str){
    let mapobj={}
    for(let word of str){
        mapobj[word]=(mapobj[word]||0)+1;
    }
    
    for (let word of str){
        if(mapobj[word]===1)return word
    }
    return null;
}

// Object counting pattern

// Iteration logic
console.log(findfirstnonrepeatedchar("aanhhjppg"))