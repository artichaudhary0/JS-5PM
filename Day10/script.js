/*

TYPE OF LOOP : 
    1 : Entry control
        for , while 
    2 : Exit control 
        do-while

 While : 
    
    while(condition)
    {
        
    }
    

 Do…while loop

Requirement : 
1 : init(initilization).
2 : condition.
3 : flow (increment / decrement / situtation).
4 : statements.

1 2 3 4 ... 10

start = 1 , end = 10
start <= end
flow : increment => + 1
console.log(start)
*/

// let start = 1;
// let end = 10;

// while (start <= end) {
//   console.log(start);
//   start++;
// }

// // 10 9 8 ---- 1
// start = 10;
// end = 1;

// while (start >= end) {
//   console.log(start);
//   start--;
// }

// sum of first and last digit in a number :
//  12345 => first 1 , last = 5

let num = 123;
let last = num % 10;
let sum = 0;
let first = 0;
while (num > 0) {
  first = num;
  console.log(first);
  num = Math.floor(num / 10); // 0.1 => 0

  // ceil , floor
  // ceil => 12.3 => 13 , 13.9999 => 14 , 13.000000001 => 14
  // floor => 12.3 => 12 , 13.999999=> 13 , 13.000001 => 13

  /*

  step 1 : 
  num = 123
  last = 3
  let sum = 0
  let first = 0 

  loop 1 : 
    step 2 : num>0 true
    step 3 : first = num => 123
    step 4 : P(123)
    step 5 : num = num / 10 => 12.3


*/
}

console.log(last + first);

/*
Dry : 
step 1 : start = 1 , end = 10

loop 1 : 
    step 2 : start <= end => 1 <= 10 true
    step 3 : console.log(1)
    step 4 : start++ => 2

loop 2 : 
    step 2 : start<=end => 2 <=10 true
    step 3 : console.log(2)
    step 4 : start++ 3

loop 3 : 
    step 2 : start<=end => 3 <=10 true
    step 3 : console.log(3)
    step 4 : start++ 4

loop 4 : 
    step 2 : start<=end => 4 <=10 true
    step 3 : console.log(4)
    step 4 : start++ 5

loop 5 : 
    step 2 : start<=end => 5 <=10 true
    step 3 : console.log(5)
    step 4 : start++ 6

loop 6 : 
    step 2 : start<=end => 6 <=10 true
    step 3 : console.log(6)
    step 4 : start++ 7

loop 7 : 
    step 2 : start<=end => 7 <=10 true
    step 3 : console.log(7)
    step 4 : start++ 8

loop 8 : 
    step 2 : start<=end => 8 <=10 true
    step 3 : console.log(8)
    step 4 : start++ 9

loop 9 : 
    step 2 : start<=end => 9 <=10 true
    step 3 : console.log(9)
    step 4 : start++ 10

loop 10 : 
    step 2 : start<=end => 10 <=10 true
    step 3 : console.log(10)
    step 4 : start++ 11

loop 11 : 
    step 2 : start<=end => 11 <=10 false
    exit
*/
