const playerSelection = prompt("Rock, Paper or Scissor!").toLowerCase();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let playGame = playRound(playerSelection, computerSelection);
//let gamesPlayed = 0;

// Function to get the computers choice

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0) {
        return "rock";
    } else if(randomNumber === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

// Function to play one round

function playRound(playerSelection, computerSelection) {
    if(computerSelection === "paper" && playerSelection === "rock") {
        return "Computer wins";
    } else if(computerSelection === "paper" && playerSelection === "scissor") {
        return "Player wins";
    } else if(computerSelection === "scissor" && playerSelection === "paper") {
        return "Computer wins";
    } else if(computerSelection === "scissor" && playerSelection === "rock") {
        return "Player wins";
    } else if(computerSelection === "rock" && playerSelection === "scissor") {
        return "Computer wins";
    } else if(computerSelection === "rock" && playerSelection === "paper") {
        return "Player wins";
    } else if(computerSelection === playerSelection) {
        return "It's a tie!";
    } else {
        alert("Please enter a valid response!");
    }
}

// Function to increase the score

function increaseScore() {
    if(playGame === "Computer wins") {
        computerScore++;
    } else if(playGame === "Player wins") {
        playerScore++;
    }
}

// Function to determine and showcase the winner

function determineWinner() {
    if(computerScore === 5) {
        console.log("The computer has won the game!");
    } else if(playerScore === 5) {
        console.log("You have won the game!");
    }
}

// Function to play 5 games

function game() {
    for(let gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++) {
        playRound(playerSelection, computerSelection);
        increaseScore();
        determineWinner();
        console.log(playGame);
    }
}
console.log(game());