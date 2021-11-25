//Write a program which tells the number of days in a month.
let monthByUser = prompt('Enter a month:');
let month = monthByUser.toLowerCase();

switch(month){
    case 'january':
        console.log('January has 31 days.');
        break;
    case 'february':
        console.log('February has 28 days.');
        break;
    case 'march':
        console.log('March has 31 days.');
        break;
    case 'april':
        console.log('February has 30 days.');
        break;
    case 'may':
        console.log('May has 31 days.');
        break;
    case 'june':
        console.log('June has 30 days.');
        break;
    case 'july':
        console.log('July has 30 days.');
        break;
    case 'august':
        console.log('August has 31 days.');
        break;
    case 'september':
        console.log('September has 30 days.');
        break;
    case 'october':
        console.log('October has 31 days.');
        break;
    case 'november':
        console.log('May has 30 days.');
        break;
    case 'december':
        console.log('December has 31 days.');
        break;
    default:
        console.log('You need to enter a month.');
}

//Write a program which tells the number of days in a month, now consider leap year.
let monthByUser = prompt('Enter a month:');
let month = monthByUser.toLowerCase();
let leapYear = prompt(`It's a leap year?`).toLowerCase();

switch(month){
    case 'january':
        console.log('January has 31 days.');
        break;
    case 'february':
        if(leapYear == 'yes'){
            console.log('February has 29 days.');
            break;
        }else{
            console.log('February has 28 days.');
            break;
        }  
    case 'march':
        console.log('March has 31 days.');
        break;
    case 'april':
        console.log('February has 30 days.');
        break;
    case 'may':
        console.log('May has 31 days.');
        break;
    case 'june':
        console.log('June has 30 days.');
        break;
    case 'july':
        console.log('July has 30 days.');
        break;
    case 'august':
        console.log('August has 31 days.');
        break;
    case 'september':
        console.log('September has 30 days.');
        break;
    case 'october':
        console.log('October has 31 days.');
        break;
    case 'november':
        console.log('May has 30 days.');
        break;
    case 'december':
        console.log('December has 31 days.');
        break;
    default:
        console.log('You need to enter a month.');
}
