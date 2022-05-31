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
  
      default:
        
        return `You chose ${playerSelection} whilst computer chose ${computerSelection}...you won!`;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  play: for (i=0; i<5; i++) {

    playerSelection = prompt('choose between rock, paper and scissors');
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
      i--;
      continue play;
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

      default:
        playerScore +=1;
        
    }
  console.log(`Player: ${playerScore}`);
  console.log(`Computer: ${computerScore}` );
  
  }
 
  if (playerScore == computerScore) return "You tied!";
  else if (playerScore > computerScore) return `You won`;
  else return 'You lost';
}