//Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
    let str = 'abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWYXZ12345567890';
    let arr = str.split('');
    let input1 = parseInt(prompt(`Say a number from 0 to 63`));
    let input2 = parseInt(prompt('Say a number of Id to generate'));
    let arrId = [];
    for(let j = 0; j <= input2; j++) {
        let id = '';
        for(let i = 0; i < input1; i++) {
            let random = Math.floor(Math.random() * arr.length);
            id += arr[random];
        }
        arrId.push(id);
    }
    return arrId.toString();
}


//Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
    let rgb = '';
    for(let i = 0; i < 3; i++) {
        let randomColor = Math.floor(Math.random() * 256);
        rgb += randomColor + ',';
    }
    return `rgb(${rgb})`;
}


//Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(n) {
    const valuesOfHexa = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const hexadecimal = [];
    for(let i = 0; i < n; i++) {
        let hexaNum = '#';
        for(let j = 0; j < 6; j++){
            let numRandom = Math.floor(Math.random() * valuesOfHexa.length);
            hexaNum += valuesOfHexa[numRandom];
        }
        hexadecimal.push(hexaNum);
    }
    return hexadecimal;
}


//Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(n) {
    const rgbArr = [];
    for(let i = 0; i < n; i++){
        let rgb = '';
        for(let j = 0; j < 3; j++) {
            let randomNum = Math.floor(Math.random() * 256);
            rgb += randomNum + ',';     
        }
        rgbArr.push(rgb);
    }
    return rgbArr;
}


//Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(type, n) {
    if(type == 'hexa'){
        const arrOfHexa = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        const hexadecimal = [];
        for(let i = 0; i < n; i++) {
            let hexaNum = '#';
            for(let j = 0; j < 6; j++){
                let numRandom = Math.floor(Math.random() * arrOfHexa.length);
                hexaNum += arrOfHexa[numRandom];
            }
            hexadecimal.push(hexaNum);
        }
        return hexadecimal;
    }
    if(type == 'rgb') {
        const rgbArr = [];
        for(let i = 0; i < n; i++){
        let rgb = '';
            for(let j = 0; j < 3; j++) {
                let randomNum = Math.floor(Math.random() * 256);
                rgb += randomNum + ',';     
            }
            rgbArr.push(rgb);
        }
        return rgbArr;
    }
    if(type != 'hexa' && type != 'rgb') {
        return alert('Please select a type (hexa or rgb)');
    }
}


//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n) {
    if(n == '1') {
        return 1;
    }
    let factorial = n;
    for(let i = n; i > 1; i--) {
        factorial *= (i - 1);
    }
    return factorial;
}


//Call your function sum, it takes any number of arguments and it returns the sum.
function sum () {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}


//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr) {
    let sum = 0;
    for(const item of arr) {
        if(typeof(item) == 'number') {
            sum += item;
        }else {
            continue;
        }
    }
    return sum;
}


//Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) == 'number') {
            sum += arr[i];
        }else {
            continue;
        }
    }
    let average = sum / arr.length;
    return average;
}


//Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(arr) {
    if(arr.length < 5) {
        return 'item not found';
    }else {
        arr.splice(4, 1, arr[4].toUpperCase());
        return arr;
    }
}


//Write a function called isPrime, which checks if a number is prime number.
function isPrime(n) {
    let isPrime = true;
    if(n === 1) {
        return isPrime;
    }
    for(let i = 2; i <= n - 1; i++) {
        if(n % i == 0) {
            isPrime = false;
            return isPrime;
            break;
        }
    }
    return !isPrime;
}


//Write a function which checks if all items are unique in the array.
function uniqueItem(arr) {
    let result = true;
    for(let i = 0; i < arr.length; i++) {

        for(let j = 0; j < arr.length; j++) {

            if( i !== j) {

                if(arr[i] === arr[j]) {
                    result = false;
                    break;
                }
            }
            
        }

        if(!result) {
            break;
        }
    }
    return result;
}


//Write a function which checks if all the items of the array are the same data type.
function sameDataType(arr) {
    let sameDataType = false;
    for(let i = 0; i < arr.length; i ++) {

        for(let j = 0; j < arr.length; j++) {

            if(i !== j) {

                if(typeof(arr[i]) === typeof(arr[j])) {
                    sameDataType = true;
                }else {
                    sameDataType = false;
                }
            }
        }

        if(!sameDataType) {
            break;
        }
    }
    return sameDataType;

}


//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function randomNumber() {
    const arrRandomNumber = [];
    while(arrRandomNumber.length < 7) {
        let randomNumber = Math.floor(Math.random() * 10);
        if(arrRandomNumber.indexOf(randomNumber) === -1) {
            arrRandomNumber.push(randomNumber);
        } 
    }
    return arrRandomNumber;
}


//Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(arr) {
    let newArr = [];
    for(const item of arr) {
        newArr.push(item);
    }
    newArr.reverse();
    return newArr;
}