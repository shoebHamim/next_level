//! array spreading
// spread = unpacking

const arr=[1,2,3,4]
// where spread is used
//! 1. copying an array

const arrCopy=[...arr]

//! combining arrays
// [...arr1, ...arr2]
//! adding elements
// [1,2,...arr]
const arr1=[1,2,3,4]
const arr2=[5,6,7]

arr1.push(...arr2)

// console.log(arr1);
//! passing array elements as function arguments
const maxVal=Math.max(...arr1)
// console.log(maxVal);

// !object spreading
const student1={
  name:'mr x',
  roll:1
}

// copying object
const student2={...student1}
console.log('this is student 2',student2);

// overriding properties

const studentUpdated={...student1,name:'mr y',class:'one'}
console.log('this is updated student',studentUpdated);

// merging object
const studentMerged={...student1,...studentUpdated}
console.log('this is merged student',studentMerged);

const str = "hello";
const chars = [...str]; // ['h', 'e', 'l', 'l', 'o']


// Cloning (shallow copy)
// const clone = [...original];

// Adding items
// const newArr = [...oldArr, newItem];

// Removing duplicates
// const unique = [...new Set(array)];

// Function arguments
// function sum(x, y, z) {
//   return x + y + z;
// }
// sum(...[1, 2, 3]); // 6


// !shallow copy vs hard copy
// Creates a new object/array, but only copies the first level. 
// Nested objects/arrays are still referenced (not duplicated).
//! Shallow Copy Example
const original = {
  name: 'John',
  address: {
    city: 'New York',
    zip: 10001
  }
};

const shallowCopy={...original}
shallowCopy.address.city='Brooklyn'
original.address.zip=1203
// both original and shallow item items address is also got modified
console.log('this is original',original);
console.log('this is shallow copied',shallowCopy);

// but modifying top-level only affects the copy as this part is actually copied

//! array or object spread creates shallow copy

// 1. structuredClone() - Modern & Best
const original1 = { a: 1, b: { c: 2 }, d: [1, 2, 3] };
const deep = structuredClone(original1);

// 2. JSON.parse/stringify - Simple but limited
const deep2 = JSON.parse(JSON.stringify(original1));


//! The rest operator (...) collects multiple elements into a single array or object. It's the opposite of spread.

// it can be used catch multiple function parameters
const iCopy=(...args:string[])=>{
  args.map((v,i)=>{
    console.log(`${i+1} no arg ${v}`);
  })
}


iCopy('apple','banana','mango')
//  we can also combine rest operator with regular params (param1,...otherParams)
// common use case
// array destructuring
// const [first, second, ...rest] = [1, 2, 3, 4, 5];
const user = {
  name: 'Alice',
  age: 25,
  city: 'NYC',
  country: 'USA'
};

const { name, ...otherInfo } = user; // destructuring with rest operator
console.log(otherInfo);

// SPREAD - Expands/Unpacks   // SPREAD APART
// const arr = [1, 2, 3];
// console.log(...arr); // 1 2 3

// REST - Collects/Packs // REST TOGETHER
// function test(...args) {  //Rest parameter must be the last parameter!
//   console.log(args); // [1, 2, 3]
// }
// test(1, 2, 3);

