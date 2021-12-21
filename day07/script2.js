//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
    
}


//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.



//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}


//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    let now = new Date();
    return `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`; 
}


//Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
    let t = x;
    x = y;
    y = t;
    return [x, y];
}


//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
    let arr2 = [];
    for(let i = 0; i <= arr.length; i++) {
        arr2.push(arr.pop());
    }
    return arr2;
}


//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
    let capitalizedArray = [];
    for(let i = 0; i < arr.length; i++) {
        capitalizedArray.push(arr[i].toUpperCase());
    }
    return capitalizedArray;
}


//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
    let arr = [];
    arr.push(item);
    return arr;
}


//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item


//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(n) {
    let acumulador = n;
    for(let i = n; i > 0; i--) {
        acumulador += (i - 1);
    }
    return acumulador;
}


//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(n) {
    let acumulador = 0;
    let numero = 1;
    while(numero <= n) {
        if(numero % 2 != 0) {
            acumulador += numero;
        }
        numero++;
    }
    return acumulador;
}


//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(n) {
    let acumulador = 0;
    let numero = 2;
    while(numero <= n) {
        if(numero % 2 == 0) {
            acumulador += numero;
        }
        numero++;
    }
    return acumulador;
}


//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(n) {
    let acumuladorE = [];
    let acumuladorO = [];
    let num = 0;
    while(num <= n) {
        if(num % 2 == 0) {
            acumuladorE.push(num);
        }else{
            acumuladorO.push(num);
        }
        num++;
    }
    return `The number of odds are ${acumuladorO.length}, and the number of evens are ${acumuladorE.length}`;
}


//Write a function which takes any number of arguments and return the sum of the arguments
function sum() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}


//Write a function which generates a randomUserIp.
function randomUserIp() {
    //an user ip looks like this: 122.164.16.213
    let n = 0;
    let random;
    let ip = '';
    while(n < 4){
        random = Math.floor(Math.random() * 256);
        ip += random + '.';
        n++;
    }
    return `${ip}`;
}


//Write a function which generates a randomMacAddress
function randomMacAddress() {
    //3d:15:c2:e8:2c:2c
}


//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
    let hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let acum = '#';
    for(let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexa.length);
        acum += hexa[random];
    }
    return acum;
}


//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    let str = 'abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWYXZ12345567890';
    let arr = str.split('');
    let id = '';
    for(let i = 0; i < 8; i++) {
        let random = Math.floor(Math.random() * arr.length);
        id += arr[random];
    }
    return id;
}

