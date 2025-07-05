function getComputerChoice() {

    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); //
    }

    let randomInteger = getRandomIntInclusive(1, 3);
    let computerChoice;

    if (randomInteger === 1) {
        return computerChoice = "rock";
    } else if (randomInteger === 2) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }

}

console.log(getComputerChoice())

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

console.log(getUserChoice())