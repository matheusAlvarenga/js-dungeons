import { Actor } from "./actor.js";
import bowData from '../data/bow.js'
import { mouseEvents } from "../utils/mouse.js";

export class Bow extends Actor {
  isShooting = false;

  mouse = {
    x: 0,
    y: 0,
  };

  constructor({canvas, ...props}) {
    super({
      states: bowData.animationFrames,
      defaultState: "idle",
      size: {
        width: 40,
        height: 40,
      },
      ...props
    })

    this.frames.hold = 25

    this.canvas = canvas
    this.startMouseEvent()
  }

  update() {
    this.updateRotation()
    this.updateState()
  }

  postLoop() {
    if(this.actualState === 'shoot') {
      console.log('shot');
      this.isShooting = false
      this.changeState('idle')
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
    window.addEventListener("mousedown", (e) => {
      this.isShooting = true
    });

    window.addEventListener("mouseup", (e) => {
      this.isShooting = false
    });

    window.addEventListener("mousemove", (e) => {
      this.mouse = mouseEvents(this.canvas, e);
    });
  }
}