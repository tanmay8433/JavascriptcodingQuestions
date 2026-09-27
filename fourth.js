// write  a fun check called checkTriangleType that takes three parameters representing the lengths of the side of triangle . The function should return a string indicating the type of triangle :"equilateral", "isosceles","scalence"

function checkTriangleType(a,b,c){
  if(a===b && b===c) return "equilateral";
   if (a===b || b===c || a===c) return "isosceles";
   return 'scalence';
}

console.log(checkTriangleType(3,3,3)) //output-equilateral

console.log(checkTriangleType(3,4,3))  //output-isosceles

console.log(checkTriangleType(5,8,6))  //output-scalence