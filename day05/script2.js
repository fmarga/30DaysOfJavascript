//First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let regex = /,/g;
let words = text.replace(regex, "").replace(".", "").replace(".", "").split(" ");
//console.log(words);
//console.log(words.length);


//In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
//add 'Meat' in the beginning of your shopping cart if it has not been already added
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat');
};
//add Sugar at the end of you shopping cart if it has not been already added
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
};
//remove 'Honey' if you are allergic to honey
let allergicToHoney = true;
if(allergicToHoney){
    shoppingCart.splice(4);
};
//modify Tea to 'Green Tea'
shoppingCart.splice(3, 1, 'Green Tea');
console.log(shoppingCart);


//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countries = ['Brazil', 'Argentina', 'Paraguai', 'Italia', 'China'];
if(countries.includes('Ethiopia')){
    console.log(ETHIOPIA);
}else{
    countries.push('Ethiopia');
}
console.log(countries);


//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = ['JavaCript', 'HTML', 'CSS', 'Node', 'PHP'];
if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess');
}else{
    webTechs.push('Sass');
    console.log(webTechs);
}


//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);