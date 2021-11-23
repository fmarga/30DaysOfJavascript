let phrase1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(phrase1.match('love'));

let phrase2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(phrase2.match('because'));

const ph = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const monthlySalary = 5000;
const annualBonus = 10000;
const monthlyCourses = 15000;

const annualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourses * 12);
console.log(annualIncome);