const choices = ["rock", "paper", "scissors"];
const playerChoices = document.getElementById("playerChoices");
const compChoices = document.getElementById("compChoices");
const resultDisplay = document.getElementById("resultDisplay");

function PlayGame(playerChoices){
    const compChoices = choices[Math.floor(Math.random() * 3)];

    console.log("player", playerChoices, "comp", compChoices);

    if (playerChoices === compChoices) {
        console.log("IT'S A TIE!");
    } else if (
        (playerChoices === "rock" && compChoices === "scissors")||
        (playerChoices === "paper" && compChoices === "rock")||
        (playerChoices === "scissors" && compChoices === "paper")
     ) {
        console.log(`You win! ${playerChoices} beats ${compChoices}`);
    } else {
        console.log(`You lose! ${compChoices} beats ${playerChoices}`);
    }

        console.log(compChoices);
}

