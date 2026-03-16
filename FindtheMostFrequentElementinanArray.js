// Find the Most Frequent Element in an Array

function mostFrequent(arr){
    let map={}
    let maxcount=0;
    let maxitem;
    
    arr.forEach((item)=>{
        map[item]=(map[item]||0)+1;
        if(map[item]>maxcount){
            maxcount=map[item]
            maxitem=item;
        }
    })
    return maxitem;
}

console.log(mostFrequent([1,23,3,6,9,6,0]))