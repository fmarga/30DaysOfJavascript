const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Explain the difference between forEach, map, filter, and reduce.
/*
    1. forEach = it takes each element of the array and make some action with a callback function, returns the same array alterated;
    2. map = same as forEach, but returns a new array;
    3. filter = returns a new array with the elements that contain some condition given in the callback function;
    4. reduce = it takes all the elements of the array and returns a single element containing the result of the operation given
*/ 

//Define a call function before you them in forEach, map, filter or reduce.
const callback = (n) => {
    console.log(n);
}

//Use forEach to console.log each country in the countries array.
countries.forEach(callback);

//Use forEach to console.log each name in the names array.
names.forEach(callback);

//Use forEach to console.log each number in the numbers array.
numbers.forEach(callback);

//Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUppercase = countries.map((country) => country.toUpperCase());

//Use map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => country.length);

//Use map to create a new array by changing each number to square in the numbers array
const numberSquare = numbers.map((n) => n * n);

//Use map to change to each name to uppercase in the names array
const namesUppercase = names.map((nome) => nome.toUpperCase());

//Use filter to filter out countries containing land.
const countriesWithLand = countries.filter((country) => country.includes('land'));

//Use filter to filter out countries having six character.
const countriesWithSixLetters = countries.filter((country) => country.length === 6);

//Use filter to filter out countries containing six letters and more in the country array.
const countriesLengthMoreThanSix = countries.filter((country) => country.length <= 6);

//Use filter to filter out country start with 'E';
const countriesWithE = countries.filter((country) => country.startsWith('E'));

//Use filter to filter out only prices with values.
const prices = products.filter((price) => price.price != "" && price.price != " ");

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
    const arrWithStr = arr.filter((element) => typeof(element) == 'string');
    return arrWithStr;
}

//Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

//Explain the difference between some and every
/* 
    Both return a boolean value
    1.some = it checks if at least one of the elements corresponds with the condition given in the callback function
    2.every = it checks if all the elements are similar in one aspect
*/

//Use some to check if some names' length greater than seven in names array
const namesLengthSeven = names.some((nome) => nome.length > 7);

//Use every to check if all the countries contain the word land
const everyCountries = countries.every((country) => country.includes('land'));

//Explain the difference between find and findIndex.
/* 
    1.find = return the first element that corresponds the condition
    2.findIndex = return the index of the first element that corresponds the condition
*/

//Use find to find the first country containing only six letters in the countries array
const countrySix = countries.find((country) => country.length == 6);

//Use findIndex to find the position of the first country containing only six letters in the countries array
const countrySixIndex = countries.findIndex((country) => country.length == 6);

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findNorway = countries.findIndex((country) => country === 'Norway');

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findRussia = countries.findIndex((country) => country === 'Russia');