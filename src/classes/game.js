import { Chest } from "./chest.js";
import { FloorCounter } from "./floor-counter.js";
import { Floor } from "./floor.js";
import { Player } from "./player.js";

export class Game {
  floorNumber = 1;

  constructor({ canvas, context }) {
    this.player = new Player({
      canvas,
      context,
      position: {
        x: 100,
        y: 100,
      },
    });

    this.chest = new Chest({
      canvas,
      context,
      position: {
        x: 300,
        y: 300,
      },
      player: this.player,
    });

    this.floor = new Floor({
      canvas,
      context,
      difficulty: 1,
      floor: this.floorNumber,
      player: this.player,
    });

    this.floorCounter = new FloorCounter({
      canvas,
      context,
      floor: this.floorNumber,
    });
  }

  draw() {
    this.floor.draw();
    this.floorCounter.draw();
    this.player.draw();
    this.chest.draw();
  }
}
