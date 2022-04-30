import { Player } from "./classes/player.js";
import playerData from "./data/player.js";

const canvas = document.getElementById("main-canvas");
const context = canvas.getContext("2d");

const player = new Player({
  context,
  position: {
    x: 10,
    y: 10,
  },
  size: {
    height: 80,
    width: 46,
  },
  states: playerData.animationFrames,
  defaultState: "idle",
});

function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
}
animate();
