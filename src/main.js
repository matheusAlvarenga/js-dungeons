import { Chest } from "./classes/chest.js";
import { Enemy } from "./classes/enemy.js";
import { GameOver } from "./classes/game-over.js";
import { MainMenu } from "./classes/main-menu.js";
import { Player } from "./classes/player.js";

const canvas = document.getElementById("main-canvas");
const context = canvas.getContext("2d");

let isMainMenu = true;

const player = new Player({
  canvas,
  context,
  position: {
    x: 100,
    y: 100,
  },
});

const chest = new Chest({
  canvas,
  context,
  position: {
    x: 300,
    y: 300,
  },
  player,
});

const enemy = new Enemy({
  canvas,
  context,
  position: {
    x: 450,
    y: 300,
  },
  player,
});

const gameOver = new GameOver({
  canvas,
  context,
});

const mainMenu = new MainMenu({
  canvas,
  context,
});

function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (isMainMenu) mainMenu.draw();
  else {
    chest.draw();
    player.draw();
    enemy.draw();
  }
  if (player.dead) gameOver.draw();
}
animate();

canvas.addEventListener("click", () => {
  if (isMainMenu) {
    isMainMenu = false;
  }
});
