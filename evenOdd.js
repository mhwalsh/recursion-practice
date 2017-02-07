/*
  Write two functions: is_even and is_odd.
  Both take a natural number (integer >= 0).
  is_even(n) returns true if n is even and false if odd.
  is_odd(n) returns true is n is odd and false if it is even.
*/

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

function isOdd(aNumber) {
  if(aNumber === 0){ //if zero it is even
    return false;
  }else if(aNumber === 1){ //one it is odd
    return true;
  }else{
    // take away two from aNumber
    // if odd it will hit 1 first
    // if even it will hit 0 first
    return isOdd(aNumber - 2);
  }
}

function isEvenProcedural(aNumber) {
  return (aNumber % 2 === 0) ? true : false;
}

console.log('starting isEven recursive version');
console.log(isEven(0)); //true
console.log(isEven(1)); //false
console.log(isEven(3)); //false
console.log(isEven(6)); //true

console.log('starting isOdd recursive version');
console.log(isOdd(0)); //false
console.log(isOdd(1)); //true
console.log(isOdd(3)); //true
console.log(isOdd(6)); //false

console.log('starting procedural version');
console.log(isEvenProcedural(0)); //true
console.log(isEvenProcedural(1)); //false
console.log(isEvenProcedural(3)); //false
console.log(isEvenProcedural(6)); //true
