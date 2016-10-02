var boxes = document.getElementsByClassName("box");
var reset = document.getElementById("resetButton");
var clickCounter = 0;

for (var i = 0; i < boxes.length; i ++) {
  boxes[i].addEventListener("click", function() {
  if (this.textContent === "") {
    clickCounter++;
//if clickCounter/2 leaves no remainder then do 'X' else do 'Y'
  this.textContent = clickCounter%2 === 0 ? 'X' : 'O';
}
  if (this.innerHTML === 'X') {
  this.style.background="red";
}
  if (this.innerHTML === 'O') {
  this.style.background="yellow";
}
  if (checkRows(boxes) || checkColumns(boxes) || checkDiagonals(boxes)) {
  console.log("player has won");
} else {
  false;
}
  resetButton.addEventListener('click', function(){
    clickCounter = 0;
    for (var i= 0; i < boxes.length; i ++) {
    boxes[i].textContent = "";
    boxes[i].style.background="white";
}
});
function checkRows() {
  var row1 = [boxes[0], boxes[1], boxes[2]];
  var row2 = [boxes[3], boxes[4], boxes[5]];
  var row3 = [boxes[6], boxes[7], boxes[8]];
  return checkTiles(row1) || checkTiles(row2) || checkTiles(row3)
}
function checkColumns() {
  var col1 = [boxes[0], boxes[3], boxes[6]];
  var col2 = [boxes[1], boxes[4], boxes[7]];
  var col3 = [boxes[2], boxes[5], boxes[8]];
  return checkTiles(col1) || checkTiles(col2) || checkTiles(col3)
}
function checkDiagonals() {
  var diag1 = [boxes[0], boxes[4], boxes[8]];
  var diag2 = [boxes[2], boxes[4], boxes[6]];
  return checkTiles(diag1) || checkTiles(diag2)
}
function checkTiles(boxes) {
  return boxes[0].textContent && boxes[0].textContent === boxes[1].textContent &&
  boxes[1].textContent && boxes[0].textContent === boxes[2].textContent;
}
});
}
