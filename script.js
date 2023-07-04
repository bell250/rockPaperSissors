function getComputerChoice(){
    let choices=["paper","rock","sissor"];
    let selectChoice = Math.floor(Math.random()*choices.length);
    let computerChoice =  choices[selectChoice];
    return computerChoice;
}
function playRound(playerSelection , computerSelection){ 
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
      }
      if (
        (playerSelection === 'rock' && computerSelection === 'sissor') ||
        (playerSelection === 'sissor' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
      ) {
        roundWinner = 'you Win! '+playerSelection +'  beats '+computerSelection;
      }
      else if (
        (computerSelection === 'rock' && playerSelection === 'sissor') ||
        (computerSelection === 'sissor' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
      ) {
        roundWinner = 'you lose! '+ computerSelection +'  beats '+playerSelection;
      }
      return roundWinner;        
}
function game(){
let playerScore = 0;
let computerScore = 0;
for(let i = 0 ; i < 5 ; i++){
let computerSelection = getComputerChoice();
let user = prompt("Enter your Weapon : rock , paper or sissor");
let playerSelection =user.toLowerCase();
let result = playRound(playerSelection , computerSelection);
console.log(result);
if (result.startsWith("you Win! ")){
    playerScore++;
}
else if (result.startsWith("you lose! ")){
    computerScore++;
}}
if (playerScore > computerScore){
console.log("Conglatulations you win this game "+computerScore+" "+playerScore);
}
else if(playerScore < computerScore){
console.log("you lose this game "+computerScore+" "+playerScore);}
else{
    console.log("Draw game "+computerScore+" "+playerScore)
}}
game();