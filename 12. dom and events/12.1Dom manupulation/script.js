// const heading = document.querySelector('.heading');
// heading.innerHTML = 'web dev is awsome'

// heading.style.color = 'red'
// heading.style.fontSize = '100px'


// const heading = document.createElement('h1');
// heading.innerHTML = 'javascript is awEsome';

// const parent = document.querySelector('.parent')
// parent.appendChild(heading);


// const subHeading = document.createElement('h3');
// subHeading.innerHTML = 'WEB IS AWESOME'
// heading.insertAdjacentElement('afterend',subHeading);


//dom events

const button = document.querySelector('#btn');
const heading = document.querySelector('#heading');

button.addEventListener('click',function () {
    heading.style.color = 'purple'
    console.log('button clicked');
})




