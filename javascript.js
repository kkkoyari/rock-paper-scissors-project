

function getComputerChoice() {
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
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

function playGame() {

    let userScore = 0;
    let computerScore = 0;

    let userSelection = getUserChoice();
    let computerSelection = getComputerChoice();
    
    playRound(userSelection, computerSelection);

    userSelection = getUserChoice();
    computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);

    userSelection = getUserChoice();
    computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);

    userSelection = getUserChoice();
    computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);

    userSelection = getUserChoice();
    computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);


    function playRound(userChoice, computerChoice) {

        function capitalize(string) {
            if (typeof string === 'string') {
                let capitalizedChoice = string.at(0).toUpperCase() + string.slice(1).toLowerCase();
                return capitalizedChoice;
            } 

        }

        let capitalizedUserChoice = capitalize(userChoice);
        let capitalizedComputerChoice = capitalize(computerChoice);

        if (userChoice === computerChoice) {
           console.log(`It's draw! Both you and computer choose ${computerChoice}.`)

        } else if (userChoice === "rock" && computerChoice === "paper" || 
            userChoice === "scissors" && computerChoice === "rock" ||
            userChoice === "paper" && computerChoice === "scissors"
        ) {
           computerScore += 1;
           console.log(`You lose! ${capitalizedComputerChoice} beats ${userChoice}.`)

        } else if (userChoice === "rock" && computerChoice === "scissors" ||
            userChoice === "scissors" && computerChoice === "paper" || 
            userChoice === "paper" && computerChoice === "rock"
        ) {
           userScore += 1;
           console.log(`You win! ${capitalizedUserChoice} beats ${computerChoice}.`)

        }

    }
    
    if (userScore > computerScore) {
        console.log(`You win! Your score is ${userScore} against computer's ${computerScore} points!`)
    } else if (userScore === computerScore) {
        console.log(`Draw! Your and computer's score are ${computerScore}.`)
    } else if (userScore < computerScore) {
        console.log(`You lose! Your score is ${userScore} against computer's ${computerScore} points!`)
    }

}

playGame();