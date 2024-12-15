// Practice set 2.
// create a game where you start with any random game number.
// Ask the user to keep guessing the game number until the user enters corret value.
let gameNum = 25; 
let guessingNum = prompt("Guess the game number:-");
while(guessingNum != gameNum){
    guessingNum = prompt("Your enetered wrong number.Guess again:-");
}

console.log("Congratulations, you entered the right number");