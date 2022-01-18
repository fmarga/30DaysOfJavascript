const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}


//Change skills array to JSON using JSON.stringify()
const skillsStringify = JSON.stringify(skills);


//Stringify the age variable
const ageStrigify = JSON.stringify(age);


//Stringify the isMarried variable
const isMarriedStringify = JSON.stringify(isMarried);


//Stringify the student object
const studentStringify = JSON.stringify(student);

console.log(studentStringify);