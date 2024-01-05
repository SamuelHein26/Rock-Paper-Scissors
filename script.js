function getComputerChoice() {
  var comChoice = ["rock", "paper", "scissors"];
  var randomNum = Math.floor(Math.random() * comChoice.length);
  var getrandomChoice = comChoice[randomNum];
  return getrandomChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose, Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win, Rock beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win, Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose, Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose, Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win, Scissors beat Paper";
  } else return "It's a Draw!";
}

function game() {
  for (var i = 0; i < 5; i++) {
    var playerSelection = prompt("Input Player Selection: ");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
