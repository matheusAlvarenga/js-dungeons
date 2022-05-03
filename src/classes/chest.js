import { Actor } from "./actor.js";

import chestData from "../data/chest.js";

export class Chest extends Actor {
  constructor({ context, ...props }) {
    super({
      context,
      states: chestData.animationFrames,
      defaultState: "idle",
      size: {
        height: 40,
        width: 40,
      },
      ...props,
    });

    this.context = context;

    this.hitbox = {
      x: props.position.x,
      y: props.position.y,
      height: 40,
      width: 40,
    };
  }

  update() {
    this.drawHitBox();
  }

  drawHitBox() {
    this.context.save();

    this.context.globalAlpha = 0.2;
    this.context.fillStyle = "red";
    this.context.fillRect(
      this.hitbox.x - this.hitbox.width,
      this.hitbox.y - this.hitbox.height,
      this.hitbox.width * 2,
      this.hitbox.height * 2
    );

    this.context.restore();
  }
}
