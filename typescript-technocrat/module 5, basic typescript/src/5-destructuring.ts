//! Destructuring extracts values from arrays or properties from objects into distinct variables.
//! Basic array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second, third] = colors;

// console.log(first);  // 'red'
// console.log(second); // 'green'
// console.log(third);  // 'blue'

// Skip elements
const [primary, , tertiary] = colors;
// console.log(tertiary); // 'blue'

// With rest operator
const [head, ...tail] = [1, 2, 3, 4, 5];
// console.log(head); // 1
// console.log(tail); // [2, 3, 4, 5]

// Default values
const [a, b, c = 'yellow'] = ['red', 'green'];
// console.log(c); // 'yellow'

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
// console.log(x, y); // 2, 1


//! Object destructuring

const user={
  name:'Alice',
  age: 22,
  city:'NYC'
}
// Basic object destructuring
// const {name,age,city}=user;


// object destructing with variable rename
const {name:userName,age:userAge,...otherInfo}=user;
console.log('username',userName);
console.log('user obj',user);

// console.log('name',name);

// Destructuring in function params
// Array destructuring in parameters
// function sum([a, b]:Array<number>):number {
//   return a + b;
// }
// why typescript waring here? let's analyze
//  by Array<number> or number[] the function is expecting an array of numbers, 
// if the array is empty, or have just 1 number elements which according to the type definition is valid
// but for that value both a and b, or b can be undefined, that's why we need to use something like this

function sumBetterType([a,b]:[number,number]):number{
  return a+b
}



// sumBetterType([1,2]); // 15

// Object destructuring in parameters
function greet({ name, age }:{name:string,age:number}) {
  console.log(`Hi ${name}, you are ${age} years old`);
}
greet({ name: 'John', age: 30 }); // Hi John, you are 30 years old

// // With default values
// function createUser({ name = 'Guest', role = 'user' } = {}) {
//   return { name, role };
// }

// common usecases
//! 1. API response handling
// const { data: { user: { id, email } } } = apiResponse;  // multilayer destructuring

//! 2. React props
// function Component({ title, children, onClick }) {
//   // ...
// }


//! 3. Importing modules
// const { useState, useEffect } = React;

//! 4. Loop destructuring
// for (const { name, age } of users) {
//   console.log(name, age);
// }

