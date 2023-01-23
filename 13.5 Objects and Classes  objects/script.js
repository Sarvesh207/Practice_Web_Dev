// const myObj = {
//     age:26,
//     isHuman:true,
//     hobbies:['singing','coding']
// }

// myObj.skills = 'coding'
// myObj.name = "sarvesh"
// myObj.age = 23

// console.log(myObj["age"]);
// console.log(myObj["isHuman"]);

// we can uzse for in loop to iterate over a object

// for(const keys in myObj) {

//     console.log(myObj[keys]);

// }


// factory function
function getVehicle() {
    return {
        type: 'cart',
        wheel: 4
    }
}

const myVehicleOne = getVehicle();
const myVehicleTwo = getVehicle();

myVehicleTwo.wheel = 3;

console.log(myVehicleTwo);

console.log(typeof getVehicle);

//Object Desstructuring

const myObj = {
    age:26,
    isHuman:true,
    hobbies:['singing','coding']
}


// const myage = myObj.age     //  instead of this we can do this we destructutrin
// const myIsHuman = myObj.isHuman;

// const {age: myAge, isHuman: myIsHuman} = myObj;
// //another way
// const {age, isHuman} = myObj;




// console.log(myAge, myIsHuman);
// console.log(age, isHuman);

// javascript objects Method

myObj.walk  = function () {
    console.log('person is walking');
}

myObj.walk()

talking(() => {
    console.log('i am shouting');
})

function talking(shouting) {

}







