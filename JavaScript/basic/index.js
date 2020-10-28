alert('Hello World')

// const = 상수  
let a = 221;
let b = a - 5;
a = 4;

console.log(b, a);

//String 
const what = "hellow";
console.log(what);
//Boolean
const bol = true;
console.log(bol);
//Number 
const num = 666;
console.log(num);
//float
const flo = 55.1;
console.log(flo);
//Array
const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
console.log(daysOfWeek);

//Object
const kimInfo = {
    name:"JongHyuck",
    age:27,
    gender:"Male",
    isHandsome:true    
}
console.log(kimInfo);
console.log(kimInfo.gender);
kimInfo.gender = "Female";
console.log(kimInfo.gender);

function sayHello(potato){
    console.log('Hello!',potato);
}
sayHello("kim");

function sayHello2(name, age){
  return (`Hello ${name} you are ${age} years old`);
}
const greet = sayHello2("kim", 15);

console.log(greet);

const calculator = {
    plus: function(a, b) {
        return a + b;
    }
}

const plus = calculator.plus(5, 5);
console.log(plus);


