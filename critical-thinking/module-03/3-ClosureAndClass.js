// const createCounter = () => {
//   let count = 0;

//   return (amount) => {
//     count = count + amount;
//     return count;
//   };
// };

// const counter = createCounter();

// console.log(counter(3));
// console.log(counter(5));

const createCounter=(count)=>{
  // let count=0
  return ()=>{
    count+=1
    console.log(count);
  }

}

const myCounter=createCounter(2)
myCounter()
myCounter()
myCounter()
// console.log(myCounter);



class Counter {
  constructor(count) {
    this.count = count;
  }

  add(amount) {
    this.count = this.count + amount;
  }

  print() {
    console.log(this.count);
  }
}

// const counter1 = new Counter(0);

// counter1.add(2);
// counter1.add(3);

// counter1.print();

// const counter2 = new Counter(10);

// counter2.add(20);
// counter2.add(30);

// counter2.print();
