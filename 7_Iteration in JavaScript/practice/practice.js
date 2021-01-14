console.log("Iteration in JavaScript")
//Pulse Check
//What are the three main parts of loops?

//1.	a starting point
//2.	 a step
//3.	 a run conditions


//Create a while loop with the starting value of 0 and end value of 5 and console log all numbers in between including the start and end.
let i=0;
while(i<=5)
{
console.log(i);

i++;
}
//Create a for loop with the starting value of 10 and end value of 20 and console log all numbers in between including the start and end.
for(let i=10;i<=20;i++)
{
console.log(i);
}
//Create a for in loop that works on the following object and console log both the key and value.
const objectt = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};
for (key in objectt) {
  console.log(key, objectt[key]);
}

//Practice
//Write a function sum that accepts an array of numbers and returns the sum of the numbers.
//اكتب مجموع دالة يقبل مصفوفة من الأرقام ويعيد مجموع الأرقام
const sum = function (numbers) {
  let result =0
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i] 
    
  }
  return result
};
sum([1, 2, 3, 4, 5, 6]); 
//Write a function onlyOddNumbers that accepts an array of numbers and returns a new array with only the odd numbers.
//اكتب وظيفة فقط الأرقام الفردية التي تقبل مصفوفة من الأرقام وتعيد مصفوفة جديدة بالأرقام الفردية فقط.

const filter = function (numbers) {
  let odd = []
  for (let i =0; i < numbers.length; i++){
    if (numbers[i] % 2 !== 0){
      odd.push(numbers[i])
    }
  }
  return odd;
};

filter([0, 1, 2, 3, 4, 5, 6]); // => [1, 3, 5]


//Write a function maximumNumber that accepts an array of numbers and returns the max number in the array.
//اكتب عددًا أقصى للدالة يقبل مصفوفة من الأرقام ويعيد العدد الأقصى في المصفوفة.

const maximumNumber = function (numbers) {
  let max =-Infinity
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > max)
    {
      max = numbers[i]
    }
    
  }
  return max
};

maximumNumber([0, 5, 2, 10, 8, 6]); // => 10

//Write a function totalBill that accepts an object representing separate bills and returns the sum of all bills.

// Make sure to loop over the bills object
const bills = {
  waterBill: 25,
  electricityBill: 50,
  hospitalBill: 1000,
};

const totalBill = function (billsObject) {
 let sum = 0
  for( let key in billsObject){
    sum += billsObject[key]
  }
  return sum
};
totalBill(bills); // => 1075

//Write a function validateMessage that accepts an object representing a message and return the object if it is valid and after removing any extra keys, the message will consist of three keys username, message, date with all of their values as strings return the object only if all three keys are strings, if the number of keys is more than three then delete the extra keys, if the message doesn't have the right data type then return invalid message
//اكتب رسالة تحقق من صحة الوظيفة تقبل كائنًا يمثل رسالة وتعيد الكائن إذا كان صالحًا وبعد إزالة أي مفاتيح إضافية ، ستتكون الرسالة من ثلاثة مفاتيح اسم المستخدم والرسالة والتاريخ مع جميع قيمها حيث تقوم السلاسل بإرجاع الكائن فقط إذا كانت جميع المفاتيح الثلاثة عبارة عن سلاسل ، وإذا كان عدد المفاتيح أكثر من ثلاثة ، فاحذف المفاتيح الإضافية ، وإذا كانت الرسالة لا تحتوي على نوع البيانات الصحيح ، فقم بإرجاع رسالة غير صالحة

const messageOne = {
  username: "John",
  message: "Hello",
  date: "01/01/2020",
  someKey: "someValue",
};

const messageTwo = {
  username: 10,
  message: "Hello",
  date: "01/01/2020",
};


const validateMessage = function (message) {
  for(let key in message)
  {
    if( key !== "username" &&  key !== "message" && key !== "date"){
      delete message[key]
    }
    else{ 
    if(typeof message[key] !== "string"){
          return "invalid message"
    }
  }
  return message
};
}
validateMessage(messageOne); // => {username: "John", message: "Hello", date:"01/01/2020"}
validateMessage(messageTwo); // => invalid message
validateMessage(messageOne); // => {username: "John", message: "Hello", date:"01/01/2020"}
validateMessage(messageTwo); // => invalid message

//Extra Practice
//Write a function onlyEven that accepts an array of numbers and returns the same array with only the even numbers.
  // make sure to use the same array
  const onlyEven = function (numbers) {
    for (let i =0; i < numbers.length; i++){
      if (numbers[i] % 2 !== 0){
        numbers.splice(i, 1)
      }
    }
    return numbers
  };
  

onlyEven([0, 1, 2, 3, 4, 5, 6]) // =>[0, 2, 4, 6]
onlyEven([1, 9, 2, 3, 4]) // => [2, 4]

//Write a function sort that accepts an unordered array of numbers and returns the same array in a descending order.
 // make sure to use the same array
 const sort = function (numbers) {
  for (let i = 0; i < numbers.length; i++){
    for (let j = i + 1; j < numbers.length; j++){
       if (numbers[i] < numbers[j] ){
         const temp = numbers[i]
         numbers[i] = numbers[j]
         numbers[j] = temp
       }
    }
  }
  return numbers
};
sort([0, 1, 2, 3, 4, 5, 6]); // => [6, 5, 4, 3, 2, 1, 0]
sort([3, 6, 2, 0, 4, 1, 5]); // => [6, 5, 4, 3, 2, 1, 0]

//Write a function convertToArray that accepts an object with numerical keys and returns an array containing the values with the corresponding index.

  const convertToArray = function (object) {
    const array = []
    for (let key in object){
      array[key] = object[key]
    }
    return array
  };
  
  convertToArray({ 0: "one", 1: "two", 2: "three" }); // => ["one", "two", "three"]
convertToArray({ 0: "one", 1: "two", 2: "three" }); // => ["one", "two", "three"]

//Write a function compare that accepts an array and an object and returns true if all the array values are present as object values.

  const compare = function (array, object) {
    const obj= {}
  
    for (let key in object){
      obj[object[key]] = 1
    }
    for (let i = 0; i < array.length; i++){
      if (!obj[array[i]]){
        return false
      }
    }
    return true
  };
  
  compare(["one", "two", "three"], { 0: "one", 1: "two", 2: "three" }); // => true
  compare(["one", "two", "four"], { 0: "one", 1: "two", 2: "three" }); // => false
  compare(["one", "two"], { "foo": "one", "bar": "two", "baz": "three" }); // => true
  compare(["one", "two", "three"], { "foo": "one", "bar": "two" }); // => false

//Write a function deleteKeys that accepts an array and an object and returns the same object after removing all key-value pairs depending on the values in the array, the array will contain the key names that must be removed from the object.
  const deleteKeys = function (array, object) {
    for (let i = 0; i < array.length; i++){
      if (object[array[i]]){
        delete object[array[i]]
      }     
}
return object
  };
  
  deleteKeys(["one", "two"], { "one": "one", "two": "two", "three": "three" }); // => { three: "three" }
  deleteKeys(["four", "five", "one"], { 0: "one", 1: "two", 2: "three" }); // => { two: "two", three: "three" }

  const sumArguments = function () {
   let sum =0
   for (let index = 0; index < arguments.length; index++) {
     sum += arguments[index]
     
   } 
   return sum
  };
  sumArguments(1, 2); // => 3
  sumArguments(1, 2, 3, 4); // => 10
  sumArguments(4, 5, 6, 7, 8); // => 30
  sumArguments(1); // => 1
  sumArguments(); // => 0