// 1. Nullable Types (null and undefined)
// TypeScript has two types for "no value": null and undefined.


// unknown is a type-safe version of any. 
// You must check the type before using it.

// any - Turns off type checking (dangerous)
let anyVal: any = 5;
anyVal = "hello";
// anyVal.foo.bar.baz; // No error, crashes at runtime!

//! unknown - Type-safe, requires checking
let unknownVal: unknown = 5;
unknownVal = "hello";
// unknownVal.toUpperCase(); // ❌ Error!
if(typeof unknownVal==='string'){
  console.log(unknownVal.toUpperCase());  //  ✅ Type checked
}

// You can assign anything to unknown
let u1: unknown = 123;
let u2: unknown = "text";
let u3: unknown = { name: "Bob" };
let u4: unknown = null;
let u5: unknown = undefined;

// But you can't assign unknown to other types without checking
let str: string;
// str = unknownVal; // ❌ Error!

// but can assign after type check
if (typeof unknownVal === "string") {
  str = unknownVal; // ✅ OK after type check
}




//! Never type
// Function that throws error
function throwError(message: string): never {
  throw new Error(message);
  // No return statement, function never completes
}
// Process exit
function exitProcess(): never {
  // process.exit(1);
  exitProcess() // infinite recursive function
}

// Never vs Void
// void function completes but returns nothing
// never function never completes and never returns anything
