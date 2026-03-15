// Group objects by a property value.

// Example
// Input:
// [
//  {name:"A", age:20},
//  {name:"B", age:21},
//  {name:"C", age:20}
// ]

// Output

// {
//  20: [{name:"A",age:20},{name:"C",age:20}],
//  21: [{name:"B",age:21}]
// }

let Input=
[
 {name:"A", age:20},
 {name:"B", age:21},
 {name:"C", age:20}
]

function groupbyAge(arr){
   return arr.reduce((acc,obj)=>{
        const key=obj.age;
        if(!acc[key]){
            acc[key]=[];
        }
        acc[key].push(obj);
        return acc;
    },{})
}
console.log(groupbyAge(Input))