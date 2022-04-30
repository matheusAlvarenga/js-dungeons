import { Sprite } from "./sprite.js";

export class AnimatedSprite extends Sprite {
  constructor({
    animationFrames,
    context,
    position,
    size,
    rotation = 0,
    animate = true,
    ...props
  }) {
    super({ context, position, size, rotation, ...props });

    this.animate = animate;
    this.animationFrames = animationFrames;
    this.frames = {
      totalFrames: animationFrames.length,
      val: 0,
      elapsed: 0,
      hold: 10,
    };
  }

  update() {}

  preDraw() {
    if (!this.animate) return;

    this.update();

    this.image = this.animationFrames[this.frames.val];

    this.frames.elapsed++;

    if (this.frames.elapsed % this.frames.hold === 0) {
      if (this.frames.val < this.frames.totalFrames - 1) this.frames.val++;
      else this.frames.val = 0;
    }
  }
}
