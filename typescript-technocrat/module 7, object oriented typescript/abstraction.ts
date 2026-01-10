// Abstraction means hiding complex implementation details and showing only essential features. 
// It focuses on what an object does, not how it does it.

// Abstract class - cannot be instantiated directly
abstract class Vehicle {
  static speed:number=0;
  constructor(public brand: string, public model: string) {}
  
  // Abstract method - must be implemented by child classes
  abstract start(): void;
  abstract stop(): void;
  
  // Concrete method - shared by all vehicles
  displayInfo(): void {
    console.log(`${this.brand} ${this.model}`);
  }
}
//  we can also have interface to give abstract idea of a blueprint
interface VehicleInterface{
  start():void
  end():void
  // but we can't have concrete method here
}

// Cannot do: const v = new Vehicle("Toyota", "Camry"); // ❌ Error!

class Car extends Vehicle {
  speed=Vehicle.speed;
  start(): void {
    console.log(`${this.brand} car starting with key`);
  }
  
  stop(): void {
    console.log(`${this.brand} car stopping with brake`);
  }
  
}

class Motorcycle extends Vehicle {
  start(): void {
    console.log(`${this.brand} motorcycle starting with kickstart`);
  }
  
  stop(): void {
    console.log(`${this.brand} motorcycle stopping`);
  }
}

const car = new Car("Toyota", "Camry");
car.displayInfo();  // Toyota Camry
car.start();        // Toyota car starting with key
console.log(car.speed);
const bike = new Motorcycle("Yamaha", "R15");
bike.start();   
// Example 2: Database Connection (Interface-based)
interface Database {
  connect(): void;
  disconnect(): void;
  query(sql: string): void;
}

class MySQLDatabase implements Database {
  connect(): void {
    console.log("Connecting to MySQL...");
  }
  
  disconnect(): void {
    console.log("Disconnecting from MySQL...");
  }
  
  query(sql: string): void {
    console.log(`MySQL Query: ${sql}`);
  }
}

class MongoDatabase implements Database {
  connect(): void {
    console.log("Connecting to MongoDB...");
  }
  
  disconnect(): void {
    console.log("Disconnecting from MongoDB...");
  }
  
  query(sql: string): void {
    console.log(`MongoDB Query: ${sql}`);
  }
}

// User doesn't need to know database internals
function executeQuery(db: Database, query: string): void {
  db.connect();
  db.query(query);
  db.disconnect();
}

executeQuery(new MySQLDatabase(), "SELECT * FROM users");
executeQuery(new MongoDatabase(), "db.users.find()");

