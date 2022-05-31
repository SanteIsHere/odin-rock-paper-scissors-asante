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

// ===== UI Section ===== //

function playRoundUI(playerSel=getPlayerSel(node), compSel=computerPlay(), output) {
    let compWin = "Computer wins the round!";
    let playerWin = "Player wins the round!";
    let tie = "It's a tie!";
    let playerInputs = document.getElementsByName("choices")
    
    output.textContent = `Player chooses: ${playerSel}\nComputer chooses: ${compSel}`

    if (compSel === playerSel) {
        output.textContent = tie
        return 0;
    } else if ((compSel.match(/Rock|rock/g) && playerSel.match(/Scissors|scissors/g)) 
    || (compSel.match(/Scissors|scissors/g) && playerSel.match(/Paper|paper/g))) {
        output.textContent = `${compWin}`;
        return 1;
    } else {
        output.textContent = `${playerWin}`;
        return 2;
    }
}

function game(rounds, output) {
    for (let i = 0; i < rounds; i++) {
        let result = playRoundUI(output);
        switch (result) {
            case 0:
                output.textContent = `Tie...No points for computer or player...\nComputer Score: ${compScore}\nPlayer Score: ${playerScore}`;
                output.textContent = "---- END ROUND ----";
            case 1:
                // Computer wins round
                compScore += 1;
                output.textContent = `Computer wins the round!\nComputer Score: ${compScore}\nPlayer Score: ${playerScore}`;
                output.textContent = "---- END ROUND ----";
            case 2:
                // Player wins round
                playerScore += 1;
                output.textContent = `Player wins the round!\nComputer Score: ${compScore}\nPlayer Score: ${playerScore}`;
                output.textContent = "---- END ROUND ----";
        }
    }
    if (compScore === playerScore) {
        output.textContent = "Tie game!"
    } else if (compScore > playerScore) {
        output.textContent = "Computer wins!"
    } else {
        output.textContent = "Player wins!"
    }
}

function getRounds() {
    output.textContent = `Playing ${roundsInput.value} rounds...`;
    roundsInputCont.style.display = "none"
    setTimeout(() => output.textContent = "", 4000);
    return roundsInput.value;
}

function getPlayerSel(node) {
    console.log(node)
    return node.className
}

function onSelButton(node) {
    node.addEventListener("click", getPlayerSel)
}

function playGameUI() {
    // Play Rock, Paper, Scissors with 
    //  interactive UI elements
    let compScore = 0;
    let playerScore = 0;
    let output = document.getElementById("output")
    let roundsInput = document.getElementById("roundsInput")
    let buttons = document.getElementsByName("choices")
    const scoreBox = document.getElementById("scoreBox")
    const compScoreUI = document.getElementById("compScoreDisplay")
    const playerScoreUI = document.getElementById("playerScoreDisplay")
    const playButton = document.getElementById("playButton")
    const playerChoice = document.getElementById("playerChoices")
    const roundsInputCont = document.getElementById("roundsInputCont")
    /* Hide the play button,
    reveal the scorebox and player choices */
    roundsInputCont.style.display = "flex"
    playerChoice.style.display = "flex"
    scoreBox.style.display = "flex"
    playButton.style.display = "none"
    buttons.forEach(onSelButton)
    console.log(buttons[0].className)
    let rounds = Number(getRounds())
    game(rounds, output)
}
