let str = 'Aadarsh Katigi';

console.log(str); 

console.log(str.length);


for(let i=0 ;i<str.length; i++){
    if(str[i]!=' '){
        console.log(str[i]);
    }
}

let obj = {
    item : "pen",
    price : 10
}

//Using a normal String

console.log("cost of ", obj.item, " is ", obj.price, " rupees");

// Using template literals
//template literals are also of type strings
// But they have an added feature of having the ability to have variables declared inside them
console.log(`cost of ${obj.item} is ${obj.price} rupees`);


// String Interpolation is to create strings by substituting the placeholders
//ex : `string text ${expression} string text`

// the expression is called the placeholder which holds the place for the expression initially.
// The value of the expression will be calculated at runtime

// Escape Character

// \n \t etc

//String Methods;

let st = "Aadarsh Katigi"

//Here the the value of st is not modified
console.log(st.toUpperCase(), ": Convert to upper case and not stored in the original variable");

//When you print st it will still show the original string
console.log(st, ": Convert to upper case and not stored in the original variable so logging the orriginal variable will still be the initial value of the variable");

// To change the value of String completely you have to store the value of the conversion in the original string
//Now the value of the original sting will change
st = st.toUpperCase();
console.log(st, ": Convert to upper case and stored in the original variable so logging the original variable will be the uppercase value of the initial string");

//Similarly .toLowerCase()

// .trim() : Trim method removes the spaces at the start and end of a string
//for eg:

let str1 = "      Aadarsh Katigi     is    an    Engineer"
// Here the string will appear as declared
console.log(str1);

str1 = str1.trim()
//Here the trim() will remove all starting and trailing spaces and print the String in between
console.log(str1);
