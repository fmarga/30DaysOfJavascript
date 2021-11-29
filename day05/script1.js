//Declare an empty array;
const emptyArr = [];


//Declare an array with more than 5 number of elements
const arr5 = [2, 6, 3, 5, 9, 40, 10];
//Find the length of your array
console.log(arr5.length); // 7
//Get the first item, the middle item and the last item of the array
let firstItem = arr5[0];
let mediumItem = arr5[4];
let lastIndex = arr5.length - 1;
let lastItem = arr5[lastIndex];


//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["string", "string2", 4, 4.6, true, 20];


//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//Print the array using console.log()
console.log(itCompanies);
//Print the number of companies in the array
console.log(itCompanies.length); // 7
//Print the first company, middle and last company
console.log(itCompanies[0]); // Facebook
console.log(itCompanies[3]); // Apple
console.log(itCompanies[itCompanies.length - 1]); // Amazon
//Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
//Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`);
//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf('company');
index != -1 ? console.log(itCompanies[index]) : console.log('not found');
//Filter out companies which have more than one 'o' without the filter method

//Sort the array using sort() method
let arrSorted = itCompanies.sort();
console.log(arrSorted);
//Reverse the array using reverse() method
let arrReversed = itCompanies.reverse();
console.log(arrReversed);
//Slice out the first 3 companies from the array
let sliced = itCompanies.slice(0, 3); 
console.log(sliced); //Oracle, Microsoft, IBM
//Slice out the last 3 companies from the array
let lastSliced = itCompanies.slice(4); 
console.log(lastSliced); //Facebook, Apple, Amazon
//Slice out the middle IT company or companies from the array
let mediumSliced = itCompanies.slice(2,3);
console.log(mediumSliced); //IBM
//Remove the first IT company from the array
let firstCompanyOut = itCompanies.shift();
console.log(firstCompanyOut) //Oracle
//Remove the middle IT company or companies from the array
let mediumSlicedOut = itCompanies.splice(1,2); 
console.log(mediumSlicedOut); //Google, Facebook, Apple
//Remove the last IT company from the array
let lastCompanyOut = itCompanies.pop(); 
console.log(lastCompanyOut); //Amazon
//Remove all IT companies 
let emptyCompanies = itCompanies.splice(); 
console.log(emptyCompanies); //empty array


