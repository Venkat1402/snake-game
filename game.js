import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outSideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

// GAME LOOP

function main(currentTime) {
  if (gameOver) {
    if (
      confirm(
        `You lost .Your final score is ${
          document.getElementById("score").innerHTML
        }. Press OK to restart.`
      )
    ) {
      window.location = "/snake-game/";
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  // Updates the game on each render (updates the logic and values on each render)
  update();

  // Draws the board on each render
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkForDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkForDeath() {
  gameOver = outSideGrid(getSnakeHead()) || snakeIntersection();
}
