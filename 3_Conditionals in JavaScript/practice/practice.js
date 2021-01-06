
console.log("Conditionals in JavaScript");

//Practice
//Figure out the syntax errors in following, and fix them.

// 1
if (10 <= 10){
}
// 2
//if (5 > 3) {
// return ("Five bigger than three");
//}
//else
//return false;

// 3
if (true){
}
else(false)


// 4
if (2 < 3 && 7 > 10){
}

// 5
if ("hello" === "hello"){
}

//Predict the value of the expression and explain why

true && true && false;
// => false
true || (true && false);
// => true
5 === 2 || 1 < 10;
// => true
(!false && true) || (!true && true);
// => true
1 < 2 < 3;
// => true
1 < 3 > 2;
// => false

//Check out the following examples and solve the question.

// you could use the `toLowerCase` or `toUpperCase `string methods to check if a string matches without it being case sensitive
"HeLlO wOrlD".toLowerCase() === "hello world"; // => true
"HeLlO wOrlD".toUpperCase() === "hello world".toUpperCase(); // => true
// one handy string property `length` is used to return the length of a string, could be useful
//  if you are expecting the input to be in a certain length for example
"myPassword".length <= 15; // => true
"Hello World".length === 11; // => true, notice how even the empty space " " was counted as a character
// Write a function `login` that accepts two string arguments `username` and `password` and
// returns a string "login successful" if both are valid or return "Invalid login information" with the appropriate reason,
// the function will check the following:
// 1- if the length of the username is greater than 4
// 2- if the username is of the specified usernames below
// 3- if the password length is greater or equal to 8
// 4- if the password is equal to the corresponding password
// keep in mind that usernames don't need to be case sensitive but passwords do
// (username => "MrPotato", password =>"LonelyPotato"),  (username => "theWiseMan", password => "12345678")


const login = function (username, password) {
  if (!(username.length > 4)) {
    return 'Invalid login information, the username length must be greater than 4';
  } else if (!(password.length >= 8)) {
    return 'Invalid login information, the password length must be greater or equal to 8';
  } else if (
    username.toLowerCase() === 'MrPotato'.toLowerCase() &&
    password === 'LonelyPotato'
  ) {
    return 'login successful';
  } else if (
    username.toLowerCase() === 'theWiseMan'.toLowerCase() &&
    password === '12345678'
  ) {
    return 'login successful';
  } else {
    return 'Invalid login information, wrong username or password';
  }
};

const login = function (username, password) {
  if(username.length <= 8 &&  password.length <= 3)
  {
    return "login successful";
  }
  else
  return "Invalid login information, wrong password or username"
};

login("MrPotato", "LonelyPotato"); // => login successful
login("mrpotato", "LonelyPotato"); // => login successful

login("MrPotato", "lonelypotato"); // => Invalid login information, wrong password or username
login("MrPotato", "12345678"); // => Invalid login information, wrong password or username

login("MrPotato", "123456"); // => Invalid login information, the password length must be greater or equal to 8
login("mike", "12345678"); // => Invalid login information, the username length must be greater than 4


//Write a function isLeapYear that accepts a number argument year and returns true if the year is a leap year, leap years are divisible by 4 but non leap years are not divisible by 100 for the exception of 400 (leap years are also divisible by 400)
const isLeapYear = function (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

isLeapYear(1699);


//Write a function deposit that accepts an argument amount and returns the deposited amount, the function should only accept positive number arguments otherwise return "Please enter a valid number"

const deposit = function (amount) {
  if (typeof amount === 'number' && amount > 0) {
    return amount;
  }
  return 'Please enter a valid number';
};
deposit(100); // => 100
deposit("100"); // => Please enter a valid number

// since strings store a series of characters in an ordered way
// we could use the index of the character to access the character in the string
// each character in the string has it is own unique identifying number (index),
// the index value starts at zero and for every letter that is added after the first one the index will be incremented by one

"hello"[0]; // => h
"hello"[1]; // => e
"hello"[2]; // => l
"hello"[3]; // => l
"hello"[4]; // => o

// write a function `startsWith` that accept two string arguments `string`, `character` and returns true if the string
// starts with that character


const startsWith = function (string, character) {
  if (string[0].toLowerCase() === character.toLowerCase()) {
    return true;
  }
  return false;
};
startsWith("Hello", "h"); // => true
startsWith("Hello", "H"); // => true
startsWith("hello", "H"); // => true
startsWith("World", "h"); // => false
startsWith("World", "a"); // => false
startsWith("World", "c"); // => false

   

  //Write a function endsWith that accept two string arguments string, character and returns true if the string ends with that character.
  // write a function `startsWith` that accept two string arguments `string`, `character` and returns true if the string
// starts with that character

const startsWith = function (string, character) {
 string= "hello"[4]; // => h
 string= "hello"[3]; // => e
 string= "hello"[2]; // => l
 string= "hello"[1]; // => l
 string= "hello"[0]; // => o
  if(character === string.charAt())
  {
    return true;
  }
  else
  return false;
};
startsWith("Hello", "h"); // => true
startsWith("World", "h"); // => false
  
  
  
//Write a function endsWith that accept two string arguments string, character and returns true if the string ends with that character.
  const endsWith = function (string, character) {
    if (string[string.length - 1].toLowerCase() === character.toLowerCase()) {
      return true;
    }
    return false;
  };
  endsWith("Hello", "o"); // => true
  endsWith("Hello", "O"); // => true
  endsWith("hellO", "o"); // => true
  endsWith("World", "h"); // => false
  endsWith("World", "a"); // => false
  endsWith("World", "c"); // => false

    //Write a function guessTheSquareRoot that accepts two number arguments number, squareRoot and returns a string correct if the guess is correct and returns incorrect if the guess is incorrect.
    // a function that randomly outputs `rock` or `paper` or `scissors`
const random = function () {
  // gets a random number from 1-3
  const result = Math.ceil(Math.random() * 3);

  if (result === 1) {
    return 'rock';
  } else if (result === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
};
// make sure to use the function above (random) to get a random output to compare with the user input  
random(); // => rock
random(); // => paper  
random(); // => scissors  


const rockPaperScissors = function (move) {
  // use randomMove to get the value of the random move
  const randomMove = random();
  // randomMove; => rock (use it by referencing the name)
  if (move === randomMove) {
    return 'it is a draw';
  } else if (move === 'rock') {
    if (randomMove === 'scissors') {
      return 'you win';
    } else {
      return 'you lose';
    }
  } else if (move === 'paper') {
    if (randomMove === 'rock') {
      return 'you win';
    } else {
      return 'you lose';
    }
  } else if (move === 'scissors') {
    if (randomMove === 'paper') {
      return 'you win';
    } else {
      return 'you lose';
    }
  } else {
    return 'invalid move';
  }
};

  
rockPaperScissors("rock"); // => you win
rockPaperScissors("rock"); // => you win
rockPaperScissors("rock"); // => you lose
rockPaperScissors("rock"); // => you win
rockPaperScissors("rock"); // => it is a draw
rockPaperScissors("asd"); // => 'invalid move'
rockPaperScissors(22); // => 'invalid move'
c// => 'invalid move'
//Write a function guessTheSquareRoot that accepts two number arguments number, squareRoot and returns a string correct if the guess is correct and returns incorrect if the guess is incorrect.

const guessTheSquareRoot = function (number, squareRoot) {
  if (Math.sqrt(number) === squareRoot) {
    return 'correct';
  }
  return 'incorrect';
};
guessTheSquareRoot(4, 2); // => correct
guessTheSquareRoot(4, 3); // => incorrect

//HINT: search for the correct method to use on MDN

//Write a function search that accepts two string arguments string, letter and returns true if the letter is inside the string and returns false if it doesn't.

const search = function (string, letter) {
  if (string.toLowerCase().search(letter.toLowerCase()) !== -1) {
    return true;
  }
  return false;
};  
search('Hello', 'E'); // => true
search('Hello', 'Z'); // => false

//HINT: search for the correct method to use on MDN