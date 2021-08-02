'use strict'
let name = prompt("Can you tell me your name plaese?");
alert("Welcome to my website " + name + ", after you read the paragraph, you will answer some questions, and don't worry about the case sensetive.\nare you ready? let's goo.");

let sport = prompt("Do you think I like to play football?\nyes/no");

if(sport !== null){
    sport = sport.toLowerCase();
}

switch(sport){
    case 'yes':
    alert("Bravo, you are right.");
    console.log("Bravo, you are right.");
    break;

    case 'no':
    alert("Sorry, it's false.");
    console.log("Sorry, it's false.");
    break;
}

let prog = prompt("Do you think I like the programming?\nyes/no");

if(prog !== null){
    prog = prog.toLowerCase
}

if(prog == "yes"){
    alert("Bravo, you are right.");
    console.log("Bravo, you are right.");
} else{
    alert("Sorry, I told you that I love problem solving.");
    console.log("Sorry, I told you that I love problem solving.");
}

alert("I hope you excited with the game " + name + ", good bye.");

