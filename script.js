// The computer chooses a random selection from the array
function computerPlay() {
    return ["Rock", "Paper", "Scissors"][Math.round(Math.random() * 2)]
}

// Helper function to format playerSelection
function capitalize(str) {
    return `${str[0].toUpperCase()}${str.slice(1, str.length).toLowerCase()}`
}

function playerSelection() {
    return capitalize(prompt("Enter your choice (Rock/Paper/Scissors): "))
}

// Function to play a round of RPS
function playRound(playerSel=playerSelection(), compSel=computerPlay()) {
    let compWin = "Computer wins the round!";
    let playerWin = "Player wins the round!";
    let tie = "It's a tie!";

    console.log(`Player chooses: ${playerSel}\nComputer chooses: ${compSel}`);

    if (compSel === playerSel) {
        console.log(tie);
        return 0;
    } else if ((compSel == "Rock" && playerSel == "Scissors") 
    || (compSel == "Scissors" && playerSel == "Paper")) {
        console.log(`${compWin}\n`);
        return 1;
    } else {
        console.log(`${playerWin}\n`);
        return 2;
    }
}

// Function to play the game
function playGame() {
    let computerScore = 0;
    let playerScore = 0;
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        switch (result) {
            case 0:
                console.log(`Tie...No points for computer or player...\nComputer Score: ${computerScore}\nPlayer Score: ${playerScore}`);
                console.log("---- END ROUND ----");
            case 1:
                // Computer wins round
                computerScore += 1;
                console.log(`Computer wins the round!\nComputer Score: ${computerScore}\nPlayer Score: ${playerScore}`);
                console.log("---- END ROUND ----");
            case 2:
                // Player wins round
                playerScore += 1;
                console.log(`Player wins the round!\nComputer Score: ${computerScore}\nPlayer Score: ${playerScore}`);
                console.log("---- END ROUND ----");
        }
    }
    if (computerScore === playerScore) {
        console.log("Tie game!")
    } else if (computerScore > playerScore) {
        console.log("Computer wins!")
    } else {
        console.log("Player wins!")
    }
}