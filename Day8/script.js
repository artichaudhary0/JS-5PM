/*
Change Password Logic : 

requirement : 

forget-password
password , confirm password, submit(rest).


Signup : 
email password

*/

// current user :
let email = "a@gmail.com";
let password = "A@123";

console.log("Change password");

let enterEmail = "a@gmail.com";
let enterPassword = "A@1234";
let confirmPassword = "A@1234";

// user exist ?
if (email != enterEmail) console.log("user does not exist");
else {
  console.log("You have entered : " + enterPassword);

  if (enterPassword == password) {
    console.log("Entered password can not be same as previous passwords");
  } else {
    console.log("Enter confirm password : " + confirmPassword);
    if (enterPassword != confirmPassword) {
      console.log("Confirm password does not match with entered password");
    } else {
      console.log("Password changes successfullllyyy");
    }
  }
}
