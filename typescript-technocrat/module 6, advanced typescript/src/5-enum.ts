// Enums allow you to define a set of named constants. 
// They make code more readable and maintainable by giving meaningful names to numeric or string values.

// 1. NUMERIC ENUMS (default)
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}
const up=Direction.Up
console.log({up});

enum DirectionWString{
  Up='UP',
  Down='DOWN',
  Left='LEFT',
  Right='RIGHT'
}

const up1=DirectionWString.Up
console.log({up1});


const enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  ServerError = 500
}

// Enum as Type

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

interface Car {
  brand: string;
  color: Color;
}