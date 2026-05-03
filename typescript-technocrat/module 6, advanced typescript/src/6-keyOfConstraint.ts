
// keyof creates a union type of all property keys from an object type. 
// When combined with generics, it ensures type-safe property access.

type Person={
  name:string,
  age: number,
  email?:string
}
type PersonKeys=keyof Person;
// When you write T extends Person, you're saying:
// "T must have AT LEAST everything Person has, but can have MORE"
// K extends keyof T (exact constraint)
// K must be exactly one of the keys in T

const getProperty=<T,K extends keyof T>(obj:T,key:K ):T[K]=>{
  return obj[key]
}

const person1={
  name:'x',
  age:2,
  favColor:'red'
}
const result1=getProperty(person1,'favColor')

console.log(result1);

export{}