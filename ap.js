//console.log(`Hello`);
//console.log(`I like eating healthy`);

//window.alert(`This is an alert?`);
//window.alert(`Tell me who is gonner save me from myself.`);

//document.getElementById("myH1").textContent = `Whats wrong with you?`;
//document.getElementById("myP").textContent = `Pray for me`;

//let age = 25;
//let price = 9.99;
//let gpa = 4.5;

//console.log(typeof price)
//console.log(`My brother's age is ${age} years.`);
//console.log(`The average price is $${price}`);
//console.log(`Your gpa is ${gpa}`)

//let firstName = "Mike";
//let email = "mike@gmail.com";

//console.log(`My name is ${firstName}`);
//console.log(`Text me through my email ${email}`)

//let fullName = "Michael Ngene";
//let age = 24;
//let isStudent = false;

/* document.getElementById("P1").textContent = `My name is ${fullName}`
document.getElementById("P2").textContent = `I am ${age} years old`
document.getElementById("P3").textContent = `Enrolled: ${isStudent}`;*/

//let students = 30;
//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students % 4;
//students = students ** 4;

//students += 1;
//students -= 1;
//students /= 2;
//students *= 2;
//students %= 4;

//console.log(students);

//How to accept user input
//1.Easy way = window prompt
//2.Proffessional way = HTML textbox

//let username;

//username = window.prompt("What is your name?");
//console.log(username);
/*let username;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    //usernane = document.getElementById("mytext").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}*/

// type conversion = change datatype of a value to another
//                    (string, Number, Booleans)

//let age = window.prompt("Ehat is your age?");
//age = Number(age);
//age+=1;
//console.log(age);
/* let x = "Bobi";
 let y = "Bobi";
 let z = "Bobi";

 x = Number(x);
 y = String(y);
 z = Boolean(z);

 console.log(x, typeof x);
 console.log(y, typeof y);
 console.log(z, typeof z);*/

 //const = a variable that can't be changed

 /*const PI = 3.14159;
 let radius;
 let circumference;

 document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference;
 }*/
 


/*const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textcontent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textcontent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}*/

//math = built-in object that provide a collection of properties and methods
//let x = 3;
//let y = 2;
//let z = 9;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);
//let max = Math.max(x,y,z);
//let min = Math.max(x,y,z);

//console.log(max);

// RANDOM NUMBER GENERETOR

/*const myButton =  document.getElementById("myButton");
const label1 =  document.getElementById("label1");
const label2 =  document.getElementById("label2");
const label3 =  document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}*/

/*const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age ;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = `You are too old to enter this site!`;
    }
    else if(age == 0){
        resultElement.textContent = `Yungin, you are just born!`;
    }
    else if(age >= 18){
        resultElement.textContent = `You eligible to enter this site`;
    }
    else if(age < 0){
        resultElement.textContent = `You age cannot be below 0`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }

}*/

/*const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subresult = document.getElementById("subresult");
const paymentResults = document.getElementById("paymentResults");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subresult.textContent = `You are subscribed!`;
    }
    else{
        subresult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResults.textContent = `You are paying with visa`
    }
    if(mastercardBtn.checked){
        paymentResults.textContent = `You are paying with mastercard`
    }
    if(paypalBtn.checked){
        paymentResults.textContent = `You are paying with paypal`
    }
}*/

//ternary operator = a shortcut to if{} and else{} statements
//                 helps to assign a variable based on a condition
//                 condition ? codeIfTrue : codeIfFalse; 

/*let age = 21;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message);

let time = 9;
let greeting = time < 12 ? "Good morning, nigga!" : "Good evening, baby!";
console.log(greeting);

let isstudent = false;
let messages = isstudent ? "You are a student" : "You are NOT a student";
console.log(messages);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * discount/100}`);*/

//switch = can be effecient replacement of many else if statement 

/*let day = 17;
switch(day){
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log(`${day} is NOT a day`)
}

let testscore = 33;
let letterGrade;

switch(true){
    case testscore >= 90:
        letterGrade = "A";
        break
    case testscore >= 80:
        letterGrade = "B";
        break
    case testscore >= 70:
        letterGrade = "C";
        break
    case testscore >= 60:
        letterGrade = "D";
        break
    case testscore >= 50:
        letterGrade = "E";
        break
    case testscore <= 49:
        letterGrade = "F";
        break
}
console.log(letterGrade)*/

// string slicing = creating a substring from a portion
//            of another string
//              string.slice(start, end)

/*const email = "ngenemike@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log(username);
console.log(extension);

const fullName = "Mike Ngene";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);*/

/*Method chaining = calling one method after another in one 
//                continous line of code.



//-------NO METHOD CHAINING--------


username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachars = username.slice(1);
extrachars = extrachars.toLowerCase();
username = letter + extrachars;

console.log(username);

//-----NO METHOD CHAINING-------
let username = window.prompt("Enter your username: ");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);*/

/*Logical operator = used to combine or manipulate boolean values(true or false)

const temp = 43;

if (temp <= 26 && temp <= 34){
    console.log("The weather is GOOD!")
}
else if (temp > 35 && temp <= 47){
    console.log("The weather is HOT!")
}
else{
    console.log("The weather is BAD!")
}*/

/*  =     assignment operator
    ==   comparison operator (compares if values are equal)
   ===   strict equality operator (compare if value & datatype are equal)
   !=    inequality operator
   !==   strict inequity operator

const  PI = "3.14";

if(PI !== "3.14"){
    console.log("This is PI");
}
else{
    console.log("This is NOT PI");
}
*/

/*while loop  = repeat some code WHILE some condition is true


let username = "";

while(username === ""){
    username = window.prompt(`Enter your name`);
}

console.log(`Hello ${username}` );
*/
/*let loggin = false;
let userName;
let password;

while(!loggin){
    userName = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(userName === "myusername" && password === "mypassword"){
        loggin = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Try again!")
    }
}
// for loop = repeats some code for a limited amount of time
for( let a = 1; a <= 15; a++){
    if(a == 13){
        break;
    }
    else{
        console.log(a);
    }
}*/

//NUMBER GUESSING GAME

/*const minNum = 1;
const maxNum  = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN");
        }
        else{
            window.alert(`CORRECT ! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
    }
}*/
//function = A section of reusable code: Declare code once, use it whenever you want:
//          Call the function to execute that code.
/*function happyBirthday(){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
}
happyBirthday();

function happyBirthday(age, username){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old!`);
    console.log(`Happy birthday to you ${username}!`);
}
happyBirthday(24, "Michael");
function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function divide(x, y){
    return x / y;
}
function multiply(x, y){
    return x ** y;
}
function isEven(number){
    return number % 2 === 0 ? true : false;
}
function isValidEmail(email){
    return email.includes ("@") ? true : false;
}
console.log(isValidEmail("Elon.com"));*/

//variable scope = where a variable is recognized and accessible(local vs global)
//local;
/*function2();
function function1(){
    let x = 3;
    console.log(x);
}
function function2(){
    let y = 3;
    console.log(y);
        
        
//global
let x = 6;
function1();
function function1(){
    console.log(x)
}*/

/* TEMPERATURE CONVERSION PROGRAM

const textBox = document.getElementById("textBox");
const tofahrenheit = document.getElementById("tofahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(tofahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";
    }
    else if(toCelcius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "F";
    }
    else{
        result.content = "Select a unit!";
    }
}*/

/* array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "lemon", "banana", "orange"];

fruits.sort().reverse;
for(let fruit of fruits){
    console.log(fruit);
}*/

/* spread operator = ... allows an iterable such as an array or string to be
//                 expanded into separate elements(unpacks the elements)
let number = [1,2,3,4,5,6];
let maximum = Math.max(...number);
let minimum = Math.min(...number)
console.log(maximum);
console.log(minimum);

let username = "Micheal Ngene"
let letters = [...username].join("");
console.log(letters);*/

// rest parameter = (...rest) allow a function work with a variable number of argument
//                  by bundling them into arrays
//          spread = expand an array into separate element
//          rest = bundles separate element into an array

/*function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1,2,3,4,58);
console.log(`Your total is $${total}`);

function combinedStrings(...strings){
    return strings.join(" ");
}


const fullname  = combinedStrings("Mr.", "Spongebob", "Squarepants");
console.log(fullname);*/
 
/* my gallery photo

function gallery(){
    const numOfPhoto = document.getElementById("numOfTimes").value;
    const picsresults = document.getElementById("picsresults");
    const picsimages = document.getElementById("picsimages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfPhoto; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="facebook/${value}.jpg">`)
    }
    picsresults.textcontent = `dice: ${values.join(', ')}`;
    picsimages.innerHTML = images.join('')
}*/
/*
function generatepassword(Length, includeLowercase, includeUppercase,includeSymbols, 
                          includeSymbols){
            const LowercaseChars = "abcdefghijklmnopqrstuvwxyz";
            const UppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const NumberChars = "0123456789";
            const SymbolsChars = "~!@#$%^&*()_+?><:";

            let allowedChars = "";
            let password = "";

            allowedChars += includeLowercase ? LowercaseChars : "";
            allowedChars += includeUppercase ? UppercaseChars : "";
            allowedChars += includeNumbers ? NumberChars : "";
            allowedChars += includeSymbols ? SymbolsChars : "";
            
            if(length <= 0){
                return `(password length must be atleast one)`;
            }
            if(allowedChars.length === 0){
                return `(atleast one set of character needs to be selected)`;
            }

            for(let i = 0; i < length; i++){
                const randomIndex = Math.floor(Math.random() * allowedChars.length);
                password += allowedChars[randomIndex];
            }

            return password;

};

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols = false;

const password = generatepassword(passwordLength, 
                 includeLowercase, 
                 includeUppercase,
                 includeNumbers, 
                 includeSymbols
);
console.log(`Generate password: ${password}`);*/

/* callback = a function that is passed as an argument to another function
//           used to handle asynchronous operations:
//          1. Reading a file
//          2. Networking requests
//          3. Interacting with databases
//          "Hey, when you're done, call this next"

hello(wait);

function hello(callback){
    console.log("Hello!");
    callback()
}

function goodbye(){
    console.log("Goodbye");
}

function wait(){
    console.log("Wait!");
}
sum(displayConsole, 2,3);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("my H1").textContent = result;
}*/

/* forEach() = method used to iterate over the elements of an array and apply
//              a specific function (callback) to each element
//              array.forEach(callback)
//              element, index, array are provided

let numbers = [1,2,3,4,5,6];

numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}

let fruits =  ["apples", "banana", "orange", "coconut"];

fruits.forEach(uppercase);
fruits.forEach(display);

function uppercase(element, index, array){
   array[index] = element.toUppercase();
}

function lowercase(element, index, array){
    array[index] = element.toLowercase();
}

function display(element){
    console.log(element);
}*/

// .map() = accepts a callback and applies that function to each element of an array,
//          then return a new array

/*const numbers = [1,2,3,4,5,6];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(cubes);

function square(element){
    return Math.pow(element, 2)
};

function cube(element){
    return Math.pow(element, 3)
};

const students = ["Spongebob", "Patrick", "Sqiudward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(LowerCase);

console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}

function LowerCase(element){
    return element.toLowerCase();
}

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatedDates);

console.log(formattedDates);

function formatedDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}*/
/*.filter() = creates new array by filtering out elements

let numbers = [1,2,3,4,5,6];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

const ages = [16,17,18,18,19,20,60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(adults);
console.log(children);

function isAdult(element){
    return element >= 18;
}
function isChild(element){
    return element < 18;
}

const words = ["aplle", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortwords = words.filter(getShortWords);
const longwords = words.filter(getLongwords);

console.log(shortwords);
console.log(longwords);

function getShortWords(element){
    return element.length <= 6;
}
function getLongwords(element){
    return element.length > 6;
}*/

/*reduce() = reduce the element of an array to a single value

const prices = [5,30,10,25,25,20,56];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulate, elemento){
    return Math.max(accumulate, elemento);
}
function getMin(accumulate, elemento){
    return Math.min(accumulate, elemento);
}*/

// function declaration = define a reusable block ofcode that performs a specific task

/*function hello(){
    console.log("Hello");
}
hello()
// function expreession = a way to define functions as values or variable

setTimeout(function(){
    console.log("Get it");
}, 3000);

const numbers = [1,2,3,45,6];

const squares =  numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares);

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
console.log(cubes);

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(total);*/

/* arrow function = a concise way to write function expressions good for simple
//                  functions that you use only once(parameters) => some code

const hello = (name, age) => {console.log(`Hello ${name}`) +
                              console.log(`You are ${age} years old`)};
hello("Michael", 24);

//setTimeout( () => console.log("Hello"), 3000);

const numbers = [61, 52, 43, 34, 25, 16];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 ===0 );
const oddNums = numbers.filter((element) => element % 2 !==0 );
const total = numbers.reduce((accumulator, element) => accumulator + element );

console.log(total);*/

/*object = A collection of related properties and/or methods. Can represent real 
//         world object(people, products,places) object = (key:value, function())

const person1 ={
    firstName: "Spongebob",
    lastName:  "Squarepants",
    age: 44,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob")},
    eat: function(){console.log("I am eating a Krabby Party")},
}

const person2 ={
    firstName: "Kendrick",
    lastName:  "Lamar",
    age: 37,
    isEmployed: false,
    sayHello: function(){console.log("Hello, I am a supporter of Pep.")},
    eat: function(){console.log("I am fasting")},

}

person1.eat();
person2.eat();

console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.isEmployed)

console.log(person2.firstName)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2.isEmployed)*/

/* this = reference to the object THIS is used (the object depends on the 
            immediate context) person.name = this.name

const person1 = {
    firstName: "Nick",
    favFood:  "Chicken Biriani",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)},
    eat: function(){console.log(`${this.firstName} is eating ${this.favFood}`)},
}

person1.eat()*/

/* constructor = special method for defining the properties and methods of objects

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,

}
const car1 = new Car("Ford", "Mustang", 2024, "year");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);*/

/*class = (esc feature)provide a more structured and cleaner wayto work with objects
//          compared to traditional constructor function eg. static,keyword,inheritance

class product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product is ${this.name}`);
        console.log(`Price is ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTaxes){
        return this.price + (this.price * salesTaxes);
    }
}

const salesTaxes = 0.05;

const product1 = new product("Shirt", 19.99);
const product2 = new product("Pants", 29.90);
const product3 = new product("T-Shirt", 56.99);

product2.displayProduct();

const total = product2.calculateTotal(salesTaxes);
console.log(`Total price(with tax): $$(total.toFixed(2))`);*/

/*static = keyword that defines properies or methods that belong to a class
//        itself rather than the objects created from that class
//        (class owns anything, not the objects)

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(6))

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getuserCount(){
        console.log(`Thare are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Fred");


user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getuserCount();*/

/*inheritance = allows a new class to inherit properties and methods from an 
            existing class (parent -> child) help with code reuseability

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();*/

/*super = keyword is used in classes to call the constructor or access the properties
        and methods of a parent (superclass) 
        this = this object
        super = the parent
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`This ${this.name} moves at aspeed of ${speed}km/h`);
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

hawk.fly();*/

/*getter = special method that makes a property readable
setter = special method tha makee a property writable 

validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newwidth){
        if(newwidth > 0){
            this._width = newwidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }
    get width(){
        return `${this._width.toFixed(2)} cm`;
    }
    get height(){
        return `${this._height.toFixed(2)} cm`;
    }
    get area(){
        return `${this._width * this._height.toFixed(2)} cm`;
    }
}

const rectangle = new Rectangle(7, 5);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
    }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newlastName){
        if(typeof newlastName === "string" && newlastName.length > 0){
            this._lastName = newlastName;
    }
        else{
            console.error("Last name must be a non-empty string");
        }
    }
    set age(age){
        if(typeof age === "number" && age >= 0){
            this._age = age;
    }
        else{
            console.error("Age must be a number");
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName
    }
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
    get age(){
        return this._age;
    }
}
const person = new Person("Michael", "Ngene", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);*/

/* destructuring = extract values from arrays and objects, then assign them to 
                 variable in a convenient way 
                [] = to perform array destructuring
                {} = to perform object destructuring

const colors = ["red", "green", "blue", "black", "white"];

//[colors[0], colors[4]] = [colors[4], colors[0]];
//const [firstColor, secondColor, thirdColor,...extraColors] = colors;
function displayPerson({firstName, lastName, age, job}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log('job: ${job}');
}

const person1 ={
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 37,
    job: "Fry Cook"
}
const person2 ={
    firstName: "Jason",
    lastName: "Njoroge",
    age: 26,
}

displayPerson(person2);

const {firstName, lastName, age, job="unemployed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);*/

/*nested objects = Objects inside other objects
                    Allows you to represent more complex data structures
                    Child object is enclosed by a parent object
                    
                    Person{Address{}, contact{}}
                    ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["Karate", "Ji jitsu", "boxing"],
    address: {
        street: "124 Conchi st.",
        city: "Bikii Bottom",
        country: "Int. Water"
    }
}
console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[1]);
console.log(person.address.city);

class Person { 
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
const person1 = new Person("Spongebob", 
                            30, 
                            "124 Conch st.", 
                            "Qatar",
                            "Int. water");
const person2 = new Person("Pozze", 
                            29, 
                            "124 Conch st.", 
                            "Dubai",
                            "Vita");
const person3 = new Person("Willy", 
                            29, 
                            "124 Conch st.", 
                            "Kokoo",
                            "City P");
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);*/

/*const fruits = [{name: "apple", color: "red", calories: 90}, 
                {name: "banana", color: "yellow", calories: 130}, 
                {name: "pineapple", color: "yellow", calories: 112}, 
                {name: "coconut", color: "white", calories: 156}, 
                {name: "orange", color: "orange", calories: 98}];

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColor = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColor);
console.log(fruitCalories);

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowcalfruits = fruits.filter(fruit => fruit.calories < 120)

console.log(lowcalfruits);

const maxFruit = fruits.reduce( (max, fruit) => 
                                fruit.calories > max.calories ?
                                fruit: max);
const minFruit = fruits.reduce( (min, fruit) => 
                                fruit.calories < min.calories ?
                                fruit: min);
console.log(maxFruit);
console.log(minFruit);*/

/**sort() =  method used to sort elements of array in place.
 *          sort element as strings in lexicographic order, not alphabetical
 *          lexicographic = (alphabet + number + symbols) as strings


let numbers =[1, 10, 3, 4, 7, 5,9,2,8];
numbers.sort((a, b) => a - b);
console.log(numbers);

const people = [{name: "Spongebob", age: 30, gpa: 3.3},
                {name: "Patrick", age: 37, gpa: 1.6},
                {name: "Shaq", age: 51, gpa: 2.5},
                {name: "Feter", age: 27, gpa: 2.0}]

//people.sort((a,b) => a.age - b.age);
people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);

const cards  = ['A',2,3,4,5,6,7,8,9,10,'K','Q','J'];

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}*/
/**Date objects = Objects that contain values that represent dates and times
 *              These date objects can be changed and formatted
 
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour =  date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const time = date.getTime();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);
console.log(time);

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1){
    console.log("HAPPY NEW YEAR!");
}
else(
    console.log("THIS IS THE END OF YEAR DAY!")
); */  

/**closure = A function defined inside of another function,
 *          the inner function has access to the variables and scope of the outer
 *          function.
 *          Allow for private variables and and state maintence
 *          Used frequently in JS framework: React, Vue, Angular 

function outer(){
    let message = "Hello";

    function inner(){
        console.log(message);
    }
    inner();
}
outer();

function createcounter(){
    let count = 0; 

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    return {increment};
}

const counter = createcounter();

counter.increment();
counter.increment();
counter.increment(); 
function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${getscore()}pts`);*/

/**setTimeout() = function in Javascript that allows you to schedule the execution
 *              of a function after an amount of time(milliseconds)
 *              Times are approximate (varies based on the workload ofthe Js runtime env.)
 * 
 *              setTImeout(callback, delay);
 

function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);

let timeoutid;

function startTimer(){
    timeoutid = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutid);
    console.log("CLEARED")
}

function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2 , 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const milliseconds = now.getMilliseconds().toString().padStart(2, 0);
    const timestring = `${hours}:${minutes}:${seconds}:${milliseconds} ${meridiem}`;
    document.getElementById("clock").textcontent = timestring;
}

updateClock();
setInterval(updateClock, 1000);

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}
function stop(){
    
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}
function update(){
    
    const currentTime = Date.now();
    elapsedTime = currentTime -startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}*/

/*ES6-Modula = An external file that contains reusable code that can be imported into 
            other javascript Files.
            Write usable code for many different apps,
            Can contain variables, classes, functions ... and more 
            Inroduced as part of EMCAScript 2015 updates

import {PI, getCircumference, getArea, getvolume} from `./mathutil`;

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getvolume(10);

console.log(`${circumference.tofixed(2)}cm`);
console.log(`${area.tofixed(2)}cm^2`);
console.log(`${volume.tofixed(2)}cm^3`);**/

/**synchronous = Execute line by line consecutively in a sequential manner
 *              Code that waits for an operation to complete
 * asynchronous = Allows multiple operation to be performed concurrently without waiting
 *       Doesn't block the execution flow and allow the program to continue
 *      (I/O operations, network request, fetching data)
 *      Handled with: callbacks, Promises, Async/Await


function func1(callback){
    setTimeout(() => {console.log("Task 1"); 
                        callback()}, 3000)
}

function func2(){
    console.log("Task 2")
    console.log("Task 3")
    console.log("Task 4")
}

func1(func2); */
/**Error = An object that is created to represent a problem that occurs
 *     Occur often with user input or establishing connection
 * 
 * try {} = Encloses code that might potentially cause an error
 * catch{} = Catch and handle any thrown errors from try{}
 * finally{} = {optional}Always executes. Used mostly for clean up
 *          ex. close files, close connections, release resources
 
try{
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch(error){
    console.error(error);
}
finally{
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes")
}

console.log("You have reached the end!")

try{
    const dividend = window.prompt("Enter a dividend; ");
    const divisor = window.prompt("Enter a divisor; ");

    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result)
}
catch(error){
    console.error(error);
}

console.log("You have reached the end");55555444

const display = document.getElementById("display");

function appendToDispaly(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";

}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}*/
/**DOM = DOCUMENT OBJECT MODEL
 *       Object{} that represent the page you see in the web browser and provides 
 *       API to interact with it.
 *       Web browser constructs the DOM when it loads an HTML document, and structure
 *       all the element in a tree-like representation.
 *       Javascript can access the DOM to dynamically change the content, structure and 
 *        style of a web page.
 
const username = " username";
const welcomemsg = document.getElementById("welcome-msg");

welcomemsg.textContent += username === "" ? `Guest` : username;
console.dir(document);*/
/**Element selector = Methods used to target and manipulite HTML elements.
 *              They allow you to select one or multiple HTML elements from the DOM.
 *  
 * 1. document.getElementById()        //ELEMENT OR NULL
 * 2. document.getElementsByClassName()  //HTML COLLECTION
 * 3. document.getElementByTagname()   //HTML COLLECTION
 * 4. document.querySelector()         //ELEMENT OR NULL
 * 5. document.querySelectorall()      //NODELIST


const myHeading = document.getElementById("welcome-msg");
welcomemsg.style.backgroundcolor = "green";

const fruits = document.getElementsByClassName("fruits");

//fruits[2].style.backgroundcolor = "yellow";
//for (let fruit of fruits){
//    fruit.style.backgroundColor = "yellow";
//}
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow"
}); 

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}
for(let liElement of liElements){
    liElement.style.backgroundColor = "hsl(125, 100.00%, 66.30%)";
}
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
})
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
})
//h4Elements[1].style.backgroundColor = "yellow";

const element = document.querySelector("h4");

element.style.backgroundColor = "yellow";

const foods = document.querySelectorAll("li");

//foods[5].style.backgroundColor = "yellow"
foods.forEach(food => {
    food.style.backgroundColor = "yellow"
})*/
/**DOM Navigation = The process of navigating through the structure of an HTML
 *                  document using Javascript.
 * firstElementChild, lastElementChild, nextElementsibling, previousElementSibling,
 * parentElement, children

firstchild
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

first all element
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElements =>{
    const firstChild = ulElements.firstElementChild;
    firstChild.style. backgroundColor = "lightblue";
})

const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "red"; 
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElements =>{
    const lastChild = ulElements.lastElementChild;
    lastChild.style.backgroundColor = "blue";
})
**Next sibling
const element = document.getElementById("deserts");
const nextsibling = element.nextElementSibling;
nextsibling.style.backgroundColor = "lightblue";

**Prevoius sibling
const element = document.getElementById("pie");
const previoussibling = element.previousElementSibling;
previoussibling.style.backgroundColor = "lightblue";

**Parent Element
const element = document.getElementById("pie");
const parent = element.parentElement;

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});

parent.style.backgroundColor = "lightblue";*/
/*children[1].style.backgroundColor = "yellow";*/

// STEP ONE CREATE THE ELEMENT
//const newH1 = document.createElement("h1");
//const newListitem = document.createElement("li");

// STEP 2 ADD ATTRIBUTE/PROPERTIES
//newListitem.textContent = "cococnut";
//newListitem.id = "coconut";
//newListitem.style.fontweight = "bold";
//newListitem.style.backgroundColor = "lightgreen";

//STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newListitem);
//document.body.prepend(newListitem);
//document.getElementById("box4").append(newListitem);
//document.getElementById("fruits").prepend(newListitem);

// const apple = document.getElementById("apple");
// document.getElementById("fruits").insertBefore(newListitem, apple)

//const Listitem = document.querySelectorAll("#fruits li");
//document.getElementById("fruits").insertBefore(newListitem, Listitem[4]);

//REMOVE HTML ELEMENT
//**document.body.removeChild(newlink)
//document.getElementById("box1").removeChild(newH1);

/** eventListener = Listen for specific  events to create interactive web pages
 *                  events; clicks, mouseover, mouseout
 *                  addEventListener(event, callback);
 

const myBox = document.getElementById("myBox");
const mybutton = document.getElementById("mybutton");

/*function changecolor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textcontent = "OUCH!"
}
myBox.addEventListener("click", changecolor);
mybutton.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textcontent = "OUCH!";
});

mybutton.addEventListener("mouseover", event =>{
    
    event.target.style.backgroundColor = "yellow";
    event.target.textcontent = "OUCH";
});
mybutton.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textcontent = "Kinno";
});*/

//eventlistener = Listens to specific events to create interactive web pages
//              events, keydown, keyup
//              document.addEventListener(event, callback);

//const myBox = document.getElementById("myBox");

/*document.addEventListener("keydown", event =>{
    myBox.textContent = "🥱";
    myBox.style.background = "tomato";
});

document.addEventListener("keyup", event =>{
    myBox.textContent = "😉";
    myBox.style.backgroundColor = "lightblue";
});
const moveamount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{
    myBox.textContent = "🥱";
    myBox.style.background = "tomato";
});

document.addEventListener("keyup", event =>{
    myBox.textContent = "😉";
    myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y -= moveamount;
                break;
            case "ArrowDown":
                y += moveamount;
                break;
            case "ArrowLeft":
                x -= moveamount;
                break;
            case "ArrowRight":
                x += moveamount;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {
    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton.textContent = "Hide"
    }
    else{
        myImg.style.display = "none";
        myButton.textContent = "show";
    }   
});*/











































































































































































































































































































