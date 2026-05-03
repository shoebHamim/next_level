// ===== 1. CONST =====
// Prevents reassignment of the variable itself
const userName = "John";
// name = "Jane"; // Error: Cannot assign to 'name' because it is a constant

const user = { name: "John", age: 25 };
// user = { name: "Jane", age: 30 }; // Error: Cannot reassign
user.name = "Jane"; // ✅ OK! Properties can be modified

const numbers = [1, 2, 3];
// numbers = [4, 5, 6]; // Error: Cannot reassign
numbers.push(4); // ✅ OK! Array can be modified

// ===== 2. READONLY =====
// Prevents modification of object properties
interface User {
    readonly id: number;
    name: string;
    readonly email: string;
}

const user2: User = {
    id: 1,
    name: "John",
    email: "john@example.com"
};

user2.name = "Jane"; // ✅ OK
// user2.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
// user2.email = "new@example.com"; // Error: read-only

// ===== 3. READONLY ARRAY =====
const arr: readonly number[] = [1, 2, 3];
// arr.push(4); // Error: Property 'push' does not exist
// arr[0] = 10; // Error: Index signature is read-only

// Alternative syntax
const arr2: ReadonlyArray<number> = [1, 2, 3];

// ===== 4. CONST ASSERTION (as const) =====
// Makes everything deeply readonly AND literal types
const user3 = {
    name: "John",
    age: 25
} as const;
// user3.name = "Jane"; // Error: Cannot assign to 'name'
// user3.age = 30; // Error: Cannot assign to 'age'

const colors = ["red", "green", "blue"] as const;
// colors.push("yellow"); // Error: Property 'push' does not exist
// colors[0] = "purple"; // Error: Cannot assign
type Color = typeof colors[number]; // "red" | "green" | "blue"

// ===== 5. COMBINING CONST AND READONLY =====
const config: {
    readonly host: string;
    readonly port: number;
} = {
    host: "localhost",
    port: 3000
};

// config = { host: "127.0.0.1", port: 8080 }; // Error: const
// config.port = 8080; // Error: readonly

// ===== 6. CLASS PROPERTIES =====
class Database {
    readonly connectionString: string;
    private readonly maxConnections = 100;

    constructor(connStr: string) {
        this.connectionString = connStr; // ✅ Can set in constructor
    }

    connect() {
        // this.connectionString = "new"; // Error: readonly
        // this.maxConnections = 200; // Error: readonly
    }
}

// ===== 7. FUNCTION PARAMETERS =====
function processData(data: readonly string[]) {
    // data.push("new"); // Error: readonly
    console.log(data[0]); // ✅ Can read
}

// ===== 8. DEEP READONLY (Utility Type) =====
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object 
        ? DeepReadonly<T[K]> 
        : T[K];
};

const settings: DeepReadonly<{
    app: { name: string; version: string };
    db: { host: string };
}> = {
    app: { name: "MyApp", version: "1.0" },
    db: { host: "localhost" }
};

// settings.app.name = "NewName"; // Error: readonly at all levels
export{}