// lexical scope is what a function can see or has access to
// it has access to it's inner scope, it's outer scope and global scope
// so it's lexical scope=inner+outer+global scope

// and this lexical scope is defined by the structure of the code/where the function is written
// not where it is called from

// Lexical scope (also called static scope) is a fundamental concept in programming 
// that determines how variable names are resolved in nested functions. 
// It means that a function's access to variables is determined by where the function is written in the code, 
// not where it's called from.

// In summary:
// Lexical scope = the scopes available to a function
// Lexical scoping rule = those scopes are determined by the code structure (where written), not the call stack (where called)

//! example
// Global scope
const global = "I'm global";

function outer() {
  const message = "I am outer";
  let outer_scope_value=0
  
  function inner() {
    const local = "I'm local";
    outer_scope_value+=1
    console.log('outer scope value',outer_scope_value);
    // inner's lexical scope includes:
    console.log(local);   // ✓ own scope
    console.log(message); // ✓ outer's scope
    console.log(global);  // ✓ global scope
  }
  
  return inner
}

// now even if the outer function finishes executing the inner/nested function
// will carry it's 
// entire lexical scope= 👇
// outer function scope(this is the important-> often this retaining behavior is called closure), 
// inner scope+global scope(these two are like, obviously duh...)

// let's test
//! closure example
const inner=outer()
inner()
inner()
inner()
// console.log(inner);

// A closure is when a function "remembers" and can access variables from its outer scope, even after that outer function has finished executing.

// The term "closure" comes from the idea that the function closes over 
// (captures/encloses) the variables from its surrounding scope.