


const obj = {
//   name: "riya",

  getName:function (){
    return this.name
  },

  getRoll: function(){
  return this.roll
  }
}

console.log(obj);

const obj2 = {
  roll: 1,
  name:'sarvesh',
  __proto__: obj,
};

console.log(obj2.getRoll());

const obj3 = {
    name:'sarvesh',
    class : "MCA",
    __proto__:obj2,

}

console.log(obj3.getName());

const array2 =['sarvesh']
console.log(array2);

const object = new Object()
console.log(object);


const array = new Array()
console.log(array);


Array.prototype.show = function(){
    return this
}

const cities = ['Amravati']
console.log(cities.show());

Array.prototype.convertIntoObject = function() {
    let newObj = {};
    this.forEach(el => {
        newObj[el] = el;
    })
    return newObj;
}

console.log(cities.convertIntoObject());

function MyPrototype(name){
    this.name=name
    this.name=roll
}

MyPrototype.prototype = obj;

MyPrototype.prototype
const myproto = new MyPrototype("shiva","22");
console.log(myproto.getRoll);
