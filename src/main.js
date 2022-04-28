import { Player } from "./classes/player.js";
import { mouseEvents } from "./utils/mouse.js";

const canvas = document.getElementById("main-canvas");
const context = canvas.getContext("2d");

const player = new Player({
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

document.addEventListener("mousemove", (e) => {
  player.mouse = mouseEvents(canvas, e);
});

window.addEventListener("mousedown", () => {
  player.isShooting = true;
  player.keys.mouse.pressed = true;
});

window.addEventListener("mouseup", () => {
  player.isShooting = false;
  player.keys.mouse.pressed = false;
});

window.addEventListener("keydown", (event) => {
  // eslint-disable-next-line default-case
  switch (event.key) {
    case "w":
      player.isRunning = true;
      player.keys.w.pressed = true;
      break;

    case "a":
      player.isRunning = true;
      player.keys.a.pressed = true;
      break;

    case "s":
      player.isRunning = true;
      player.keys.s.pressed = true;
      break;

    case "d":
      player.isRunning = true;
      player.keys.d.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  // eslint-disable-next-line default-case
  switch (event.key) {
    case "w":
      player.isRunning = false;
      player.keys.w.pressed = false;
      break;

    case "a":
      player.isRunning = false;
      player.keys.a.pressed = false;
      break;

    case "s":
      player.isRunning = false;
      player.keys.s.pressed = false;
      break;

    case "d":
      player.isRunning = false;
      player.keys.d.pressed = false;
      break;
  }
});
