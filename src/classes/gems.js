import { Actor } from "./actor.js";
import { getRandomObjectKey } from "../utils/random.js";
import gemsData from "../data/gems.js";

export class Gems extends Actor {
  gemTaken = false;

  constructor({ player, ...props }) {
    const type = getRandomObjectKey(gemsData.animationFrames);
    super({
      defaultState: type,
      states: gemsData.animationFrames,
      ...props,
    });

    this.type = type;
    this.player = player;
  }

  update() {
    if (this.opacity > 1 && !this.gemTaken) {
      this.gemTaken = true;
      this.takeGem();
    }
  }

  takeGem() {
    this.remove = true;
    this.player.evolve(this.type);
  }
}
