//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = parseInt(prompt('Enter a number'));
let height = parseInt(prompt('Enter another number'));
const area = base * height * 0.5;


//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = parseInt(prompt('Enter a number 1 of 3'));
let b = parseInt(prompt('Enter a number 2 of 3'));
let c = parseInt(prompt('Enter a number 3 of 3'));
const perimeter = a + b + c;


//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let len = parseInt(prompt('Enter a number to the length of a rectangle'));
let wid = parseInt(prompt('Enter a number to the length of a rectangle'));
const recArea = len * wid;
const recPer = (len + wid) * 2;


//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let rad = parseInt(prompt('Enter a number for the radius of a circle'));
const pi = 3.14;
const cirArea = pi * rad * rad;
const cirCirc = 2 * pi * rad;


//Calculate the slope, x-intercept and y-intercept of y = 2x -2
//quando y = 0 -> x = 1; (1, 0)
//quando x = 0 -> y = 2; (0, 2)
const m1 = 1; //valor de x
const m2 = 0;
const n1 = 0; //valor de y
const n2 = 2;
const slope1 = (n2 - n1) / (m2 - m1); //-2



//Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
const y1 = 2;
const y2 = 10;
const x1 = 2;
const x2 = 6;
const slope2 = (y2 - y1) / (x2 - x1); //2



//Compare the slope of above two questions.
slope1 < slope2;


//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
const hour = parseInt(prompt('Enter hours'));
const rateHour = parseInt(prompt('Enter rate per hour'));
const payPerson = hour * rateHour;
console.log(`Your weekly earning is ${payPerson}`);


//If the length of your name is greater than 7 say, your name is long else say your name is short.
const nome = 'Margarete';
nome.length > 7 ? console.log('My name is long') : console.log('My name is short');


//Compare your first name length and your family name length and you should get this output.
let nom = 'Beatriz';
let sobren = 'Constantino';
nom.length > sobren.length ? console.log(`Your first name, ${nom}, is longer than your family name, ${sobren}`) : console.log(`Your first name, ${nom}, is shorter than your family name, ${sobren}`);


//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 40;
let yourAge = 30;
let difAges = myAge - yourAge;
console.log(`I am ${difAges} years older than you.`);


//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = parseInt(prompt('Enter your birth year'));
const actualYear = 2021;
let age = actualYear - birthYear;
let allowDrive = 18 - age;
age > 18 ? console.log(`You are ${age}. You are old enough to drive.`) : console.log(`You are ${age}. You will be allowed to drive after ${allowDrive} years.`);


//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let timeLived = parseInt(prompt('Enter number of years you lived:'));
let sec = timeLived.getSeconds()

console.log(`You lived ${sec} seconds`);


//Create a human readable time format using the Date time object
const now = new Date();
const yearToday = now.getFullYear();
const monthToday = now.getMonth() + 1;
const dayToday = now.getDate();
const hourToday = now.getHours();
const minuteToday = now.getMinutes();
//YYYY-MM-DD HH:mm
console.log(`${yearToday}-${monthToday}-${dayToday} ${hourToday}:${minuteToday}`);
//DD-MM-YYYY HH:mm
console.log(`${dayToday}-${monthToday}-${yearToday} ${hourToday}:${minuteToday}`);
//DD/MM/YYYY HH:mm
console.log(`${dayToday}/${monthToday}/${yearToday} ${hourToday}:${minuteToday}`);
