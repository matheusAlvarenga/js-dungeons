import { Projectile } from "./projectile.js";

const arrowImage = new Image();
arrowImage.src = "assets/arrow/idle.png";

export class Arrow extends Projectile {
  constructor({ ...props }) {
    super({
      size: {
        width: 12,
        height: 50,
      },
      image: arrowImage,
      ...props,
    });
  }
}
