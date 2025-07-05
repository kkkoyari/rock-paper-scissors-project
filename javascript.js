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