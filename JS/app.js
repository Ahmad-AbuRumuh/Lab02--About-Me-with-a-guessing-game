'use strict'

let counter = 0;

let name = prompt("Can you tell me your name plaese?");
alert("Welcome to my website " + name + ", after you read the paragraph, you will answer some questions, and don't worry about the case sensetive.\nare you ready? let's goo.");
function  correct(x){
if(x !== null){
    x = x.toLowerCase();
}

switch(x){
    case 'yes':
    case 'y':
    alert("Bravo, you are right.");
    console.log("Bravo, you are right.");
    counter++;
        break;
        case 'no':
        case 'n':
        alert("sorry, its false.");
        console.log("sorry, its false.");
        break;
}
}
function incorect(y){
    if(y !== null){
    y = y.toLowerCase();
    }switch(y){
        case 'no':
        case 'n':
        alert("Bravo, you are right.");
        console.log("Bravo, you are right.");
        break;
        case 'yes':
        case 'y':
    alert("sorry, its false.");
    console.log("sorry, its false.");
    counter++;
        break;

}}
let sport = prompt("Do you think I like to play football?\nyes/no or y/n");
correct(sport);

let prog = prompt("Do you think I like the programming?\nyes/no");
 correct(prog);

let birth = prompt("Do you think I was born in may?\nyes/no or y/n");
incorect(birth);

let age = prompt("Do you think I was born 2001?\nyes/no or y/n");
correct(age);

let smoke = prompt("Do you think that I'm smoking?\nyes/no or y/n");
incorect(smoke);

// guess number q6

let num = Number (prompt("OK, let's now play the guessing number game.\nYou have four chances to guess the number, input the first one."));
function guessnum(){
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
console.log("the correct answer is 7")}
guessnum(num);

// guess number q7
let color = prompt("Now you will have 6 attempts to guess one of three correct answers.\nYou should write a color name to guess.\nChance 1.");
function guesscolors(){
let arr = ['red', 'blue', 'black']
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
console.log("These are the possible answers:  \n" + arr);}

guesscolors(color);
alert("Your score is " + counter + "/7\nI hope you excited with the game " + name + ", good bye.");
console.log("Your score is " + counter + "/7\nI hope you excited with the game " + name + ", good bye.");