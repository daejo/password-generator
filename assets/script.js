/*
Random Password Generator
  -Click password generator
  -Input Character Length
  -Choose if you want to include lowercase, uppercase, numbers, and/or symbols  
  -Generate Password 
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

// Determines if the input length and if its within the requirements.
function lengthInput(){
  passwordLength = prompt("Type the number of characters you want for your password. \n(MUST BE 8 TO 128 CHARACTERS)");

  if (passwordLength < 8 ) { //Character is less than required parameters.
    alert("Invalid Input. Password must be equal to or greater than 8")
    lengthInput();
  
  }else if (passwordLength > 128 ) { //Character is greater than required parameters.
    alert("Invalid Input. Password must be equal to or less than 128")
    lengthInput();

  }else if (passwordLength === undefined) { //Input is empty.
    alert("Invalid Input. Please provide a number between 8 to 128");
    lengthInput();
  
  }else{
    alert("You will be prompted with character options to be included in your password");
  }  
  return passwordLength
}

function passwordLowercase(){ //Checking if lowercase letters will be included.
  lowercasePass = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");
    lowercasePass = lowercasePass.toLowerCase();

    if (lowercasePass === null || lowercasePass === ""){
      alert("Please answer Yes or No");
      passwordLowercase();

    }else if (lowercasePass === "yes" || lowercasePass ==="y"){
      lowercasePass = true;


    }else if (lowercasePass === "no" || lowercasePass ==="n"){
      lowercasePass = false;

    
    }else {
      alert("Please answer Yes or No");
      passwordLowercase();
    }

}


function passwordUppercase(){ //Checking if uppercase letters will be included.
  uppercasePass = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercasePass = uppercasePass.toLowerCase();

    if (uppercasePass === null || uppercasePass === ""){
      alert("Please answer Yes or No");
      passwordUppercase();

    }else if (uppercasePass === "yes" || uppercasePass ==="y"){
      uppercasePass = true;


    }else if (uppercasePass === "no" || uppercasePass ==="n"){
      uppercasePass = false;

    
    }else {
      alert("Please answer Yes or No");
      passwordUppercase();
    }

}

//Checking if numbers will be included.
function passwordNumbers(){
  numberPass = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberPass = numberPass.toLowerCase();

    if (numberPass === null || numberPass === ""){
      alert("Please answer Yes or No");
      passwordNumbers();

    }else if (numberPass === "yes" || numberPass ==="y"){
      numberPass = true;


    }else if (numberPass === "no" || numberPass ==="n"){
      numberPass = false;

    
    }else {
      alert("Please answer Yes or No");
      passwordNumbers();
    }

}

//Checking if symbols will be included.
function passwordSymbol(){
  symbolPass = prompt("Do you want your password to include symbols \n(Yes or No)");
    symbolPass = symbolPass.toLowerCase();

    if (symbolPass === null || symbolPass === ""){
      alert("Please answer Yes or No");
      passwordSymbol();

    }else if (symbolPass === "yes" || symbolPass ==="y"){
      symbolPass = true;
 

    }else if (symbolPass === "no" || symbolPass ==="n"){
      symbolPass = false;

    
    }else {
      alert("Please answer Yes or No");
      passwordSymbol();
    }

}

 // Consolidates all information to be processed for random generator 
 function generatePassword(){
  lengthInput();
  console.log(passwordLength);
  passwordLowercase();
  console.log(lowercasePass);
  passwordUppercase();
  console.log(uppercasePass);
  passwordNumbers();
  console.log(numberPass);
  passwordSymbol();
  console.log(symbolPass);

// if else statements to figure out the combination of charaters to be used 
var characters = "";
var password = "";
if (lowercasePass && uppercasePass && numberPass && symbolPass){
  characters += lowercaseList + uppercaseList + numberList + symbolList;

}else if (lowercasePass && numberPass && symbolPass){
  characters += lowercaseList + numberList + symbolList;

}else if (uppercasePass && numberPass && symbolPass){
  characters += uppercaseList + numberList + symbolList;

}else if (uppercasePass && numberPass){
  characters += uppercaseList + numberList;

}else if (numberPass && symbolPass){
  characters += numberList + symbolList;

}else if (uppercasePass && symbolPass){
  characters += uppercaseList + symbolList;

}else if (lowercasePass){
  characters += lowercaseList;

}else if (uppercasePass){
  characters += uppercaseList;

}else if(numberPass){
  characters += numberList;

}else if (symbolPass){
  characters += symbolList;

}else{ //If no type of characters are selected it resets back to choosing process.
  alert("Please type necessary options to continue");
  generatePassword();  
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Writes password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
