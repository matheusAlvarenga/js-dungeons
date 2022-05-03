import { Actor } from "./actor.js";

import chestData from "../data/chest.js";
import { detectBasicCollision } from "../utils/basic-collision.js";
import { ActionText } from "./action-text.js";

export class Chest extends Actor {
  isColliding = false;

  isOpen = false;

  constructor({ context, player, ...props }) {
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

    this.frames.hold = 25;

    this.hitbox = {
      x: props.position.x - 60,
      y: props.position.y - 60,
      height: 40 * 3,
      width: 40 * 3,
    };

    this.actionText = new ActionText({
      context,
      position: props.position,
      size: {
        height: 12,
        width: 40,
      },
      offset: {
        x: 0,
        y: 35,
      },
    });

    this.player = player;
  }

  update() {
    this.drawHitBox();
    this.checkCollision();
    this.openChest();
    if (this.isColliding) {
      this.actionText.draw();
    }
  }

  postLoop() {
    if (this.actualState === "openning") {
      this.changeState("open");
    }
  }

  openChest() {
    if (this.player.keys.space.pressed && this.isColliding) {
      this.isOpen = true;
      this.changeState("openning");
    }
  }

  checkCollision() {
    if (detectBasicCollision(this.player.hitbox, this.hitbox)) {
      this.isColliding = true;
    } else {
      this.isColliding = false;
    }
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
