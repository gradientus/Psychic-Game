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

//this grabs the users key input
document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase(); //set keypress to userGuess
  console.log("computer:" + computerGuess);
  console.log("user:" + userGuess);

  if (userGuess === computerGuess && maxGuesses > 1) {
    wins++;
    maxGuesses = 9;
    winText.textContent = "Wins: " + wins;
    guessesLeftText.textContent = "Guesses Left: " + maxGuesses;
    userGuessesText.textContent = "Your Guesses So Far:"; //shouldn't this clear the append?
  } else if (userGuess !== computerGuess && maxGuesses === 1) {
    losses++;
    maxGuesses = 9;
    lossText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + maxGuesses;
    userGuessesText.textContent = "Your Guesses So Far:"; //shouldn't this clear the append?
  } else {
    maxGuesses--;
    guessesLeftText.textContent = "Guesses Left: " + maxGuesses;
    userGuessesText.append(userGuess);
  }
};

//everything working but the guesses so far.  How do I clear that after a win or loss?
