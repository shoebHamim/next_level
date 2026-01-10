
const args=process.argv;
// args[0]= node path
// args[1]= file path
console.log(args);


const name=args[2]|| 'guest';
let greeting;
const time= new Date().getHours();

console.log(`Good day ${name}`);