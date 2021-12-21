//Write a script which generates a random hexadecimal number.
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexCode = '#';
for(let i = 0; i < 6; i++){
    const randomNumber = Math.floor(Math.random() * arr.length);
    hexCode += arr[randomNumber];
}


//Write a script which generates a random rgb color number.
const rgbColor = [];
for(let i = 0; i < 256; i++) {
    let randomColor = Math.floor(Math.random() * 256);
    rgbColor.push(randomColor);
}


//Using the above countries array, create the following new array.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];
const newArray = []
for(const country of countries){
    newArray.push(country.toUpperCase());
}


//Using the above countries array, create an array for countries length'.
let newArr = [];
for (const cc of countries) {
    newArr.push(cc.length);
}


//Use the countries array to create the following array of arrays:
let arrOfArr = [];
let letras = [];
for(let i = 0; i < countries.length; i++) {
    letras.push(countries[i].slice(0,3).toString().toUpperCase());
    arrOfArr[i] = [countries[i], letras[i], countries[i].length];
}


//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let includeArr = [];
let include;
for(let inc = 0; inc < countries.length; inc++){
    include = countries[inc].includes('land');
    if(include){
        includeArr.push(countries[inc]);
    }
}
if(includeArr.length != 0){
    console.log(includeArr);
}else{
    console.log('All these countries are without "land"');
}


//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These countries ends without ia'.
let endsArr = [];
for(let end = 0; end < countries.length; end++){
    let ends = countries[end].endsWith('ia');
    if(ends){
        endsArr.push(countries[end]);
    }
}
endsArr.length != 0 ? console.log(endsArr) : console.log('These countries ends without "ia"');


//Using the above countries array, find the country containing the biggest number of characters.
let tamanho = [];
for(const item of countries){
    tamanho.push(item.length);
}
tamanho.sort();
let lastIndex = tamanho[tamanho.length-1] 
console.log(countries[lastIndex]); //Ireland


//Using the above countries array, find the country containing only 5 characters.
let fiveLettersArr = [];
for(let j = 0; j < countries.length; j++){
    if(countries[j].length == 5){
        fiveLettersArr.push(countries[j]);
    }
}console.log(fiveLettersArr)  //Japan, Kenya


//Find the longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
let sorted = webTechs.sort((tech1, tech2) => tech2.length - tech1.length);
console.log(sorted[0]); //Javascript


//Use the webTechs array to create the following array of arrays:
let newWebTechArr = [];
let lengTechs = [];
for(let f = 0; f < webTechs.length; f++){
    lengTechs.push(webTechs[f].length);
    newWebTechArr[f] = [webTechs[f], lengTechs[f]];
}
console.log(newWebTechArr);


//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let first = [];
let sum = '';
for(const stack of mernStack){
    first.push(stack[0]);
}
for(let s = 0; s < first.length; s++){
    sum += first[s];
}
console.log(sum);


//terate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for(const tech of webTechs){
    console.log(tech);
}


//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon'];
for(let f = 0; f < 4; f++){
    let fruta = fruits.shift();
    fruits.push(fruta);
}


//Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
for(let a = 0; a < fullStack.length; a++){
    for(let b = 0; b < fullStack[a].length; b++){
        console.log(fullStack[a][b].toUpperCase());
    }
}
