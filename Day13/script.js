/*
What is function ?
    block of code which is executed whenever it is called.

    Type of function : 
    1 : Built in 
            prompt , console.log()
            alert()
    2 : user Defined : 
            1 : TAKE NOTHING RETURN NOTHING
            2 : TAKE SOMETHING RETURN NOTHING
            3 : TAKE NOTHING RETURN SOMETHING
            4 : TAKE SOMETHING RETURN SOMETHING

Normal Functions.
*/
function addition() {
  let a = parseInt(prompt("Enter the first number : "));
  let b = parseInt(prompt("Enter the second number : "));
  console.log(`Sum of ${a} and ${b} : ${a + b}`);
}

function subtraction() {
  let a = parseInt(prompt("Enter the first number : "));
  let b = parseInt(prompt("Enter the second number : "));
  console.log(`Sum of ${a} and ${b} : ${a - b}`);
}

function multiplication() {
  let a = parseInt(prompt("Enter the first number : "));
  let b = parseInt(prompt("Enter the second number : "));
  console.log(`Sum of ${a} and ${b} : ${a * b}`);
}

function division() {
  let a = parseInt(prompt("Enter the first number : "));
  let b = parseInt(prompt("Enter the second number : "));
  console.log(`Sum of ${a} and ${b} : ${a / b}`);
}

function modulus() {
  let a = parseInt(prompt("Enter the first number : "));
  let b = parseInt(prompt("Enter the second number : "));
  console.log(`Sum of ${a} and ${b} : ${a % b}`);
}

while (true) {
  console.log(
    "1) Press 1 for addition\n2) Press 2 for substraction\n3) Press 3 for multiplication \n4) Press 4 for division \n5) Press 5 for remainder\n6) Press 6 for exit "
  );

  let choice = parseInt(prompt("Enter your choice : "));

  if (choice === 6) break;

  switch (choice) {
    case 1:
      addition();
      break;
    case 2:
      subtraction();
      break;
    case 3:
      multiplication();
      break;
    case 4:
      division();
      break;
    case 5:
      modulus();
      break;
    default:
      console.log("Invalid choice");
  }
}
