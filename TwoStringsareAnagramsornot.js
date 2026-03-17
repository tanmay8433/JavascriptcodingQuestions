// Two Strings are Anagrams or not
function areAnagrams(str1,str2){
    if(str1.length!==str2.length){
        return false;
    }
    let str1Obj={};
    let str2Obj={};
    
    for(let item of str1){
        str1Obj[item]=(str1Obj||0)+1;
    }
        for(let item of str2){
        str2Obj[item]=(str2Obj||0)+1;
    }
    
    for(let item in str1Obj){
        if(str1Obj[item]!==str2Obj[item]){
           return false; 
        };
    }
    return true;
    }
    console.log(areAnagrams("listen", "silent"));