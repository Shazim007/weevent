// toggle
let toggleState = 0; // 0 represents the left state, and 1 represents the right state
const toggleCircle = document.querySelector('.toggle-circle');

function toggleLeft() {
  if (toggleState !== 0) {
    toggleState = 0;
    toggleCircle.style.left = '2px'; // Move the circle to the left position
    console.log("Left arrow clicked!");
  }
}

function toggleRight() {
  if (toggleState !== 1) {
    toggleState = 1;
    toggleCircle.style.left = 'calc(100% - 45px)'; // Move the circle to the right position
    console.log("Right arrow clicked!");
  }
}

// toggle