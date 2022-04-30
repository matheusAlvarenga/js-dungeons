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

function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
}
animate();
