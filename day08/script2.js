const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

//Find the person who has many skills in the users object.
const values = Object.values(users);
const keys = Object.keys(users);
const lenghtSkills = [];
const keysUsers = [];
for(let i = 0; i < values.length; i++) {
    lenghtSkills.push(values[i].skills.length);
    keysUsers.push(keys[i]);
}
//lengthSkills = [3, 8, 5, 4, 6, 4, 7];
//keyUsers = ['Alex',  'Asab', 'Brook', 'Daniel', 'John',  'Thomas', 'Paul'];
//Asab has many skills in the users object


//Count logged in users, count users having greater than equal to 50 points from the following object.
const loggedArr = [];
for(let i = 0; i < values.length; i++) {
    if(values[i].isLoggedIn) {
        loggedArr.push(values[i].isLoggedIn);
    }
}
const usersLogged = loggedArr.length;

//count users having greater than equal to 50 points
const greaterThan50 = [];
for(let i = 0; i < values.length; i++) {
    if(values[i].points >= 50) {
        greaterThan50.push(values[i].points);
    }
}
const greaterPoints = greaterThan50.length;


//Find people who are MERN stack developer from the users object
const mernStack = [];
for(let i = 0; i < values.length; i++) {
    mernStack.push(values[i].skills);
}
for(let i = 0; i < mernStack.length; i++) {
    for(let j = 0; j < mernStack[i]; j++) {
        
    }
}
console.log(mernStack);


//Set your name in the users object without modifying the original users object
const copyUsers = Object.assign({}, users);
copyUsers.Marga = {
    email: 'marga.fmartins@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    age: 27,
    isLoggedIn: false,
    points: 40
};


//Get all keys or properties of users object
const entries = Object.entries(users);

//Get all the values of users object
const valuesUsers = Object.values(users);