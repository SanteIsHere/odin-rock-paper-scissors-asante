// // The computer chooses a random selection from the array
function computerPlay() {
    return ["Rock", "Paper", "Scissors"][Math.round(Math.random() * 2)]
}

function playRoundUI(playerSel, compSel=computerPlay()) {
    playerPick.textContent = `Player chooses: ${playerSel}`
    compPick.textContent = `Computer chooses: ${compSel}`
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

function game(result, done=false) {
    if (result === 0) {
        results.textContent = "Tie...";
        setTimeout(() => results.textContent = "Pick your weapon!", 3000)
    } else if (result === 1) {
        // Computer wins round
        scores.set("Computer", scores.get("Computer") + 1);
        compScoreDisplay.textContent = scores.get("Computer")
        results.textContent = "Computer wins the round...";
        setTimeout(() => results.textContent = "Pick your weapon!", 3000)
    } else if (result === 2) {
        // Player wins round
        scores.set("Player", scores.get("Player") + 1);
        playerScoreDisplay.textContent = scores.get("Player")
        results.textContent = "You win the round!";
        setTimeout(() => results.textContent = "Pick your weapon!", 3000)
    }
    rounds += 1
    roundsLeft -= 1
    roundsDisplay.textContent = rounds
    playerPick.textContent = ""
    compPick.textContent = ""
}

function onChoice(node) {
    // Play a round with the class name 
    //  of the button/image ("Rock", "Paper", or "Scissors")
    if (roundsLeft >= 1) {
    playRoundUI(node.className)
    } else {
        endScreen()
    }
}

function endScreen() {
    document.getElementById("game").style.display = "none"
    let sortedScores = [...scores.entries()].sort()
    results.textContent = `Game Over! ${sortedScores[0][0]} won!`
    // Refresh the page, unhide game
    setTimeout(function() {history.go(0); document.getElementById("game").style.display = "flex"}, 5000)
}

// Scores
let scores = new Map()
scores.set("Computer", 0)
scores.set("Player", 0)
let playerScoreDisplay = document.getElementById("playerScore")
let compScoreDisplay = document.getElementById("compScore")

// UI elements
let playerPick = document.getElementById("playerPick")
let compPick = document.getElementById("compPick")
let results = document.getElementById("results")
let roundsDisplay = document.getElementById("rounds")
results.textContent = ""

// Buttons
let choices = document.getElementsByName("choice")
choices.forEach(function (choice) {choice.addEventListener("click", function (e) {onChoice(e.target)})})
let rounds = 0
let roundsLeft = 5