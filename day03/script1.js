//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = 'Joana'; //string
const lastName = 'Silva'; //string
const country = 'Brazil'; //string
const city = 'São Paulo'; //string
const age = 30; //number
const isMarried = false; //boolean
const year = new Date().getFullYear(); //number
console.log(typeof year);


//Check if type of '10' is equal to 10
const str = '10'; //string

str === 10 ? console.log('They are equal') : console.log(`They aren't equal`);


//Check if parseInt('9.8') is equal to 10
const x = parseInt('9.8'); //number, but is not the same number

x === 10 ? console.log('They are equal') : console.log(`They aren't equal`);


//Boolean value is either true or false.
    //Write three JavaScript statement which provide truthy value.
    const n1 = 2; //number except 0
    const n2 = 'string'; //string except empty string
    const n3 = true; //the true value
    //Write three JavaScript statement which provide falsy value.
    const n4 = 0;
    const n5 = '';
    const n6 = false;


/*Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    4 > 3       true
    4 >= 3      true
    4 < 3       false
    4 <= 3      false
    4 == 4      true
    4 === 4     true
    4 != 4      false
    4 !== 4     false
    4 != '4'    true
    4 == '4'    true
    4 === '4'   false
Find the length of python and jargon and make a falsy comparison statement.*/
let pt = 'python';
let jg = 'jargon';
let lenPt = pt.length; //6
let lenJg = jg.length; //6
lenPt !== lenJg;


/*Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12        true
4 > 3 && 10 > 12        false
4 > 3 || 10 < 12        true
4 > 3 || 10 > 12        true
!(4 > 3)                false
!(4 < 3)                true
!(false)                true
!(4 > 3 && 10 < 12)     false
!(4 > 3 && 10 > 12)     true
!(4 === '4')            true
There is no 'on' in both dragon and python  false*/
console.log(4 > 3 || 10 > 12);


//Use the Date object to do the following activities
const date = new Date();
const y = date.getFullYear(); //What is the year today?   2021
const month = date.getMonth() + 1; //What is the month today as a number?  11
const day = date.getDate(); //What is the day today as a number?    24
const hour = date.getHours(); //What is the hours now?  16
const minutes = date.getMinutes(); //What is the minutes now?   24
const time = date.getTime();   //Find out the numbers of seconds elapsed from January 1, 1970 to now.   1637781949804

console.log(time);