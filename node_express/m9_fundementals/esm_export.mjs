// esm or ecmascript modules uses
// import 
// export

//  you can export multiple things from a file

export const a=100;

export const add=(a,b)=>a+b


// a file can have one default export
// export default expects an expression or a declaration, not an assignment.
 export default 10;


// /ESM in Node.js
// Option 1: Use .mjs
// node app.mjs

// Option 2: package.json
// {
//   "type": "module"
// }