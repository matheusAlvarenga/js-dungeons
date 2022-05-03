import { Sprite } from "./sprite.js";
import actionTextData from "../data/action-text.js";

export class ActionText extends Sprite {
  constructor({ ...props }) {
    super({
      image: actionTextData.sprite,
      ...props,
    });
  }
}
