//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
const age = parseInt(prompt('Enter your age:'));
if(age > 18){
    console.log('You are old enough to drive');
}else{
    let child = 18 - age;
    console.log(`You are left with ${child} years to drive.`);
}


//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
const yourAge = parseInt(prompt('Enter your age:'));
const myAge = 27;
let diff;
if(yourAge > myAge){
    diff = yourAge - myAge;
    console.log(`You are ${diff} older than me.`);
}else{
    diff = myAge - yourAge;
    console.log(`I am ${diff} older than you.`);
}


//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
const a = 4;
const b = 3;
    //using if else
    if(a > b){
        return 'a is greater than b'
    }else{
        return 'a is less than b';
    }

    //ternary operator.
    (a > b) ? 'a is greater than b' : 'a is less than b';


//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const number = parseInt(prompt('Enter a number:'));
if(number % 2 === 0){
    console.log(`${number} is an even number`);
}else{
    console.log(`${number} is an odd number`);
}