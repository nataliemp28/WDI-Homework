//Every sound should be linked to a button, each button should create the correct sound
//get all audio elements by individual ID

var workIt = document.getElementById("Work it");
var makeIt = document.getElementById("Make it");
var doIt = document.getElementById("Do it");
var makesUs = document.getElementById("Makes us");
var harder = document.getElementById("Harder");
var better = document.getElementById("Better");
var faster = document.getElementById("Faster");
var stronger = document.getElementById("Stronger");
var moreThan = document.getElementById("More than");
var hour = document.getElementById("Hour");
var our = document.getElementById("Our");
var never = document.getElementById("Never");
var ever = document.getElementById("Ever");
var after = document.getElementById("After");
var workIs = document.getElementById("Work is");
var over = document.getElementById("Over");

//create the boxes variable to loop through all the elements with the class box
var boxes = document.getElementsByClassName("box");
for (var i = 0; i < boxes.length; i ++) {

  //add the click event listener to all box elements
  boxes[i].addEventListener("click", function() {

    //check this innerHTML of each element in the boxes class, adding sound using variables above.
    //don't use i in this bit.
    if (this.innerHTML === "Work it") {
      workIt.src ="../sounds/work_it.wav"
      workIt.play();
    }
    else if (this.innerHTML === "Make it") {
      makeIt.src="../sounds/make_it.wav"
      makeIt.play();
    }
    else if (this.innerHTML === "Do it") {
      doIt.src="../sounds/do_it.wav"
      doIt.play();
    }
    else if (this.innerHTML === "Makes us") {
      makesUs.src="../sounds/makes_us.wav"
      makesUs.play();
    }
    else if (this.innerHTML === "Harder") {
      harder.src="../sounds/harder.wav"
      harder.play();
    }
    else if (this.innerHTML === "Better") {
      better.src="../sounds/better.wav"
      better.play();
    }
    else if (this.innerHTML === "Faster") {
      faster.src="../sounds/faster.wav"
      faster.play();
    }
    else if (this.innerHTML === "Stronger") {
      stronger.src="../sounds/stronger.wav"
      stronger.play();
    }
    else if (this.innerHTML === "More than") {
      moreThan.src="../sounds/more_than.wav"
      moreThan.play();
    }
    else if (this.innerHTML === "Hour") {
      hour.src="../sounds/hour.wav"
      hour.play();
    }
    else if (this.innerHTML === "Our") {
      our.src="../sounds/our.wav"
      our.play();
    }
    else if (this.innerHTML === "Never") {
      never.src="../sounds/never.wav"
      never.play();
    }
    else if (this.innerHTML === "Ever") {
      ever.src="../sounds/ever.wav"
      ever.play();
    }
    else if (this.innerHTML === "After") {
      after.src="../sounds/after.wav"
      after.play();
    }
    else if (this.innerHTML === "Work is") {
      workIs.src="../sounds/work_is.wav"
      workIs.play();
    }
    else if (this.innerHTML === "Over") {
      over.src="../sounds/over.wav"
      over.play();
    }
  });
};
