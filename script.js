let playerSelection = prompt("Rock, Paper or Scissor!").toLowerCase();
const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;
let roundwinner = "";

// Function to get the computers choice

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";

    }
}

// Function to play one round

function playRound(playerSelection, computerSelection) {
    if((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissor" && playerSelection === "paper") || (computerSelection === "rock" && playerSelection === "scissor")){
        computerScore++;
        roundwinner = "computer";
    } else if((computerSelection === "paper" && playerSelection === "scissor") || (computerSelection === "scissor" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "paper")) {
        playerScore++;
        roundwinner = "player";
    } else if(computerSelection === playerSelection) {
        roundwinner = "tie";
    }
}

// Function to increase the score

/*function increaseScore() {
    if(roundwinner === "computer") {
        playerScore++;
    } else if(roundwinner === "player") {
        computerScore++;
    }
}*/

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
        console.log(playRound());
        console.log(roundwinner);
    }
}
console.log(game());