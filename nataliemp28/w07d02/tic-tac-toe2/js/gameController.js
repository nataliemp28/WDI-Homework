angular.module('TicTacToe')
.controller('GameController', GameController);

var clickCounter = 0;

function GameController() {
  this.cells = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ];

  function mrClick($index) {
    console.log('Oooh you clicked me!', $index);

    clickCounter ++;

    if (clickCounter%2 === 0) {
      this.cells[$index] = 'X';
    }
    else {
      this.cells[$index] = 'O';
    }
}
  this.mrClick = mrClick;
}
