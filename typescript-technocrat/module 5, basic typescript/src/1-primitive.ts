// !TS types: all js types + -> string, number, boolean, null, undefined
// null and undefined->Both represent "absence of value," but they mean different
// undefined — something hasn't been given a value yet (the language did it)
// null — intentionally set to "no value" (the developer did it)


//! any, never, unknown, void


// explicit type definition
const a:void=undefined;

// implicit type definition
let userName='hamim'

// literal types
type userType='admin'|'user'|'superAdmin'

const user1:userType='admin';


// object, {},Record<Keys,Type>, Function type, Array, Tuple Type, Union Types,
// literal tyes, Enum Types

// type Alias
type User = {
  name: string;
  age: number;
};
// interface
interface UserInt{
  name:string;
  age:number
  
}