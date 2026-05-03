// Getters and setters are special methods 
// that provide controlled access to an object's properties.

// but i could just write methods, why would i use getters/setters

//! because Getters/setters = treat methods like properties with control!
//! Cleaner, More Natural Syntax


class Person {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  // With Getter/Setter - looks like a property
  get age(): number {
    return this._age;
  }
  
  set age(value: number) {
    if (value < 0) throw new Error("Invalid age");
    this._age = value;
  }
}

const person = new Person(25);
console.log(person.age);  // ✅ Natural property access
person.age = 26;          // ✅ Natural assignment

// VS Regular Methods - verbose
class PersonWithMethods {
  private _age: number=0;
  
  getAge(): number { return this._age; }
  setAge(value: number) { this._age = value; }
}

const person2 = new PersonWithMethods();
console.log(person2.getAge());  // ❌ More verbose
person2.setAge(26);             // ❌ Doesn't look like property access


export{}