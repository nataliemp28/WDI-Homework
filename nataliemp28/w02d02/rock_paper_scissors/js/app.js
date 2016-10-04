var userScore = 0;
var computerScore = 0;
var updateHumanScore = document.getElementById("humanScore");
var updateBotScore = document.getElementById("computerScore");
var userChoice = "";
var choices = ['rock', 'paper', 'scissors'];

var choiceButtons = document.getElementsByClassName("buttons");

for (var i = 0; i < choiceButtons.length; i++) {
  choiceButtons[i].addEventListener("click", function() {

    var randomIndex = Math.floor(Math.random() * choices.length);
    var computerChoice = choices[randomIndex];

    userChoice = this.innerHTML.toLowerCase();

    console.log("User chose " + userChoice);
    console.log("Computer chose " + computerChoice);

    if (userChoice === computerChoice) {
      console.log("draw");
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors' ||
    userChoice === 'scissors' && computerChoice === 'paper' ||
    userChoice === 'paper' && computerChoice === 'rock') {
      console.log("User Wins");
      userScore ++;
      updateHumanScore.innerHTML = userScore;
    }
    else {
      console.log("Computer Wins");
      computerScore ++;
      updateBotScore.innerHTML = computerScore;
    }
  });
};



//increment score. use result of check winner function to increment a value to score, access score via
//innerHTML




//function getPlayerMove () {



//var rockButton = document.getElementById("rock");
//var scissorsButton = document.getElementById("scissors");
//var paperButton = document.getElementById("paper");





















/*

var playerChoice = prompt("Please choose rock, paper or scissors");
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

*/
