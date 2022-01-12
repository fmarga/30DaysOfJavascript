//Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const phrase = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const earn = phrase.match(/\d{4,5}/g);
const earnNum = earn.map((item) => Number(item));
const annualIncome = (earnNum[0] * 12) + earnNum[1] + (earnNum[2] * 12);


//Write a pattern which identify if a string is a valid JavaScript variable
const isValidVariable = /^[A-Z0-9]|-/;