import { Actor } from "./actor.js";
import bowData from "../data/bow.js";
import { mouseEvents, velocityCalculator } from "../utils/mouse.js";
import { Arrow } from "./arrow.js";

export class Bow extends Actor {
  isShooting = false;

  mouse = {
    x: 0,
    y: 0,
  };

  arrows = [];

  constructor({ canvas, ...props }) {
    super({
      states: bowData.animationFrames,
      defaultState: "idle",
      size: {
        width: 40,
        height: 40,
      },
      ...props,
    });

    this.frames.hold = 25;

    this.canvas = canvas;
    this.startMouseEvent();
  }

  update() {
    this.updateRotation();
    this.updateState();
    this.drawArrows();
  }

  drawArrows() {
    this.arrows.forEach((arrow) => arrow.draw());
  }

  postLoop() {
    if (this.actualState === "shoot") {
      this.arrows.push(
        new Arrow({
          context: this.context,
          position: this.position,
          rotation: this.rotation + 1.35,
          velocity: velocityCalculator(this.mouse, this.position),
        })
      );
      this.isShooting = false;
      this.changeState("idle");
    }
  }

  updateState() {
    if (this.isShooting) {
      this.changeState("shoot");
    }
  }

  updateRotation() {
    this.rotation =
      Math.atan2(
        this.mouse.x - this.position.x,
        -(this.mouse.y - this.position.y)
      ) - 1.4;
  }

  startMouseEvent() {
    window.addEventListener("mousedown", () => {
      this.isShooting = true;
    });

    window.addEventListener("mouseup", () => {
      this.isShooting = false;
    });

    window.addEventListener("mousemove", (e) => {
      this.mouse = mouseEvents(this.canvas, e);
    });
  }
}
