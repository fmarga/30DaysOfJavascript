//Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i = 0; i <= 10; i++){
    console.log(i);
}

let i = 0;
while(i <= 10){
    console.log(i);
}

do {
    console.log(i);
} while(i <= 10);


//Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let j = 10; j >= 0; j--){
    console.log(j);
}

let j = 10;
while(j >= 0){
    console.log(i);
}

do {
    console.log(i);
} while(j >= 0);


//Iterate 0 to n using for loop
for(let a = 0; a < n; a++){
    console.log(a);
}


//Write a loop that makes the following pattern using console.log():
let sharp = `#`;
console.log(sharp);
for(let s = 0; s <= 7; s++){
    sharp += '#';
    console.log(`${sharp}`);
}


//Use loop to print the following pattern:
for(let num = 0; num <= 10; num++){
    console.log(`${num} x ${num} = ${num * num}`);
}


//Using loop print the following pattern
let ind = 0;
console.log(`i\ti^2\ti^3`);
while(ind <= 10){
    console.log(`${ind}\t${ind * ind}\t${ind * ind * ind}`);
    ind++;
}


//Use for loop to iterate from 0 to 100 and print only even numbers
for(let i = 0; i <= 100; i+=2){
    console.log(i);
}


//Use for loop to iterate from 0 to 100 and print only odd numbers
for(let j = 0; j <= 100; j++){
    if(j % 2 != 0){
        console.log(j);
    }
}


//Use for loop to iterate from 0 to 100 and print only prime numbers
var i = 3;
var j = 2;
console.log(2);
while(i < 100){
    j = 2;
    while(j < i){
        if(i % j == 0){
            j = i + 1;
        }else{
            j = j + 1;
        }
    }
    if(j == i){
        console.log(i);
    }
    i++;
};


//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for(let s = 0; s <= 100; s++){
    sum += s;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);


//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdd = 0;
for(let k = 0; k <= 100; k++){
    if(k % 2 == 0){
        sumEven += k;
    }else{
        sumOdd += k;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}`);
//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
const numbers = [sumEven, sumOdd];


//Develop a small script which generate array of 5 random numbers
const arr = [];
let x = 0;
while(x <= 5){
    arr.push(parseInt((Math.random()*10)));
    x++;
}