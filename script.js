let rockbutton = document.querySelector('#rock');
let paperbutton = document.querySelector('#paper');
let sissorsbutton = document.querySelector('#sissors');
let start = document.querySelector('#again') ;
start.addEventListener('click',refreshGame);
rockbutton.addEventListener('click',getPlayerChoice);
paperbutton.addEventListener('click',getPlayerChoice);
sissorsbutton.addEventListener('click',getPlayerChoice);
playerBoard = document.querySelector('#playerScore');
computerBoard = document.querySelector('#computerScore');
result = document.querySelector('#result');
let computerScore = 0;
let playerScore = 0;
let round =0;
function computerPlay() {
    const choices = ['rock', 'paper', 'sissors'];
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}
function game(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'sissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'sissors' && computerSelection === 'paper')) {
        playerScore++;
        round++;
        playerBoard.textContent = playerScore;
        result.textContent = 'you win round '+`${round}`+' '+`${playerSelection}`+' beats '+`${computerSelection}`;
    } else if (
        (computerSelection === 'rock' && playerSelection === 'sissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'sissors' && playerSelection === 'paper')) {
        computerScore++;
        round++;
        computerBoard.textContent = computerScore;
        result.textContent = 'you lose round '+`${round}`+' '+ `${computerSelection}`+' beats '+`${playerSelection}`;
    }
    else {
    round++;
    result.textContent = 'Draw  round '+`${round}`+' '+`${computerSelection}`+' and '+`${playerSelection}`;
    }
    checkWinner();
}
const winnerResults ={
    computer: ["You Lost the game to a computer!", 'red'],
    player: ["You Win the game!!!!", 'green'],
    tie: ["The game is a Tie!", 'blue']
  }
  
  function checkWinner() {
    if (computerScore === 5 || playerScore === 5) {
      if (computerScore === playerScore){
        updateWinner('tie')
      }else{
        let win = `${(computerScore > playerScore) ? 'computer' : 'player'}`;
        updateWinner(win);
      }
    }
  }
  
  function updateWinner(winner){
    result.textContent = winnerResults[winner][0];
    result.style.color = winnerResults[winner][1];
    rockbutton.removeEventListener('click',getPlayerChoice);
    paperbutton.removeEventListener('click',getPlayerChoice);
    sissorsbutton.removeEventListener('click',getPlayerChoice);
  }
function getPlayerChoice(e) {
let playerSelection= (e.target.id);
game(playerSelection, computerPlay());
  }
function refreshGame(){
  window.location.reload();
}