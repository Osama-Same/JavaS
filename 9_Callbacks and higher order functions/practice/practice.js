console.log("Callbacks and higher order functions");

//Pulse Check

//What are callbacks?
//	Function التى يتم التمرير كوسيطة لوظيفة اخرى تسمى callback function
//	يتم استدعاءها في    parameterداخل ومن ثم داخل function
//function   ترجع function   ثاني

//What Is A Higher Order Function?
//	دالة الترتيب الأعلى هي وظيفة يمكن أن تأخذ وظيفة أخرى كوسيطة.

//Write a function that accepts two arguments number and callback and using the callback return the number squared.
const exampleFunction = function (x, y, callback) {
  return callback(x, y);
};
exampleFunction(10, 20, function (x, y) {
  return x * y;
});

//Write a function that accepts two arguments string and callback and using the callback return an array of all characters.

const exampleFunction1 = function (string1, string2, callback) {
  return callback(string1, string2);
};
exampleFunction("osama", "sssa", function (string1, string2) {
  return string1 + string2;
});
//Using forEach iterate over the following array and console log all the indexes
const nums_1 = [44, 71, 3];
const nums_2 = [-1, 0, 9];
nums_1.forEach(function (element, index) {
  //console.log(element);
});
nums_2.forEach(function (element, index) {
  //console.log(element);
});

//Practice
//Write a function countWords that accepts a string and returns an object that has all unique words as keys and the number of times the word was found in the string as a value.
// اكتب دالة عدد الكلمات التي تقبل سلسلة وتعيد كائنًا يحتوي على جميع الكلمات الفريدة كمفاتيح وعدد مرات العثور على الكلمة في السلسلة كقيمة.

const countWords = function (string) {
  result = {};
  let char = string.split(" ");
  char.forEach(function (char) {
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++;
    }
  });
  return result;
};
countWords("hello hello world"); // => { "hello": 2, "world": 1 }
countWords("hello"); // => { "hello": 1 }
countWords(""); // => {}

//Write a function averageGrade that accepts an array of student grades as values and returns the average grade and if the array is empty return "Please enter at least one grade".
//اكتب دالة متوسط الدرجة التي تقبل مصفوفة من تقديرات الطلاب كقيم وتعيد التقدير المتوسط وإذا كانت المصفوفة فارغة يتم إرجاع "الرجاء إدخال تقدير واحد على الأقل".

const averageGrade = function (grades) {
  if (grades.length === 0) {
    return "Please enter at least one grade";
  }
  return (
    grades.reduce(function (totle, element) {
      return totle + element;
    }) / grades.length
  );
};

averageGrade([100, 80, 95, 67, 74]); // => 83.2
averageGrade([100, 90, 80, 70]); // => 85
averageGrade([100, 90, 80, 70]); // => 85
averageGrade([]); // => "Please enter at least one grade"

//Write a function evenLengthOddIndex that accepts an array of strings and returns a new array of only the even length words that are in an odd index.
//اكتب دالة حتى طول الفهرس الفردي الذي يقبل مصفوفة من السلاسل ويعيد مصفوفة جديدة من الكلمات ذات الطول الزوجي فقط الموجودة في فهرس فردي.
const evenLengthOddIndex = function (strings) {
  return strings.filter(function(e,i){
    return !(e.length % 2) && i % 2
  })
};
evenLengthOddIndex(["word", "care", "car", "food", "cast", "cat"]); // => ["care", "food"]
evenLengthOddIndex(["word", "care", "food", "car", "cast", "cat"]); // => ["care"].
evenLengthOddIndex(["word", "cat", "food"]); // => []


//Write a function incrementByIndex that accepts and array of nested arrays that hold numbers as values and returns an array were each element of the nested arrays is incremented by the index of that nested array.
//اكتب فهرس زيادة دالة يقبل مصفوفة من المصفوفات المتداخلة التي تحمل أرقامًا كقيم وتعيد مصفوفة ، حيث يتم زيادة كل عنصر من عناصر المصفوفات المتداخلة بواسطة فهرس تلك المصفوفة المتداخلة.

const incrementByIndex = function (array) {
  return array.map(function (element, index) {
    return element.map(function (number) {
      return number + index;
    });
  });
};
// the first nested array's values were incremented by 0 since it is the first index, second nested array was incremented by 1 and last one by 2
incrementByIndex([
  [1, 2, 3],
  [2, 7, 9],
  [10, 3, 44],
]);
incrementByIndex([
  [1, 2, 3],
  [3, 8, 10],
  [12, 5, 46],
]);//[[1, 2, 3], [3, 8, 10], [12, 5, 46]]

//Write a function orderByType that accepts an array of mixed type values and returns a new array with the same values but ordered by type, meaning all the strings first then all numbers then all booleans.

// Make sure to use the correct higher order function
const orderByType = function (array) {
  const string = array.filter(function (st) {
    return typeof st === "string";
  });
  const number = array.filter(function (num) {
    return typeof num === "number";
  });
  const boolean = array.filter(function (bool) {
    return typeof bool === "boolean";
  });
  return string.concat(number).concat(boolean);
};
orderByType([1, true, 10, "hello", "world", false, 90, "cat"]); // => [hello, world, cat, 1, 10, 90, true, false]

//Extra Practice
//Write a function loop that accepts two arguments an array and a callback function, the function loop should enable us to access all the values in the array and gives us the ability to modify the elements by using the callback function (Just like forEach).
// DO NOT USE ANY ARRAY METHODS (forEach, reduce, map, filter)
const loop = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};
loop([1, 2, 3], function (number) {
  console.log(number);
});
// 1
// 2
// 3

//By using the function loop, write a function filter that accepts two arguments array and callback and iterates over array and return a new array of all the items that passed the filter condition that was returned by the callback function (Just like filter).
// DO NOT USE ANY ARRAY METHODS (forEach, reduce, map, filter)
const filter = function (array, callback) {
  const newArray = [];
  loop(array, function (element) {
    if (callback(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

filter([1, 2, 3], function (number) {
  return number > 1;
}); // => [2, 3]

//By using the function loop, write a function map that accepts two arguments array and callback and iterates over items and return a new array after modifying all the elements by using the callback function (Just like map).

// DO NOT USE ANY ARRAY METHODS (forEach, reduce, map, filter)
const map = function (array, callback) {
  const newArray = [];
  loop(array, function (element) {
    newArray.push(callback(element));
  });
  return newArray;
};

map([1, 2, 3], function (number) {
  return number * 10;
}); // => [10, 20, 30]

//By using the function loop, write a function reduce that iterates over items and returns an accumulated value depending on what is returned in the callback function (Just like reduce).

// DO NOT USE ANY ARRAY METHODS (forEach, reduce, map, filter)
const reduce = function (array, callback) {
  let accumulator = array.shift();
  loop(array, function (element) {
    accumulator = callback(accumulator, element);
  });
  return accumulator;
};

reduce([1, 2, 3], function (accumulator, number) {
  return accumulator + number;
}); // 1 + 2 + 3 => 6

//Modify the loop, filter, map, reduce to work with objects, if the input is an object then iterate over it and return an object instead of an array.

const modifiedLoop = function (items, callback) {
  if (Array.isArray(items)) {
    for (let i = 0; i < items.length; i++) {
      callback(items[i], i);
    }
  } else {
    for (const key in items) {
      callback(items[key], key);
    }
  }
};

// modifiedLoop({ a: 1, b: 2, c: 3 }, function (number) {
//   console.log(number);
// });

const modifiedFilter = function (items, callback) {
  let result;
  if (Array.isArray(items)) {
    result = [];
    modifiedLoop(items, function (element, key) {
      if (callback(element)) {
        result.push(element);
      }
    });
  } else {
    result = {};
    modifiedLoop(items, function (element, key) {
      if (callback(element)) {
        result[key] = element;
      }
    });
  }
  return result;
};
