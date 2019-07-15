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
  if (userGuess === computerGuess && maxGuesses > 0) {
    wins++;
    maxGuesses = 9;
    winText.textContent = "Wins: " + wins;
    guessesLeftText.textContent = "Guesses Left: " + maxGuesses;
    userGuessesText.textContent = "Your Guesses So Far:";
    guessesArray = [];

    //what do do when the user loses:  increment losses after 9 attempts, resent maxguesses to 9, clear previous guesses
  } else if (userGuess !== computerGuess && maxGuesses === 0) {
    losses++;
    maxGuesses = 9;
    lossText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + maxGuesses;
    userGuessesText.textContent = "Your Guesses So Far:";
    guessesArray = [];

    //what to do when the user guesses incorrectly but hasn't reached 9 attempts, tell them what they guessed so far
  } else {
    //the user will chose something that needs to be pushed to the array.
    //if the user already guessed that letter do nothing, alert that the user already guessed that.
    //if the user hasn't guessed that letter then the below and add that letter to the array

    guessesArray.push = userGuess;

    maxGuesses--;
    guessesLeftText.textContent = "Guesses Left: " + maxGuesses;
    userGuessesText.append(userGuess);
  }
};

// TODO Add logic so that if the user keeps guessing the same letter over and over again, it isn't recorded over and over again and doesn't count against attempts
// TODO Might need to make an array to keep track of the user guesses to take care of this
