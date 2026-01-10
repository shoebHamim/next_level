
// the peculiar behavior of .sort()
// it sorts based on lexical ordering

// Lexical ordering means sorting items the way they appear in a dictionary (or lexicon).
//  It compares strings character-by-character based on their Unicode/ASCII values.


// compare function
// the return value of compare callback 
// positive-> swap, negative/0->ain't doing nothing

const fruits=['appleeeee','Banana','cherry','date','mango']

// const sortedValue=fruits.sort((a,b)=>a.length-b.length)
const sortedValue=fruits.sort((a,b)=>a.toLowerCase()-b.toLowerCase())

// console.log(sortedValue);
//! finding level of array : just felt like writing some recursive code XD
const nestedArrLevelFinder=(arr)=>{
    if(arr.length===0){
      return 1
    }

    if(typeof(arr[0])!=='object'){
      return 0+nestedArrLevelFinder(arr.slice(1))
    }
    return Math.max(1+nestedArrLevelFinder(arr[0]),nestedArrLevelFinder(arr.slice(1)))
}
const arr=[[1,2,[2,3,4,[2,[3,4],4]]],2,[2,3],5,6,[2,3,4,[2,3,4]]]
const arrLevel=nestedArrLevelFinder(arr)
console.log('array level',arrLevel)
const flattenArr=arr.flat(arrLevel)
console.log('flatten array 1',flattenArr);

// or we could just use the keyword Infinity, but i like difficult things 😎

const flattenArr2=arr.flat(Infinity)
console.log('flatten array 2',flattenArr2);