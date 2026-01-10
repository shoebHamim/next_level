// Union type (OR)
type StringOrNumber = string | number;
type Result = 'success' | 'error' | 'warning';

// Intersection type (AND)
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};

type Staff = Person & Employee;

const employee: Staff = {
  name: 'John',
  age: 30,
  employeeId: 'E001',
  department: 'IT'
};

//! Pro Tip: Use type for unions, primitives, and tuples.
//!  Use interface for object shapes that might be extended!

// type vs interface
// Feature	                      Type	                                  Interface
// Extend/Compose             	& (intersection)                        	extends keyword
// Unions                     	✅ type A = B | C                       	❌ Not possible
// Primitives                 	✅ type ID = string	                    ❌ Objects only
// Tuples                      	✅ type Point = [number, number]	        ❌ Not ideal
// Declaration Merging	        ❌ Not possible	                        ✅ Possible
// Computed Properties        	✅ type Keys = 'a' | 'b'	                Limited

//! What the heck is declaration merging? (not supported by type aliasing)
// Declaration merging is TypeScript's ability to automatically combine multiple declarations with the same name 
// into a single definition. 
// 1. Interface Merging
interface User {
  name: string;
}

interface User {
  age: number;
}

interface User {
  email: string;
}

// All three merge into one:
const user: User = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com'
};

//2. Extending library types:
// Extending Express Request type
interface Request {
  user?: {
    id: string;
    name: string;
  };
}