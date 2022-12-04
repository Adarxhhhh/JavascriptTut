let a = 5;
let b = 10;

console.log("a =", a)


console.log("Updated value of a after increment");

a++;
console.log(a);

console.log("Updated value of a after decrement");

a-=2;

console.log(a);

//Assignment operators;

let c =10;

c+=4;

console.log(c);

c*=4;

console.log(c);

c**=2;

console.log(c);

console.log(56*56);

// Similarly there are other operators such as -= & /=


//Comparison Operators - always return boolean value


let d = 10;
let e = 11;

console.log("d == e", d==e);

console.log("d != e", d != e);

let f = "10";

// d == f -- first converts the string into a number and then compares them
// Here we use a stricter version of equal comparison which checks if both the values and datatypes match

console.log("d == f", d==f);

console.log("d === f", d===f);

 // Other operators include Logical operators.

 // They are && , || and , !

 // Ternary operators

 // works on the principle of a?b:c 

 // a is the condition 

 // if a is true then b is executed else c is executed


let age = 25;

let result = age >=18 ? "adult" : "Not an adult";

console.log(result);

// this is a compact form of if else but is not as easy to understand at first glance