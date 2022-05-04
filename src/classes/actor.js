import { AnimatedSprite } from "./animated-sprite.js";

export class Actor extends AnimatedSprite {
  isInvincible = false;

  knockBackCounter = 0;

  isKnocking = false;

  dead = false;

  knockBackVelocity = {
    x: 0,
    y: 0,
  };

  constructor({ states, defaultState, ...props }) {
    super({ animationFrames: states[defaultState], ...props });

    this.actualState = defaultState;
    this.states = states;
  }

  changeState(newState) {
    this.actualState = newState;
    this.animationFrames = this.states[newState];
    this.frames.totalFrames = this.animationFrames.length;
    if (this.frames.totalFrames <= this.frames.val) {
      this.frames.val = 0;
      this.frames.elapsed = 0;
    }
  }

  takeDamage(damage) {
    if (!this.isInvincible) {
      this.hp -= damage;
      this.hpBar.health = this.hp;
    }
  }

  preKnockback() {}

  postKnockback() {}

  updateKnockbackPosition() {
    if (this.knockBackCounter <= 3 && this.isKnocking) {
      if (this.knockBackCounter === 0) {
        this.preKnockback();
      }
      this.knockBackCounter += 1;
      this.position.x += this.knockBackVelocity.x;
      this.position.y += this.knockBackVelocity.y;
      if (this.hitbox) {
        this.hitbox.x += this.knockBackVelocity.x;
        this.hitbox.y += this.knockBackVelocity.y;
      }
      if (this.visionHitbox) {
        this.visionHitbox.x += this.knockBackVelocity.x;
        this.visionHitbox.y += this.knockBackVelocity.y;
      }
    } else {
      this.postKnockback();
      this.isKnocking = false;
      this.knockBackCounter = 0;
    }
  }

  knockBack(velocity) {
    this.isKnocking = true;
    this.knockBackVelocity = velocity;
  }
}
