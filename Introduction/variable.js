// var keyword lets you declare the same variable with different values which is not a goos way of declaring
// This is a legacy way of declaring variables and was sued before the release og es6 in 2015
var age = 24;
var age = 55;
var age = 84;  

console.log(age);

// Using let you cannot declare the same variable twice, but the variable can be updated
let date = 22;
date = 11;

console.log(date);

// Using const is like giving a fixed value to a variable. you cannot update the value of this variable
const time = 11;

// time = 12;  This will throw a assignment is constant error as const cannot be reassigned
console.log(time);


// both let and const have block scope i.e they are local variables.

// for example

{
    let a = 20;
    console.log(a); // the scope of a is valid only to these curly braces.
}

{
    let a = 40; // this is a new function hence a can be redefined here
    console.log(a);
}