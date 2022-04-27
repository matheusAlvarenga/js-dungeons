import { Sprite } from "./sprite.js";

export class AnimatedSprite {
  constructor({ context, position, actualState, allStates, size, hold = 10 }) {
    this.actualStateIndex = actualState;
    this.allStates = allStates;
    this.frames = allStates[actualState].length;
    this.hold = hold;
    this.totalFrames = this.frames * this.hold;
    this.actualFrame = 0;
    this.actualState = allStates[this.actualStateIndex];
    this.actualImage = this.actualState[this.actualFrame];
    this.sprite = new Sprite({
      context,
      position,
      image: this.actualImage,
      size,
    });
  }

  draw() {
    this.updateImage();
    this.sprite.draw();
  }

  updateImage() {
    if (this.actualFrame < this.totalFrames - 1) {
      this.actualFrame += 1;
    } else {
      this.actualFrame = 0;
    }
    this.actualImage =
      this.actualState[Math.floor(this.actualFrame / this.hold)];
    this.sprite.image = this.actualImage;
  }

  changeState(newState) {
    this.actualStateIndex = newState;
    this.actualState = this.allStates[newState];
    this.frames = this.allStates[this.actualStateIndex].length;
    this.totalFrames = this.frames * this.hold;
  }
}
