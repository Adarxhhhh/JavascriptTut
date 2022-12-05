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