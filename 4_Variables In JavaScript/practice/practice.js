console.log("Variables In JavaScript");
//Pulse Check

//Write the difference between const and let.
// الفرق بين const و let هو أنه عند استخدام const ، فلن يسمح بإعادة تعيين قيمة جديدة إلى المتغير ،
// أثناء استخدام let يسمح بإعادة تعيين القيم للمتغير نفسه


//Define the following variables.
//حدد المتغيرات التالية

// 1- define a variable `color` containing your favorite  color
const color = 'blue';

// 2- define a variable `positiveNumber`containing any positive number
const positiveNumber = 75;

// 3- define a variable `isLoggedIn` containing a boolean value
const isLoggedIn = true;

// 4- define a variable `PhoneNumber` containing your phone number
const PhoneNumber = '07871';

//Reassign the value of the following variables.
//أعد تعيين قيمة المتغيرات التالية

// 1- reassign the value to `Toyota`
let myCar = 'Nissan';
myCar = 'Toyota';

// 2- reassign the value to a negative number
let negativeNumber = 102;
negativeNumber = -1;

// 3- reassign the value to your name
let name;
name = 'osama';

// 4- reassign  the value of `a` to make the following expression equal to nine
let a;
let b = 3;
let c = 10;
a = 29;
c - b * c + a;

//Create the following expressions.

// 1- create an expression to calculate the average grade for a class by using the following variables
const totalClassGrades = 877;
const numberOfStudents = 10;
const avgGrade = totalClassGrades / numberOfStudents;

// 2- create an expression that represents a full name by using the following variables
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;

// 3- create an expression to calculate your age in seconds using the following variables
const daysInYear = 365;
const HoursPerDay = 24;
const myAgeInSecond = daysInYear * HoursPerDay * 60 * 60 * 25;

 //Practice

 //Figure out the syntax errors in the following variable declarations, and fix them.
//اكتشف الأخطاء النحوية في تعريفات المتغيرات التالية ، وأصلحها
 
let name1 = 'John';
// =>cant use @ in the start of variable name
let age = '10';
// => can't use a string as a variable name 
let cons = "Constant";
// => cant use const as a name of a variable cause it is a reserved word
let variable  = true;
// => cant have a space int he name of the variable
let tru = true
// => cant use true as a name of a variable cause it is a reserved word

//Explain how the following variable declarations work.
//شرح كيفية عمل التصريحات المتغيرة التالية
 
let aa;
let bb;
let cc;
aa = bb = cc = 20; // => a=20 b=20 c=20
aa = bb = cc = 20 + 10; // => a=30 b=30 c=30
(aa = bb = cc = 20) + 10; // => a=20 b=20 c=20
const var3 = 10;
const ourFunction = function () {
  let var1 = 10;
  var2 = 10;
};
ourFunction();
var3; // => 10
var2; // => 10 as var
//var1; // => ERROR: is not defined

//Predict the value of the following variables and explain why
 
const d = 10;
//d = 20;
//d; // => 20
let e = 5;
let f = e;
e = 10;
f; // => 5
let h = 1;
let i = 10;
h = i + 4;
h + 20;
i = h + 10;
h; // => 14
i; // => 24

//Write a function addToList that accepts a string argument toDo and returns the current list as a string, every time we invoke the function it should return the old toDo item + the new one
//اكتب دالة تقبل وسيطة سلسلة وترجع القائمة الحالية كسلسلة ، في كل مرة نستدعي فيها الوظيفة يجب أن تعيد العنصر القديم والعنصر الجديد
let list =''
const addToList = function (toDo) {

  if(list === " "){
    list = list + toDo
  }  else{
    list = list + " " +toDo
  }
  return list
};
  addToList("Eat"); // => 'Eat'
addToList("Play"); // => 'Eat Play'
addToList("Sleep"); // => 'Eat Play Sleep'
addToList("repeat"); // => 'Eat Play Sleep repeat'

//Write two functions deposit and withdraw that accepts a number argument amount and returns the current account balance
// اكتب وظيفتين إيداع وسحب يقبلان مبلغ وسيطة رقم ويعيد رصيد الحساب الجاري
let result = 0;
const deposit = function (amount) {
  result = result + amount;
  return result;
};

const withdraw = function (amount) {
  result = result - amount;
  return result;
};
deposit(100); // => 100
deposit(50); // => 150
withdraw(70); // => 80
deposit(50); // => 130
withdraw(100); // => 30


//Extra Practice

//Write a function minMax that accepts a number argument number and returns a string representing the maximum number and the minimum number, read the comments for more informa
//اكتب دالة تقبل رقم وسيطة رقمية وتعيد سلسلة تمثل العدد الأقصى والحد الأدنى للعدد ، اقرأ التعليقات لمزيد من المعلومات.
let min = Number.POSITIVE_INFINITY;
let max = Number.NEGATIVE_INFINITY;
const minMax = function (number) {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
  return 'the maximum number is: ' + max + ' and the minimum number is: ' + min;
};
minMax(5); // => the maximum number is: 5 and the minimum number is 5
minMax(2); // => the maximum number is: 5 and the minimum number is 2
minMax(3); // => the maximum number is: 5 and the minimum number is 2
minMax(7); // => the maximum number is: 7 and the minimum number is 2
minMax(0); // => the maximum number is: 7 and the minimum number is 0

//HINT search for NEGATIVE_INFINITY and POSITIVE_INFINITY on MDN

//Predict the correct value of the variables.

const a = 10;
let b = 1
const functionOne = function () {
  b = 20;
  let c = 5
  const functionTwo = function () {
    let d = 5
    c = 8
    b = a + b + c + d
  };
  functionTwo()
};
const functionThree = function () {
  a = 20
}

functionOne();
functionThree();

//a; 10// ?
//b; 43// ?
//c; error// ?
//d; error// ?





