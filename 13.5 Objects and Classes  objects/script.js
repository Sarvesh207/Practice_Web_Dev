const myObj = {
    age:26,
    isHuman:true,
    hobbies:['singing','coding']
}

myObj.skills = 'coding'
myObj.name = "sarvesh"
myObj.age = 23

// console.log(myObj["age"]);
// console.log(myObj["isHuman"]);

// we can uzse for in loop to iterate over a object

for(const keys in myObj) {

    console.log(myObj[keys]);

}

function getVehicle() {
    return {
        type: 'cart',
        wheel: 4
    }
}

const myVehicle = getVehicle();
log

