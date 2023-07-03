function getComputerChoice(){
    let choices=["paper","rock","sissor"];
    let selectChoice = Math.floor(Math.random()*choices.length);
    let computerChoice =  choices[selectChoice];
    console.log(computerChoice);
    return computerChoice;
}
getComputerChoice();