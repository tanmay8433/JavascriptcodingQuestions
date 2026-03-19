function isPrime(no){
    if(no<=1){
        return false;
    }
    for(let i=2;i<no;i++){
        if(no%i===0){
            return false;
        }
    }
    return true;
}


console.log(isPrime(7));    