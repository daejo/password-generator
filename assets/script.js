/*
Random Password Generator
  Click password generator
  Welcome Alert pops
  Input Character Length
  Choose if you want to include lowercase, uppercase, numbers, and/or symbols  
  Generate Password
  Copy Password   
*/
var generateBtn = document.querySelector("#generate");
var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberList = "0123456789";
var symbolList = "\\ !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var passwordLength;
var lowercasePass;
var uppercasePass;
var numberPass;
var symbolPass;

// Generator functions
// var getRandomLower = function() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// var getRandomUpper = function() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }
// var getRandomNumber = function() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }
// var getRandomSymbol = function() {
//   const symbols = "\\ !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// Determines if the input length is within requirements.
function lengthInput(){
  passwordLength = Number(prompt("Number of characters for your password MUST BE 8 TO 128 CHARACTERS"));

  if (passwordLength < 8 ) { //Character is less than required parameters.
    alert("Invalid Input. Password must be equal to or greater than 8")
    lengthInput();
  
  }else if (passwordLength > 128 ) { //Character is greater than required parameters.
    alert("Invalid Input. Password must be equal to or less than 128")
    lengthInput();

  }else if (passwordLength === null) { //Input is empty.
    alert("Invalid Input. Please provide a number between 8 to 128");
    lengthInput();

  }else{
    alert("You will be prompted with character options to be included in your password");
  }  
  return passwordLength
}


// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}
// function resetText(){
//   document.getElementById("password").value = "Your Secure Password";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

