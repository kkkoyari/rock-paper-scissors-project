let userScore = 0;
let computerScore = 0;

function getComputerChoice() {

    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); //
    }

    const randomInteger = getRandomIntInclusive(1, 3);
    let computerChoice;

    if (randomInteger === 1) {
        return computerChoice = "rock";
    } else if (randomInteger === 2) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }

}

function getUserChoice() {

    let userChoice = prompt("Enter: rock, paper or scissors:", '');

    if (userChoice === null || userChoice === '') {
        alert("Canceled.");
    } else if (userChoice.toLowerCase() === "rock" || userChoice.toLowerCase() === "paper" || userChoice.toLowerCase() === "scissors") {
        return userChoice.toLowerCase();
    } else {
        alert("Invalid input.");
    }

}

function playRound(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        console.log(`It's draw! Both you and computer chose ${userChoice}.`)

    } else if (userChoice === "rock" && computerChoice === "paper") {
        computerScore += 1;
        console.log('You lose! Paper beats rock.')

    } else if (userChoice === "rock" && computerChoice === "scissors") {
        userScore += 1;
        console.log('You win! Rock beats scissors.')

    } else if (userChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1;
        console.log("You lose! Rock beats scissors.")

    } else if (userChoice === "scissors" && computerChoice === "paper") {
        userScore += 1;
        console.log("You win! Scissors beat paper")

    } else if (userChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1;
        console.log("You lose! Scissors beats paper.")

    } else if (userChoice === "paper" && computerChoice === "rock") {
        userScore += 1;
        console.log("You win! Paper beats rock.")
    }

}

const userSelection = getUserChoice();
const computerSelection = getComputerChoice();

console.log(userSelection, computerSelection)

playRound(userSelection, computerSelection);

console.log(userScore, computerScore) 