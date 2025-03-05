/*
Function with four ways : 
            1 : TAKE NOTHING RETURN NOTHING
            2 : TAKE SOMETHING RETURN NOTHING
            3 : TAKE NOTHING RETURN SOMETHING
            4 : TAKE SOMETHING RETURN SOMETHING
Recursion : 
    A function calls itself again and again untill certain condition is fullfilled.
    STACK : LIFO => last in first out
*/

// TAKE NOTHING RETURN NOTHING
function addition1() {
  console.log(234 + 346);
}

// TAKE SOMETHING RETURN NOTHING
function addition2(num1, num2) {
  console.log(num1 + num2);
}

// TAKE NOTHING RETURN SOMETHING

function addition3() {
  let num1 = 2354;
  let num2 = 35353;
  return num1 + num2;
}

// TAKE SOMETHING RETURN SOMETHING
function addition4(num1, num2) {
  return num1 + num2;
}

// switch (3) {
//   case 1:
//     addition1();
//     break;
//   case 2:
//     addition2(23, 34);
//     break;
//   case 3:
//     let result = addition3();
//     console.log(result);
//     break;
//   case 4:
//     let result2 = addition4(13, 123);
//     console.log(result2);
//     break;
//   default:
//     console.log("Invalid input");
//     break;
// }

// factorial => 5! => 5*4*3*2*1*0
function factorial(num) {
  if (num === 0) return 1;
  else return num * factorial(num - 1);
}

/*
fact(5)
    if(false)
    else 5 * fact(4) // 5 *4 *3 * 2 * 1
        if(false)
        else 4 * fact(3) // 4 * 3 * 2 * 1
            if(false)
            else 3*fact(2) // 3 * 2 * 1
                if(false)
                else 2*fact(1) // 2 * 1
                    if(true) return 1
*/
 

let result = factorial(5);
console.log(result);
