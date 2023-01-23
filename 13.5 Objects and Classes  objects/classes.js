const student = {
    name:'sarvesh',
    marks:56,
    talk:function () {
        console.log(`my name is ${this.name} my marks are ${this.marks}`);
    }
}

// student.talk();

// const age = 26;
// const message = "my name is "+age;

// console.log(message);

class Vehicle {
   

    constructor(model, wheels) {

        this.model = model;
        this.wheels = wheels;

        //

    }

    start() {
        console.log('vehicle starting');
    }
   
}

class Scooter extends Vehicle {

}

const obj1 = new Vehicle("sedan",6)
const obj2 = new Vehicle("Hatchback",4)

console.log(obj1);
console.log(obj2);

console.log(typeof Vehicle);
const h1 = obj1.start()


//JSON  => javascript Object Notation






