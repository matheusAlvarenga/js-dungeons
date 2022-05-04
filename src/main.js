import { GameOver } from "./classes/game-over.js";
import { Game } from "./classes/game.js";
import { MainMenu } from "./classes/main-menu.js";

const canvas = document.getElementById("main-canvas");
const context = canvas.getContext("2d");

let isMainMenu = true;

let game = new Game({
  canvas,
  context,
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
    game.draw();
  }

  if (game.player.dead) gameOver.draw();
}
animate();

canvas.addEventListener("click", () => {
  if (isMainMenu) {
    isMainMenu = false;
  } else if (game.player.dead) game = new Game({ canvas, context });
});
