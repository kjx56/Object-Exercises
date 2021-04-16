// Part 1

var Person = {
     
  firstName: "Adekoyejo",
  lastName: "Shote",
  occupation: "Software Developer"
  
}

Person.firstName;
Person.lastName;
Person.occupation;

Person["firstName"];
Person["lastName"];
Person["occupation"];

Person.hobby = "Music";
delete Person.occupation;

Person;

// Dot notation allows for a simple function or variable to be invoked or called, sometimes a variable or function may be held by java itself so bracket notations tells java that the key is located in the function, it also helps for tricky keys that involve numbers or spaces.

var namesAndHobbies = {
  
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"

  
};

for( var firstKey of  Object.keys(namesAndHobbies)) {
   console.log(` ${namesAndHobbies[firstKey]} => ${firstKey} `);
  
};

namesAndHobbies.Koye = "Music";

if("Koye" in namesAndHobbies){
     console.log(` ${namesAndHobbies["Koye"]} => ${"Koye"} `);
  
  
}

// Part2

var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("GO");
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;

for( var i=0; i < programming.languages.length; i++){
     console.log(programming.languages[i]);
  
  
};

for(var keys in programming){
     console.log(keys);
  
}

for( var vals of Object.values(programming)){
     console.log(vals);
  
}

// Part 3


function myName(){
    var fName = "Adekoyejo Shote" ;
    console.log(fName);
  
  
  
}

myName();

var favoriteFoods = ["Pizza", "IceCream"];

function randomFood(){
  
  let res = Math.floor(Math.random() + 0.1);
     
  console.log(favoriteFoods[res]);
  
  
};

randomFood();

var numbers = [1 ,2 ,3 ,4 ,5, 6, 7 ,8 ,9 ,10 ];

function displayOddNumbers(){
     for(var i = 0; i < numbers.length; i+=2){
       
          console.log(numbers[i]);
       
       
     }
  
  
};

displayOddNumbers();

function displayEvenNumbers(){
     for(var i = 0; i < numbers.length; i++){
          i++;
          console.log(numbers[i]);
       
       
     }
  
  
};

displayEvenNumbers()

function returnFirstOddNumber(){
  
     for(var i = 0; i < numbers.length; i+=2){
       
          console.log(numbers[i]);
       break;
       
       
     }
  
}

returnFirstOddNumber();

function returnFirstEvenNumber(){
  
  for(var i = 0; i < numbers.length; i++){
          i++;
          console.log(numbers[i]);
       break;
       
     }
  
}

returnFirstEvenNumber();

function returnFirstHalf(){
    
  for(var i = 0; i < (numbers.length/2); i++){
       
          console.log(numbers[i]);
       
       
     }
  
  
  
}


returnFirstHalf();

function returnSecondHalf(){
    
  for(var i = 5; i < numbers.length; i++){
       
          console.log(numbers[i]);
       
       
     }
  
  
  
}

returnSecondHalf();

//Part 4

var a1 = 2;
var a2 = 2;
var result;
var mainName ="Adekoyejo";
let arr = [1,2,3,4,9,6,7];

function add(a1,a2){
  
  return a1 + a2;
  
}

function subtract(a1,a2){
  
  return a1 - a2;
  
}

function multiply(a1,a2){
  
  return a1 * a2;
  
}

function divide(a1,a2){
  
  return a1 / a2;
  
}

result = add(a1,a2);
result = subtract(a1,a2);
result = multiply(a1,a2);
result = divide(a1,a2);

function sayName(fName){ 
   if(mainName == fName) {
      console.log("Hello Boss");
     
   } else{
      console.log("Hello" + " " + fName);
     
   }

}

sayName("Adekoyejo");
sayName("Jimmy");
sayName("Jane");

let count = 0;
let total = 0;
let res = 0;

function average(){
   for(var i = 0; i < arguments.length; i++){
     if(arr[i] !== undefined){
       
         count++;
         total += arguments[i];
         res = total/count;
        
       
     }
     
     
   }
  console.log(res);
};


average(10,20);

 var firName;
 var lastName;

 var student = {
    firstName: "",
    lastName: "",
    
    
 }
  var arr2 = [""];

 

function createStudents(s1 , s2){
  student.firstName = s1;
  student.lastName = s2;
  var NCopy;
  let n = 0; 
    
    
    
    
    
  
  
  for( var KeyInfoga of Object.keys(student)){
    console.log(KeyInfoga + " " + student[KeyInfoga]);
     Ncopy = s1.slice();
     
    }
    
  return Ncopy;
  
}



var Matt = createStudents("Matt", "Lane");
var Tim = createStudents("Tim", "Garcia");
var Elie = createStudents("Elie","Schoppik");

var students1 = [Matt,Tim,Elie];

students1;
function findStudentByFirstName(s5){
var indexOf = (arr, q) => arr.findIndex(item => q.toLowerCase() === item.toLowerCase());

console.log(indexOf(students1, s5)) 
 var res = indexOf(students1, s5);
  if(res == -1){
    
    console.log("false");
  }
  else{
    console.log("true");
    
  };
  
 };
findStudentByFirstName('Janey')// false
findStudentByFirstName('MMMaaaTTTtttTTT') // false
findStudentByFirstName('TIM') // true
findStudentByFirstName('elie') // true
findStudentByFirstName('Elie')// true



function extractEveryThird(n1){
  
  for(var i = 0; i < n1.length; i++){
          i+=2;
          console.log(n1[i]);
     
  }
}

extractEveryThird([1,2,3]);//3


extractEveryThird([1,2,3,4,5,6]); //3,6

extractEveryThird(["a","b","c","d"]) //c;

extractEveryThird(["first value", "second value", "third value"]); // ["third value"]


var countedClass = {
   oddCount: "" ,
   evenCount: ""
  
  
  
};
var z = 0;
var y1 = 0;
function countEvensAndOdds(n3){
  
  for(var i = 0; i < n3.length; i++){
         i+=1;
         
         z++
      countedClass.oddCount =   z ;
          
       
     }
  
  for(var i = 0; i < n3.length; i++){
         i+=2;
         
         y1++
      countedClass.evenCount =  y1 ;
          
       
     }
  
console.log(countedClass.evenCount);
console.log(countedClass.oddCount);
  
z = 0;
y1 = 0;
};

countEvensAndOdds([1,2,3,4]); // 2,2



countEvensAndOdds([1,2,3,4,5,6,7]); //3,4

// "Hello from function scope";"Hello from global"



// "Hello from global"

//  "Hello from global"


(displayFullName = function (Ffname, Llname){
 
 console.log(Ffname + " " + Llname);
 })();

displayFullName("Kj","Shote");

var CalcMe = {
  result: 0 ,
  
  add: function(g1, g2){
    result = g1 + g2;
    console.log(result);
    
  } ,
  
  subtract: function(g1, g2){
    result = g1 - g2;
    console.log(result);
    
  } ,
  
  multiply: function(g1, g2){
    result = g1 * g2;
    console.log(result);
    
  } ,
  
  divide: function(g1, g2){
    result = g1 / g2;
    console.log(result);
    
  } ,
  
  
};



function createCalculator(){
  
  return CalcMe; 
  
};

var calc = createCalculator();

calc.add(4,2);
calc.subtract(2,2); // 0
calc.multiply(2,2); // 4
calc.divide(12,2); // 6


//Tim because the variale initialized inside function

//Elie because the variable was initialized outside the function

// undefined nothing variable was initalized after function was invoked

// not defined variable was not declared nor initialized;

//undefined variable was declared but not defined;

// undefined

// Hi function definition hoisted;

//error

var Days = [ "Sunday" ,"Monday", "Tuesday" , "Wednesday", "Thursday" , "Friday" , "Saturday"] ;
            
function printDay(t6){
   
  var dayDay = t6 -1;
   
  
  if(dayDay < 0 || dayDay > Days.length){
    
    console.log("Undefined");
    
  }
   console.log(Days[dayDay]);
  
};

printDay(4);

printDay(4); // "Wednesday"

printDay(41); // undefined

function lastElement(LM){
  
   if(LM == undefined ){
    
    console.log("Undefined");
    
     
  }else{
  
  for( var i = 0; i < LM.length; i++){
     var lastOne = LM.length -1;
      
     console.log(LM[lastOne]);
    break
  };
  
  }
 
}

lastElement([1,2,3,4]);
lastElement();

function numberCompare(d1,d2){
  
  if(d1 == d2){
    console.log("Numbers are equal");
    
  }else
  if(d1 > d2){
    console.log("First is Greater");
    
  }
  else{
     console.log("Second is Greater");
    
    
  }
  
};

numberCompare(1,1); // "Numbers are equal"
numberCompare(2,1); // "First is greater"
numberCompare(1,2); // "Second is greater"

function singleLetterCount(s6,s7){
  var s9 = s6.toLowerCase();
  var s10 = s7.toLowerCase();
  var count = 0;
  let tarr = s9.split("");
  for( var i = 0; i < tarr.length; i++){
    
    if(tarr[i] == s10){
      count +=1
      
      
    }
    
  }
  console.log(count);
};
singleLetterCount('amazing','A'); // 2
singleLetterCount('Rithm School','o'); // 2

var letters = {
  
  
};

function multipleLetterCount(s11){
  let tarr2 = s11.split("");
  
  for(var i =  0; i < tarr2.length; i++){
    letters.[tarr2.[i]] = tarr2[i];
    if (letters.[tarr2.[i]] == tarr2[i]){
      count +=1;
      letters.[tarr2.[i]] = count;
      
    }
    
    
    
  };
  

  
};

multipleLetterCount("hello")

letters;