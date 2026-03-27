// Write a function that takes an obj and a key, and returns the value of that key.
function getvalueKey(obj,key){
    if(typeof(obj)==="object" && obj!=null && Object.prototype.hasOwnProperty.call(obj,key)){
        
        return obj[key]
    }

       else{
return undefined;
       }
    }

  const user = {
    name: "Aman",
    age: 22
};

console.log(getvalueKey(user, "name")); // Aman