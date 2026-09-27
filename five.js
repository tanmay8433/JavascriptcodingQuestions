// write a fun to sort an array of numbers in an ascending order.
// function sortascendingArr(arr){
// return arr.sort((a,b)=>a-b)
// }
// console.log(sortascendingArr([5,6,99,9,8,0]))


function sortArr(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the current element is smaller than the next one
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sortArr([1, 5, 3]));