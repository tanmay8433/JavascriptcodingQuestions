// find the factorial no 

function findFactorialno(no){

  // let fact=1;
  // for(let i=1;i<=no;i++){
  //   fact=fact*i;
  // }
  // return fact;
  if(no<0) return null;
  if(no===0 || no===1) return 1;
  return no * findFactorialno(no-1)
}


  console.log(findFactorialno(5))