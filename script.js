const Choice = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerPointDisplay = document.getElementById("playerPoint");
const computerPointDisplay = document.getElementById("computerPoint");
const winnerDisplay = document.getElementById("winnerDisplay");
const btnplayAgain = document.getElementById("playagain");
btnplayAgain.style.visibility = "hidden";

let playerPoint = 0;
let computerPoint = 0;

const getComputerChoice = () => {
  var randomNum = Math.floor(Math.random() * Choice.length);
  var getrandomChoice = Choice[randomNum];
  return getrandomChoice;
};

const checkGameEnd = () => {
  if (playerPoint === 5) {
    displayWinner("You Win!!!", "greentext");
  } else if (computerPoint === 5) {
    displayWinner("You Lose!!!", "redtext");
  }
};

const displayWinner = (message, colorClass) => {
  winnerDisplay.textContent = message;
  winnerDisplay.classList.add(colorClass);
  playagain();
  stopGame();
};

const playRound = (playerSelection) => {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    result = "IT'S A TIE!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win ${playerSelection} beats ${computerSelection}`;
    playerPoint++;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    result = `You lose ${computerSelection} beat ${playerSelection}`;
    computerPoint++;
  }

  playerDisplay.textContent = `PLAYER: ${playerSelection}`;
  computerDisplay.textContent = `COMPUTER: ${computerSelection}`;

  //set player and computer points
  playerPointDisplay.textContent = `Player Point: ${playerPoint}`;
  computerPointDisplay.textContent = `Computer Point: ${computerPoint}`;

  resultDisplay.classList.remove("greentext", "redtext");
  resultDisplay.textContent = result;
  switch (result) {
    case `You win ${playerSelection} beats ${computerSelection}`:
      resultDisplay.classList.add("greentext");
      break;
    case `You lose ${computerSelection} beat ${playerSelection}`:
      resultDisplay.classList.add("redtext");
      break;
  }

  checkGameEnd();
};

const playagain = () => {
  btnplayAgain.style.visibility = "visible";

  btnplayAgain.addEventListener("click", function () {
    location.reload();
  });
};

const stopGame = () => {
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
};

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

btnRock.addEventListener("click", function () {
  playRound("rock");
});

btnPaper.addEventListener("click", function () {
  playRound("paper");
});

btnScissors.addEventListener("click", function () {
  playRound("scissors");
});
