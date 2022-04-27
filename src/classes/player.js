import { Sprite } from "./sprite.js";

const playerImage = new Image();
playerImage.src = "assets/player/idle_1.png";

export class Player {
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
    },
  };

  constructor({ context, position }) {
    this.context = context;
    this.position = position;
    this.sprite = new Sprite({
      context,
      position,
      images: [playerImage],
      size: {
        width: 46,
        height: 80,
      },
    });
  }

  draw() {
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

    this.sprite.draw();
  }
}
