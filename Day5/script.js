/*
Some Logical Programs
Procedure Programs, swapping
Ex: Grade, Bill, Interest, Employee Salary
*/

// swap : interchange :

// let a = 10,
//   b = 43,
//   c;

// console.log(`Before swapping : A : ${a} and B : ${b}`)

// c = a;
// a = b;
// b = c;

// console.log(`After swapping : A : ${a} and B : ${b}`)

// console.log(`Before swapping : A : ${a} and B : ${b}`)

// a = a + b
// b = a - b
// a = a - b

// console.log(`After swapping : A : ${a} and B : ${b}`)

// Grading

// let marks = 623458;
// let grade = "undefined";

// // 90 >= A

// marks <= 100 && marks >= 90 && (grade = "A");
// marks < 90 && marks >= 80 && (grade = "B");
// marks < 80 && marks >= 70 && (grade = "C");
// marks < 70 && marks >= 60 && (grade = "D");
// marks < 60 && marks >= 50 && (grade = "E");
// marks < 50 && marks >= 0 && (grade = "f");

// console.log(grade);

// Bill :

// let units = 350;
// let bill = 0;

// let firstSlab = Math.min(100, units) * 5; // 350-100 = 250

// let secondSlab = Math.max(0, Math.min(200, units - 100)); // 150(left) -100(fisrt) => 50

// let thirstSlab = Math.max(0, units - 300) * 10;

// console.log(secondSlab + thirstSlab + firstSlab);

let baseSalary = 50000;
let hra = baseSalary * 0.2;
let da = baseSalary * 0.1;
let tax = baseSalary * 0.15;

let grossSalary = baseSalary + hra + da - tax; // inhand salary

console.log(grossSalary);
