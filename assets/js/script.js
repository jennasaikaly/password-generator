
//my notes for myself

// 1) click on the button, recieve series of prompts
// 2) prompt #1 special characters   " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// 4) prompt #2  length of password   at least 8 characters and no more than 128 characters
//5)  prompt #2 include lowercase, uppercase, numeric, and/or special characters

// 6) user has to confirm selection; at least 1 character must be chosen;

//7)  all prompts must be answered ; then a password is created that matches selections
//8) password is displayed as an alert or on the page;


// Assignment code here



/******************************/
 // GENERATE PASSWORD FUNCTION
/*****************************/
function generatePassword() {

  //debugger;

 /********************************/
//      Gather Information
/********************************/

  var passwordLengthChoice = window.prompt(
    "Welcome to Password Generator! To get started, please choose how long you would like your Password (8-128 characters) to be."
    ); 
    
    if (!passwordLengthChoice || passwordLengthChoice < 8 || passwordLengthChoice > 128) {
    passwordLengthChoice = window.prompt("You made an incorrect selection.  Please choose a number between 8 and 128.");
    } 
  
   else {
   var upperCaseChoice= window.confirm(
    "Would you like to include UPPER-CASE CHARACTERS? Please press OK for YES or CANCEL for NO"
    );
    

  var lowerCaseChoice = window.confirm(
    "Would you like to include LOWER-CASE LETTERS? Please press OK for YES or CANCEL for NO"
    );
    
  var numberChoice = window.confirm(
    "Would you like to include NUMBERS?Please press OK for YES or CANCEL for NO"
    );
   
  
  var specialCharacterChoice = window.confirm(
    "Would you like to include a SPECIAL CHARACTER? Please press OK for YES or CANCEL for NO"
    );
    
  }       
/**************************/
//CONFIRM CHOICES
/**************************/
//if they select "confirm" within the confirm window
//selectionApproved = true;
//selectionDenied = false;
//
var confirmChoices = window.confirm(
  "Uppercase enabled: " + upperCaseChoice + 
  "\nLowercase enabled: " + lowerCaseChoice +
  "\nNumbers enabled: " + numberChoice +
  "\nSpecial Characters enabled: " + specialCharacterChoice +
  "\nLength of password: " + passwordLengthChoice
);
if (confirmChoices === false) {
  window.alert("Please enter your selections again.");
  generatePassword();
}
debugger;     
/************************************/
//    ARRAY CODE
/************************************/

characterSelectionArray = [];

upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
numbers = ["1","2","3","4","5","6","7","8","9","0"];
specialCharacters = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];


if (upperCaseChoice === 1){
  characterSelectionArray = characterSelectionArray.concat(upperCase);
   
}

if (lowerCaseChoice === 1){
  characterSelectionArray = characterSelectionArray.concat(lowerCase);
    

}

if (numberChoice === 1){
  characterSelectionArray = characterSelectionArray.concat(numbers);
}

if (specialCharacterChoice === 1){
  characterSelectionArray = characterSelectionArray.concat(specialCharacters);
} 

/*************************/
  //GENERATE PASSWORD
/*************************/

var pwd ="";
for(i = 0; i < passwordLengthChoice; i++) {
  const random = characterSelectionArray[Math.floor(Math.random() * characterSelectionArray.length-1)];
  pwd += random
}
return pwd;


  
}
/**********************/
// WRITE PASSWORD FUNCTION 
/**********************/
// Write password to the #password input
function writePassword(){
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
