import { Sprite } from "./sprite.js";

export class AnimatedSprite {
  constructor({
    context,
    position,
    actualState,
    allStates,
    size,
    hold = 10,
    rotation,
    offset = { x: 0, y: 0 },
    oneTime = () => {},
  }) {
    this.oneTime = oneTime;
    this.rotation = rotation;
    this.offset = offset;
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
      rotation: this.rotation,
      offset: this.offset,
    });
  }

  draw() {
    this.updateImage();
    this.updateRotation();
    this.updateOffset();
    this.sprite.draw();
  }

  updateOffset() {
    this.sprite.offset = this.offset;
  }

  updateRotation() {
    this.sprite.rotation = this.rotation;
  }

  updateImage() {
    if (this.actualFrame < this.totalFrames - 1) {
      this.actualFrame += 1;
    } else {
      this.oneTime(this.actualStateIndex);
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
