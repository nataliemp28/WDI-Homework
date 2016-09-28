/*Create a calculator that takes input from the browser. The calculator should display the results using alert.

The calculator should do the basic arithmetic operations.

Basic Calculator

Must be able to +, -, / and *
Must take user input using prompt
Must be able display the result using alert
Should use a loop!
Should handle floats

Tips: Web APIs
When writing code for the Web using JavaScript, there are a great many APIs available. Below is a list of all the interfaces (that is, types of objects) that you may be able to use while developing your Web app or site.

Prompt() & Alert()

The Window.prompt() displays a dialog with an optional message prompting the user to input some text.

The Window.alert() method displays an alert dialog with the optional specified content and an OK button.

var answer = prompt("What is 5 multipled by 2?");

if (answer == 10) {
  alert("Wow! Correct!");
} else {
  alert("Wrong!")
}


1. ask user what calculation they'd like to perform, + - / or *
2. ask the user for inputs (user prompt)
3. return the result of the calculation

*/

var newCalc = 'Y';

while (newCalc === 'Y') {

var answer = "";

var level = prompt("Hi! Do you want to calculate the square root of a number? If so, please enter Sq, if you wish to perform a different calculation, please enter Other");

if (level === "Sq") {
  var advanced = prompt("Please enter ONE value");
  console.log("The number that needs square root is " + advanced);
  alert(Math.sqrt(advanced));

  newCalc = prompt("Would you like to calculate again? Y for yes, N for no");
  console.log("You've chosen " + newCalc);
}
else {

var calculation = prompt("Which calculation would you like to perform? (A)ddition, (M)ultiplication, (S)ubtraction, (D)ivision, P(ower) of");
  console.log("calulation choice is " + calculation);


var firstNumber = prompt("Enter your number");
  console.log("first number is: " + firstNumber);

var secondNumber = prompt("Enter your second number");
  console.log("second number is: " + secondNumber);


if (calculation === 'A') {
  answer = (Number(firstNumber) + Number(secondNumber));
}
else if (calculation === 'M') {
  answer = (firstNumber * secondNumber);
}
else if (calculation === 'S') {
  answer = (firstNumber - secondNumber);
}
else if (calculation === 'D') {
  answer = (firstNumber / secondNumber);
}
else {
  answer = Math.pow(firstNumber,secondNumber);
}
console.log("Your answer is " + answer);
  alert("Your answer is " + answer);

newCalc = prompt("Would you like to calculate again? Y for yes, N for no");
  console.log("You've chosen " + newCalc);

}
}
/*how to use a loop??*/
