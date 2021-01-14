console.log("Recursion In JavaScript");
//Pulse Check
//What is recursion used for?

//=> Recursion is the process in which a function invokes itself

//Why do we add a stopping condition?

//=> it must have a condition to stop invoking the function also it must have an action that leads towards that stop condition.

//How do we reach the stopping condition?

//=> a stop condition to enable the function to stop invoking it self

//What are the main parts of recursion?

//=> a stop condition

//Modify the countDown function to return a string of each number separated by - till it reaches 0
const countDown = function (number) {
  //console.log(number)
  if (number <= 0) {
    return 0;
  }
  return (number = countDown(number - 1));
};

countDown(10); // => "10-9-8-7-6-5-4-3-2-1-0"
countDown(3); // => "3-2-1-0"

//Practice
//Write a function sumCubes that accepts an array and returns the sum of the cubed numbers.
// اكتب دالة مجموع المكعبات التي تقبل مصفوفة وتعيد مجموع الأرقام المكعبة.

const sumCubes = function (number) {
  if (number.length === 0) {
    return 0;
  }
  return number[0] ** 3 + sumCubes(number.slice(1));
};

sumCubes([1, 2]); // 9
sumCubes([1, 2, 3]); // 36
sumCubes([5, 3, 3]); // => 179
sumCubes([]); // => 0

// Write a function factorial that accepts a number and returns the factorial of that number.
//اكتب عامل دالة يقبل رقمًا ويعيد مضروب هذا الرقم.

const factorial = function (number) {
  //console.log(number)
  if (!number) {
    return 1;
  }
  return (number *= factorial(number - 1));
};
factorial(5); // 1 * 2 * 3 * 4 * 5 => 120
factorial(3); // 1 * 2 * 3 => 6
factorial(1); // => 1
factorial(0); // => 1

//Write a function getLength that accepts a string, and returns the length of the string.
//اكتب دالة تحصل على الطول يقبل سلسلة ، وتعيد طول السلسلة.

const getLength = function (string) {
  if (string.length === 0) {
    return 0;
  }
  return 1 + getLength(string.slice(1));
};

getLength("hello"); // => 5
getLength("John"); // => 4
getLength(""); // => 0

//Write a function countCharacter that accepts a string, and a character and returns the number of times the character was repeated, using recursion.
//اكتب حرف عدد الوظائف الذي يقبل سلسلة ، وحرفًا ويعيد عدد مرات تكرار الحرف ، باستخدام العودية.

const countCharacter = function (string, character) {
  if (string === "") {
    return 0;
  }
  if (string[0] === character) {
    return 1 + countCharacter(string.slice(1), character);
  }
  return 0 + countCharacter(string.slice(1), character);
};
countCharacter("hello", "l"); // => 2
countCharacter("hello", "e"); // => 1
countCharacter("hello", "z"); // => 0

// Write a function oddOrEven that accepts a number and returns a string The number is even or The number is odd depending on whither the number is odd or even, do not use modulo operator %.
//% اكتب دالة فردية أو زوجية تقبل رقمًا وتعيد سلسلة. الرقم زوجي أو الرقم فردي اعتمادًا على ما إذا كان الرقم فرديًا أو زوجيًا ، لا تستخدم عامل التشغيل

const oddOrEven = function (number) {
  if (number === 0) {
    return "Even";
  }
  if (number === 1) {
    return "Odd";
  }
  return oddOrEven(number - 2);
};
oddOrEven(8); // => The number is even
oddOrEven(1); // => The number is odd

//Extra Practice
//Write a function maximumNumber that accepts an array of numbers and returns the max number in the array.
// * اكتب دالة ضربًا تقبل وسيطة رقمين وتعيد مضاعف كلا الرقمين دون استخدام عامل التشغيل  

const maximumNumber = function (numbers) {
  if( numbers.length === 1){
    return numbers[0]
  }
  if(numbers[0] > numbers[1]){
    numbers.splice(1, 1);
  }else{
    numbers.splice(0, 1);
  }
  return maximumNumber(numbers);
};

maximumNumber([0, 5, 2, 10, 8, 6]); // => 10

//Write a function multiply that accepts two number argument's and returns the multiple of both numbers without using the * operator.
//اكتب دالة ضربًا تقبل وسيطة رقمين وتعيد مضاعف كلا الرقمين دون استخدام عامل التشغيل    
const multiply = function (numberOne, numberTwo) {
  if (numberOne === 0) {
    return 0;
  }
  return numberTwo + multiply(numberOne - 1, numberTwo);
};
multiply(2, 3); // => 6

//Write a function familyTree that accepts an object representing a family tree and returns a string containing all names in the tree from the top to bottom.
//اكتب شجرة عائلة دالة تقبل كائنًا يمثل شجرة عائلة وتعيد سلسلة تحتوي على جميع الأسماء في الشجرة من أعلى إلى أسفل.
const family = {
  name: "John",
  child: {
    name: "Bill",
    child: {
      name: "Mark",
      child: {
        name: "Terry",
        child: null,
      },
    },
  },
};

const familyTree = function (family) {
  if (!family.child) {
    return family.name;
  }
  return family.name + " " + familyTree(family.child);
};


familyTree(family); // => "John Bill Mark"

//Write a function flattenArray that accepts a nested array and returns a one dimensional array.

const flattenArray = function (array) {
  if (array.length === 1 && !Array.isArray(array[0])) {
    return [array[0]];
  }
  if (Array.isArray(array[0])) {
    return flattenArray(array[0]);
  }
  return [array[0]].concat(flattenArray(array.slice(1)));
};

flattenArray([1, 2, 3, [4, 5, [6, 7]]]); // => [1, 2, 3, 4, 5, 6, 7]
flattenArray([[1, 2, [3, 4]]]); // => [1, 2, 3, 4]
