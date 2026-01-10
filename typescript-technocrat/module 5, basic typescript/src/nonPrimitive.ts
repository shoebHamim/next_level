

const bazarList:Array<string|number>=[1]

// console.log(bazarList);

// tuple
const nameRoll:[string,number]=['hamim',1]

const nameRolls:Array<[string,number]>=[
  ['hamim',1],
  ['hamim2',2]
]

// reference type: object

const user:Object={
  name:'hamim',
  age:25,

}

// user.name='asf'
// Object is TypeScript's built-in type that represents any non-primitive value, (too generic)
// but it doesn't include specific properties. 
// How JS Objects Are Handled in TypeScript

// for handing JS object use specific
//  interfaces, 
//  type aliases,
//  let TypeScript infer the type instead.
interface userInterface{
  name:string;
  age:number;
  email?:string
}

type UserType={
  name:"hamim"|"user", // literal type: fixed set of value to choose
  readonly ssn:number, // readonly field: can't reassign after creation
  age:number,
  email?:string  // email can be string | undefined
}

const user1:UserType={
  name:"hamim",
  ssn:223,
  age:20,
}

user1.age=29;
// user1.name='34'

console.log(user1.email);

const user2:{name:string,ssn:number}={
  name:'hamim',
  ssn: 2334,
}



