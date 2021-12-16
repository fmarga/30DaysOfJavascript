const countries1 = ['Afghanistan', 'Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Central African Republic','Chad','Chile','China','Colombi','Comoros','Congo (Brazzaville)','Congo','Costa Rica',"Cote d'Ivoire",'Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor (Timor Timur)','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Fiji','Finland','France','Gabon','Gambia, The','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Korea, North','Korea, South','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macedonia'];

//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const countries2 = [];
for(const country of countries1){
    countries2.push(country);
}
const sortedCountries = countries2.sort();


//Sort the webTechs array and mernStack array
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

const sortedWebTechs = webTechs.sort();
const sortedMernStack = mernStack.sort();


//Extract all the countries contain the word 'land' from the countries array and print it as array
const countriesLand = [];
for(const country of countries1){
    if(country.includes('land')){
        countriesLand.push(country.slice());
    }
}


//Find the country containing the highest number of characters in the countries array
const lenArr = [];
for(let i = 0; i < countries1.length; i++){
    lenArr.push(countries1[i].length);
}
lenArr.sort((n1,n2) => n1 - n2).reverse();
const highestNumberCountry = lenArr[0];


//Extract all the countries containing only four characters from the countries array and print it as array
const fourLettersArr = [];
for(const country of countries1){
    if(country.length == 4){
        fourLettersArr.push(country);
    }
}


//Extract all the countries containing two or more words from the countries array and print it as array
const twoWordsCountry = [];
for(const country of countries1){
    if(country.includes(' ')){
        twoWordsCountry.push(country.slice());
    }
}


//Reverse the countries array and capitalize each country and stored it as an array
const lastArr = [];
for(const country of countries1){
    lastArr.push(country.toUpperCase());
}
lastArr.reverse();