/*
Nested Function : 
    a function inside another function is called nested function.
Closure Concepts
Variable as a function
Arrow function
IIFE
*/
/*
What is scope ? 
    upto which extent is it available.

Type of scope : 

1 : Global scope.
    value is available everywhere


2 : Local scope. 
    1 : function scope (available within function)
    2 : block scope (avalable within {})
    3 : lexical scope.
*/

// let age = 2352; // global

// function localScope() {
//   let name = "xyz";
//   age = 34324;
//   function localInnerFunction() {
//     console.log(age);
//   }
//   localInnerFunction();
// }

// localScope();

// console.log(a);

// {
//   let userName = "Abc";
// }

// console.log(userName);

// let name = "tsftwe"; // global scope

/*
    parent data is available for there children.
    but children data is not available for parent.
    siblings also can not share data
*/

// function outerFunction() {
//   let x = 10;

//   function innerFunction1() {
//     let y = 10;
//   }

//   function innerFunction2() {
//     let z = 10;
//   }

//   innerFunction1();
//   innerFunction2();
// }

// outerFunction();

// Closure Concepts :
/*
    a closure remembers 


*/

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let increment = counter();
increment(); // 1
increment(); // 2
increment(); // 2
increment(); // 2
increment(); // 2
/*

increment = function () {
    let count = 0;
    count++;
    console.log(count);
}
*/
counter();
counter();

// let a = 24;
// console.log(a);
// a++;
// console.log(a);
// a++;
// console.log(a);
