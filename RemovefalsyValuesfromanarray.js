
// Remove falsy Values from an array

function removeFalsyv(arr){
    let answer=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]){
            answer[answer.length]=arr[i];
        }
    }
    return answer;
}

console.log(removeFalsyv(["",6,false,true,0,55]))


// The falsy values in JavaScript are values which are false, 0, "" (empty string), null, undefined, and NaN.

// The removeFalsyValues() function takes an array and filters out falsy values (0, false, ''). It creates an empty array answer[], then iterates through the input array. If an element is truthy, it adds it to answer[]. Then, it returns the array of truthy values
