'use strict'

let counter = 0;
let name = prompt("Can you tell me your name plaese?");
alert("Welcome to my website " + name + ", after you read the paragraph, you will answer some questions, and don't worry about the case sensetive.\nare you ready? let's goo.");

let sport = prompt("Do you think I like to play football?\nyes/no or y/n");

if(sport !== null){
    sport = sport.toLowerCase();
}

switch(sport){
    case 'yes':
    case 'y':
    alert("Bravo, you are right.");
    console.log("Bravo, you are right.");
    counter++;
    break;

    case 'no':
    case 'n':
    alert("Sorry, it's false.");
    console.log("Sorry, it's false.");
    break;
}

let prog = prompt("Do you think I like the programming?\nyes/no");

if(prog !== null){
    prog = prog.toLowerCase();
}
switch(prog){
    case 'yes':
    case 'y':
    alert("Bravo, you are right.");
    console.log("Bravo, you are right.");
    counter++;
    break;

    case 'no':
    case 'n':
    alert("Sorry, I told you that I love problem solving.");
    console.log("Sorry, I told you that I love problem solving.");
    break;
}

let birth = prompt("Do you think I was born in may?\nyes/no or y/n");

if(birth !== null){
    birth = birth.toLowerCase();
}

switch(birth){
    case 'yes':
    case 'y':
    alert("Sorry, it's october.");
    console.log("Sorry, it's october.");
    break;

    case 'no':
    case 'n':
    alert("Bravo, you are right.");
    console.log("Bravo, you are right.");
    counter++;
    break;
}

let age = prompt("Do you think I was born 2001?\nyes/no or y/n");

if(age !== null){
    age = age.toLowerCase();
}

switch(age){
    case 'yes':
    case 'y':
    alert("Bravo, you are right.");
    console.log("Bravo, you are right.");
    counter++;
    break;

    case 'no':
    case 'n':
    alert("Sorry, it's false");
    console.log("Sorry, it's false");
    break;
}

let smoke = prompt("Do you think that I'm smoking?\nyes/no or y/n");

if(smoke !== null){
    smoke = smoke.toLowerCase();
}

switch(smoke){
    case 'yes':
    case 'y':
    alert("Sorry, it's false");
    console.log("Sorry, it's false");
    break;

    case 'no':
    case 'n':
    alert("Bravo, you are right.");
    console.log("Bravo, you are right.");
    counter++;
    break;
}

let num = Number (prompt("OK, let's now play the guessing number game.\nYou have four chances to guess the number, input the first one."));

for(let i = 1; i <= 3; i++){

    if(num == 7){
        alert("yes, it's right")
        console.log("yes, it's right")
        counter++;
        break;
    }else if(num > 7){
        alert("too high")
        console.log("too high")
    }else{
        alert("too low")
        console.log("too low")
    }

    num = prompt("Chance " + (i + 1))
}
alert("the correct answer is 7")
console.log("the correct answer is 7")

let arr = ['red', 'blue', 'black']

let color = prompt("Now you will have 6 attempts to guess one of three correct answers.\nYou should write a color name to guess.\nChance 1.");
let flag = false
for(let i = 1; i <= 5; i++){
    for(let j = 0; j <arr.length; j++){
        if(color == arr[j]){
            alert("yes, it's right")   
            console.log("yes, it's right")   
            counter++;
            flag = true
        }
    }
    if(flag){
        break;
    }
    color = prompt("Chance " + (i + 1))
}

alert("These are the possible answers:  \n" + arr);
console.log("These are the possible answers:  \n" + arr);


alert("Your score is " + counter + "/7\nI hope you excited with the game " + name + ", good bye.");
console.log("Your score is " + counter + "/7\nI hope you excited with the game " + name + ", good bye.");