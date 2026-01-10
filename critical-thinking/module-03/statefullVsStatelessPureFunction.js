//* Stateless vs Stateful

// const counter = (amount) => {
//   let count = 0;

//   count = count + amount;

//   return count;
// };

// console.log(counter(3));
// console.log(counter(2));

const counter = {
  count: 0,

  add(amount) {
    this.count = this.count + amount;
  },

  print() {
    console.log(this.count);
  },
};

counter.add(2);
counter.add(3);

counter.print();
// one of the best practices in functional programming 
// is writing pure functions
// what is a pure function
// 1. function that has no side effect(doesn't change anything outside of it)
// 2. for the same input, always returns the same output(doesn't get affected by things outside it's local scope) 
