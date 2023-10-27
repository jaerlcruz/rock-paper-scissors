function getComputerChoice() {
    const rps = ["Rock", "Paper", "Scissors"]
    let choice = rps[Math.floor(Math.random() * rps.length)]

    return choice;
}

console.log('yo mama')
function playRound(playerSelection, computerSelection) {
    const rps = ["ROCK", "PAPER", "SCISSORS"]
    const result = ["Rock", "Paper", "Scissors"]
    player = rps.indexOf(playerSelection.toUpperCase())
    bot = rps.indexOf(computerSelection.toUpperCase())
    if (player > bot || (player == 0 && bot == 2))   {
        return [0, result[player], result[bot]] // "You win! " + (result[player]) + " beats " + (result[bot]);
    }
    else if (player == bot) {
        return [2, result[player], result[bot]] // "It's a tie! " + (result[player]) + " = " + (result[bot]);
    }
    else {
        return [1, result[player], result[bot]]// "You lose! " + (result[bot]) + " beats " + (result[player]);
    }
}


function game() {
    // let playerSelection = prompt("Your choice: ")
    // const computerSelection = getComputerChoice();
    const results = document.querySelector('#Results');
    let result = document.createElement('div');
    // let scores = document.querySelector('#scores');
    
    let playerScore = 0;
    let computerScore = 0;

    const selectRock = document.querySelector('#rockbtn');
    console.log(selectRock)
    selectRock.addEventListener("click", () => {
        round = playRound("Rock", getComputerChoice()); // result.textContent =  
        if (round[0] == 0) {
            playerScore++;
            console.log(playerScore)
            result.innerHTML = `You win! ${round[1]} beats ${round[2]}`;
        }
        else if (round[0] == 1) {
            computerScore = computerScore + 1;
            result.innerHTML = `You lose! ${round[2]} beats ${round[1]}`;
        }
        else {
            result.innerHTML = `It's a tie! ${round[1]} = ${round[1]}`;
        }
        points = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        document.getElementById("scores").innerHTML = points
        if (playerScore == 5) {
            alert('Congratulations, you win!')
        }
        else if (computerScore == 5) {
            alert('Boohoo, you lose!')
        }
    
    });

    const selectPaper = document.querySelector('#paperbtn');
    selectPaper.addEventListener("click", () => {
        round = playRound("Paper", getComputerChoice());
        if (round[0] == 0) {
            playerScore++;
            console.log(playerScore)
            result.innerHTML = `You win! ${round[1]} beats ${round[2]}`;
        }
        else if (round[0] == 1) {
            computerScore = computerScore + 1;
            result.innerHTML = `You lose! ${round[2]} beats ${round[1]}`;
        }
        else {
            result.innerHTML = `It's a tie! ${round[1]} = ${round[1]}`;
        }
        points = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        document.getElementById("scores").innerHTML = points
        if (playerScore == 5) {
            alert('Congratulations, you win!')
        }
        else if (computerScore == 5) {
            alert('Boohoo, you lose!')
        }
    
    });
    const selectScissors = document.querySelector('#scissorsbtn');
    selectScissors.addEventListener("click", () => {
        round = playRound("Scissors", getComputerChoice());
        if (round[0] == 0) {
            playerScore++;
            console.log(playerScore)
            result.innerHTML = `You win! ${round[1]} beats ${round[2]}`;
        }
        else if (round[0] == 1) {
            computerScore = computerScore + 1;
            result.innerHTML = `You lose! ${round[2]} beats ${round[1]}`;
        }
        else {
            result.innerHTML = `It's a tie! ${round[1]} = ${round[1]}`;
        }
        points = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        document.getElementById("scores").innerHTML = points
        if (playerScore == 5) {
            alert('Congratulations, you win!')
        }
        else if (computerScore == 5) {
            alert('Boohoo, you lose!')
        }
    
    });
    results.appendChild(result);

    console.log("Goodbye!"); }

game();