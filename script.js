function getComputerChoice(){
    let choices=["paper","rock","sissor"];
    let selectChoice = Math.floor(Math.random()*choices.length);
    let computerChoice =  choices[selectChoice];
    return computerChoice;
}
function game(playerSelection , computerSelection){
    let computerScore = 0;
    let playerScore = 0;
    let round = 0;   
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
      }
      if (
        (playerSelection === 'rock' && computerSelection === 'sissor') ||
        (playerSelection === 'sissor' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
      ) {
        playerScore++;
        roundWinner = 'you Won this round! '+playerSelection +'  beats '+computerSelection;
      }
      else if (
        (computerSelection === 'rock' && playerSelection === 'sissor') ||
        (computerSelection === 'sissor' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
      ) {
        computerScore++;
        roundWinner = 'you lose this round! '+ computerSelection +'  beats '+playerSelection;
      }
      return roundWinner;        
}
for(let i = 0 ; i <5 ; i++){
let computerSelection = getComputerChoice();
let playerSelection = prompt("Enter your Weapon");
console.log(game(playerSelection , computerSelection));
}