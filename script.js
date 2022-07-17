
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0) {
        return "ROCK";
    } else if(randomNumber === 1) {
        return "PAPER";
    } else {
        return "SCISSOR";
    }
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection === "PAPER" && playerSelection === "rock") {
        console.log("You lose! Paper beats Rock");
    } else if(computerSelection === "PAPER" && playerSelection === "scissor") {
        console.log("You win!");
    } else if(computerSelection === "SCISSOR" && playerSelection === "paper") {
        console.log("You lose! Scissor beats Paper");
    } else if(computerSelection === "SCISSOR" && playerSelection === "rock") {
        console.log("You win!");
    } else if(computerSelection === "ROCK" && playerSelection === "scissor") {
        console.log("You lose! Rock beats Scissor");
    } else if(computerSelection === "ROCK" && playerSelection === "paper") {
        console.log("You win!");
    }
    return;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));