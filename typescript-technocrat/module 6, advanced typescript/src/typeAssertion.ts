
//! type assertion

// 1. basic type assertion

let someValue:any='this is a string'

let strLength:number=(someValue as string).length;
console.log(strLength);

// // 2. DOM Elements
// const input = document.getElementById("myInput") as HTMLInputElement;
// input.value = "Hello"; // Now we can access .value


const kgToGmConverter=(input:string|number)=>{
  if(typeof(input)==="number"){
    return input*1000
  }
  const [value]=input.split(" ");
  return `This is result: ${Number(value)*1000}`;
}

const result1=kgToGmConverter(12) as number  //! this type assertion
console.log({result1});
const result2=kgToGmConverter("12 Kg") as string
console.log({result2});


// 5. Unknown to Specific Type
let value: unknown = "test";
let str = value as string;

// 7. Const Assertion (immutable)
const colors = ["red", "green", "blue"] as const;
// colors[0] = "yellow"; // Error: readonly

const config = {
    host: "localhost",
    port: 3000
} as const;
// config.port = 4000; // Error: readonly

// make it module
export{}