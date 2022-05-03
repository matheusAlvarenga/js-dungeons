import { Actor } from "./actor.js";

import enemyData from "../data/enemy.js";

export class Enemy extends Actor {
  constructor({ ...props }) {
    super({
      states: enemyData.orcs.warrior.animationFrames,
      defaultState: "idle",
      size: {
        height: 40,
        width: 40,
      },
      ...props,
    });

    this.hitbox = {
      x: this.position.x - this.size.width / 2,
      y: this.position.y - this.size.height / 2,
      width: this.size.width,
      height: this.size.height,
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
      this.hitbox.x,
      this.hitbox.y,
      this.hitbox.width,
      this.hitbox.height
    );

    this.context.restore();
  }
}
