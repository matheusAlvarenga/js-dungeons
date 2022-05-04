import { Actor } from "./actor.js";
import playerData from "../data/player.js";
import { Bow } from "./bow.js";
import { HpBar } from "./hp_bar.js";

export class Player extends Actor {
  isRunning = false;

  hp = 40;

  maxHp = 40;

  strength = 10;

  knockbackForce = 5;

  moveSpeed = 3;

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
    space: {
      pressed: false,
    },
  };

  constructor({ canvas, ...props }) {
    super({
      states: playerData.animationFrames,
      defaultState: "idle",
      size: {
        height: 80,
        width: 46,
      },
      ...props,
    });

    this.canvas = canvas;

    this.bow = new Bow({
      canvas,
      context: props.context,
      position: props.position,
      offset: {
        x: 24,
        y: 18,
      },
      damage: this.strength,
    });

    this.hpBar = new HpBar({
      context: props.context,
      position: props.position,
      percent: 50,
      health: this.hp,
      maxHealth: this.maxHp,
      width: 46,
      offset: {
        x: -20,
        y: 50,
      },
    });

    this.hitbox = {
      x: props.position.x - 26,
      y: props.position.y - 24,
      height: 66,
      width: 56,
    };

    this.startKeyboardEvent();
  }

  preKnockback() {
    this.isInvincible = true;
  }

  postKnockback() {
    this.isInvincible = false;
  }

  update() {
    this.checkIfDied();
    if (this.dead) return;
    this.updatePosition();
    this.updateState();
    this.bow.draw();
    this.hpBar.draw();
    this.drawHitBox();
    this.updateKnockbackPosition();
  }

  checkIfDied() {
    if (this.hp <= 0) {
      this.dead = true;
      this.changeState("dead");
    }
  }

  updateState() {
    if (this.isRunning) {
      this.changeState("run");
    } else {
      this.changeState("idle");
    }
  }

  updatePosition() {
    if (this.keys.w.pressed) {
      this.position.y -= this.moveSpeed;
      this.hitbox.y -= this.moveSpeed;
    }

    if (this.keys.s.pressed) {
      this.position.y += this.moveSpeed;
      this.hitbox.y += this.moveSpeed;
    }

    if (this.keys.a.pressed) {
      this.position.x -= this.moveSpeed;
      this.hitbox.x -= this.moveSpeed;
    }

    if (this.keys.d.pressed) {
      this.position.x += this.moveSpeed;
      this.hitbox.x += this.moveSpeed;
    }
  }

  evolve(gemType) {
    switch (gemType) {
      case "emerald":
        this.maxHp += 10;
        this.hpBar.maxHealth = this.maxHp;
        this.hp = this.maxHp;
        this.hpBar.health = this.hp;
        break;

      case "ruby":
        this.strength += 2;
        break;

      case "ambar":
        this.attackSpeed += 1;
        break;

      case "saphire":
        this.moveSpeed += 1;
        break;
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

  heal(health) {
    this.hp += health;
    this.hpBar.health = this.hp;
  }

  startKeyboardEvent() {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "w":
          this.isRunning = true;
          this.keys.w.pressed = true;
          break;

        case "a":
          this.isRunning = true;
          this.keys.a.pressed = true;
          break;

        case "s":
          this.isRunning = true;
          this.keys.s.pressed = true;
          break;

        case "d":
          this.isRunning = true;
          this.keys.d.pressed = true;
          break;

        case " ":
          this.keys.space.pressed = true;
          break;
      }
    });

    window.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "w":
          this.isRunning = false;
          this.keys.w.pressed = false;
          break;

        case "a":
          this.isRunning = false;
          this.keys.a.pressed = false;
          break;

        case "s":
          this.isRunning = false;
          this.keys.s.pressed = false;
          break;

        case "d":
          this.isRunning = false;
          this.keys.d.pressed = false;
          break;

        case " ":
          this.keys.space.pressed = false;
          break;
      }
    });
  }
}
