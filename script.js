let playerSelection = prompt("Type rock, paper or scissor").toLowerCase();
let computerSelection = computerChoice();
let result = playOneRound(playerSelection, computerSelection);
let playerScore = 0;
let computerScore = 0;


// This function generates a random number between 0 and 2.
// Then it declares rock, paper or scissor depending on the number.
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
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
    if(playerSelection === computerSelection) {
        return "It's a tie";
    } else if((playerSelection === "rock" && computerSelection === "scissor")) {
        return "You win!";
    } else if((playerSelection === "scissor" && computerSelection === "paper")) {
        return "You win!";
    } else if((playerSelection === "paper" && computerSelection === "rock")) {
        return "You win!";
    } else if((computerSelection === "rock" && playerSelection === "scissor")) {
        return "The computer wins";
    } else if((computerSelection === "scissor" && playerSelection === "paper")) {
        return "The computer wins";
    } else if((computerSelection === "paper" && playerSelection === "rock")) {
        return "The computer wins";
    }
}

// This function asks for a new prompt anytime it's called.
function resetSelection() {
    playerSelection = prompt("Type rock, paper or scissor").toLowerCase();
}

// This function will loop the game 5 times.
function game() {
    for(let i = 1; i <= 5; i++) {
        playOneRound(playerSelection, computerSelection);
        resetSelection();
    }
}
//console.log(playOneRound(playerSelection, computerSelection));
//console.log(declareWinner(result));
//onsole.log(result);
//console.log(declareWinner(result));