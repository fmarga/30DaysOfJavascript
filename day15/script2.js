//Override the method you create in Animal class
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

class Dog extends Animal {
    constructor(name, age, color, legs, breed){
        super(name, age, color, legs);
        this.breed = breed;
    }
    
    saySomething() {
        console.log('I am a dog!');
    }

    get info() {
        return `${this.name} is ${this.age}yo, it's hair is ${this.color} and it's breed is ${this.breed}`;
    }
}

class Cat extends Animal {
    saySomething() {
        console.log('I am a cat!');
    }
}

const bist = new Dog('bisteca', 2, 'black', 4, 'srd');
console.log(bist.info);