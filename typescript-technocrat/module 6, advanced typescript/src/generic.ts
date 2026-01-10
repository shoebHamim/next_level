// Generics are essentially variables for types. 
// They allow you to create reusable components that work with a variety of data types while
//  still maintaining full type safety.

// Think of it like a function argument: 
// just as you pass a value into a function, Generics allow you to pass a type into a component.


//? Why generic
// Imagine you want a function that returns the first item of an array. 
// Without generics, you might do this:

function getFirst(arr: any[]): any {
  return arr[0];
}

//! Basic generic in function

function getFirstGeneric<T>(arr:Array<T>):T{
  return arr[0];
}

// ! Generic in Array
type TGenericArray<T> =Array<T>;

const letters:TGenericArray<string> =['a','b','c']
const numbers:TGenericArray<number> =[1,2,3]
const isEligibleList:TGenericArray<boolean>=[true,false,true]

//! Generic in multiple types
type TCoordinates<T1,T2>=[T1,T2]
const dhakaCoordinates:TCoordinates<number,number>=[49.5,66]
const dhakaCoordinates2:TCoordinates<string,number>=["49.5",66]


//! Generic in object
interface UserInterface{
  name:string,
  age:number
}
const userList:Array<UserInterface>=[
  {name:"X",age:10},
  {name:"Y",age:30},
  {name:"Z",age:20},
  {name:"Z",age:20},
]

