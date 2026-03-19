// write a Program to sort an array in Descending Order in JavaScript?


// bubble sort algorithm. It repeatedly swaps adjacent elements if they are in the wrong order then returning the sorted array.




function sortArrayDesc(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]<arr[j+1]){
                
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
            }
        }
    }
    return arr;
}

console.log(sortArrayDesc([5, 3, 8, 1]));