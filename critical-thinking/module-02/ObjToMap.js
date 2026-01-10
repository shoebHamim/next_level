//! accessing properties in obj
// 1. dot notation
// Property names are valid identifiers (no spaces, don't start with numbers)
//   You know the property name at coding time
//   You want cleaner, more readable code

// 2. bracket notation
// Property names have spaces or special characters: user['first name']
// Property names start with numbers: obj['2ndPlace']
// Property name is in a variable: user[propertyName]
// Property name is determined at runtime: user[getUserProperty()]
// Accessing properties programmatically in loops

// Rule of thumb: Use dot notation by default for cleaner code, switch to bracket notation when you need its flexibility.

// ! [object object]

const keyObj1={'name':"ami key1"}
const keyObj2={'name':"ami key2"}
const valueObj1={name:"ami value1"}
const valueObj2={name:"ami value2"}
const obj={}
obj.name='weird object'
obj[keyObj1]=valueObj1
obj[keyObj2]=valueObj2
// console.log(obj);
// but the funny thing is
// console.log(obj["[object Object]"]);
//? the  keyObj1 is getting replaced by keyObj2 but why
// When you use an object as a key, JavaScript converts it to a string using the toString() method.
// All plain objects convert to the same string: "[object Object]".

//! that's a limitation of object in js, it can't use object as key, only string(and symbol, which is not usually used) is available as key
//!  MAP is the Savior
const map= new Map()
map.set(1,'programming')
map.set(keyObj1,valueObj1)
// console.log('map',map);
// console.log('map size',map.size);
// map.forEach((v,k)=>k=1
// )

console.log(map.keys());
console.log([...map.keys()]);
map.clear()

// when map and when obj

// Use Object when:

// Keys are always strings
// You need JSON serialization
// Simple key-value storage

// Use Map when:

// Keys can be any type (objects, functions, etc.)
// You need guaranteed insertion order
// Frequent additions/deletions (Maps are optimized for this)
// You need the size easily: map.size vs Object.keys(obj).length







