import { Sprite } from "./sprite.js";

const ladderImage = new Image();
ladderImage.src = "assets/ladder/idle.png";

export class Ladder extends Sprite {
  constructor({ ...props }) {
    super({
      size: {
        width: 50,
        height: 50,
      },
      image: ladderImage,
      ...props,
    });
  }
}
