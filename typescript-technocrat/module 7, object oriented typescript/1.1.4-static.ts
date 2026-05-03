// Static members belong to the class itself, not to instances.
// You access them directly on the class without creating an object.

class Counter {
  static count: number = 0;  // Shared across all instances
  
  // Static method - belongs to class
  increment(): void {
    Counter.count++;
  }
  getCount(){
    return Counter.count
  }
  
  // Static method to get count
  static getCount(): number {
    return Counter.count;
  }
}

// Access static members on CLASS, not instance
console.log(Counter.count);     // 0

const counter1=new Counter()
const counter2=new Counter()
counter1.increment()
counter2.increment()
console.log(counter1.getCount());
console.log(Counter.count);
// console.log(Counter.getCount()); //