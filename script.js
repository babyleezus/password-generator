
// Function to prompt user for password options - when user checks whihch character they want to include in their password 
function getPasswordOptions() {

}

const passwordFunction = {
  symbol: getRandomSymbol,
  number: getRandomNumber,
  lower: getRandomLower,
  upper: getRandomUpper
}

//DOM elements - making the html elements resposive with javascript 
var passwordElement = document.querySelector("#password")
var generateElement = document.querySelector("#generate")
var symbolsElement = document.querySelector("#symbols")
var numbersElement = document.querySelector("#numbers")
var lowercaseElement = document.querySelector("#lowercase")
var uppercaseElement = document.querySelector("#uppercase")
var lengthElement = document.querySelector("#length")

//checks the values of the inputs
generateElement.addEventListener('click', function() {
  const length = +lengthElement.value;
  const symbolsChecked = symbolsElement.checked;
  const numbersChecked = numbersElement.checked;
  const lowerChecked = lowercaseElement.checked;
  const upperChecked = uppercaseElement.checked;
  console.log(symbolsChecked, numbersChecked, lowerChecked, upperChecked, length);

  password.innerText = generatePassword (symbolsChecked, numbersChecked, lowerChecked, upperChecked, length)
});

function generatePassword(symbol, number, lower, upper, length) {

  let generatedPassword = "";

  const characterTypes = symbol + number + lower + upper;
  
  console.log([characterTypes]);

  const charArr = [{ symbol }, { number }, { lower }, { upper }];

  console.log(charArr);

  if (characterTypes === 0) {
    return "";
  }

  for (let i = 0; i < length; i += characterTypes) {
    
  }

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
getRandomUpper();

