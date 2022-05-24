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
    let compWin = "Computer wins!";
    let playerWin = "Player wins!";
    let tie = "It's a tie!";

    console.log(`Player chooses: ${playerSel}\nComputer chooses: ${compSel}`)

    if (compSel === playerSel) {
        return tie;
    } else if ((compSel == "Rock" && playerSel == "Scissors") || (compSel == "Scissors" && playerSel == "Paper")) {
        return compWin;
    } else {
        return playerWin;
    }
}