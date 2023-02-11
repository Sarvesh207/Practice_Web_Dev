console.log('this is revision of call back settimeout');
function greet(name) {
    console.log('hello world',name);
}
console.log('before greet');
setTimeout((()=>{
    greet('sarvesh')
}),5000)
// console.log("this is wreeten after 3sec");
// greet();