import { Chest } from "./chest.js";
import { FloorCounter } from "./floor-counter.js";
import { Floor } from "./floor.js";
import { Ladder } from "./ladder.js";
import { Player } from "./player.js";

export class Game {
  floorNumber = 1;

  constructor({ canvas, context }) {
    this.canvas = canvas;
    this.context = context;

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

    this.ladder = new Ladder({
      canvas,
      context,
      position: {
        x: 600,
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
    this.ladder.draw();
    this.floorCounter.draw();
    this.chest.draw();
    this.player.draw();
    this.doAction();
  }

  doAction() {
    if (this.player.keys.space.pressed && this.ladder.isColliding) {
      this.generateNewFloor();
    }
  }

  generateNewFloor() {
    if (this.floor.enemies.every((enemy) => enemy.dead)) {
      this.floorNumber += 1;
      this.floorCounter.floor = this.floorNumber;
      this.floor = new Floor({
        canvas: this.canvas,
        context: this.context,
        difficulty: 1,
        floor: this.floorNumber,
        player: this.player,
      });
    }
  }
}
