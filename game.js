let computerScore = 0;
let playerScore = 0; 

let playerSelection = "";
let computerSelection = computerPlay();

function computerPlay(){
    switch(Math.floor(Math.random() * 3)) {
      case 0: return "Rock";
      case 1: return "Scissors";
      case 2: return "Paper";
     
    }
}
function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "Paper") {
      computerScore++;
      return("You Lose! Paper beats Rock");
      }
      else if (playerSelection === "rock" &&  computerSelection === "Scissors") {
      playerScore++;
        return("You win! Rock beats Scissors");
      
      }
      else if(playerSelection === "rock" && computerSelection === "Rock"){
        return("Tie!");
      }
      else if (playerSelection === "paper" && computerSelection === "Rock") {
        playerScore++;
        return("You Win! Paper beats Rock");
      }
      else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
        return("You Lose! Scissors beats Paper");
      } 
      else if (playerSelection === "paper" && computerSelection === "Paper") {
        return("Tie");
      }
      else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        return("You Win! Scissors beats Paper");
      } 
      else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        return("You Lose! Rock beats Scissors");
      }
      else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        computerScore++;
        return("You Lose! Rock beats Scissors");
    }
  }

function game(){
playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase("");
computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase("");
computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase("");
computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase("");
computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase("");
computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

lastScore();

}

game();

function lastScore(){
  if(playerScore > computerScore){
console.log("You have won");
}
  else if(computerScore > playerScore){
console.log("You have lost");
}
  else if(playerScore === computerScore){
console.log("Tie");
}
}
