
//! ternary operator ? :  --> short form of if else
const age=19;

const isAdult=age>=18?true:false;

console.log(isAdult);


//! optional chaining ? --> safely access nested properties without errors if intermediate values are null/undefined

const value={name: 'x'}

// console.log(value?.name?.hello?.asfds);


//! nullish coalescing ??

// Returns the right-hand value only if left-hand is null or undefined 
// (not for other falsy value like 0,'',false)

// syntax: leftValue??defaultValue

let nullOrUndefined=0
const value1 =nullOrUndefined ?? 'default';
console.log(value1); // 'default'



//! Key difference from ||
//! || gives the first truthy value of the chain
//! ?? gives the first non null and non undefined value of the chain

// a|| b||c||d
// a??b??c??d 