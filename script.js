function getComputerChoice() {
    const rps = ["Rock", "Paper", "Scissors"]
    let choice = rps[Math.floor(Math.random() * rps.length)]

    return choice;
}

function playRound(playerSelection, computerSelection) {
    const rps = ["ROCK", "PAPER", "SCISSORS"]
    const result = ["Rock", "Paper", "Scissors"]
    player = rps.indexOf(playerSelection.toUpperCase())
    bot = rps.indexOf(computerSelection.toUpperCase())
    if (player > bot || (player == 0 && bot == 2))   {
        return "You win! " + (result[player]) + " beats " + (result[bot]);
    }
    else if (player == bot) {
        return "It's a tie! " + (result [player]) + " = " + (result[bot]);
    }
    else {
        return "You lose! " + (result[bot]) + " beats " + (result[player]);
    }
}

function game() {
    for (let i = 0; i < 5; i ++) {
        let playerSelection = prompt("Your choice: ")
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    } 
    console.log("Goodbye!")
}

game();