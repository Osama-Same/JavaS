console.log("Arrays in JavaScript");
//Pulse Check
//Define the following arrays.

// 1- define an array `colors` containing your favorite three colors
const colors =['red',"blue","black"];
// 2- define an array `negativeNumbers`containing negative numbers
const negativeNumbers =[-2,1,4,4];
// 3- define an array `food` containing three of your favorite foods
const food = ['e',"f",'g'];
// 4- define an array `numbers` containing two arrays, the first containing three odd numbers and
// the second containing four even numbers
const number= [1,2,3,4,5,56 ,5];


//Access the following values.
const numbers =[1,3,5,4,6];
//Access the following values.
// 1- access the value `Mars` of the following arrays using the index
const $orderedPlanets = ["Mercery", "Venus", "Earth", "Mars", "Jupiter"];
const $unorderedPlanets = ["Mars", "Earth", "Mercery", "Jupiter", "Venus"];
// 2- access the `Koala` value of the following arrays using the `length` property
const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"];
//  3- access the value middle value of the following array using the `length` property or the index
const cars = ["Ford", "BMW", "Ferrari", "Mercedes", "Subaru"];



//Assign the following values to the corresponding array.

// 1- Assign the value `Mars` to end of the following arrays (don't replace `Jupiter` and `Mercery`)
// a- use the `length` property
const orderedPlanets = ["Mercery", "Venus", "Earth", "Jupiter"];
// b- don't use the `length` property (use the index)
const unorderedPlanets = ["Mars", "Earth", "Mercery"];

// 2- Assign the `Koala` to the start of the following array (replace `Cat`)
const Animals = ["Cat", "Dog", "Dolphin", "Squirrel"];
Animals  [0]= `Koala`;

//  3- Assign the value `Toyota` to the middle of the following array using the `length` property(replace `Ferrari`)
const $cars = ["Ford", "BMW", "Ferrari", "Mercedes", "Subaru"];
cars [2]="`Toyota`".length;

//Solve the following questions while using array methods.
// 1- add an the value 'Dinosaur' to the end of the array using the correct array method

const reptiles = ["Snake", "Lizard", "Turtle"];
reptiles.push('Dinosaur');

// 2- add an the value 'Goldfish' to the start of the array using the correct array method
const fish = ["Swordfish", "Clownfish", "Shark"];
fish.unshift('Goldfish');

// 3- remove the first value of `reptiles`

reptiles.shift([0]);

// 4- remove the last value of `fish`

fish.pop([3]);


//Practice


//Check out the following examples and solve the question
// write a function `reverseWords` that accepts a string argument and returns the same string if only
// one word was passed in, and if more than one is passed it will return a string of the words in a reverse order

const reverseWords = function(string){
  return string.split(' ').reverse();
};
 reverseWords("Hello"); 
 reverseWords("Hello World");

//Write a function addToLast that accepts two arguments an array, value and returns an array with the value added to the end of the array while using unshift instead of push
// do not use `push` or array assignments, only `unshift`

const addToLast = function (array, value) {
  array.reverse();
  array.unshift(value);
  return array.reverse();
};
addToLast([1, 2, 3], 4); // => [1, 2, 3, 4]
addToLast([10, 6], 1); // => [10, 6, 1]

// write a function `getLength` that accepts an array and returns the
// length of the array without using the array's attribute `length`
const getLength = function (array) {
  // return array.push() - 1;
  return array.push();
};
getLength([1, 2, 3, 4]); // => 4

const getFirstVal = function (array) {
  return array.shift();
};
getFirstVal([1, 2, 3, 4]); // => 1

//Write a function updateOrCreate that accepts three arguments an array, value, index and returns an updated array, check the output for more information on the updated array

const updateOrCreate = function (array, value, index) {
  array[index] = value;
  return array;
};
  updateOrCreate([10, 20, 30], 50, 1); // => [10, 50, 30]
  updateOrCreate([10, 20, 30], 40, 3); // => [10, 20, 30, 40]
  updateOrCreate([10, 20, 30], 100, 10); // => [10, 20, 30, empty * 7, 100]

 // Read about slice and indexOf and answer the following

  //  Write a function `sliceArray` that accepts three arguments an ordered numeric `array`, `startVal`, `endVal`
  // and returns an array starting at the `startVal` and ending at `endVal`
  const sliceArray = function (array, startVal, endVal) {
    const startIndex = array.indexOf(startVal);
    let endIndex = array.indexOf(endVal);
    // if startIndex is equal to endIndex then endIndex stays the same otherwise 
    // endIndex gets incremented by 1 (third case)
    endIndex = startIndex === endIndex? endIndex: endIndex + 1;
    return array.slice(startIndex, endIndex);
    
  };
  sliceArray([10, 20, 30, 40, 50, 60], 10, 60); // => [10, 20, 30, 40, 50, 60]
sliceArray([10, 20, 30, 40, 50, 60], 20, 40); // => [20, 30, 40]
sliceArray([10, 20, 30, 40, 50, 60], 20, 20); // => []
sliceArray([10, 20, 30, 40, 50, 60], 50, 20); // => []


//Extra Practice
//Write a function isPalindrome that accepts a string argument and returns whether the string is a palindrome or not.

// a palindrome is when a string is read the same backwards
const isPalindrome = function (string) {
  string = string.split(' ').join('');
  return string === string.split('').reverse().join('');
};

isPalindrome("dad"); // => true
isPalindrome("was it a car or a cat i saw"); // => true
isPalindrome("a santa at nasa"); // => true
isPalindrome("John doe"); // => false
//Write a function randomFruit that accepts an array of fruits and returns a random element from that array.
const fruits1 = ["Apple", "Banana", "Strawberry", "Mango"];
const randomFruit = function (array) {
 array =fruits1;
  const randomIndex = Math.ceil(Math.random() * array.length - 1) ;
  return array[randomIndex];
};

randomFruit(fruits1); // => Apple
randomFruit(fruits1); // => Apple
randomFruit(fruits1); // => Strawberry
randomFruit(fruits1); // => Banana




//Write a function convertToString that accepts an array of strings and returns a string made out of the array values.

const convertToString = function (array) {
  return array.join(' ')
};

convertToString(["Hello", "i", "am", "John", "Doe"]); // => Hello i am John Doe
convertToString(["Hello", "John", "i", "am", "Jane"]); // => Hello John i am Jane

//Write a function search that accepts an array of strings and a string then returns whether the string is inside of the array or not.
const fruits2 = ["Apple", "Banana", "Strawberry", "Mango"];
const search = function (array, string) {
  array = fruits2;
  if(array[array.indexOf(string)])
  {
    return true;
  }
  return false;
};
 search(fruits2, "Apple"); 
 search(fruits2, "Banana"); 
 search(fruits2, "John");