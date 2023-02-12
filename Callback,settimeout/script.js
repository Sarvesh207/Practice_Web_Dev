// console.log('this is revision of call back settimeout');
// function greet(name) {
//     console.log('hello world',name);
// }
// console.log('before greet');
// setTimeout((()=>{
//     greet('sarvesh')
// }),5000)
// // console.log("this is wreeten after 3sec");
// // greet();

//  set interval
// let count = 0;
// function increaseCount() {
//     count++;
//     console.log(count);
// }

// setInterval(increaseCount,3000)

// Callback
// const orderPizza = ((Callback)=>{
//     setTimeout(()=>{
//         const pizza = 'PIZZA'
//         Callback(pizza)
//         // console.log('pizza ordered');
//         // return pizzzza;
//     },4000)
// })

// function getCheese(next) {
//     setTimeout(()=>{
//         const cheese = "CHEESE"
//         console.log(`Sending the ${cheese}`);
//         next(cheese)
//     }, 2000)
// }

// function makeDough(){

// }

// function bakePizza(){

// }

// orderPizza((pizza)=>{
//     console.log("here's ur pizza"+pizza);
// });
// console.log('visted college');
// console.log('rest');
// // console.log(pizza);
// console.log('hii there here we staring with promises');
// function orderPizza(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const isAvilable = false;
//             if(isAvilable){
//                 const pizza = "Got PIZZA"
//                 resolve(pizza)
//             }else {
//                 reject('We do not have pizza')
//             }
//         },1000)
//     })
// }
// const pizzaPromise = orderPizza()
// pizzaPromise.then((pizza)=>{
//     console.log('my pizza',pizza);
// }).catch((err)=>{
//     console.log('error occured',err);
// })

//
function getCheese(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Cheese 🧀')
        }, 2000);
    })
}

function makeDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`${cheese} Dough 🍩`)
        },2000)
    })
    
}

function makePizza(dough){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`${dough} Pizza 🍕`)
        },2000)
    })
}

async function orderPizza(){
    const cheese = await getCheese();
    console.log('we have ',cheese);
    const dough = await makeDough(cheese);
    console.log('now we have ', dough);
    const pizza = await makePizza(dough);
    console.log('now we have ',pizza);
    return pizza;
}

orderPizza().then((pizza)=>{
    console.log(pizza);
})
