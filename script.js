function computerPlay() {
  
  let rps = ['rock','paper','scissors'];
  let random = Math.floor(Math.random()*3);
  return rps[random];

}

function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();

  if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
    return "Type in either rock, paper or scissors.";
  }
  
  else {
    
    switch (true) {
  
      case (playerSelection == computerSelection):
        return `You chose ${playerSelection} whilst computer chose ${computerSelection}...it is a tie!`;
        break;
  
      case (playerSelection == 'rock' && computerSelection == 'paper'):
      case (playerSelection == 'paper' && computerSelection == 'scissors'):
      case (playerSelection == 'scissors' && computerSelection == 'rock'):
        return `You chose ${playerSelection} whilst computer chose ${computerSelection}...you lost!`;
        break;
  
      case (playerSelection == 'rock' && computerSelection == 'scissors'):
      case (playerSelection == 'paper' && computerSelection == 'rock'):
      case (playerSelection == 'scissors' && computerSelection == 'paper'):
        return `You chose ${playerSelection} whilst computer chose ${computerSelection}...you won!`;
        break;
  
      default:
        return "Somethings gone terribly wrong, oh dear...";
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (i=0; i<5; i++) {

    playerSelection = prompt('choose between rock, paper and scissors');
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
      i--;
    }
    computerSelection = computerPlay()
    console.log(playRound(playerSelection,computerSelection));
    
    switch (true) {
      case (playerSelection == computerSelection):
        playerScore +=1;
        computerScore +=1;
        break;

      case (playerSelection == 'rock' && computerSelection == 'paper'):
      case (playerSelection == 'paper' && computerSelection == 'scissors'):
      case (playerSelection == 'scissors' && computerSelection == 'rock'):
        computerScore +=1;
        break;

      case (playerSelection == 'rock' && computerSelection == 'scissors'):
      case (playerSelection == 'paper' && computerSelection == 'rock'):
      case (playerSelection == 'scissors' && computerSelection == 'paper'):
        playerScore +=1;
        break;

      default:
        break;
    }
  
  
  }
 
  if (playerScore == computerScore) return "You tied!";
  else if (playerScore > computerScore) return `You won`;
  else return 'You lost';
}

