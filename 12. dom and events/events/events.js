const grandparent = document.getElementById('grandparent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')


child.addEventListener('click',() =>{
    console.log('child clicked');
})

child.addEventListener('click',() =>{
    console.log('parent clicked');
})

child.addEventListener('click',() =>{
    console.log('grandparent clicked');
})


// const box = document.getElementById("box");

// let count = 0;

// const coordinates = document.createElement('p')

// const logMessage = (event) => {
// //   console.log("Hii this is a log");
// //   console.log("Clicked",count++);
//     console.log(event);
//     coordinates.innerHTML = `${event.offsetX} ${event.offsetY}`;
// }

// // logMessage();


// box.addEventListener('click',logMessage)
