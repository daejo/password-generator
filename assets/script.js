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

function passwordLowercase(){ //Checking if lowercase letters will be included.
  lowercasePass = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    lowercasePass = lowercasePass.toLowerCase();

    if (lowercasePass === null || lowercasePass === ""){
      alert("Please answer Yes or No");
      passwordLowercase();

    }else if (lowercasePass === "yes" || lowercasePass ==="y"){
      lowercasePass = true;
      return lowercasePass;

    }else if (lowercasePass === "no" || lowercasePass ==="n"){
      lowercasePass = false;
      return lowercasePass;
    
    }else {
      alert("Please answer Yes or No");
      passwordLowercase();
    }
    return lowercasePass;
}


function passwordUppercase(){ //Checking if uppercase letters will be included.
  uppercasePass = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercasePass = uppercasePass.toLowerCase();

    if (uppercasePass === null || uppercasePass === ""){
      alert("Please answer Yes or No");
      passwordUppercase();

    }else if (uppercasePass === "yes" || uppercasePass ==="y"){
      uppercasePass = true;
      return uppercasePass;

    }else if (uppercasePass === "no" || uppercasePass ==="n"){
      uppercasePass = false;
      return uppercasePass;
    
    }else {
      alert("Please answer Yes or No");
      passwordUppercase();
    }
    return uppercasePass;
}


//Function used to determine whether the user wants to include numbers in the password
function passwordNumbers(){
  numberPass = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberPass = numberPass.toLowerCase();

    if (numberPass === null || numberPass === ""){
      alert("Please answer Yes or No");
      passwordNumbers();

    }else if (numberPass === "yes" || numberPass ==="y"){
      numberPass = true;
      return numberPass;

    }else if (numberPass === "no" || numberPass ==="n"){
      numberPass = false;
      return numberPass;
    
    }else {
      alert("Please answer Yes or No");
      passwordNumbers();
    }
    return numberPass;
}

// Determine whether the user wants to include symbols in the password
function passwordSymbol(){
  symbolPass = prompt("Do you want your password to include symbols \n(Yes or No)");
    symbolPass = symbolPass.toLowerCase();

    if (symbolPass === null || symbolPass === ""){
      alert("Please answer Yes or No");
      passwordSymbol();

    }else if (symbolPass === "yes" || symbolPass ==="y"){
      symbolPass = true;
      return symbolPass;

    }else if (symbolPass === "no" || symbolPass ==="n"){
      symbolPass = false;
      return symbolPass;
    
    }else {
      alert("Please answer Yes or No");
      passwordSymbol();
    }
    return symbolPass;
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

