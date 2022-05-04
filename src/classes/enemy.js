import { Actor } from "./actor.js";

import enemyData from "../data/enemy.js";
import { detectBasicCollision } from "../utils/basic-collision.js";
import { velocityCalculator } from "../utils/mouse.js";
import { HpBar } from "./hp_bar.js";
import { checkFullCollision } from "../utils/rotated-collision.js";

export class Enemy extends Actor {
  velocity = {
    x: 0,
    y: 0,
  };

  following = false;

  hp = 40;

  maxHp = 40;

  strength = 10;

  moveSpeed = 3;

  constructor({ player, ...props }) {
    super({
      states: enemyData.orcs.warrior.animationFrames,
      defaultState: "idle",
      size: {
        height: 40,
        width: 40,
      },
      ...props,
    });

    this.player = player;

    this.hpBar = new HpBar({
      context: props.context,
      position: props.position,
      health: this.hp,
      maxHealth: this.maxHp,
      width: 40,
      offset: {
        x: -20,
        y: 25,
      },
    });

    this.hitbox = {
      x: this.position.x - this.size.width / 2,
      y: this.position.y - this.size.height / 2,
      width: this.size.width,
      height: this.size.height,
    };

    this.visionHitbox = {
      x: this.position.x - 250,
      y: this.position.y - 250,
      width: 500,
      height: 500,
    };
  }

  update() {
    this.drawVisionHitBox();
    this.drawHitBox();
    this.hpBar.draw();
    this.seekForPlayer();
    this.checkPlayerCollision();
    this.updatePosition();
    this.followPlayer();
    this.setCorners();
    this.checkArrowCollision();
    this.updateKnockbackPosition();
  }

  updatePosition() {
    this.position.x += this.velocity.x;
    this.hitbox.x += this.velocity.x;
    this.visionHitbox.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.hitbox.y += this.velocity.y;
    this.visionHitbox.y += this.velocity.y;
  }

  checkArrowCollision() {
    let collision = false;

    this.player.bow.arrows.forEach((arrow, i) => {
      if (checkFullCollision(arrow.getCorners(), this.getCorners())) {
        collision = true;
        this.player.bow.arrows.splice(i);
      }
    });

    if (collision) {
      let x = 0;
      const y = 0;
      if (
        this.player.position.x + this.player.size.width / 2 >
        this.position.x + this.size.width / 2
      ) {
        x = -15;
      } else {
        x = +15;
      }

      this.takeDamage(this.player.strength);
      this.knockBack({ x, y });
      this.following = true;
    }
  }

  checkPlayerCollision() {
    if (detectBasicCollision(this.player.hitbox, this.hitbox)) {
      let x = 0;
      const y = 0;
      if (
        this.player.position.x + this.player.size.width / 2 >
        this.position.x + this.size.width / 2
      ) {
        x = +15;
      } else {
        x = -15;
      }

      this.player.knockBack({ x, y });
      this.player.takeDamage(this.strength);
    }
  }

  followPlayer() {
    if (this.following) {
      this.velocity = velocityCalculator(
        this.player.position,
        this.position,
        this.moveSpeed
      );
    }
  }

  seekForPlayer() {
    if (detectBasicCollision(this.player.hitbox, this.visionHitbox)) {
      this.following = true;
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

  drawVisionHitBox() {
    this.context.save();

    this.context.globalAlpha = 0.2;
    this.context.fillStyle = "yellow";
    this.context.fillRect(
      this.visionHitbox.x,
      this.visionHitbox.y,
      this.visionHitbox.width,
      this.visionHitbox.height
    );

    this.context.restore();
  }

  setCorners() {
    this.leftTopCorner = {
      x: this.hitbox.x,
      y: this.hitbox.y,
    };

    this.rightTopCorner = {
      x: this.hitbox.x + this.hitbox.width,
      y: this.hitbox.y,
    };

    this.rightBottomCorner = {
      x: this.hitbox.x + this.hitbox.width,
      y: this.hitbox.y + this.hitbox.height,
    };

    this.leftBottomCorner = {
      x: this.position.x,
      y: this.hitbox.y + this.hitbox.height,
    };
  }

  getCorners() {
    return [
      this.leftTopCorner,
      this.rightTopCorner,
      this.rightBottomCorner,
      this.leftBottomCorner,
    ];
  }
}
