var letterArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var winText = document.getElementById("win");
var lossText = document.getElementById("loss");
var guessesLeftText = document.getElementById("guessesLeft");
var userGuessesText = document.getElementById("userGuesses");
var computerGuess = letterArray[Math.floor(Math.random() * 26)];
var wins = 0;
var losses = 0;

//this grabs the users key input
document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase();
  var numberOfGuesses = 9;

  //this tells the game what to do if the user guesses correctly
  function winningFunction() {
    wins++;
    numberOfGuesses = 9;
    winText.textContent = "Wins: " + wins;
    guessesLeftText.textContent = "Guesses Left: " + numberOfGuesses;
  }

  //this give 9 chances for the user to guess the right letter
  function guessAgainFunction() {
    numberOfGuesses--;
    guessesLeftText.textContent = "Guesses Left: " + numberOfGuesses;
    userGuessesText.append(userGuess);
  }

  //this tells the game what do do when guesses have expired and still no correct guess
  function loseFunction() {
    losses++;
    numberOfGuesses = 9;
    winText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + numberOfGuesses;
    userGuessesText.textContent = "Your Guesses So Far: ";
  }

  //this will tell us which function to run based on the right guess or not
  if (numberOfGuesses > 0) {
    if (userGuess === computerGuess) {
      winningFunction();
    } else {
      guessAgainFunction();
    }
  } else {
    loseFunction();
  }
};

//this is where I'm stuck.
//Wins works perfect.
//Appending guesses works kind of.
//Decreasing guesses only works to 8.
//Losses doesn't work.

//I'm guessing that I need to run a loop but I'm unclear where to put it.
