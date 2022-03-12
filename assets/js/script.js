// Assignment code here


// 1) click on the button, recieve series of prompts
// 2) prompt #1 special characters   " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// 4) prompt #2  length of password   at least 8 characters and no more than 128 characters
//5)  prompt #2 include lowercase, uppercase, numeric, and/or special characters

// 6) user has to confirm selection; at least 1 character must be chosen;

//7)  all prompts must be answered ; then a password is created that matches selections
//8) password is displayed as an alert or on the page;




  



// Write password to the #password input

var lengthCharacter = function() {
  var lengthPrompt = window.prompt(
    "Welcome to Password Generator! To get started, please choose how long you would like your Password (8-128 characters) to be."
    ); 
    if (!lengthPrompt) {
      window.alert("Please make a selection!");
      return lengthCharacter();
     }
}

var numberCharacter = function() {
  var numberPrompt = window.prompt(
    "Would you like to include NUMBERS? Please press 1 for YES or 2 for NO"
    );
    if (!numberPrompt) {
      window.alert("Please make a selection!");
      return numberCharacter();
    }
}

var upperCaseCharacter = function() {
  var upperCasePrompt = window.prompt(
    "Would you like to include UPPER-CASE LETTERS? Please press 1 for YES or 2 for NO"
    );
    if (!upperCasePrompt) {
      window.alert("Please make a selection!");
      return upperCaseCharacter();
  }
}

var lowerCaseCharacter = function() {
  var lowerCasePrompt = window.prompt(
    "Would you like to include LOWER-CASE LETTERS? Please press 1 for YES or 2 for NO"
    );
    if (!lowerCasePrompt) {
      window.alert("Please make a selection!");
      return lowerCaseCharacter();
  }
}

var specialCharacter = function() {
  var specialCharPrompt = window.prompt(
    "Would you like to include a SPECIAL CHARACTER? Please press 1 for YES or 2 for NO"
    );
    if (!specialCharPrompt) {
      window.alert("Please make a selection!");
      return specialCharacter();
  }
}




  
  
function writePassword() {
      lengthCharacter();
      numberCharacter();
      upperCaseCharacter();
      lowerCaseCharacter();
      specialCharacter();

  

 
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
characterLength(); 