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
// var userGuess = document.getElementById("youGuesses");
// var win = document.getElementById("win");
// var loss = document.getElementById("loss");
// var guessesLeft = document.getElementById("guessesLeft");
// var yourGuesses = document.getElementById("yourGuesses");
var userWin = 0;
var userLoss = 0;
var userGuesses = "";

document.onkeyup = function(event) {
  var computerGuess = letterArray[Math.floor(Math.random() * 26)];
  var letterGuessed = event.key.toLowerCase();

  if (computerGuess === letterGuessed) {
    userWin++;
    console.log("Win: " + userWin);
    console.log("Loss: " + userLoss);
  } else {
    userLoss++;
    console.log("Loss: " + userLoss);
    console.log("Win: " + userWin);
  }
};
