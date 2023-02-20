
// Function to prompt user for password options - when user checks whihch character they want to include in their password 
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandomSymbol() {
  const symbols = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
  console.log(symbols[Math.floor(Math.random(symbols) * symbols.length)]);
}
getRandomSymbol();

function getRandomNumber() {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  console.log(numbers[Math.floor(Math.random(numbers) * numbers.length)]);
}
getRandomNumber()

function getRandomLower() {
  const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  console.log(lowerCase[Math.floor(Math.random(lowerCase) * lowerCase.length)]);
}
getRandomLower()

function getRandomUpper() {
  const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  console.log(upperCase[Math.floor(Math.random(upperCase) * upperCase.length)]);
}
getRandomUpper()

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);