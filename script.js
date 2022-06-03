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

function game(result) {
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
    roundsPlayed += 1
    roundsDisplay.textContent = roundsPlayed
    playerPick.textContent = ""
    compPick.textContent = ""
    if (roundsPlayed === rounds) {
        setTimeout(endScreen(), 2500)
    }
}

function onChoice(node) {
    // Play a round with the class name 
    //  of the button/image ("Rock", "Paper", or "Scissors")
    // console.log(roundsSet)
    if (roundsSet) {
        if ((roundsPlayed < rounds)) {
            playRoundUI(node.className)
        } else {
            endScreen()
        }
    } else {
        results.textContent = "Please enter rounds!"
        setTimeout(() => results.textContent = "", 2000)
    }  
}

function endScreen() {
    document.getElementById("game").style.display = "none"
    results.textContent = ""
    let sortedScores = [...scores.entries()].sort(function(arr1, arr2) {return arr2[1]-arr1[1]})
    console.log(scores)
    sortedScores.forEach((score) => console.log(score))
    if (scores.get("Computer") != scores.get("Player")) {
        console.log("Someone won")
        results.textContent = `Game Over! ${sortedScores[0][0]} won with ${sortedScores[0][1]} points!\n
            ${sortedScores[1][0]} had ${sortedScores[1][1]} points...`
        // Refresh the page, unhide game
        setTimeout(function() {history.go(0); document.getElementById("game").style.display = "flex"}, 5000)
    } else {
        console.log("Tie game!")
        results.textContent = `Tie game!`
            setTimeout(function() {history.go(0); document.getElementById("game").style.display = "flex"}, 5000)
    }
}

function setRounds() {
    roundsSet = true
    rounds = Number(document.getElementById('roundInput').value)
    results.textContent = `Playing ${rounds} rounds`
    setTimeout(function() {roundInput.style.display = "none";
                            setTimeout(() => results.textContent = "", 2500)}, 2500)
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
let roundInput = document.getElementById("roundSel")
let roundsDisplay = document.getElementById("rounds")
results.textContent = ""

// Buttons
let choices = document.getElementsByName("choice")
choices.forEach(function (choice) {choice.addEventListener("click", function (e) {onChoice(e.target)})})

// Rounds (TODO: Add player input for rounds)
let rounds
let roundsPlayed = 0
let roundsSet = false