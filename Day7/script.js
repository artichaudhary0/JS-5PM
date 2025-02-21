/*
    Nested if statement
    Min, Max Programs


    nested if-else : 

*/

// if (false) {
//   if (null == null) {
//     console.log("hello");
//   }
// } else {
//   if (30 < 10) {
//     console.log("30 is greater");
//   } else {
//     console.log("10 is smaller then 30");
//   }
// }

// hoisting

// console.log(age);
// age = 56;

// var age;

// console.log(age);
// var age = 56;

// console.log(age);
// let age = 56;

// voting :

// let age = 22;

// if (age > 0 && age <= 200) {
//   if (age < 18) {
//     console.log("can not vote");
//   } else if (age >= 18 && age <= 24) {
//     console.log("Collage student vote");
//   } else if (age > 24 && age <= 65) {
//     console.log("working vote");
//   } else {
//     console.log("senior citizen");
//   }
// } else {
//   console.log("Invalid age");
// }

// let num1 = 3543,
//   num2 = 23545;

// if (num1 == num2) {
//   console.log("num2 is equal the num1");
// } else if (num1 > num2) {
//   console.log("num1 is greater the num2");
// } else if (num2 > num1) {
//   console.log("num2 is greater the num1");
// } else {
//   console.log("Please enter a valid number.");
// }

// let num1 = 3345543,
//   num2 = 354654563;

// if (num1 == num2) {
//   console.log("num2 is equal the num1");
// } else {
//   if (num1 > num2) {
//     console.log("num1 is greater the num2");
//   } else if (num2 > num1) {
//     console.log("num2 is greater the num1");
//   } else {
//     console.log("Please enter a valid number.");
//   }
// }

let num1 = 4645654645,
  num2 = 465,
  num3 = "325";

if (num1 == num2 && num2 == num3) {
  console.log("num1  num2 num3 are equal");
} else {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log("num1 is greater");
    } else if (num3 > num1) {
      console.log("num3 is greater");
    } else {
      console.log("please enter valid number");
    }
  } else if (num2 > num1 && num2 > num3) console.log("num2 is greater");
  else if (num3 > num1 && num3 > num2) console.log("num3 is greater");
  else console.log("please enter valid number");
}
