//Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    get info() {
        return `${this.name} is ${this.age}yo and it's hair is ${this.color}`;
    }
}

//Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    saySomething() {
        console.log('I am a dog!');
    }
}

class Cat extends Animal {
    saySomething() {
        console.log('I am a cat!');
    }
}