let rps = ['rock','paper','scissors'];

let UserChoice = prompt("Choose between rock, paper and scissors.");
UserChoice = UserChoice.toLowerCase();

if (UserChoice != 'rock' && UserChoice != 'paper' && UserChoice != 'scissors') {
  console.log("Type in either rock, paper or scissors.");
}

else {
  
  let random = Math.floor(Math.random()*3);
  let CompChoice = rps[random];
  
  switch (true) {

    case (UserChoice == CompChoice):
      console.log(`You chose ${UserChoice} whilst computer chose ${CompChoice}...it is a tie!`);
      break;

    case (UserChoice == 'rock' && CompChoice == 'paper'):
    case (UserChoice == 'paper' && CompChoice == 'scissors'):
    case (UserChoice == 'scissors' && CompChoice == 'rock'):
      console.log(`You chose ${UserChoice} whilst computer chose ${CompChoice}...you lost!`);
      break;

    case (UserChoice == 'rock' && CompChoice == 'scissors'):
    case (UserChoice == 'paper' && CompChoice == 'rock'):
    case (UserChoice == 'scissors' && CompChoice == 'paper'):
      console.log(`You chose ${UserChoice} whilst computer chose ${CompChoice}...you won!`);
      break;

    default:
      console.log("Somethings gone terribly wrong, oh dear...");
  }
}
