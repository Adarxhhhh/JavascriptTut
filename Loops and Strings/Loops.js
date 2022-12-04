//Loops are used to iterate till a condition is met

//for loop

let sum = 0;

for(let i=0; i<=5;i++){
    console.log("Aadarsh Katigi");

    let count = i;

    console.log(count);

    sum = sum + i;
}

console.log("Sum of the loop is equal to : ",sum);

console.log("Loop has ended");

// Infinite loops start allocating infinite memory and may cause the system to crash

//--------------------------------------------------------------------------------------------------


//while loop

let i =1;

while(i<=5){
    console.log(i);
    i++;
}

// do while loop

// do while loop always executes at least once;

let a=5;
do{
    console.log("Aadarsh");
    a++;
}while(a<=10);

//for - of loop

let str = "Aadarsh Katigi"

let length = 0;

for(let val of str){
    if(val != ' '){
    console.log(val);
    length++;}
}

console.log(length);

// prints each value of val through out the string str;

//for - in loop

let student = {
    name : "rahul Kumar",
    age : 20,
    cgpa : 7.5,
    isPass : true,
};

for(let key in student){
    console.log("key = ", key, "value = ", student[key]);
}