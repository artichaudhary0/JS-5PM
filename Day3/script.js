/*
What is Variable ?

Understanding data types

    1) Primitive Datatype :
        1 : Number : 45672, 65324.235
        2 : String
        3 : Boolean 
        4 : BigInt 
        5 : Undefined
        6 : Null 
        7 : Symbol

    2) Non primitive Datatype :
        1 ) array
        2 ) Object
        3 ) function

Declaring and Initialization variables

var : 
    1 : redeclaration is possible 
    2 : reassign (override of original value is possible) 
    3 : only declaration is possible
let : 
    1 : redeclaration is not possible 
    2 : reassign (override of original value is possible) 
    3 : only declaration is possible
const : 
    1 : redeclaration is not possible 
    2 : reassign (override of original value is not possible) 
    3 : only declaration is not possible you must initilize value immed.
*/

// var name1 = 25;
// var name1 = 35;

// let name2 = 25 ;
// let name2 =345;

// let name3 = 345;
// var name3 = 3453;

// const name3 = 25;
// const name3 = 25;

// var name1 = 25;

// name1 = 5235;

// let name2 =345;
// name2 = 3464634

// const name3 = 3453;
// name3 = 823675;

// console.log(typeof 367.54);
// console.log(typeof "A");
// console.log(typeof "Adrger");
// console.log(typeof true);
// console.log(typeof false);

// let num1 = 2637567424627546345n;
// let num2 = BigInt(2637567424627546345n);
// console.log(num2);

var num1 = Symbol(1);
console.log(typeof num);

var num2 = Symbol(1);
if (num1 == num2) {
  console.log("num1 is equals to num2");
} else {
  console.log("they unique");
}
