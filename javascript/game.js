const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock'){
        return userInput;
    }else if (userInput === 'paper'){
        return userInput;
    }else if (userInput === 'sciccors' || userInput=='sciccor'){
        return userInput;
    }else{
        console.log("Invalid Argument: Please type in rock, paper or scissor.")
    }
}

function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3); // Picks a number between 0-2
    switch (randomNum){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'sciccors';
    }
}

function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
        return "tie";
    }
    if (userChoice === "rock"){
        if (computerChoice === "paper"){
            return 'Computer Wins!'
        }else if(computerChoice === "sciccors"){
            return 'Congratulations, You Win!'
        }
    }else if (userChoice === 'paper'){
        if (computerChoice === "rock"){
            return 'Congratulations, You Win!'
        }else if(computerChoice === "sciccors"){
            return 'Computer Wins!'
        }
    }else if (userChoice === 'sciccors' || userChoice === 'sciccor'){
        if (computerChoice === "rock"){
            return 'Computer Wins!'
        }else if(computerChoice === "paper"){
            return 'Congratulations, You Win!'
        }
    }
}

function playGame(){
    const userChoice = getUserChoice("rock");
    const computerChoice = getComputerChoice();
    console.log(`Player Chose: ${userChoice}`)
    console.log(`Computer Chose: ${computerChoice}`)

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();