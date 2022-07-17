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
        return "You lose! paper beats rock";
    } else if(computerSelection === "paper" && playerSelection === "scissor") {
        return "You win! scissor beats paper";
    } else if(computerSelection === "scissor" && playerSelection === "paper") {
        return "You lose! scissor beats paper";
    } else if(computerSelection === "scissor" && playerSelection === "rock") {
        return "You win! rock beats scissor";
    } else if(computerSelection === "rock" && playerSelection === "scissor") {
        return "You lose! rock beats scissor";
    } else if(computerSelection === "rock" && playerSelection === "paper") {
        return "You win! paper beats rock";
    } else if(computerSelection === playerSelection) {
        return "It's a tie!";
    } else {
        alert("Please enter a valid response!");
    }
}

// Function to play 5 games

function game() {

}

// Global variables

const playerSelection = prompt("Rock, Paper or Scissor!").toLowerCase();
const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

console.log(playRound(playerSelection, computerSelection));