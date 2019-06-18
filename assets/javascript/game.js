// Creates an array that lists out all of the options the computer could choose.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesSoFar = [];
let numberOfLosses = 0;
let numberOfWins = 0;
let numberOfGuesses = 15;




//code for loop to reset game after tries run out
//log user guess and coputer guess for each round




// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if (userGuess !== computerGuess) {
        numberOfLosses++;
        numberOfGuesses--;
        alert("You got lost.");
        console.log("Number of Losses " + numberOfLosses);
        var losses = document.getElementById("losses");
        losses.textContent = "Number of Losses: " + numberOfLosses;
        var wins = document.getElementById("wins");
        wins.textContent = "Number of Wins: " + numberOfWins;
        var guesses = document.getElementById("guesses");
        guesses.textContent = "Number of Guesses Remaining: " + numberOfGuesses;
        var remaining = document.getElementById("soFar");
        remaining.textContent = "Your Guesses so Far: " + guessesSoFar;
        console.log(guessesSoFar);
        guessesSoFar.push(userGuess);
        if (numberOfGuesses === 0) {
            alert("Game Over!");
            numberOfGuesses = 15;
            numberOfLosses = 0;
            numberOfWins = 0;
            guessesSoFar = [];
        };
    }

    if (userGuess === computerGuess) {
        numberOfWins++;
        numberOfGuesses--;
        alert("You got won.");
        console.log("Number of Wins " + numberOfWins);
        var losses = document.getElementById("losses");
        losses.textContent = "Number of Losses: " + numberOfLosses;
        var wins = document.getElementById("wins");
        wins.textContent = "Number of Wins: " + numberOfWins;
        var guesses = document.getElementById("guesses");
        guesses.textContent = "Number of Guesses Remaining: " + numberOfGuesses;
        var remaining = document.getElementById("soFar");
        remaining.textContent = "Your Guesses so Far: " + guessesSoFar;
        console.log(guessesSoFar);
        guessesSoFar.push(userGuess);
        if (numberOfGuesses === 0) {
            alert("Game Over!");
            numberOfGuesses = 15;
            numberOfLosses = 0;
            numberOfWins = 0;
            guessesSoFar = [];
        };
    }





};