import {
  getAngleForNextCorner,
  getRotatedTopLeftCorner,
  getVectorLength,
} from "../utils/rotated-collision.js";
import { Sprite } from "./sprite.js";

export class Projectile extends Sprite {
  constructor({ velocity, position, ...props }) {
    super({
      position: {
        ...position,
      },
      ...props,
    });

    this.hitbox = {
      x: this.position.x,
      y: this.position.y,
      width: this.size.width,
      height: this.size.height,
    };

    this.velocity = velocity;
    this.setCorners();
  }

  setCorners() {
    let angle = this.rotation;

    const vectorLength = getVectorLength(this.hitbox);

    this.leftTopCorner = getRotatedTopLeftCorner({
      hitbox: this.hitbox,
      rotation: angle,
    });

    angle =
      this.rotation + getAngleForNextCorner(this.size.width / 2, vectorLength);

    this.rightTopCorner = getRotatedTopLeftCorner({
      hitbox: this.hitbox,
      rotation: angle,
    });

    angle =
      this.rotation + getAngleForNextCorner(this.size.height / 2, vectorLength);

    this.rightBottomCorner = getRotatedTopLeftCorner({
      hitbox: this.hitbox,
      rotation: angle,
    });

    angle =
      this.rotation + getAngleForNextCorner(this.size.width / 2, vectorLength);

    this.leftBottomCorner = getRotatedTopLeftCorner({
      hitbox: this.hitbox,
      rotation: angle,
    });
  }

  getCorners() {
    return [
      this.leftTopCorner,
      this.rightTopCorner,
      this.rightBottomCorner,
      this.leftBottomCorner,
    ];
  }

  preDraw() {
    this.position.x += this.velocity.x;
    this.hitbox.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.hitbox.y += this.velocity.y;
    this.setCorners();
  }
}
