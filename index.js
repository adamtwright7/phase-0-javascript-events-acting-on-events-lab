// grabbing the dodger object as a JavaScript variable
const dodger = document.getElementById("dodger");

// function that will move the dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// event listener that calls the moveDodgerLeft function if the left arrow key is pressed 
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// function that will move the dodger right (still using the left variable b/c it's given precedent)
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) /*360 comes from [400 (width of the game screen) minus 40 (width of the dodger)] */ {
      dodger.style.left = `${left + 1}px`;
    }
  }

// event listener that calls the moveDodgerRight function if the right arrow key is held 
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });