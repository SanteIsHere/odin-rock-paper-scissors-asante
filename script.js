// // The computer chooses a random selection from the array
function computerPlay() {
    return ["Rock", "Paper", "Scissors"][Math.round(Math.random() * 2)]
}

// // Helper function to format playerSelection
// function capitalize(str) {
//     return `${str[0].toUpperCase()}${str.slice(1, str.length).toLowerCase()}`
// }

// function playerSelection() {
//     return capitalize(prompt("Enter your choice (Rock/Paper/Scissors): "))
// }

// // Function to play a round of RPS
// function playRound(playerSel=playerSelection(), compSel=computerPlay()) {
//     let compWin = "Computer wins the round!";
//     let playerWin = "Player wins the round!";
//     let tie = "It's a tie!";

//     console.log(`Player chooses: ${playerSel}\nComputer chooses: ${compSel}`);

//     if (compSel === playerSel) {
//         console.log(tie);
//         return 0;
//     } else if ((compSel == "Rock" && playerSel == "Scissors") 
//     || (compSel == "Scissors" && playerSel == "Paper")) {
//         console.log(`${compWin}\n`);
//         return 1;
//     } else {
//         console.log(`${playerWin}\n`);
//         return 2;
//     }
// }

// // Function to play the game
// function playGame() {
//     let computerScore = 0;
//     let playerScore = 0;
//     // Play 5 rounds
//     for (let i = 0; i < 5; i++) {
//         let result = playRound();
//         switch (result) {
//             case 0:
//                 console.log(`Tie...No points for computer or player...\nComputer Score: ${computerScore}\nPlayer Score: ${playerScore}`);
//                 console.log("---- END ROUND ----");
//             case 1:
//                 // Computer wins round
//                 computerScore += 1;
//                 console.log(`Computer wins the round!\nComputer Score: ${computerScore}\nPlayer Score: ${playerScore}`);
//                 console.log("---- END ROUND ----");
//             case 2:
//                 // Player wins round
//                 playerScore += 1;
//                 console.log(`Player wins the round!\nComputer Score: ${computerScore}\nPlayer Score: ${playerScore}`);
//                 console.log("---- END ROUND ----");
//         }
//     }
//     if (computerScore === playerScore) {
//         console.log("Tie game!")
//     } else if (computerScore > playerScore) {
//         console.log("Computer wins!")
//     } else {
//         console.log("Player wins!")
//     }
// }

// ==== Begin UI ==== //
function playRoundUI(playerSel, compSel=computerPlay()) {
    info.textContent = `Player chooses: ${playerSel}\nComputer chooses: ${compSel}`;

    setTimeout(function() {if (compSel === playerSel) {
        console.log("Tie")
        game(0);
    } else if ((compSel === "Rock" && playerSel === "Scissors") || (compSel === "Scissors" && playerSel === "Paper")
    || (compSel === "Paper" && playerSel === "Rock")) {
        console.log("Comp win")
        game(1);
    } else {
        console.log("Player win")
        game(2);
    }}, 3000)
}

function game(result) {
    if (result === 0) {
        info.textContent = "Tie...";
        setTimeout(() => info.textContent = "Pick your weapon!", 3000)
    } else if (result === 1) {
        // Computer wins round
        computerScore += 1;
        compScoreDisplay.textContent = computerScore
        info.textContent = "Computer wins the round...";
        setTimeout(() => info.textContent = "Pick your weapon!", 3000)
    } else if (result === 2) {
        // Player wins round
        playerScore += 1;
        playerScoreDisplay.textContent = playerScore
        info.textContent = "You win the round!";
        setTimeout(() => info.textContent = "Pick your weapon!", 3000)
    }
    rounds += 1
    roundsLeft -= 1
    console.log("Rounds Left: " + roundsLeft)
    roundsDisplay.textContent = rounds
}

function onChoice(node) {
    // console.log(node.className)
    if (roundsLeft >= 1) {
    playRoundUI(node.className)
    } else {
        endScreen()
    }
}

function endScreen() {
    document.getElementById("game").remove()
    info.textContent = `Game Over! ${Math.max(computerScore, playerScore)} won!`
}

// Scores
let computerScore = 0;
let playerScore = 0;
let playerScoreDisplay = document.getElementById("playerScore")
let compScoreDisplay = document.getElementById("compScore")

// UI elements
let info = document.getElementById("info")
let roundsDisplay = document.getElementById("rounds")
info.textContent = ""

// Buttons
let choices = document.getElementsByName("choice")
choices.forEach(function (choice) {choice.addEventListener("click", function (e) {onChoice(e.target)})})
let rounds = 0
let roundsLeft = 5