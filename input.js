let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break; // If you are already moving up or down you cannot use up or down keys
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break; // If you are already moving up or down you cannot use up or down keys
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break; // If you are already moving left or right you cannot use left or right keys
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break; // If you are already moving left or right you cannot use left or right keys
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

function arrowUpClicked() {
  if (lastInputDirection.y !== 0) return; // If you are already moving up or down you cannot use up or down keys
  inputDirection = { x: 0, y: -1 };
  return;
}

function arrowDownClicked() {
  if (lastInputDirection.y !== 0) return; // If you are already moving up or down you cannot use up or down keys
  inputDirection = { x: 0, y: 1 };
  return;
}

function arrowLeftClicked() {
  if (lastInputDirection.x !== 0) return; // If you are already moving left or right you cannot use left or right keys
  inputDirection = { x: -1, y: 0 };
  return;
}

function arrowRightClicked() {
  if (lastInputDirection.x !== 0) return; // If you are already moving left or right you cannot use left or right keys
  inputDirection = { x: 1, y: 0 };
  return;
}

document.getElementById("arrowUp").onclick = arrowUpClicked;
document.getElementById("arrowDown").onclick = arrowDownClicked;
document.getElementById("arrowLeft").onclick = arrowLeftClicked;
document.getElementById("arrowRight").onclick = arrowRightClicked;

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
