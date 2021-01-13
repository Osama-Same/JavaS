console.log("Objects in JavaScript");
//Pulse Check
//Define the following objects.
//حدد العناصر التالية
// 1- define an object `person` containing three attributes `name`, `age`, `gender`
const person = { name: "jjjj", age: 44, gender: "male" };
// 2- define an object `movie`containing three attributes `name`, `length`, `genre`

const movie = {
  name: "ali",
  Length: 44,
  genre: "rerf",
};
// 3- define an object `favoriteFood` containing an array of your favorite foods

const favoriteFood = {
  food_1: "dfd",
  food_2: "wwww",
  food_3: "ffff",
};

// 4- define an object `store` containing two attributes, `name`, `address`, address is an object
// with two attributes `buildingNumber`, `street`

const store = {
  A: {
    name: "Ali",
    address: "carnivore",
  },
  addres: {
    buildingNumber: 15,
    street: "ddkj",
  },
};
store.addres.buildingNumber;

//Access the following values.
// 1- access the value of the key `Mars` in the following objects:
// a- using dot notation
const orderedSolarSystem = {
  Mercery: "first",
  Venus: "second",
  Earth: "third",
  Mars: "fourth",
};
orderedSolarSystem.Earth;
// b- using bracket notation
const unorderedSolarSystem = {
  Mars: "fourth",
  Earth: "third",
  Mercery: "first",
  Venus: "second",
};
unorderedSolarSystem["Mercery"];

// 2- access the value of key `koala` in the following object:
const animalDiet = {
  mammals: {
    cat: "carnivore",
    dog: "carnivore",
    koala: "herbivore",
  },
  fish: {
    shark: "carnivore",
  },
};
animalDiet.mammals.koala;

//Assign the following values to the corresponding object.

// - add the math grade (80) to the student using dot notation
// - change the english grade to an 90 using dot notation
// - add an attribute average with the score of all three grades using dot notation
const studentOne = {
  englishGrade: 80,
  scienceGrade: 90,
  MathsGrade: 80,
};
studentOne.MathsGrade;
studentOne.englishGrade = 90;
(studentOne.MathsGrade + studentOne.englishGrade + studentOne.scienceGrade) / 3;

// - add the math grade (80) to the student using bracket notation
// - change the english grade to an 90 using bracket notation
// - add an attribute average with the score of all three grades using bracket notation
const studentTwo = {
  englishGrade: 80,
  scienceGrade: 90,
  mathGrade: 80,
};
studentTwo.scienceGrade;
studentTwo.englishGrade = 90;
(studentTwo["scienceGrade"] +
  studentTwo["englishGrade"] +
  studentTwo["mathGrade"]) /
  3;

// assign the following variables as a key-value pair to the object, make sure to
//use the name of the variables

const objectKey = "key";
const ObjectValue = "value";

const object = { objectKey, ObjectValue };
object.objectKey.first;

//Practice
//Figure out the syntax errors in the following, and fix them.
//اكتشف الأخطاء النحوية في ما يلي ، وأصلحها.

const person_1 = { name: "john", age: 20 };
// curly brackets instead of square ones
// missing quotes

const car = { brand: "Toyota", model: 2020 };
// missing a colon after brand

const employee = { name: "Jane", position: "developer" };
// missing quotes
//Check the following objects and solve the requirements.
//تحقق من العناصر التالية وحل المتطلبات.

// - access the age property
// - modify the person's age to be 23 years old
// - add a property called `work` with the value of an object with two keys position and salary

const $person = {
  fullname: {
    firstName: "John",
    lastName: "Doe",
    age: 24,
  },
  work: {
    position: "hnv",
    salary: 300,
  },
};

$person.age;
$person.age = 23;
$person.work;

// - access the first name property of both employees
// - add an employee object with your name and the position of full-stack developer
const employees_1 = [
  {
    id: 1,
    name: {
      first: "John",
      last: "Doe",
    },
    position: "Designer",
  },
  {
    id: 2,
    name: {
      first: "Jane",
      last: "Doe",
    },
    position: "Engineer",
  },
];
employees_1[0];
employees_1[0].position = "fullstackdeveloper";

// - access the first name property of both employees
// - add an employee object with your name and the position of full-stack developer
const employees_2 = [
  {
    id: 1,
    name: {
      first: "John",
      last: "Doe",
    },
    position: "Designer",
  },
  {
    id: 2,
    name: {
      first: "Jane",
      last: "Doe",
    },
    position: "Engineer",
  },
  {
    id: 3,
    name: {
      first: "Alex",
      last: "Smith",
    },
    position: "Full-stack Developer",
  },
];

employees_2[0].name.first;
employees_2[1].name.first;

// - access the model value of both cars
// - change the prius model from 2019 to 2020
// - add a new car of your choice
// - add a property `isAutomatic` for all three cars
const cars = {
  toyota: {
    name: "prius",
    model: 2019,
    isAutomatic: true,
  },
  nissan: {
    name: "leaf",
    model: 2020,
    isAutomatic: true,
  },
  bmw: {
    name: "i8",
    model: 2020,
    isAutomatic: true,
  },
};

cars.toyota.model;
cars.nissan.model;
cars.toyota.model = 2020;

//Write a factory function createCar that accepts three string arguments brand, name, color and returns an object representing the car.
//اكتب وظيفة المصنع إنشاء السيارة التي تقبل ثلاث سلاسل من العلامات التجارية والاسم واللون وإرجاع كائن يمثل السيارة.
const createCar = function (brand, name, color) {
  return { brand: brand, name: name, color: color };
};
createCar("Toyota", "Prius", "Black"); // => {brand: "Toyota", name: "Prius", color: "Black"}

//Write a function getFullName that accepts an object representing a person and returns that person's full name in a string.
//اكتب وظيفة الحصول على الاسم الكامل الذي يقبل كائنًا يمثل شخصًا ويعيد الاسم الكامل لهذا الشخص في سلسلة.
const getFullName = function (person) {
  return person.first + " " + person.middle + " " + person.last;
};

getFullName({ first: "Elon", middle: "Reeve ", last: "Musk" }); // => "Elon Reeve Musk"
getFullName({ first: "John", middle: "Mark ", last: "Doe" }); // => "John Mark Doe"

//Write a function olderThan that accepts two objects personOne, personTwo and returns a string that represent who is older than the other.
//اكتب دالة أقدم من تلك التي تقبل كائنين شخص واحد ، شخص اثنان وتعيد سلسلة تمثل من هو أقدم من الآخر.

const olderThan = function (personOne, personTwo) {
  if (personOne.age > personTwo.age) {
    return personOne.name + " is older than " + personTwo.name;
  } else if (personOne.age < personTwo.age) {
    return personTwo.name + " is older than " + personOne.name;
  } else {
    return personTwo.name + " is as old as " + personOne.name;
  }
};

olderThan({ name: "John", age: 23 }, { name: "Jane", age: 26 }); // => "Jane is older than John"
olderThan({ name: "Mark", age: 30 }, { name: "Smith", age: 25 }); // => "Mark is older than Smith"
olderThan({ name: "Marry", age: 20 }, { name: "Sarah", age: 20 }); // => "Marry is as old as Sarah"

//Extra Practice

//Check the following object and solve the requirements.

// - access the value of Sarah's children and the value of Samuel's children
// - add a child for Samuel named Sam that has two children Marry and Gwen
// - delete the children property from the people who don't have children
// HINT: read about the delete operator
const family = {
  name: "John",
  children: [
    {
      name: "Bill",
      children: [
        {
          name: "Mark",
          children: [],
        },
        {
          name: "Sarah",
          children: [
            {
              name: "Smith",
              children: [],
            },
            {
              name: "Stan",
              children: [],
            },
          ],
        },
        {
          name: "Samuel",
          children: [],
        },
      ],
    },
    {
      name: "Jane",
      children: [],
    },
  ],
};
family.children[0].children[1].children;
family.children[0].children[2].children;
family.children[0].children[2].children.push(
  {
    name: "Marry",
    children: [],
  },
  {
    name: "Gwen",
    children: [],
  }
);

//Write a factory function createIceCream that accepts Three arguments coneType, iceCreamFlavour, topping and returns and object representing the ice-cream.
//اكتب وظيفة المصنع لإنشاء الآيس كريم الذي يقبل مخروط ثلاث حجج ، ونكهة الآيس كريم ، وتحتل المرتبة الأولى والمرتجعات وكائن يمثل الآيس كريم.
const createIceCream = function (coneType, iceCreamFlavour, topping) {
  topping = "none";
  return {
    coneType: coneType,
    iceCreamFlavour: iceCreamFlavour,
    topping: topping,
  };
};
createIceCream("wafer cone", "chocolate"); // => {coneType: "wafer cone" iceCreamFlavour: "chocolate", topping: none}
createIceCream("waffle cone", "vanilla", "chocolate syrup"); // => {coneType: "waffle cone", iceCreamFlavour: "vanilla", topping: "chocolate syrup"}
createIceCream("sugar cone", "strawberry", "cherry"); // => {coneType: "sugar cone", iceCreamFlavour: "strawberry", topping: "cherry"}

//Explain the following.

const employeeOne = {
  id: 0,
  name: "John",
  position: "",
};

const employeeTwo = {
  id: 1,
  name: "Jane",
  position: "Developer",
};

// try the following and explain the results
// 1
if (employeeOne.id) {
  console.log(employeeOne.name);
  // المعرف يساوي 0 ، لذا سيفشل الشرط لأنه قيمة خاطئة
}
// 2
if (employeeTwo.id) {
  console.log(employeeOne.name);
}
//المعرف يساوي 1 ، لذلك سوف يمر الشرط وسيتم تسجيل الاسم لأن الرقم 1 هو قيمة حقيقية
//3
if (employeeOne.title) {
  console.log(employeeOne.name);
}
// قيمة الموضع عبارة عن سلسلة فارغة وهي قيمة خاطئة لذا سيفشل الشرط
//4
if (employeeTwo.title) {
  console.log(employeeOne.name);
}
// الموضع عبارة عن سلسلة وهي قيمة صادقة لذلك سيتم تسجيل الاسم
//5
if (employeeOne.salary) {
  console.log(employeeOne.name);
}
// الراتب ليس سمة للموظف واحد ، لذا فإن قيمته ستكون غير محددة وهي قيمة خاطئة لذا فإن الشرط سيفشل

//Write a function isValidUser that accepts an object representing login information and returns true if the User is valid otherwise return false, read the comments for more information.
// things to validate:
// 1- length of the email is greater than or equal 6
// 2- length of the password is greater than or equal 8
// 3- email contains `@` and `.com`
// 4- the user must be in the users object
// 5- both of the passwords match
// 6- when you compare information make sure to reference the users object and access the value form there
const users = {
  mrpotato: {
    email: "mr.potato@gmail.com",
    password: "LonelyPotato",
  },
  thewiseman: {
    email: "wiseMan9999@gmail.com",
    password: "12345678",
  },
};

const isValidUser = function (loginInfo) {
  const email = loginInfo.email;
  const password = loginInfo.password;
  const username = loginInfo.username.toLowerCase();
  if (email.length >= 6 && password.length >= 8) {
    if (email.includes("@") && email.includes(".com")) {
      if (
        email === users[username].email &&
        password === users[username].password
      ) {
        return true;
      }
    }
  }
  return false;
};

isValidUser({
  username: "MrPotato",
  email: "mr.potato@gmail.com",
  password: "LonelyPotato",
}); // => true

isValidUser({
  username: "MrPotato",
  email: "mr.potato@gmail.com",
  password: "Lonely",
}); // => false

isValidUser({
  username: "MrPotato",
  email: "mr.potato.gmail.com",
  password: "LonelyPotato",
}); // => false

//Write a function isPropertyOf that accepts a string and an object and return true if the string is a property of the object and return false if it isn't.
// كتابة دالة هي خاصية من التي تقبل سلسلة وكائن وإرجاع صحيح إذا كانت السلسلة خاصية للكائن وإرجاع خطأ إذا لم تكن كذلك.
const isPropertyOf = function (string, object) {
  if (object[string]) {
    return true;
  }
  return false;
  
};
isPropertyOf("hello", { hello: "world" }); // => true
isPropertyOf("world", { hello: "world" }); // => false
