var form = document.getElementById("form_event")
console.log(form);
form.addEventListener("submit", function(e) {
  e.preventDefault();

  var numberOne = parseFloat(document.getElementById('buttonOne').value);
  var operator = document.getElementById('operator').value;
  var numberTwo = parseFloat(document.getElementById('buttonTwo').value);
  var display = document.getElementById("display");


  var result = 0;

  console.log(numberOne);
  console.log(numberTwo);
  console.log(operator);

if (operator === "addition") {
  result = numberOne + numberTwo;
}
else if (operator === "subtraction") {
   result = numberOne - numberTwo;
}
else if (operator === "multiplication") {
  result = numberOne * numberTwo;
}
else {
  result = numberOne / numberTwo;
}
display.textContent = result;

});






/*

var newCalc = 'Y';

while (newCalc === 'Y') {

var answer = "";

var level = prompt("Hi! To calculate Square Root, please enter: Sq. To calculate potential mortgage payment, please enter: Mtg. To calculate your Body Mass Index, please enter: BMI. If you wish to perform a different calculation, please enter Other.");

if (level === "Sq") {
  var advanced = prompt("Please enter ONE value");
  console.log("The number that needs square root is " + advanced);
  alert(Math.sqrt(advanced));

  newCalc = prompt("Would you like to calculate again? Y for yes, N for no");
  console.log("You've chosen " + newCalc);
}
else if (level === "Mtg") {
  var principal = prompt("What is the principal amount?");
  var yearlyInterest = prompt("What is the yearly interest rate?");
  var monthlyInterest = (yearlyInterest / 100 / 12);
  var numOfPayments = prompt("How many payments will you need to make?");

  var monthlyPayment = principal * monthlyInterest * (Math.pow(1 + monthlyInterest, numOfPayments)) / (Math.pow(1 + monthlyInterest, numOfPayments) - 1);
  alert("Your monthly payment will be: " + monthlyPayment);
  console.log("Your monthly payment will be: " + monthlyPayment);

  newCalc = prompt("Would you like to calculate again? Y for yes, N for no");
}
/* Doesn't work....
else if (level === "BMI") {
  var weight = prompt("What is your weight in kg?");
  var height = prompt("What is your height in metres?");
  var result = (weight / height);
  var finalIndex = Math.pow(result,result);
  alert("Your Body Mass Index is: " + finalIndex);
  console.log("Your Body Mass Index is " + finalIndex);

  newCalc = prompt("Would you like to calculate again? Y for yes, N for no");
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
*/
