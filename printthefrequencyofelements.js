function frequentele(arr){
    let map={};
    for (let i=0;i<arr.length;i++){
        map[arr[i]]=( map[arr[i]]||0)+1
    }
    return map;
}

console.log(frequentele([1, 1, 2, 3, 3, 4]))


// The frequency function counts how many times each number appears in an array. It creates an empty object freq, iterates through the array, and either increments the count for existing numbers or adds new numbers with a count of 1. Finally, it returns the freq object with the counts.