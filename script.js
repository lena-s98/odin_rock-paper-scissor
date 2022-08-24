var computerSelection = "";
var playerSelection = "";
var playerScore = 0;
var computerScore = 0;

const playerButtons = document.querySelectorAll("button");

const resultsContainer = document.querySelector(".results");

var choiceDisplay = document.createElement("h2");
resultsContainer.appendChild(choiceDisplay);

const roundResult = document.createElement("h3");
resultsContainer.appendChild(roundResult);

const playerScoreTitle = document.createElement("h2");
playerScoreTitle.textContent = ` Your score is: ${playerScore}`;
resultsContainer.appendChild(playerScoreTitle);

const computerScoreTitle = document.createElement("h2");
computerScoreTitle.textContent = ` The computers score is: ${computerScore}`;
resultsContainer.appendChild(computerScoreTitle);

const gameWinner = document.createElement("h1");
resultsContainer.appendChild(gameWinner);

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

// This function will play one round of rock, paper, scissor in the console.
// It will take the players choice and the random computers choice then compare them with eachother.
// After the comparison it will declare a winner depending on the comparison.
function playOneRound(playerSelection, computerSelection) {
	//Computerchoice gets called and stored in the computerSelection variable.
	computerChoice();
	computerSelection = computerChoice();
	choiceDisplay.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}`;

	if (playerSelection === computerSelection) {
		roundResult.textContent = "It's a tie";
	} else if (
		(playerSelection === "rock" && computerSelection === "scissor") ||
		(playerSelection === "scissor" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "rock")
	) {
		playerScore++;
		playerScoreTitle.textContent = ` Your score is: ${playerScore}`;
		roundResult.textContent = "You win this round";
	} else if (
		(computerSelection === "rock" && playerSelection === "scissor") ||
		(computerSelection === "scissor" && playerSelection === "paper") ||
		(computerSelection === "paper" && playerSelection === "rock")
	) {
		computerScore++;
		computerScoreTitle.textContent = ` The computers score is: ${computerScore}`;
		roundResult.textContent = "You lose this round";
	}
}

function determineWinner() {
	if ((playerScore = 5)) {
		gameWinner.textContent = "You win the game!";
	} else if ((computerScore = 5)) {
		gameWinner.textContent = "You lose the game.";
	}
}

// Eventlistener for the playerselection buttons
playerButtons.forEach((button) =>
	button.addEventListener("click", () => {
		playerSelection = button.value;
		playOneRound(playerSelection, computerSelection);
		determineWinner();
	})
);

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
