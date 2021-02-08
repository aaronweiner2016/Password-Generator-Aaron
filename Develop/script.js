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

var totalArr = []; //this array will be a base for if user says "true", they want to include or not include a certain type of character 

var passwordPiece = "";

var howManyChar;

var userChoiceOne;

var userChoiceTwo;

var userChoiceThree;

var userChoiceFour;



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


function generatePassword() {           //begins function to set perameters of the password
 
  var passwordPrompt = window.confirm("Make a password?");          //asking if you want to create the password
    if(!passwordPrompt){          //if false return out of function(cancel)
      return;
    }

  howManyChar = parseInt(window.prompt("Choose between 8 and 128"));         //parseInt is changing howManyChar into a number

  if(howManyChar < 8 || howManyChar > 128){       //making you choose a password length between 8 and 128
    alert("Invalid amount of characters");      //alert will pop up if password length choice is not within 8 and 128
    generatePassword();
  } 
  
  userChoiceOne = window.confirm("Do you want capitol letters?");
 
  if(userChoiceOne){
    totalArr = totalArr.concat(capLetters)    //if true(okay button) empty array will add capLetters, if false(cancel) it wont add it
  }

  userChoiceTwo = window.confirm("Do you want lower case letters?");
  
  if(userChoiceTwo){
    totalArr = totalArr.concat(lowerCaseLetters)    //if true(okay button) empty array will add lowerCaseLetters, if false(cancel) it wont add it
  }

  userChoiceThree = window.confirm("Do you want to include symbols?");

  if(userChoiceThree){
    totalArr = totalArr.concat(symbols)    //if true(okay button) empty array will add symbols, if false(cancel) it wont add it
  }

  userChoiceFour = window.confirm("Do you want to add numbers?");

  if(userChoiceFour){
    totalArr = totalArr.concat(numbers)     //if true(okay button) empty array will add numbers, if false(cancel) it wont add it
  }

  if(totalArr.length === 0){      //if after all the confirm boxes go through and all were false(cancel), the empty array will equal zero meaning nothing was chosen
    alert("You did not choose any character types");
    generatePassword();
  }

  for(var i = 0; i < howManyChar; i++){     //randomize the first character then i++(i=i+1) to the next number, each time generating a new character, all the way up to the amount of characters you chose your password to have
    var randomIndex = Math.floor(Math.random() * totalArr.length);
    var randomChar = totalArr[randomIndex];
    passwordPiece += randomChar;
  }
  
  return(passwordPiece);
  
}