import { AnimatedSprite } from "./animated-sprite.js";

export class Actor extends AnimatedSprite {
  constructor({ states, defaultState, ...props }) {
    super({ animationFrames: states[defaultState], ...props });

    this.states = states;
  }

  changeState(newState) {
    this.animationFrames = this.states[newState];
  }
}
