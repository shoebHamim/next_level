


const numbers=[100,1,2,3]

// const result=numbers.reduce((prev,curr,idx,arr)=>{
//   console.log('prev',prev);
//   console.log('curr',curr);
//   console.log('idx',idx);
//   console.log('arr',arr);
// })

// console.log(result);
// When there's no initial value:
// ! first iteration
// The first element becomes the initial prev
// Iteration starts from the second element (index 1)
// The first iteration has prev = 1, curr = 2, idx = 1, arr is the full array
// ! second iteration
// the returned value from prev iteration is prev here, which is undefined
// so prev=undefined, curr is 3, idx is 2, arr is the full array
// final return undefined

// get the sum

const sum=numbers.reduce((prev,curr)=>(prev>curr?prev:curr),0)

console.log(sum);
// reduce() returns whatever you return from the last iteration of the callback function.

const players = [
{ name: "Jamal Bhuyan", score: 188 },
{ name: "Shekh Morsalin", score: 81 },
{ name: "Rakib Hossain", score: 95 },
{ name: "Topu Barman", score: 91 },
{ name: "Sohel Rana", score: 1722 },
]

const bestPlayer=players.reduce((prev,curr)=>curr.score>prev.score?curr:prev)
console.log(bestPlayer);

