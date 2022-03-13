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
  var passwordLengthChoice = window.prompt(
    "Welcome to Password Generator! To get started, please choose how long you would like your Password (8-128 characters) to be."
    ); 
    
    while ( passwordLengthChoice || passwordLengthChoice < 8 || passwordLengthChoice > 128) {
     passwordLengthChoice = window.prompt("You made an incorrect selection.  Please choose a number between 8 and 128.");
    } 
  

  var numberChoice = window.prompt(
    "Would you like to include NUMBERS? Please press 1 for YES or 0 for NO"
    );
    while ( numberChoice | numberChoice < 1 || numberChoice > 2) {
     numberChoice = window.prompt("Please make a selection! 1 for YES or 0 for NO");
          }
              

  var upperCaseChoice= window.prompt(
    "Would you like to include UPPER-CASE CHARACTERS? Please press 1 for YES or 0 for NO"
    );
    while (!upperCaseChoice ||upperCaseChoice < 0 || upperCaseChoice > 1) {
      upperCaseChoice = window.prompt("Please make a selection! 1 for YES or 0 for NO");
          }


  var lowerCaseChoice = window.prompt(
    "Would you like to include LOWER-CASE LETTERS? Please press 1 for YES or 0 for NO"
    );
    while (!lowerCaseChoice ||lowerCaseChoice < 0 || lowerCaseChoice > 1) {
      lowerCaseChoice = window.prompt("Please make a selection! 1 for YES or 0 for NO");
          }

  var specialCharacterChoice = window.prompt(
    "Would you like to include a SPECIAL CHARACTER? Please press 1 for YES or 0 for NO"
    );
    while (!specialCharacterChoice ||specialCharacterChoice < 0 || specialCharacterChoice > 1) {
      specialCharacterChoice = window.prompt("Please make a selection! 1 for YES or 0 for NO");
          }


/************************************/
//    ARRAY CODE
/************************************/
characterSelectionArray = [];

lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
numbers = ["1","2","3","4","5","6","7","8","9","0"];
specialCharacters = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];




  
  

      
  

 
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
