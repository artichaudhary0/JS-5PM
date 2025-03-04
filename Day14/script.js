/* 
    Parameters Function (with Arguments)
    
    Return type in function
    
    Switch Program


*/

function add(a, b) {
  console.log("Sum : ", a + b);
}
function sub(a, b) {
  console.log("Sum : ", a - b);
}
function mul(a, b) {
  console.log("Sum : ", a * b);
}
function div(a, b) {
  console.log("Sum : ", a / b);
}
function mod(a, b) {
  console.log("Sum : ", a % b);
}

while (true) {
  console.log(
    "1) Press 1 for addition\n2) Press 2 for substraction\n3) Press 3 for multiplication \n4) Press 4 for division \n5) Press 5 for remainder\n6) Press 6 for exit "
  );

  let choice = parseInt(prompt("Enter your choice : "));

  if (choice === 6) break;

  let num1 = parseInt(prompt("Enter first value : "));
  let num2 = parseInt(prompt("Enter second value : "));

  switch (choice) {
    case 1:
      add(num1, num2);
      break;
    case 2:
      sub(num1, num2);
      break;
    case 3:
      mul(num1, num2);
      break;
    case 4:
      div(num1, num2);
      break;
    case 5:
      mod(num1, num2);
      break;
    default:
      console.log("Invalid choice");
  }
}
