/*
Variable as a function
Arrow function 
IIFE 
*/

// function name() {
//   console.log("welcome");
// }

// name();

// let hello = function () {
//   console.log("hello");
// };

// hello();

// let hello2 = function () {};

// // convert arrow function / fat function.
// // varname = () => {}

// let arti = () => {
//   console.log("My name is Arti");
//   return "Arti";
// };

// console.log(arti());

// IIFE : Immediately Invoked Function Expression : (funDefine)()
// A function that execute immediately after its defination

(name = (num1, num2) => {
  console.log(num1 + num2);
})(4234, 353);
