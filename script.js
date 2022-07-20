function computerPlay() {
  
  let rps = ['rock','paper','scissors'];
  let random = Math.floor(Math.random()*3);
  return rps[random];

}

function playRound(playerSelection, computerSelection) {
  
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

function game(playerSelection) {

    
    computerSelection = computerPlay();
    result.textContent = playRound(playerSelection,computerSelection);


    switch (true) {
      case (playerSelection == computerSelection):
       
        break;

      case (playerSelection == 'rock' && computerSelection == 'paper'):
      case (playerSelection == 'paper' && computerSelection == 'scissors'):
      case (playerSelection == 'scissors' && computerSelection == 'rock'):
        computerScore +=1;
        break;

      default:
        playerScore +=1;
    }

    playerDiv.textContent = `Player Score: ${playerScore}`;
    computerDiv.textContent = `Computer Score: ${computerScore}`;

    if (computerScore == 5) {
      
      result.textContent = "Unlucky! You lost the game!";
      playerScore = 0;
      computerScore = 0;

    }

    if (playerScore == 5) {

      result.textContent = "Congratulations! You won the game!";
      playerScore = 0;
      computerScore = 0;

    }


}

let playerScore = 0;
let computerScore = 0;

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let playerDiv = document.querySelector(".player")
let computerDiv = document.querySelector(".computer")
let result = document.querySelector(".result");



rockButton.addEventListener('click', () => game('rock'))
paperButton.addEventListener('click', () => game('paper'))
scissorsButton.addEventListener('click', () => game('scissors'))

