// Problem Statement

// Implement a simple in-memory cache for an "expensive" function (like a database query or API call).
// The goal is to store the results of a function call so that if the same call is made again,
// the result is returned from the cache instead of running the expensive function.

// 1. cache hit
// 2. cache miss
const dataCache= new Map()
const expensiveTask=(id)=>{
  console.log('Expensive task complete for',id,'⌛');
  return {id:id,data:`Calculated data  for id:${id}`,timestamp:new Date().getTime()}

}
const getData=(id)=>{
  if(dataCache.has(id)){
    console.log('cache hit🎯')
    return dataCache.get(id)
  }
  const result= expensiveTask(id);
  dataCache.set(id,result)
  return result
}

console.log(getData(1));
console.log(getData(1));
console.log(getData(1));
console.log(getData(2));
console.log(getData(2));
console.log(getData(1));