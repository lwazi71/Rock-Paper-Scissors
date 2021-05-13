// selects html ID's with DOM// 
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var currentRound = document.querySelector('#currentRound');
var pScore = document.querySelector('#pscore');
var cScore = document.querySelector('#cscore');
var buttons = document.querySelector('#buttons');
var winner = document.querySelector('#winner');
var smile = document.querySelector('#smile');
var frown = document.querySelector('#frown');

const newText = document.createElement('div');
newText.classList.add('newText');
//Variables// 
let computerScore = 0;
let playerScore = 0; 

pScore.textContent = playerScore;
cScore.textContent = computerScore;

let playerSelection;

let currentScore = `
Player: ${playerScore}
Computer: ${computerScore}`;
//Event Listeners for icons//
sad.addEventListener('click', function () {
  location.reload();
  return false;
});
smile.addEventListener('click', function () {
  location.reload();
  return false;
});

rock.addEventListener('click',function () {
  determineScore('Rock');
});

paper.addEventListener('click', function () {
  determineScore('Paper');

});

scissors.addEventListener('click', function () {
  determineScore('Scissors');

 
});
//Computer A.I Function//
function computerPlay(){
    switch(Math.floor(Math.random() * 3)) {
      case 0: return "Rock";
      case 1: return "Scissors";
      case 2: return "Paper";
    }
}
// Function to update score// 
function newScore() {
  currentScore = `
  Player: ${playerScore}
  Computer: ${computerScore}`;
}

//Game function//
function playRound(playerSelection) {

  let computerSelection = computerPlay();

  if((playerSelection === 'Rock') && (computerSelection === 'Paper')){
      newText.textContent = 'You lose the round! Paper beats Rock.';
      currentRound.appendChild(newText);
      ++computerScore;
      newScore();
      pScore.innerText = playerScore;
      cScore.innerText = computerScore;
  
    } else if((playerSelection === 'Rock') && (computerSelection === 'Scissors')){
      newText.textContent = 'You win the round! Rock beats Scissors.';
      currentRound.appendChild(newText);
      ++playerScore;
      newScore();
      pScore.innerText = playerScore;
      cScore.innerText = computerScore;
  
    } else if((playerSelection === 'Rock') && (computerSelection === 'Rock')){
      newText.textContent = 'Draw Rock cancels Rock';
      currentRound.appendChild(newText);
      newScore();
      pScore.innerText = playerScore;
      cScore.innerText = computerScore;
  
    } else if((playerSelection === 'Paper') && (computerSelection === 'Paper')){
      newText.textContent = 'Draw Paper cancels Paper';
      currentRound.appendChild(newText);
      newScore();
      pScore.innerText = playerScore;
      cScore.innerText = computerScore;
  
    } else if((playerSelection === 'Paper') && (computerSelection === 'Rock')){
      newText.textContent = 'You win Paper beats Rock';
      currentRound.appendChild(newText);
      ++playerScore;
      newScore();
      pScore.innerText = playerScore;
      cScore.innerText = computerScore;
  
    } else if((playerSelection === 'Paper') && (computerSelection === 'Scissors')){
      newText.textContent = 'You lose Scissors beats Paper';
      currentRound.appendChild(newText);
      ++computerScore;
      newScore();
      pScore.innerText = playerScore;
      cScore.innerText = computerScore;
  
    } else if((playerSelection === 'Scissors') && (computerSelection === 'Scissors')){
      newText.textContent = 'Draw Scissors cancles Scissors';
      currentRound.appendChild(newText);
      newScore();
      pScore.innerText = playerScore;
      cScore.innerText = computerScore;
    
    } else if((playerSelection === 'Scissors') && (computerSelection === 'Rock')){
      newText.textContent = 'You lose Rock Beats Scissors';
      currentRound.appendChild(newText);
      ++computerScore;
      newScore();
      pScore.innerText = playerScore;
      cScore.innerText = computerScore;

    } else if((playerSelection === 'Scissors') && (computerSelection === 'Paper')){
      newText.textContent = 'You win Scissors beats Paper';
      currentRound.appendChild(newText);
      ++playerScore;
      newScore();
      pScore.innerText = playerScore;
      cScore.innerText = computerScore;
    }

} 
//Function which determines Score// 
function determineScore(playerSelection) {
        
   playRound(playerSelection);

   if(playerScore == 5) {
     rock.remove();
     paper.remove();
     scissors.remove();
     winner.textContent = 'You won the game, I\'m proud of You';
     smile.classList.add('far','fa-smile-wink');

   } else if(computerScore == 5) {
     rock.remove();
     paper.remove();
     scissors.remove();
     winner.textContent = 'How did you lose to a computer?!'
     sad.classList.add('fas','fa-sad-tear');
   }
}

