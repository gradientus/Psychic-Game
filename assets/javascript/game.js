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
var computerGuess = letterArray[Math.floor(Math.random() * 26)]; //computer guess
var winText = document.getElementById("win");
var lossText = document.getElementById("loss");
var guessesLeftText = document.getElementById("guessesLeft");
var userGuessesText = document.getElementById("userGuesses");
var wins = 0;
var losses = 0;
var maxGuesses = 9;
var guessesArray = [];

//this grabs the users key input
document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase(); //set keypress to userGuess

  //what to do when the user wins: increment wins, reset maxguesses to 9, clear previous guesses
  if (userGuess === computerGuess) {
    wins++;
    maxGuesses = 9;
    computerGuess = letterArray[Math.floor(Math.random() * 26)];
    winText.textContent = "Wins: " + wins;
    guessesLeftText.textContent = "Guesses Left: 9";
    userGuessesText.textContent = "Your Guesses So Far: ";
    guessesArray = [];
  } else if (userGuess !== computerGuess && maxGuesses === 0) {
    losses++;
    maxGuesses = 9;
    computerGuess = letterArray[Math.floor(Math.random() * 26)];
    lossText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: 9";
    userGuessesText.textContent = "Your Guesses So Far:";
    guessesArray = [];
  } else if (guessesArray.indexOf(userGuess) >= 0) {
    console.log(guessesArray);
  } else {
    guessesArray.push(userGuess);
    maxGuesses--;
    guessesLeftText.textContent = "Guesses Left: " + maxGuesses;
    userGuessesText.append(userGuess);
    console.log(guessesArray);
  }
};
