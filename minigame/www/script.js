var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");

var guessSumbit = document.querySelector(".guessSumbit");
var guessField = document.querySelector(".guessField");

var guessesCount = 1;
var resetButton;

function checkGuesses() {
  var userGuesses = Number(guessField.value);
  if (guessesCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuesses + " ";

  if (userGuesses === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOwer();
  } else if (guessesCount === 10) {
    lastResult.textContent = "!!!GAME OWER!!!";
    setGameOwer();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuesses < randomNumber) {
      lowOrHi.textContent = "Last guess was to low!";
    } else if (userGuesses > randomNumber) {
      lowOrHi.textContent = "Last guess was to hight!";
    }
  }
  guessesCount++;
  guessField.value = "";
  guessField.focus();
}
guessSumbit.addEventListener("click", checkGuesses);

function setGameOwer() {
  guessField.disabled = true;
  guessSumbit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game!";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}
function resetGame() {
  guessesCount = 1;
  var resetParas = document.querySelectorAll(".resultParas p");
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSumbit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "#2e2e2e";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
