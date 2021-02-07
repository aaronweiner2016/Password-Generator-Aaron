// Assignment Code
var generateBtn = document.querySelector("#generate"); //grab generate button
              //array of upper case letters
var capLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "L", "K", "J", "H", "G", "F", "D", "S", "A", "Z", "X", "C", "V", "B", "N", "M"];
              //array of lower case letters
var lowerCaseLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "l", "k", "j", "h", "g", "f", "d", "s", "a", "z", "x", "c", "v", "b", "n", "m"];
              //array of symbols
var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-"];
              //array of numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
              
var passwordPrompt;

var howManyChar;

var userChoiceOne;

var userChoiceTwo;

var userChoiceThree;

var userChoiceFour;

var totalArr = []; //this array will be a base for if user says "true", they want to include or not include a certain type of character 

var randomChar; //is a variable that the random math equation password generator can store the reseult into

//for loop
//if statement for if 0,1,2 are yes or some no then do math to show answer to that



// Write password to the #password input
function writePassword() {  //Begins function when clicking generateBtn
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    if(password){
  passwordText.value = password;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)  //Enables button to be clicked


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
}
