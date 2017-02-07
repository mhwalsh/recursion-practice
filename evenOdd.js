// two basecases:
// 1. == 0 is even
// 2. == 1 is odd
// rest?
function isEven(aNumber){
  if(aNumber === 0){ //if zero it is even
    return true;
  }else if(aNumber === 1){ //one it is odd
    return false;
  }else{
    // take away two from aNumber
    // if odd it will hit 1 first
    // if even it will hit 0 first
    return isEven(aNumber - 2);
  }
}


function isEvenProcedural(aNumber) {
  if(aNumber % 2 === 0){
    return true;
  }else{
    return false;
  }
}

console.log('starting recursion version');
console.log(isEven(0)); //true
console.log(isEven(1)); //false
console.log(isEven(3)); //false
console.log(isEven(6)); //true

console.log('starting procedural version');
console.log(isEvenProcedural(0)); //true
console.log(isEvenProcedural(1)); //false
console.log(isEvenProcedural(3)); //false
console.log(isEvenProcedural(6)); //true
