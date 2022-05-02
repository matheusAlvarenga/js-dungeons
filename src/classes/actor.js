import { AnimatedSprite } from "./animated-sprite.js";

export class Actor extends AnimatedSprite {
  constructor({ states, defaultState, ...props }) {
    super({ animationFrames: states[defaultState], ...props });

    this.actualState = defaultState;
    this.states = states;
  }

  changeState(newState) {
    this.actualState = newState;
    this.animationFrames = this.states[newState];
    this.frames.totalFrames = this.animationFrames.length;
    if (this.frames.totalFrames < this.frames.val) {
      this.frames.val = 0;
      this.frames.elapsed = 0;
    }
  }
}
