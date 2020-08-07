/*
Random Password Generator

Click password generator
Welcome Alert pops
Input Character Length
Choose if you want to include lowercase, uppercase, numbers, and/or symbols  
Generate Password
Copy Password

  Click password generator Button
   
*/

// Generator on click displays welcome starter alert
var writePassword = function() {
  alert("Welcome to Password Generator, start generating your own unique password. Passwords can have minimum of 8 and a maximum of 128 characters. It can include UPPERCASE and/or lowercase letters, numbers, and symbols");
  
  showPassCriteria(); //links to Character Length Input

}

// Length Input
var showPassCriteria = function() {
  var passLength = window.prompt("Before proceeding, type the desired # of characters for your random password.  Your random password must have atleast a minimum of 8 characters and no more than 128 characters.");
  console.log = (passLength);
  // prompted for length
  if (passLength >= 8 && passLength <= 128) {
    passCharTypes();
    // return passLength;
  }
  else {
    window.alert("Invalid Input.  Your random password must have atleast a minimum of 8 characters and no more than 128 characters.");
    // force guest to choose valid option
    showPassCriteria();
  }
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // Generator function
// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSymbol() {
//   const symbols = "\\ !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }


