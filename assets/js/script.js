// Assignment code here


// 1) click on the button, recieve series of prompts
// 2) prompt #1 special characters   " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// 4) prompt #2  length of password   at least 8 characters and no more than 128 characters
//5)  prompt #2 include lowercase, uppercase, numeric, and/or special characters

// 6) user has to confirm selection; at least 1 character must be chosen;

//7)  all prompts must be answered ; then a password is created that matches selections
//8) password is displayed as an alert or on the page;




  



// Write password to the #password input

var lengthPrompt = function() {
  debugger;
  var lengthCharacter = window.prompt(
    "Welcome to Password Generator! To get started, please choose how long you would like your Password (8-128 characters) to be."
    ); 
    if (!lengthCharacter) {
      window.alert("Please make a selection!");
      return lengthPrompt();
     }
}

var numberPrompt = function() {
  var numberCharacter = window.prompt(
    "Would you like to include NUMBERS? Please press 1 for YES or 2 for NO"
    );
    if (!numberCharacter) {
      window.alert("Please make a selection!");
      return numberPrompt();
    }
}

var upperCasePrompt = function() {
  var upperCaseCharacter = window.prompt(
    "Would you like to include UPPER-CASE LETTERS? Please press 1 for YES or 2 for NO"
    );
    if (!upperCaseCharacter) {
      window.alert("Please make a selection!");
      return upperCasePrompt();
  }
}

var lowerCasePrompt = function() {
  var lowerCaseCharacter = window.prompt(
    "Would you like to include LOWER-CASE LETTERS? Please press 1 for YES or 2 for NO"
    );
    if (!lowerCaseCharacter) {
      window.alert("Please make a selection!");
      return lowerCasePrompt();
  }
}

var specialCharPrompt = function() {
  var specialCharacter = window.prompt(
    "Would you like to include a SPECIAL CHARACTER? Please press 1 for YES or 2 for NO"
    );
    if (!specialCharacter) {
      window.alert("Please make a selection!");
      return specialCharPrompt();
  }
}




  
  
function writePassword() {
      lengthPrompt();
      numberPrompt();
      upperCasePrompt();
      lowerCasePrompt();
      specialCharPrompt();

  

 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
