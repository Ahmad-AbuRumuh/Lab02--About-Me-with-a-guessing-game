'use strict'
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
    break;
}

alert("I hope you excited with the game " + name + ", good bye.");

