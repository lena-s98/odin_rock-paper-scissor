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
        console.log("You lose! paper beats rock");
    } else if(computerSelection === "paper" && playerSelection === "scissor") {
        console.log("You win! scissor beats paper");
    } else if(computerSelection === "scissor" && playerSelection === "paper") {
        console.log("You lose! scissor beats paper");
    } else if(computerSelection === "scissor" && playerSelection === "rock") {
        console.log("You win! rock beats scissor");
    } else if(computerSelection === "rock" && playerSelection === "scissor") {
        console.log("You lose! rock beats scissor");
    } else if(computerSelection === "rock" && playerSelection === "paper") {
        console.log("You win! paper beats rock");
    }
    return;
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));