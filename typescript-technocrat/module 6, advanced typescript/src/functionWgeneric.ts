// approach 1

type TCreateArray=<T,V>(value1:T,value2:V)=> [T,V]
const createArray1:TCreateArray=(value1,value2)=>[value1,value2]


const result1=createArray1("10",10)
console.log({result1});


// approach 2
const createArray2=<T,V>(value1:T,value2:V):[T,V]=>[value1,value2]
const result2=createArray2({name:'hamim',age:25},20)
console.log(result2);

// Side-by-Side Comparison
// Aspect           Approach 1 (Type Alias)                                   Approach 2 (Inline)
// Verbosity        More verbose (2 steps)                                    More concise (1 step)
// Reusability      Type can be reused for multiple functions                 Type is tied to this function only
// Readability      Clear separation of type and implementation               Everything in one place
// Type inference   Same - works identically                                  Same - works identically
// Best for         When you need the same function signature multiple times  Quick, one-off functions