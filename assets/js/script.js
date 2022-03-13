// Assignment code here


// 1) click on the button, recieve series of prompts
// 2) prompt #1 special characters   " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// 4) prompt #2  length of password   at least 8 characters and no more than 128 characters
//5)  prompt #2 include lowercase, uppercase, numeric, and/or special characters

// 6) user has to confirm selection; at least 1 character must be chosen;

//7)  all prompts must be answered ; then a password is created that matches selections
//8) password is displayed as an alert or on the page;




  


/********************************/
//      Gather Information
/********************************/

// Write password to the #password input

function writePassword() {
  debugger;
  var lengthOfPassword = window.prompt(
    "Welcome to Password Generator! To get started, please choose how long you would like your Password (8-128 characters) to be."
    ); 
    
    while (!lengthOfPassword || lengthOfPassword < 8 || lengthOfPassword > 128) {
      lengthOfPassword = window.prompt("You made an incorrect selection.  Please choose a number between 8 and 128.");
    } 
  

  var numberCharacter = window.prompt(
    "Would you like to include NUMBERS? Please press 1 for YES or 0 for NO"
    );
    while (!numberCharacter ||numberCharacter < 1 || numberCharacter > 2) {
      numberCharacter = window.prompt("Please make a selection! 1 for YES or 0 for NO");
          }
              

  var upperCaseCharacter= window.prompt(
    "Would you like to include UPPER-CASE CHARACTERS? Please press 1 for YES or 0 for NO"
    );
    while (!upperCaseCharacter ||upperCaseCharacter < 0 || upperCaseCharacter > 1) {
      upperCaseCharacter = window.prompt("Please make a selection! 1 for YES or 0 for NO");
          }


  var lowerCaseCharacter = window.prompt(
    "Would you like to include LOWER-CASE LETTERS? Please press 1 for YES or 0 for NO"
    );
    while (!lowerCaseCharacter ||lowerCaseCharacter < 0 || lowerCaseCharacter > 1) {
      lowerCaseCharacter = window.prompt("Please make a selection! 1 for YES or 0 for NO");
          }

  var specialCharacter = window.prompt(
    "Would you like to include a SPECIAL CHARACTER? Please press 1 for YES or 0 for NO"
    );
    while (!specialCharacter ||specialCharacter < 0 || specialCharacter > 1) {
      specialCharacter = window.prompt("Please make a selection! 1 for YES or 0 for NO");
          }





  
  

      
  

 
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
