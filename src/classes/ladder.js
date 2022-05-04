import { detectBasicCollision } from "../utils/basic-collision.js";
import { ActionText } from "./action-text.js";
import { Sprite } from "./sprite.js";

const ladderImage = new Image();
ladderImage.src = "assets/ladder/idle.png";

export class Ladder extends Sprite {
  isColliding = false;

  actionDone = false;

  constructor({ context, player, ...props }) {
    super({
      context,
      size: {
        width: 50,
        height: 50,
      },
      image: ladderImage,
      ...props,
    });

    this.player = player;

    this.hitbox = {
      x: props.position.x - 40,
      y: props.position.y - 40,
      height: 80,
      width: 80,
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
  }

  preDraw() {
    this.drawHitBox();
    this.checkCollision();
    // this.doAction();
    if (this.isColliding) this.actionText.draw();
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
