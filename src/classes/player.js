import { Actor } from "./actor.js";
import playerData from "../data/player.js";
import { Bow } from "./bow.js";

export class Player extends Actor {
  isRunning = false;

  keys = {
    w: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    s: {
      pressed: false,
    },
    d: {
      pressed: false,
    }
  };

  constructor({ canvas, ...props }) {
    super({
      states: playerData.animationFrames,
      defaultState: "idle",
      size: {
        height: 80,
        width: 46,
      },
      ...props,
    });

    this.canvas = canvas;

    this.bow = new Bow({
      canvas,
      context: props.context,
      position: props.position,
      offset: {
        x: 24,
        y: 18,
      },
    });

    this.startKeyboardEvent();
  }

  update() {
    this.updatePosition();
    this.updateState();
    this.bow.draw();
  }

  updateState() {
    if (this.isRunning) {
      this.changeState("run");
    } else {
      this.changeState("idle");
    }
  }

  updatePosition() {
    if (this.keys.w.pressed) {
      this.position.y -= 3;
    }

    if (this.keys.s.pressed) {
      this.position.y += 3;
    }

    if (this.keys.a.pressed) {
      this.position.x -= 3;
    }

    if (this.keys.d.pressed) {
      this.position.x += 3;
    }
  }

  startKeyboardEvent() {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "w":
          this.isRunning = true;
          this.keys.w.pressed = true;
          break;

        case "a":
          this.isRunning = true;
          this.keys.a.pressed = true;
          break;

        case "s":
          this.isRunning = true;
          this.keys.s.pressed = true;
          break;

        case "d":
          this.isRunning = true;
          this.keys.d.pressed = true;
          break;
      }
    });

    window.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "w":
          this.isRunning = false;
          this.keys.w.pressed = false;
          break;

        case "a":
          this.isRunning = false;
          this.keys.a.pressed = false;
          break;

        case "s":
          this.isRunning = false;
          this.keys.s.pressed = false;
          break;

        case "d":
          this.isRunning = false;
          this.keys.d.pressed = false;
          break;
      }
    });
  }
}
