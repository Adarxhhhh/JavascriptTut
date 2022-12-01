
// there are mainly 2 types of data like all other languages, Prim and non prim

let age = 24;
console.log(age);

// there is another type of variables similar to all other languages in js. Big int
// all numbers of type bigint end with n eg : 12345n 

date = BigInt("12345");
console.log(date);

let y=Symbol("hello");
console.log(y);


////// ------------------------ Non Primitive datatypes------------------ ///////////////

// These are objects.  They store key value pairs

//for eg:
//Here the student object stores key value pairs  
const student =  {
    fullName : "Sammed Turamandi",
    age : 20,
    gpa : 9.9,
    isPass : true,
};

// There are 2 ways to get the key value pairs
    // Method 1 : object.key()
    // Method 2 : object[key]

console.log(student["fullName"]);
console.log(student.age);


// to update the value of any attribute in an object all you have to do is reassign using object.key

//for example

student.age = student.age +1;
console.log(student.age);

// now on the console you can see that both the previous and the updated ages are available