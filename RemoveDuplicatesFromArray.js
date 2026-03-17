// Remove Duplicates From Array
function removeDulicates(arr){
   return [...new Set(arr)]
}


function removeDulicates(arr){
   let uniquearr=[];
   for(let i=0;i<arr.length;i++){
      if(!uniquearr.includes(arr[i])){
         uniquearr.push(arr[i])
      }
   }
   return uniquearr;
}

console.log(removeDulicates([1,2,65,89,65,4]))