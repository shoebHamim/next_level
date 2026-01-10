// Polymorphism means "many forms" - 
// the ability of different classes to be treated as instances of the same class through inheritance. 
// Same method name, different implementations.

// Example 1: Class-based Polymorphism: here it's actually using method over riding to achieve polymorphism
class Animal {
  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
}

class Cow extends Animal {
  makeSound(): void {
    console.log("Moo!");
  }
}

// Polymorphism in action - same method, different behavior
const animals: Animal[] = [new Dog(), new Cat(), new Cow()];

animals.forEach(animal => {
  animal.makeSound();  // Each calls its own implementation
});
// Output:
// Woof! Woof!
// Meow!
// Moo!


// Example 2: Interface-based Polymorphism
interface Shape {
  getArea(): number;
  getName(): string;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
  
  getName(): string {
    return "Circle";
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  
  getArea(): number {
    return this.width * this.height;
  }
  
  getName(): string {
    return "Rectangle";
  }
}

class Triangle implements Shape {
  constructor(private base: number, private height: number) {}
  
  getArea(): number {
    return (this.base * this.height) / 2;
  }
  
  getName(): string {
    return "Triangle";
  }
}

// Treat all shapes uniformly
function printShapeInfo(shape: Shape): void {
  console.log(`${shape.getName()} area: ${shape.getArea().toFixed(2)}`);
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(3, 4)
];

shapes.forEach(printShapeInfo);
// Output:
// Circle area: 78.54
// Rectangle area: 24.00
// Triangle area: 6.00


// Example 3: Real-world Payment System
interface PaymentMethod {
  processPayment(amount: number): void;
}

class CreditCard implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing $${amount} via Credit Card`);
  }
}

class PayPal implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing $${amount} via PayPal`);
  }
}

class Cryptocurrency implements PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing $${amount} via Cryptocurrency`);
  }
}

// Polymorphic function - works with any payment method
function checkout(paymentMethod: PaymentMethod, amount: number): void {
  paymentMethod.processPayment(amount);
}

checkout(new CreditCard(), 100);
checkout(new PayPal(), 50);
checkout(new Cryptocurrency(), 200);


export {}