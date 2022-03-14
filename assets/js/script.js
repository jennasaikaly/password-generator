
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
  var confirmChoices = true;

  while (confirmChoices) {
    var passwordLengthChoice = window.prompt(
      "Welcome to Password Generator! To get started, please choose how long you would like your Password (8-128 characters) to be."
    );

    while (!passwordLengthChoice || passwordLengthChoice < 8 || passwordLengthChoice > 128) {
      passwordLengthChoice = window.prompt("You made an incorrect selection.  Please choose a number between 8 and 128.");
    };

    var upperCaseChoice = window.confirm(
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


    /**************************/
    //CONFIRM CHOICES
    /**************************/
    //if they select "confirm" within the confirm window
    //selectionApproved = true;
    //selectionDenied = false;
    //

    userConfirmChoices = window.confirm(
      "Please confirm your choices! " +
      "\nUppercase enabled: " + upperCaseChoice +
      "\nLowercase enabled: " + lowerCaseChoice +
      "\nNumbers enabled: " + numberChoice +
      "\nSpecial Characters enabled: " + specialCharacterChoice +
      "\nLength of password: " + passwordLengthChoice
    );

    if (userConfirmChoices === false) {
      window.alert("Please enter your selections again.");
    } else if (!upperCaseChoice && !lowerCaseChoice && !numberChoice && !specialCharacterChoice) {
      window.alert("Please enter your selections again. You must select at least one character class!");
    } else {
      confirmChoices = false;
    }

  }
  /************************************/
  //    ARRAY CODE
  /************************************/

  characterSelectionArray = [];

  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const specialCharacters = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


  if (upperCaseChoice) {
    characterSelectionArray = characterSelectionArray.concat(upperCase);
  }

  if (lowerCaseChoice) {
    characterSelectionArray = characterSelectionArray.concat(lowerCase);
  }

  if (numberChoice) {
    characterSelectionArray = characterSelectionArray.concat(numbers);
  }

  if (specialCharacterChoice) {
    characterSelectionArray = characterSelectionArray.concat(specialCharacters);
  }

  /*************************/
  //GENERATE PASSWORD
  /*************************/

  var password = "";
  for (i = 0; i < passwordLengthChoice; i++) {
    password += characterSelectionArray[Math.floor(Math.random() * characterSelectionArray.length)];
  }
  console.log(password);
  return password;


}
/**********************/
// WRITE PASSWORD FUNCTION 
/**********************/
// Write password to the #password input
function writePassword() {

  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
