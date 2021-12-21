//Declare a function fullName and it print out your full name.
function fullName() {
    let name = 'Margarete';
    let lastName = 'Freitas'; 
    console.log(`${name} ${lastName}`);
}


//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}


//Declare a function addNumbers and it takes two parameters and it returns sum.
function addNumbers(n1, n2) {
    let sum = n1 + n2
    return sum;
}


//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(len, wid) {
    let area = len * wid;
    return area;
}


//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(len, wid) {
    let perimeter = 2 * (len + wid);
    return perimeter;
}


//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(len, wid, heig) {
    let volume = len * wid * heig;
    return volume;
}


//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCirle(r){
    let pi = Math.PI;
    let area = pi * r * r;
    return area;
}


//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCirle(r){
    let pi = Math.PI;
    let circum = 2 * pi * r;
    return circum;
}


//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
    let density = mass / volume;
    return density;
}


//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
    let speedOfMoving = distance / time;
    return speedOfMoving;
}


//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity) {
    let weight = mass * gravity;
    return weight;
}


//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(temperature) {
    let f = (temperature * 9/5) + 32;
    return f;
}


//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function bmi(weight, height) {
    let bmi = weight / (height * height);

    if(bmi < 18.5) {
        return 'Underweight';
    }else if(bmi > 18.5 && bmi < 24.9) {
        return 'Normal weight';
    }else if(bmi > 24.9 && bmi < 29.9){
        return 'Overweight';
    }else{
        return 'Obese';
    }
}


//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month){
    let monthGiven = month.toLowerCase();

    switch(monthGiven) {
        case 'december':
            return 'Winter';
            break;
        case 'january':
            return 'Winter';
            break;
        case 'february':
            return 'Winter';
            break;
        case 'march':
            return 'Spring';
            break;
        case 'april':
            return 'Spring';
            break;
        case 'june':
            return 'Spring';
            break;
        case 'july':
            return 'Summer';
            break;
        case 'august':
            return 'Summer';
            break;
        case 'september':
            return 'Autumn';
            break;
        case 'october':
            return 'Autumn';
            break;
        case 'november':
            return 'Autumn';
            break;
        default:
            return 'Select a month';
            break;
    }
}


//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum without using Math.max method.
function findMax(n1, n2, n3) {
    if(n1 > n2 && n1 > n3) {
        return n1;
    }else if(n2 > n1 && n2 > n3) {
        return n2;
    }else{
        return n3;
    }
}
