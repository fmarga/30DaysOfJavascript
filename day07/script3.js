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
    
}