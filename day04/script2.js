/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/
let grade = 99;
if(grade >= 80 && grade <= 100){
    console.log(`Your grade is ${grade}, so your score is A`);
}else if(grade >= 70 && grade <= 89){
    console.log(`Your grade is ${grade}, so your score is B`);
}else if(grade >= 60 && grade <= 69){
    console.log(`Your grade is ${grade}, so your score is C`);
}else if(grade >= 50 && grade <= 59){
    console.log(`Your grade is ${grade}, so your score is D`);
}else{
    console.log(`Your grade is ${grade}, so your score is F`);
}


/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/
let month = prompt('Enter the actual month:');
month.toLowerCase();
if(month == 'september' || month == 'october' || month == 'november'){
    console.log(`It's Autumn!`);
}else if(month == 'december' || month == 'january' || month == 'february'){
    console.log(`It's Winter!`);
}else if(month == 'march' || month == 'april' || month == 'may'){
    console.log(`It's Spring!`);
}else{
    console.log(`It's Summer!`);
}


//Check if a day is weekend day or a working day. Your script will take day as an input.
let dayUserInput = prompt('What is the day today?');
let day = dayUserInput.toLowerCase();
switch(day) {
    case 'monday':
        console.log('Monday is a working day');
        break;
    case 'tuesday':
        console.log('Tuesday is a working day');
        break;
    case 'wednesday':
        console.log('Wednesday is a working day');
        break; 
    case 'Thursday':
        console.log('Thursday is a working day');
        break; 
    case 'Friday':
        console.log('Friday is a working day');
        break;
    case 'Saturday':
        console.log('Saturday is a weekend day');
        break;
    case 'Sunday':
        console.log('Sunday is a weekend day');
        break;
    default:
        console.log('You need to enter a day');
}