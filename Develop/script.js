// Assignment Code
var generateBtn = document.querySelector("#generate");

var capLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "L", "K", "J", "H", "G", "F", "D", "S", "A", "Z", "X", "C", "V", "B", "N", "M"];

var lowerCaseLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "l", "k", "j", "h", "g", "f", "d", "s", "a", "z", "x", "c", "v", "b", "n", "m"];

var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var passwordPrompt;

var howManyChar;

var userChoiceOne;

var userChoiceTwo;

var userChoiceThree;

var userChoiceFour;

var totalArr = [];

var randomChar;

//for loop
//if statement for if 0,1,2 are yes or some no then do math to show answet to that



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    if(password){
  passwordText.value = password;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


function generatePassword() {
 
  passwordPrompt = window.confirm("Make a password?");
    if(!passwordPrompt){
      return;
    }

  howManyChar = parseInt(window.prompt("Choose between 8 and 128"));

  if(howManyChar < 8 || howManyChar > 128){
    alert("Invalid amount of characters");
    generatePassword();
  } 
  
  userChoiceOne = window.confirm("Do you want capitol letters?");
 
  if(userChoiceOne){
    totalArr = totalArr.concat(capLetters)
  }

  userChoiceTwo = window.confirm("Do you want lower case letters?");
  
  if(userChoiceTwo){
    totalArr = totalArr.concat(lowerCaseLetters)
  }

  userChoiceThree = window.confirm("Do you want to include symbols?");

  if(userChoiceThree){
    totalArr = totalArr.concat(symbols)
  }

  userChoiceFour = window.confirm("Do you want to add numbers?");

  if(userChoiceFour){
    totalArr = totalArr.concat(numbers)
  }

  if(totalArr.length === 0){
    alert("You did not choose any character types");
    generatePassword();
  }

  var passwordPiece = "";

  for(var i = 0; i < howManyChar; i++){
    var randomIndex = Math.floor(Math.random() * totalArr.length);
    randomChar = totalArr[randomIndex];
    passwordPiece += randomChar;
  }
  
  return(passwordPiece);



  // window.alert(
    // "Password: " + passwordString.concat(randomChar)  );
}



//need to concat rendomChar to to passwordstring
//return password out of function after for loop