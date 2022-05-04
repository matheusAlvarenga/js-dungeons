import { Chest } from "./chest.js";
import { Enemy } from "./enemy.js";
import { Player } from "./player.js";

export class Game {
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
  }

  draw() {
    this.player.draw();
    this.chest.draw();
    this.enemy.draw();
  }
}
