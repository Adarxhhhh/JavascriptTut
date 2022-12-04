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

let num = 0;

while(num <= 40){
    if(num % 2 == 0){
        console.log(num);
    }
    num++;
}

for(let i=0; i<=30; i++){
    if(i%2 == 0){
        console.log(i,"is an even number");
    }
}


// Game number

let correctNum = 18;

let userNum = prompt("guess game number between 10 and 20 : ");

while(userNum != correctNum){
    userNum = prompt("Wrong guess, Guess again");
}

console.log("Congratulations you guessed the right number");
alert("Cogratulations, You guessed the right number");