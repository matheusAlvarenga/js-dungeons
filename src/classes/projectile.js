import { Sprite } from "./sprite.js";

export class Projectile extends Sprite {
  constructor({ velocity, position, ...props }) {
    super({
      position: {
        ...position,
      },
      ...props,
    });

    this.velocity = velocity;
  }

  preDraw() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
