import Stack from "./solutions/Stack.js";

// Problem Statement

// Given a string s containing just the characters "(", ")", "{", "}", "[" and "]",
// determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

//? Input and Output
//? "()[]{}" -> true
//? "([{}])" -> true
//? "(]" -> false
//? "(()" -> false



const validParenthesisChecker=(inputString)=>{
  const stack=new Stack()
  const correspondingParenthesis={
    ')':'(',
    '}':'{',
    ']':'['
  }


  for(let element of inputString) {
    if(element==='(' || element==='{' || element==='['){
      stack.push(element)
    }else{
      if(correspondingParenthesis[element]!==stack.pop()){
        return false
      }
    }
  };
  return stack.isEmpty()
}

const result=validParenthesisChecker("(()")

console.log(result);

const arr=[1,2,3,4]

arr.forEach()