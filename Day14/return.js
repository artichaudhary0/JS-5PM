/* 
    Parameters Function (with Arguments)
    Return type in function 
    Switch Program
*/

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function mod(a, b) {
  return `Remainder : ${a % b}`;
}

while (true) {
  console.log(
    "1) Press 1 for addition\n2) Press 2 for substraction\n3) Press 3 for multiplication \n4) Press 4 for division \n5) Press 5 for remainder\n6) Press 6 for exit "
  );

  let choice = parseInt(prompt("Enter your choice : "));

  if (choice === 6) break;

  let num1 = parseInt(prompt("Enter first value : "));
  let num2 = parseInt(prompt("Enter second value : "));

  let result;

  switch (choice) {
    case 1:
      result = add(num1, num2);
      console.log(result);
      break;
    case 2:
      result = sub(num1, num2);
      console.log(result);
      break;
    case 3:
      result = mul(num1, num2);
      console.log(result);
      break;
    case 4:
      result = div(num1, num2);
      console.log(result);
      break;
    case 5:
      result = mod(num1, num2);
      console.log(result);
      break;
    default:
      console.log("Invalid choice");
  }
}
