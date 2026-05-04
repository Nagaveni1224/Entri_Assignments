// Declare variables
var a = 10;
let b = 20;
const c = 30;

// Print values
console.log("Value of a=", a);
console.log("Value of b=", b);
console.log("Value of c=", c);

// Primitive Data Types
let age = 30;              // Number
let name = "Nagaveni";     // String
let check = true;          // Boolean

console.log("Age=", age);
console.log("Name=", name);
console.log("Check=", check);

// Array


let State = ["Karnataka", "Andhra Pradesh", "Telangana"];


//Object
let person = {
  Name: "Nagaveni",
  Age: 30
};

console.log("States Name:", State);
console.log("Person Details:",person);


let x = 13;
let y = 10;

// Arithmetic Operations
console.log("Addition=", x + y);
console.log("Subtraction=", x - y);
console.log("Multiplication=", x * y);
console.log("Division=", x / y);

// Comparison Operator
console.log("X greater than Y=", x > y);
console.log("X less than Y=", x < y);
console.log("X  equal to Y=", x == y);
console.log("X strictly equal to Y =", x === y);


// Check positive or negative
let number = -3;

if (number > 0) {
  console.log("Positive Number");
} else {
  console.log("Negative Number");
}

//else-if
let marks = 60;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 65) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}


// Print numbers 1 to 10
for (let i = 1; i <=10; i++) {
  console.log(i);
}

// Print even numbers between 1 and 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Even:", i);
  }
}
