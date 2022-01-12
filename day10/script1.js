const countries = ['Finland', 'Sweden', 'Norway'];


//create an empty set
const emptySet = new Set();

//Create a set containing 0 to 10 using loop
const numbers = new Set();
for(let i = 0; i < 11; i++) {
    numbers.add(i);
}

//Remove an element from a set
numbers.delete('4');

//Clear a set
numbers.clear();

//Create a set of 5 string elements from array
const arr = ['str1', 'str2', 'str3', 'str4', 'str5'];
const fiveStrSet = new Set();
for(const str of arr) {
    fiveStrSet.add(str);
}

//Create a map of countries and number of characters of a country
const mapCountries = new Map();
for(const country of countries){
    mapCountries.set(country, country.length);
}