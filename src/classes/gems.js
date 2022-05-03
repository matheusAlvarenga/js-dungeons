import { Actor } from "./actor.js";
import { getRandomObjectKey } from "../utils/random.js";
import gemsData from "../data/gems.js";

export class Gems extends Actor {
  constructor({ ...props }) {
    const type = getRandomObjectKey(gemsData.animationFrames);
    super({
      defaultState: type,
      states: gemsData.animationFrames,
      ...props,
    });

    this.type = type;
  }
}
