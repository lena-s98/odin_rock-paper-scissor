var computerSelection = '';
var playerSelection = '';
var playerScore = 0;
var computerScore = 0;
const win = "You win this round";
const lose = "You lose this round";
const tie = "It's a tie";

const resultsContainer = document.querySelector('.results');

const playerScoreTitle = document.createElement('h2');
playerScoreTitle.textContent = ` Your score is: ${playerScore}`;
resultsContainer.appendChild(playerScoreTitle);

const computerScoreTitle = document.createElement('h2');
computerScoreTitle.textContent = ` The computers score is: ${computerScore}`;
resultsContainer.appendChild(computerScoreTitle);

// This function generates a random number between 0 and 2.
// Then it declares rock, paper or scissor depending on the number.
function computerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}

// Eventlistener for the playerselection buttons
const playerButtons = document.querySelectorAll('button');
playerButtons.forEach((button) => button.addEventListener('click', () => {
  playerSelection = button.value;
  console.log(playOneRound(playerSelection, computerSelection));
}));

// This function will play one round of rock, paper, scissor in the console.
// It will take the players choice and the random computers choice then compare them with eachother.
// After the comparison it will declare a winner depending on the comparison.
function playOneRound(playerSelection, computerSelection) {
  //Computerchoice gets called and stored in the computerSelection variable.
  computerChoice();
  computerSelection = computerChoice();
  console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}`)

  if (playerSelection === computerSelection) {
    return tie;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++; //---Ich musste das Doppelplus hinter die Variable schreiben---
    return win;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissor") ||
    (computerSelection === "scissor" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    computerScore++;
    return lose;
  } else {
    console.log("Please put in rock, paper or scissor");
  }
}

// This function asks for a new prompt anytime it's called.
// function resetPlayerSelection() {
//   playerSelection = prompt("Type rock, paper or scissor").toLowerCase();
// }



//---Die Reset-Funktion hätte ich als solches nicht gebraucht. Es reicht eine leere Variable, die
//in der Loop geupdatet wird---

// This function will loop the game 5 times.
// function game() {
//   for (let i = 0; i < 5; i++) {
//     playerSelection = prompt("Choose Rock, Paper or Scissor: ").toLowerCase();
//     console.log("You choose " + playerSelection);
//     computerChoice(); //---Diese Funktion aufzurufen, um eine neue Computerauswahl zu erhalten hat ausgereicht---
//     console.log("The computer chooses " + computerSelection);
//     console.log(playOneRound(playerSelection, computerSelection));
//   }
//   if (playerScore > computerScore) {
//     return "You win this game :)";
//   } else if (playerScore < computerScore) {
//     return "You lose this game";
//   } else {
//     return "It's a tie";
//   } //---Die if Funktion, die die Punkte vergleicht musste außerhalb der Loop stehen. Dann hat alles funktioniert ^-^ ---
//}

console.log(
  `Your score is ${playerScore} and the computer's score is ${computerScore}`
);
