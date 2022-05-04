import { Chest } from "./chest.js";
import { Enemy } from "./enemy.js";
import { FloorCounter } from "./floor-counter.js";
import { Player } from "./player.js";

export class Game {
  floor = 1;

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

    this.enemy = new Enemy({
      canvas,
      context,
      position: {
        x: 450,
        y: 300,
      },
      player: this.player,
    });

    this.floorCounter = new FloorCounter({
      canvas,
      context,
      floor: this.floor,
    });
  }

  draw() {
    this.floorCounter.draw();
    this.player.draw();
    this.chest.draw();
    this.enemy.draw();
  }
}
