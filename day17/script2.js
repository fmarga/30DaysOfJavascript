//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
    firstName: 'nome',
    lastName: 'last',
    age: 28,
    skills: ['HTML', 'CSS', 'JavaScript', 'NodeJs'],
    country: 'Brazil'
}

const studentStringify = JSON.stringify(student);
localStorage.setItem('student', studentStringify);