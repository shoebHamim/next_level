// Type aliases create custom names for types,
// making code more readable and reusable.


//! object type alias
// Define object shape
type User = {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
};


//! function type alias
// function signature

type MathOperation=(a:number,b:number)=>number;

const sumNumber:MathOperation=(a,b)=>{
    return a+b
}
sumNumber(1,3)
type Callback = (message: string) => void;