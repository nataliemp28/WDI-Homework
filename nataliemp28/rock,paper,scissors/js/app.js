console.log("JS loaded");


var playerChoice = prompt("Please choose rock, paper or scissors").toLowerCase();



var choices = ['rock', 'paper', 'scissors'];
var randomIndex = Math.floor(Math.random() * choices.length);
var computerChoice = choices[randomIndex];



var getWinner = function(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  }
  else if (playerChoice === 'rock' && computerChoice === 'scissors') {
    return "Player Wins";
  }
  else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    return "Player Wins";
  }
  else if (playerChoice === 'paper' && computerChoice === 'rock') {
    return "Player Wins";
  }
  else {
    return "Computer Wins";
  }
}
console.log(playerChoice);
console.log(computerChoice);


console.log (getWinner(playerChoice, computerChoice));
