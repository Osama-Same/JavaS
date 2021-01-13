//Practice
//اكتشف الأخطاء النحوية في الوظائف التالية وأصلحها
const myFunction = function parameter() {}

const my_Second_Function = function (parameter) {}

const functionSum = function (parameter) {}


const functionName = function (paramOne, paramTwo) {}


//اكتب دالة  تقبل وسيطات السلسلة ، الاسم الأول والاسم الأخير ، ثم تقوم بإرجاع سلسلة تحتوي على اسمك الكامل معًا
const fullName = function (firstName, lastName) {
  return firstName + ' ' + lastName;
};
fullName("John", "Doe"); // => "John Doe"
fullName("Mark", "Smith"); // => "Mark Smith"

//اكتب متوسط الدالة الذي يقبل وسيطتين عدديتين و إرجاع متوسط هذه الأرقام
const average = function (a, b){
return (a+b)/2;
};
average(20, 25); // => 22.5
average(15, 7); // => 11

 //استخدام الدالات المعرفة أدناه ووظيفتي للتخمين ناتج التعبيرات التالية
 const cube = function (number) {
  return number * number * number;
};
const square = function (number) {
  return number * number;
};



cube(25) + 20; //(25 *25 *25) +20 => 15645
square(5) + cube(2); // (5*5) + (2*2*2) // => 33
square(10 / 5) + cube(2 + 1);//(10 / 5) + (2 + 1) // => 31
average(square(average(6, 2)), cube(4)); // => 40 


//اكتب دالة تقبل وسيطتين عدديتين، الأساس والأس وتُرجع الأساس إلى قوة الأس..
const toThePowerOf = function (base, exponent) {
return Math.pow(base,exponent); 
};
toThePowerOf(2, 3); // => 8
toThePowerOf(4, 2); // => 16

//HINT: Look up Math.pow() on MDN

//Extra Practice
//اكتب دالة تقبل وسيطة رقم واحدة، ثم قم بإرجاع الرقم كعدد صحيح.
const floor = function (number) {
  return Math.floor(number);
};
floor(5); // => 5
floor(2.4); // => 2
floor(0.2); // => 0
floor(1.7); // => 1 

//HINT: Look up Math on MDN and find the correct built in method to use.

//اكتب دالة حساب الربح تقبل ثلاث وسيطات وتُرجع الربح الصافي.
// الوحدة المبيعة، تكلفة الوحدة، سعر الوحدة
const calculateProfit = function (unitsSold, unitCost, unitPrice) {
  return unitsSold * (unitPrice - unitCost);
};
calculateProfit(10, 5, 15); // => 100
calculateProfit(4, 2, 5); // => 12 


//كتابة دالة حساب إجمالي مبلغ الفاتورة الذي يقبل إجمالي ثلاث وسيطات الإجمالي، والنسبة المئوية للضريبة، والإعفاءات وإرجاع الإجمالي بعد إضافة الضريبة والقلب.
const calculateTotalBillAmount = function (total, taxPercentage, tip) {
  return total * (1 + taxPercentage) + tip;
}; 
calculateTotalBillAmount(10, 0.16, 0); // => 11.6
calculateTotalBillAmount(40, 0.16, 2); // => 48.4


//Write a function ageInDays that accepts a number argument ageInYears and returns the age in days (ignore leap years).
//اكتب سن الدالة بالأيام التي تقبل سن وسيطة رقم بالسنوات وتقوم بإرجاع العمر بالأيام (تجاهل سنوات القفزة).
const ageInDays = function (ageInYears) {
  return ageInYears * 365;
};  
ageInDays(10); // => 3650
ageInDays(19); // => 6935

  //Write two functions calculateConeVolume and calculateConeSurfaceArea that accepts two number arguments height and radius and returns the volume and surface area for a Right Circular Cone
  //اكتبْ دوالتين حاسبة "وحدة التخزين" واحتسب "وحدة اتصال" التي تقبل اثنين وسيطات الأرقام الارتفاع ونصف القطر وإرجاع الحجم و منطقة سطح مخروط دائري أيمن
  const calculateConeSurfaceArea = function (height, radius) {
    return Math.PI * radius * (radius + (height * 2 + radius * 2) ** 0.5);
  };
  calculateConeVolume(10, 6); // => ≈ 376 || 376.99 || 376.9911184307752
  calculateConeSurfaceArea(10, 6); // => ≈ 332 || 332.91 ||332.91904316461034
  