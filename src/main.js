import { Chest } from "./classes/chest.js";
import { Player } from "./classes/player.js";

const canvas = document.getElementById("main-canvas");
const context = canvas.getContext("2d");

const player = new Player({
  canvas,
  context,
  position: {
    x: 10,
    y: 10,
  },
});

const chest = new Chest({
  canvas,
  context,
  position: {
    x: 300,
    y: 300,
  },
});

function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  chest.draw();
  player.draw();
}
animate();
